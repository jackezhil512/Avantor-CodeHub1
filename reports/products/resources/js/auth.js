   function getSignatureKey(key, dateStamp, regionName, serviceName) {
        const kDate = CryptoJS.HmacSHA256(dateStamp, "AWS4" + key);
        const kRegion = CryptoJS.HmacSHA256(regionName, kDate);
        const kService = CryptoJS.HmacSHA256(serviceName, kRegion);
        const kSigning = CryptoJS.HmacSHA256("aws4_request", kService);
        return kSigning;
    }

    function getAmzDate(dateStr) {
        var chars = [":","-"];
        for (var i=0;i<chars.length;i++) {
            while (dateStr.indexOf(chars[i]) != -1) {
            dateStr = dateStr.replace(chars[i],"");
            }
        }
        dateStr = dateStr.split(".")[0] + "Z";
        return dateStr;
    }

    function hexToBase64(str) {
        return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
    }

    /**
     * get_s3_url_fetch_config
     * host: string that represents the bucket, for example: "appvance.s3.us-west-2.amazonaws.com"
     * region: string that represents the region, for example: "us-west-2"
     * endpoint: string that represents the endpoint of the bucket, for example: "https://appvance.s3.us-west-2.amazonaws.com"
     * canonicalUri: url of the resource, it cannot be relative, it must be absolute to the s3 bucket, for example: "/customers/Nike/CTR/2021/Dec/Batch_1/Results/US/Nike/Android/Build_1509-1/FixBeforeStart.png"
     * accessKey: AWS access key
     * secret: AWS secret key
     * 
     * returns and object with fields 'url' and 'options', where url is the 'url' that must be fetched
     * and 'options' are the options for fetch, it contains the auth headers.
     **/
    function get_s3_url_fetch_config(host, region, endpoint, canonicalUri, accessKey, secret){
        //Request values
        const method = 'GET';
        const service =  "s3";
        const requestParameters = "";

        //date for headers and credential string
        const timestamp = new Date();
        const amzdate = getAmzDate(timestamp.toISOString());
        const datestamp = timestamp.toISOString().split("T")[0].split("-").join('');

        //Step 1: Create canonical request
        const canonicalQueryString = requestParameters;
        const signedHeaders = "host;x-amz-content-sha256;x-amz-date";
        //Empty string for body payload when is GET request
        const payloadHash = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse('')).toString(CryptoJS.enc.Hex);
        const canonicalHeaders = 'host:' + host + '\nx-amz-content-sha256:' + payloadHash + '\nx-amz-date:' + amzdate + '\n';
        const canonicalRequest = method + '\n' + canonicalUri + '\n' + canonicalQueryString + '\n' + canonicalHeaders + '\n' + signedHeaders + '\n' + payloadHash;
        
        //Step 2: Create the string to sign
        const algorithm = 'AWS4-HMAC-SHA256';
        const credentialScope = datestamp + '/' + region + '/' + service + '/aws4_request';
        const stringToSign = algorithm + "\n" + amzdate + "\n" + credentialScope + "\n" + CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(canonicalRequest)).toString(CryptoJS.enc.Hex);
        
        //Step 3: Calculate signature
        const signingKey = getSignatureKey(secret, datestamp, region, service);
        const signature = CryptoJS.HmacSHA256(CryptoJS.enc.Utf8.parse(stringToSign), signingKey).toString(CryptoJS.enc.Hex);

        //Step 4: Add signing information to the request
        const authorizationHeader = algorithm + ' Credential=' + accessKey + '/' + credentialScope + ', SignedHeaders=' + signedHeaders + ", Signature=" + signature; 
        headers = {
            'x-amz-date': amzdate,
            'Authorization': authorizationHeader,
            'x-amz-content-sha256': payloadHash,
        }

        const url = endpoint + canonicalUri;
        const options = {
            "method": 'GET',
            "content-type": "application/x-www-form-urlencoded; charset=utf-8",
            "headers": headers
        }

        return {
            url: url,
            options: options
        }
    }

    /* Example
    const data = get_s3_url_fetch_config("appvance.s3.us-west-2.amazonaws.com", "us-west-2", 
        "https://appvance.s3.us-west-2.amazonaws.com",
        '/customers/Nike/CTR/2021/Dec/Batch_1/Results/US/Nike/Android/Build_1509-1/FixBeforeStart.png', 
        'AKIAZOWGVPHYCUXYIISW', 'wMKfKXxqmHB6IFeJ3KA/r7zh3l7Id4AeQR8U394e')
    fetch("https://cors-anywhere.herokuapp.com/" + data.url,data.options).then(res => res.blob())
        .then(blob => {
            const img = document.getElementById('image');
            img.src = URL.createObjectURL(blob);
        }).catch(e => {
            console.log(e);
        });
    */