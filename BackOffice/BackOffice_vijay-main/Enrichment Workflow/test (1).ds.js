/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
navigateTo("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=161&ct=1727863013&rver=7.5.2211.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fnlp%3d1%26cobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26culture%3den-us%26country%3dus%26RpsCsrfState%3dc908fe0c-5bfb-91fe-475c-21771577dba2%26url%3d%252fowa%252f0%252f%253fnlp%25253d1%252526cobrandid%25253dab0455a0-8d03-46b9-b18b-df2f57b9e44c%252526culture%25253den-us%252526country%25253dus%252526RpsCsrfState%25253dc908fe0c-5bfb-91fe-475c-21771577dba2%26authRedirect%3dtrue%26state%3d0&id=292841&aadredir=1&whr=outlook.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c");
setValue(fallback(`byXPath('//*[@name="loginfmt"]')`,
   `emailbox("i0116")`,
   `emailbox("loginfmt")`,
   `byXPath("//input[@id='i0116']")`,
   `byXPath('/html/body/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div/div/div/form/div[2]/div/div/input')`,
   `byXPath("id('i0116')")`,
   `emailbox({'type':'email'})`,
   `byJQuery('div[class="___917j710 ftgm304 fly5x3f fwrgwhw f15tpi3i f10pi13n frecw6t f1mmgjok f1tto2h8 f1c2pb84 fyft3pb f1rof34y f1172n73 f4hylce f18s3fau f1ymw6u3 f1xqrj1d f160kle0 f6rydpu f1i9lmva fspveqh f2x7bcd f1imcvf3 f1bxicz3 f1kf6f3a fajq0z4 fyw0hav f1a7xkls fnpm3l fsc3mvo f1s66rt0 f73ugz1 f1iw8vv5 f5iv370 f1ytw2m8 feh5m5c f7upnml fexuuuk fklagwq fsjklvg f1uvsclk f123zcai"] > input[class=""]')`,
   `byJQuery('#i0116')`,
   `byJQuery('input[name="loginfmt"]')`,
   `byJQuery('input[value="t"]')`,
   `byXPath('//*[@id="i0116"]')`),"testvendor123456789@outlook.com");
click(fallback(`submit("Next")`,
   `submit("___n08lmr0 ext-button ext-primary f10kbna7 f10pi13n f10ra9hq f11qrl6u f12qb2w f14t3ns0 f17mccla f1bn7qby f1c2uykm f1cmbuwj f1cyt9o8 f1deefiw f1e35ql2 f1eqj1rd f1ern45e f1grzc83 f1h8hb77 f1iretw8 f1n71otn f1nxs5xn f1o2wvfq f1p9o1ba f1s9iqzn f1sil6mw f1y2xyjm f1yx5976 f4yyc7m f6dzj5z f7n145z f8491dx f9ex757 f9f7vaa fatbyko fb0xa7e ff472gp fggejwh fj5daoo fjk9nze fjlbh76 fkbkaou fljg2da flutoqy fmjaa5u fmrv4ls fnmhfyr fnsf7x1 fqv895b ft0kson ft2aflc fv6p4nl fxdtvjf fytdu2e fz5stix")`,
   `submit("idSIButton9")`,
   `byXPath("//button[@id='idSIButton9']")`,
   `byXPath('//*[@class="ext-primary ext-button ___n08lmr0 f1nxs5xn f1ern45e f1n71otn f1h8hb77 f1deefiw fxdtvjf fytdu2e f14t3ns0 f10ra9hq f11qrl6u f1y2xyjm fjlbh76 f10pi13n f6dzj5z f17mccla fz5stix f1p9o1ba f1sil6mw fmrv4ls f1cmbuwj f1cyt9o8 f1iretw8 fv6p4nl fnsf7x1 f8491dx fj5daoo fnmhfyr f1e35ql2 fatbyko f1grzc83 fb0xa7e fljg2da f1c2uykm f1eqj1rd f7n145z ft0kson ff472gp f4yyc7m fggejwh ft2aflc f9f7vaa fmjaa5u flutoqy f12qb2w f1s9iqzn f1o2wvfq fkbkaou fjk9nze f10kbna7 f9ex757 f1bn7qby f1yx5976 fqv895b"]')`,
   `byXPath('//*[text()="Next"]')`,
   `byXPath('/html/body/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div/div/div/form/div[4]/div/div/div/div/button')`,
   `byXPath("id('idSIButton9')")`,
   `submit({'type':'submit'})`,
   `byJQuery('div[class="___102hf4m f1tyq0we f11qmguv f1wv5yrl"] > div[class="ext-button-field-container ___30qpg70 f1euv43f f1yab3r1 fly5x3f fes3tcz f1vtoa19 fmp27j1 f16ez161"] > div[class="ext-button-item ___frx9oy0 f14t3ns0"] > button[class="ext-primary ext-button ___n08lmr0 f1nxs5xn f1ern45e f1n71otn f1h8hb77 f1deefiw fxdtvjf fytdu2e f14t3ns0 f10ra9hq f11qrl6u f1y2xyjm fjlbh76 f10pi13n f6dzj5z f17mccla fz5stix f1p9o1ba f1sil6mw fmrv4ls f1cmbuwj f1cyt9o8 f1iretw8 fv6p4nl fnsf7x1 f8491dx fj5daoo fnmhfyr f1e35ql2 fatbyko f1grzc83 fb0xa7e fljg2da f1c2uykm f1eqj1rd f7n145z ft0kson ff472gp f4yyc7m fggejwh ft2aflc f9f7vaa fmjaa5u flutoqy f12qb2w f1s9iqzn f1o2wvfq fkbkaou fjk9nze f10kbna7 f9ex757 f1bn7qby f1yx5976 fqv895b"]')`,
   `byJQuery('#idSIButton9')`,
   `byXPath('//*[@id="idSIButton9"]')`));
