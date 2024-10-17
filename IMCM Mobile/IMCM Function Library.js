/**
 * @aiq.testdesigner
 * This script requires AIQ Test Designer
 */
var operationValue;

function setOperation(operation) {
    operationValue = operation;
}

function getOperation() {
    return operationValue;
}

function VerifyRecord(catalogNumber) {
    var operation = getOperation();
    setValue(fallback(`textbox(/mat-input.*/,_below(span("Product Catalog #")))`,
       `textbox(/mat-input.*/,_below(span("Product Catalog #")))`), catalogNumber);
    setValue(fallback(`textbox(/mat-input.*/,_below(span("Operation/Transaction")))`,
       `textbox(/mat-input.*/,_below(span("Product Catalog #")))`), operation);
     assertExists(fallback(`link("${operation}")`));
}

function navigateToStockroomActivityLog() {
    setShadowDOM(true);
    click(fallback(`submit("Overview expand_more")`));
    wait(500);
    click(fallback(`byXPath('//*[text()=" Stockroom Activity Log "]').xy(0.23, 0.38 )`));
}

function ValidateStockroomActivity(catalogNumbers) {
    navigateToStockroomActivityLog();
    catalogNumbers.forEach(function(catalogNumber) {
        VerifyRecord(catalogNumber);
    });
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      result = `ReferenceField_result_${result}`
    }

    return result;
}




function Login(url, username, password, org, stockroom) {
    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    navigateTo(url);
    setValue(fallback(`byXPath('//*[@id="email"]')`), username);
    setValue(fallback(`byXPath('//*[@id="password"]')`), password);
    click(fallback(`byXPath('//*[@id="btn-login"]')`));
    click(fallback(`div(2, _in(custom("mat-select", "mat-select-0"))).xy(0.51, 0.02 )`));
    click(fallback(`byXPath('//*[normalize-space(text())="${org}"]')`));
    click(fallback(`div(2, _in(custom("mat-select", "mat-select-2"))).xy(0.23, -0.04 )`));
    click(fallback(`byXPath('//*[text()="${stockroom}"]')`));
    click(fallback(`span("arrow_forward")`,
       `byXPath('//app-root/app-org-and-stockroom/div/mat-card/mat-card-content/section/form/div/button[1]/span[1]/span[2]')`));
}


function AddProductsToList(products) {
    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    click(fallback(`byXPath('//*[text()="more_horiz"]')`));
    click(fallback(`listItem("closeClear List")`));
    
    products.forEach(function(product) {
        setValue(fallback(`textbox(/mat-input-.*/,_below(span("Catalog Number")))`), product);
        wait(300);
        setDescription("Set Quantity");
        setValue(fallback(`numberbox(/mat-input-.*/)`),"1");
        wait(300);
        click(fallback(`span("Add to List[1]")`));
         wait(300);
    });
    
}

function NavigateToCostcentermaintanance(){
setShadowDOM(true);
wait(100);
click(fallback(`submit("Administration expand_more")`));
wait(100);
click(fallback(`byXPath('//*[text()=" Cost Center Maintenance "]').xy(0.23, 0.62 )`));
wait(1000);
assertExists(fallback(`span("Add New Cost Center[1]")`));
wait(100);

}


function SearchField(SearchEditField,SearchValue){
setValue(fallback(`textbox(/mat-input.*/,_below(span("${SearchEditField}")))`),SearchValue);
wait(100);
assertExists(fallback(`cell("${SearchValue}")`));
wait(100);
click(fallback(`custom("mat-icon", "close[1]")`));
wait(1000);
}

function SearchPageValidation(PageName){
if (PageName === "CostCenterMaintenance") {
wait(1000);
setDescription("NavigateToCostcenterPage");
NavigateToCostcentermaintanance();
setDescription("Search for Cost center name");
SearchField("Cost Center Name","Costcenter");
setDescription("Search for Vat Exempt setting");
SearchField("Vat Exempt Setting","N");
setDescription("search for Number of user");
SearchField("Number of Users","1");
setDescription("Search for Description");
SearchField("Description","Costcenter");
setDescription("Click on Select");
click(fallback(`div("Select[10]").xy(0.90, 0.39 )`));
wait(500);
setDescription("Click on Online");
click(fallback(`span("Online[10]")`));
wait(500);
setDescription("Click on Calender");
click(fallback(`image(0, _in(button({'aria-label':'Open calendar'}))).xy(0.71, 0.36 )`));
wait(500);
setDescription("Click on 31");
click(fallback(`div("31").xy(0.57, 0.67 )`));
wait(500);
setDescription("Verfy for NORecords Found");
assertExists(fallback(`heading3("No Records Found")`));

}else if(PageName === "DepartmentMaintenance"){

}else if(PageName === "LocationMaintenance"){

}else{
  
}

}




