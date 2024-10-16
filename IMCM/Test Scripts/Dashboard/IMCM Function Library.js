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

function navigateToRecieveStock() {
  click(fallback(`submit("Activities expand_more")`));
  click(fallback(`byXPath('//*[text()=" Receive Stock "]')`));
  wait(2000);
}

function ValidateStockroomActivity(catalogNumbers) {
    navigateToStockroomActivityLog();
    catalogNumbers.forEach(function(catalogNumber) {
        VerifyRecord(catalogNumber);
    });
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
    assertExists(fallback(`paragraph(/Showing.*/)`));
    wait(5000);
}


function AddProductsToList(products) {
    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    click(fallback(`byXPath('//*[text()="more_horiz"]')`));
    click(fallback(`listItem("closeClear List")`));
    
    products.forEach(function(product) {
        setValue(fallback(`textbox(/mat-input-.*/,_below(span("Catalog Number")))`), product);
        wait(1000);
        setDescription("Set Quantity");
        setValue(fallback(`numberbox(/mat-input-.*/)`),"1");
        wait(1000);
        click(fallback(`span("Add to List[1]")`));
         wait(300);
    });
}


function NavigateToOrderApproval(){
  
  click(fallback(`submit("Activities expand_more")`));
  wait(1000);
	click(fallback(`span("Approval")`));
  wait(1000);
	click(fallback(`span("Order Request Approval")`));
  wait(5000);
}


function AddProductInQuickAction(product,action){
  
  setValue(fallback(`textbox(/mat-input-.*/,_below(span("Catalog Number")))`),product);
	wait(1000);
	setValue(fallback(`numberbox(/mat-input-.*/)`),"1");
	click(fallback(`custom("mat-icon", "keyboard_arrow_down[1]")`));
	wait(2000);
  click(fallback(`byXPath('//*[text()="${action}"]')`));
	wait(5000);
}



function VerifyShowEntries(ViewType, NumberOfRecords, VerificationRecord) {
  // Click on the view type preference card based on the provided ViewType
  click(fallback(`image(0, _in(submit({'aria-label':'${ViewType} View Preference Card'})))`));
  click(fallback(`div(/mat-select-value-.*/,_near(span("table-limiter-show-entries")))`));
  click(fallback(`span("25",_in(div("All  10  25  50  100")))`));
   assertExists(fallback(`cell(/cdk-column-${VerificationRecord}.*/[${NumberOfRecords - 1}])`));
}