setValue(fallback(`byXPath('//*[@name="passwd"]')`,
   `password("i0118")`,
   `password("passwd")`,
   `byXPath("//input[@id='i0118']")`,
   `byXPath('/html/body/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/form/div[3]/div/div/input')`,
   `byXPath("id('i0118')")`,
   `password({'type':'password'})`,
   `byJQuery('div[class="___917j710 ftgm304 fly5x3f fwrgwhw f15tpi3i f10pi13n frecw6t f1mmgjok f1tto2h8 f1c2pb84 fyft3pb f1rof34y f1172n73 f4hylce f18s3fau f1ymw6u3 f1xqrj1d f160kle0 f6rydpu f1i9lmva fspveqh f2x7bcd f1imcvf3 f1bxicz3 f1kf6f3a fajq0z4 fyw0hav f1a7xkls fnpm3l fsc3mvo f1s66rt0 f73ugz1 f1iw8vv5 f5iv370 f1ytw2m8 feh5m5c f7upnml fexuuuk fklagwq fsjklvg f1uvsclk f123zcai"] > input[class=""]')`,
   `byJQuery('#i0118')`,
   `byJQuery('input[name="passwd"]')`,
   `byJQuery('input[value="V"]')`,
   `byXPath('//*[@id="i0118"]')`),"Vj822294@");
click(fallback(`submit("Sign in")`,
   `submit("___n08lmr0 ext-button ext-primary f10kbna7 f10pi13n f10ra9hq f11qrl6u f12qb2w f14t3ns0 f17mccla f1bn7qby f1c2uykm f1cmbuwj f1cyt9o8 f1deefiw f1e35ql2 f1eqj1rd f1ern45e f1grzc83 f1h8hb77 f1iretw8 f1n71otn f1nxs5xn f1o2wvfq f1p9o1ba f1s9iqzn f1sil6mw f1y2xyjm f1yx5976 f4yyc7m f6dzj5z f7n145z f8491dx f9ex757 f9f7vaa fatbyko fb0xa7e ff472gp fggejwh fj5daoo fjk9nze fjlbh76 fkbkaou fljg2da flutoqy fmjaa5u fmrv4ls fnmhfyr fnsf7x1 fqv895b ft0kson ft2aflc fv6p4nl fxdtvjf fytdu2e fz5stix")`,
   `submit("idSIButton9")`,
   `byXPath("//button[@id='idSIButton9']")`,
   `byXPath('//*[@class="ext-primary ext-button ___n08lmr0 f1nxs5xn f1ern45e f1n71otn f1h8hb77 f1deefiw fxdtvjf fytdu2e f14t3ns0 f10ra9hq f11qrl6u f1y2xyjm fjlbh76 f10pi13n f6dzj5z f17mccla fz5stix f1p9o1ba f1sil6mw fmrv4ls f1cmbuwj f1cyt9o8 f1iretw8 fv6p4nl fnsf7x1 f8491dx fj5daoo fnmhfyr f1e35ql2 fatbyko f1grzc83 fb0xa7e fljg2da f1c2uykm f1eqj1rd f7n145z ft0kson ff472gp f4yyc7m fggejwh ft2aflc f9f7vaa fmjaa5u flutoqy f12qb2w f1s9iqzn f1o2wvfq fkbkaou fjk9nze f10kbna7 f9ex757 f1bn7qby f1yx5976 fqv895b"]')`,
   `byXPath('//*[text()="Sign in"]')`,
   `byXPath('/html/body/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/form/div[5]/div/div/div/div/button')`,
   `byXPath("id('idSIButton9')")`,
   `submit({'type':'submit'})`,
   `byJQuery('div[class="___102hf4m f1tyq0we f11qmguv f1wv5yrl"] > div[class="ext-button-field-container ___30qpg70 f1euv43f f1yab3r1 fly5x3f fes3tcz f1vtoa19 fmp27j1 f16ez161"] > div[class="ext-button-item ___frx9oy0 f14t3ns0"] > button[class="ext-primary ext-button ___n08lmr0 f1nxs5xn f1ern45e f1n71otn f1h8hb77 f1deefiw fxdtvjf fytdu2e f14t3ns0 f10ra9hq f11qrl6u f1y2xyjm fjlbh76 f10pi13n f6dzj5z f17mccla fz5stix f1p9o1ba f1sil6mw fmrv4ls f1cmbuwj f1cyt9o8 f1iretw8 fv6p4nl fnsf7x1 f8491dx fj5daoo fnmhfyr f1e35ql2 fatbyko f1grzc83 fb0xa7e fljg2da f1c2uykm f1eqj1rd f7n145z ft0kson ff472gp f4yyc7m fggejwh ft2aflc f9f7vaa fmjaa5u flutoqy f12qb2w f1s9iqzn f1o2wvfq fkbkaou fjk9nze f10kbna7 f9ex757 f1bn7qby f1yx5976 fqv895b"]')`,
   `byJQuery('#idSIButton9')`,
   `byXPath('//*[@id="idSIButton9"]')`));
selectWindow("Stay signed in?");
click(fallback(`submit("No")`,
   `submit("___zk4ogw0 ext-button ext-secondary f10kbna7 f10pi13n f10ra9hq f11qrl6u f12qb2w f14t3ns0 f17mccla f1c2uykm f1cmbuwj f1cyt9o8 f1dcjnth f1deefiw f1e35ql2 f1eqj1rd f1ern45e f1grzc83 f1h8hb77 f1n71otn f1nxs5xn f1o2wvfq f1p9o1ba f1s9iqzn f1sil6mw f1y2xyjm f4yyc7m f593xy7 f6dzj5z f7n145z f8491dx f9f7vaa fatbyko fayajf8 fb0xa7e ff472gp fggejwh fjk9nze fjlbh76 fkbkaou fljg2da flutoqy fmjaa5u fmrv4ls fnmhfyr ft2aflc fusgiwz fxdtvjf fytdu2e fz0id56 fz5stix")`,
   `submit("declineButton")`,
   `byXPath("//button[@id='declineButton']")`,
   `byXPath('//*[@class="ext-secondary ext-button ___zk4ogw0 f1nxs5xn f1ern45e f1n71otn f1h8hb77 f1deefiw fxdtvjf fytdu2e f14t3ns0 f10ra9hq f11qrl6u f1y2xyjm fjlbh76 f10pi13n f6dzj5z f17mccla fz5stix f1p9o1ba f1sil6mw fmrv4ls f1cmbuwj f1cyt9o8 fusgiwz fz0id56 fayajf8 f8491dx f593xy7 fnmhfyr f1e35ql2 fatbyko f1grzc83 fb0xa7e fljg2da f1c2uykm f1eqj1rd f7n145z f1dcjnth ff472gp f4yyc7m fggejwh ft2aflc f9f7vaa fmjaa5u flutoqy f12qb2w f1s9iqzn f1o2wvfq fkbkaou fjk9nze f10kbna7"]')`,
   `byXPath('//*[text()="No"]')`,
   `byXPath('/html/body/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/form/div[3]/div[2]/div/div/button')`,
   `byXPath("id('declineButton')")`,
   `submit({'type':'submit'})`,
   `byJQuery('div[class="___1cj7yg8 f183mx53 f1turhiw f1rmqj0e"] > div[class="___102hf4m f1tyq0we f11qmguv f1wv5yrl"] > div[class="ext-button-field-container ___30qpg70 f1euv43f f1yab3r1 fly5x3f fes3tcz f1vtoa19 fmp27j1 f16ez161"] > div[class="ext-button-item ___frx9oy0 f14t3ns0"] > button[class="ext-secondary ext-button ___zk4ogw0 f1nxs5xn f1ern45e f1n71otn f1h8hb77 f1deefiw fxdtvjf fytdu2e f14t3ns0 f10ra9hq f11qrl6u f1y2xyjm fjlbh76 f10pi13n f6dzj5z f17mccla fz5stix f1p9o1ba f1sil6mw fmrv4ls f1cmbuwj f1cyt9o8 fusgiwz fz0id56 fayajf8 f8491dx f593xy7 fnmhfyr f1e35ql2 fatbyko f1grzc83 fb0xa7e fljg2da f1c2uykm f1eqj1rd f7n145z f1dcjnth ff472gp f4yyc7m fggejwh ft2aflc f9f7vaa fmjaa5u flutoqy f12qb2w f1s9iqzn f1o2wvfq fkbkaou fjk9nze f10kbna7"]')`,
   `byJQuery('#declineButton')`,
   `byXPath('//*[@id="declineButton"]')`));
selectWindow("Mail - vendor test - Outlook");
click(fallback(`byXPath('//*[@class="TtcXM"]')`,
   `span("stage-0001NLU6 Reassigned To You")`,
   `byXPath("//div[@id='AQAAAAAAAQABAAAAGwxJlQAAAAA=']/div/div/div[2]/div[2]/div[2]/div/span")`,
   `byXPath('//*[text()="stage-0001NLU6 Reassigned To You"]')`,
   `byXPath('/html/body/div/div[2]/div[2]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/div[2]/div/div/div/div/div/div/div/div[2]/div/div/div/div/div[2]/div[2]/div[2]/div/span')`,
   `byXPath("id('AQAAAAAAAQABAAAAGwxJlQAAAAA=')/div[1]/div[@class='lHRXq hDNlA IjQyD JCRRb DLvHz G1NES']/div[@class='XG5Jd TszOG']/div[@class='S2NDX']/div[@class='zht_v Q19mi']/div[@class='IjzWp XG5Jd gy2aJ Ejrkd lME98']/span[@class='TtcXM']")`,
   `byJQuery('span[title=""]')`,
   `byJQuery('div[class="XG5Jd TszOG"] > div[class="S2NDX"] > div[class="zht_v Q19mi"] > div[class="IjzWp XG5Jd gy2aJ Ejrkd lME98"] > span[class="TtcXM"]')`,
   `byJQuery('.XG5Jd.TszOG > .S2NDX > .zht_v.Q19mi > .IjzWp.XG5Jd.gy2aJ.Ejrkd.lME98 > .TtcXM')`,
   `span("TtcXM")`));
   var workflow = getText("//p[contains(text(),'Workflow ID: ')]/strong/text()");
   alert(workflow);
   
