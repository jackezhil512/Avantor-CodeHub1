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




function Login(url, username, password, org, stockroom) {
    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    navigateTo(url);
    wait(3000);
    setValue(fallback(`byXPath('//*[@id="email"]')`), username);
    setValue(fallback(`byXPath('//*[@id="password"]')`), password);
    click(fallback(`byXPath('//*[@id="btn-login"]')`));
    click(fallback(`div(2, _in(custom("mat-select", "mat-select-0"))).xy(0.51, 0.02 )`));
    click(fallback(`byXPath('//*[normalize-space(text())="${org}"]')`));
    click(fallback(`div(2, _in(custom("mat-select", "mat-select-2"))).xy(0.23, -0.04 )`));
    click(fallback(`byXPath('//*[text()="${stockroom}"]')`));
    click(fallback(`span("arrow_forward")`,
       `byXPath('//app-root/app-org-and-stockroom/div/mat-card/mat-card-content/section/form/div/button[1]/span[1]/span[2]')`));
 	 wait(5000);
    clickIfFound(fallback(`byXPath("//button[@class='welcom-bt-secondary']")`));
     //let value = _isVisible(fallback(`custom("mat-icon", "close[1]")`));
     let value = _isVisible(fallback(`byXPath('//*[text() = " News "]/following::button')`));
    log(value);
      if (true == value){
       //click(fallback(`custom("mat-icon", "close[1]")`));
       click(fallback(`byXPath('//*[text() = " News "]/following::button')`));
         wait(3000);

       }
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

function NavigateToIntegrationmaintenance(){
setShadowDOM(true);
wait(1000);
click(fallback(`byXPath("//button[contains(text(),'Administration')]")`));
click(fallback(`byXPath("//div[contains(text(),'Integration Maintenance')]")`));
assertExists(fallback(`byXPath("//span[contains(text(),'Integration Maintenance')]")`));
wait(3000);
}

function SelectVendorStockroomAndEmailInInterations(Vendor,Stockroom,Email){
setShadowDOM(true);
wait(1000);
click(fallback(`byXPath("//span[contains(text(),'All Vendors')]")`));
click(fallback(`byXPath("//span[contains(text(),'${Vendor}')]/parent::mat-option")`));
click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]")`));
click(fallback(`byXPath("//span[contains(text(),'${Stockroom}')]/parent::mat-option")`));
click(fallback(`byXPath("//span[contains(text(),'All Emails')]")`));
click(fallback(`byXPath("//span[contains(text(),'${Email}')]/parent::mat-option")`));
}


function SearchFieldWithoutClose(SearchEditField,SearchValue){
clickIfFound(fallback(`byXPath("//button[@aria-label='Table View Preference Card']")`));
setValue(fallback(`textbox(/mat-input.*/,_below(span("${SearchEditField}")))`),SearchValue);
wait(100);
//assertExists(fallback(`cell("${SearchValue}")`));
//wait(100);
//click(fallback(`custom("mat-icon", "close[1]")`));
wait(1000);
}

function SearchField(SearchEditField,SearchValue){
setValue(fallback(`textbox(/mat-input.*/,_below(span("${SearchEditField}")))`),SearchValue);
wait(1000);
assertExists(fallback(`cell("${SearchValue}")`));
wait(1000);
click(fallback(`custom("mat-icon", "close[1]")`));
wait(1000);
}

function SearchPageValidation(PageName){
if (PageName === "CostCenterMaintenance") {
wait(1000);
setDescription("NavigateToCostcenterPage");
NavigateToCostcentermaintanance();
setDescription("Search for Cost center name");
SearchField("Cost Center Name","ZCostcenter");
setDescription("Search for Vat Exempt setting");
SearchField("Vat Exempt Setting","N");
setDescription("search for Number of user");
SearchField("Number of Users","1");
setDescription("Search for Description");
SearchField("Description","ZCostcenter");
setDescription("Click on Select");
click(fallback(`div("Select[10]").xy(0.90, 0.39 )`));
wait(500);
setDescription("Click on Online");
click(fallback(`span("Online[10]")`));
wait(500);
setDescription("Click on Calender");
click(fallback(`image(0, _in(button({'aria-label':'Open calendar'}))).xy(0.71, 0.36 )`));
wait(500);
setDescription("Click on 30");
click(fallback(`div("30").xy(0.57, 0.67 )`));
wait(500);
setDescription("Verfy for NORecords Found");
assertExists(fallback(`heading3("No Records Found")`));

}else if(PageName === "DepartmentMaintenance"){
  setDescription("NavigateToProductMaintenancePage");
NavigateToLocationMaintanance();
setDescription("Search for Location Name");
SearchField("Location Name","ZAutomation"); 
 setDescription("Search for Number Of Products");
SearchField("Number Of Products","0");  
  wait(200);
setDescription("Click on Created date");
click(fallback(`image(0, _in(button({'aria-label':'Open calendar'}))).xy(0.38, 0.83 )`));
setDescription("div(\"30\").xy(0.64, 0.75 )");
click(fallback(`div("30").xy(0.64, 0.75 )`));
setDescription("Verfy No Records Found");
assertExists(fallback(`heading3("No Records Found")`));
setDescription("Click clear");
click(fallback(`custom("mat-icon", "clear")`));
wait(200);
setDescription("image(1, _in(button({'aria-label':'Open calendar'}))).xy(0.62, 0.66 )");
click(fallback(`byXPath('//app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-location-maintenance-layout/main/app-list-location/div[2]/div/avantor-table/div[2]/table/thead/tr[2]/th[5]/div/avantor-table-filter/mat-form-field/div/div[1]/div[1]/mat-datepicker-toggle/button/span[1]/img').xy(0.62, 0.66 )`));
setDescription("Click 30 day");
click(fallback(`div("30").xy(0.57, 0.78 )`));
setDescription("Verfy No Records Found");
assertExists(fallback(`heading3("No Records Found")`));

}else if(PageName === "ProductMaintenancePage"){

NavigateToProductMaintenancePage();
setDescription("Search for catalog");
SearchField("Catalog #","Automation748"); 
 setDescription("Search for description");
SearchField("Description","VWR COUNTER MT PIP ASSY 36H 8D");  
  wait(200);
setDescription("Search for Vendor");
SearchField("Vendor","VWR");
  wait(200);
setDescription("Search for Location");
SearchField("Location","Automation");
  wait(200);
setDescription("Search for Location");
SearchField("Available Quantity","0");
}else{
  
}

}


function GettextFromfirstCell(){
  var val1 = gettext(cell("cdk-cell cdk-column-costCenterName mat-cell mat-column-costCenterName ng-star-inserted ng-tns-c320-69"));
  log(val1)
  return val1;
}

function NavigateToLocationMaintanance(){
  setDescription("Click Admin menu");
  click(fallback(`submit("Administration expand_more")`));
  wait(5);
  setDescription("Click on Location Maintanance in Admin Menu");
  click(fallback(`div("Location Maintenance[1]").xy(0.29, 0.67 )`));
  wait(5);
}

function AddLocation(LocationName){
  setDescription("Click Add Location");
  click(fallback(`span("Add New Location")`));
  wait(1000);
  setDescription("Enter Location Name");
  setValue(fallback(`textbox(0, _in(custom("mat-dialog-container", "mat-dialog-0")))`), LocationName);
  setDescription("Click on Save button");
  click(fallback(`submit("Save")`));
  setDescription("Validate Success Message");
  assertExists(fallback(`byXPath('//*[text()=" Successfully created location "]').xy(0.11, 0.54 )`));
  wait(5000);
}
function VerifyRecordsSortingasscendingOrder(){
  wait(500);
  var Val1=getText(byXPath("(//td[contains(@class,'text-primary')])[1]"));
  log(Val1);
  wait(500);
  var Val2=getText(byXPath("(//td[contains(@class,'text-primary')])[2]"));
  log(Val2);
  if (Val1 < Val2) { 
          log("records are sorted in ascending order");
      }else{
          log("records are not sorted in ascending order");
      }
}

function VerifyRecordsSorting(elementToBeCompared,elementName){

    var element1 = `(//td[contains(@class,'${elementName}')])[1]`;
    var value1 = getText(byXPath(element1));
    var element2 = `(//td[contains(@class,'${elementName}')])[2]`;
    var value2 = getText(byXPath(element2));
   click(fallback(`image(/asc-arrow-key.*/,_rightOf(span("${elementToBeCompared}")))`));
    var element3 = `(//td[contains(@class,'${elementName}')])[1]`;
    var value3 = getText(byXPath(element3));
    var element4 = `(//td[contains(@class,'${elementName}')])[2]`;
    var value4 = getText(byXPath(element4));
    if (value3 < value4) { 
        log("records are sorted in ascending order");
    }else{
        log("records are not sorted in ascending order");
    }

   //Descending Order
   click(fallback(`image(/desc-arrow-key.*/,_rightOf(span("${elementToBeCompared}")))`));
    var element5 = `(//td[contains(@class,'${elementName}')])[1]`;
    var value5 = getText(byXPath(element5));
    var element6 = `(//td[contains(@class,'${elementName}')])[2]`;
    var value6 = getText(byXPath(element6));
    if (value5 > value6) { 
        log("records are sorted in descending order");
    }else{
        log("records are not sorted in descending order");
    }

  //REset Order
   click(fallback(`image(/asc-arrow-key.*/,_rightOf(span("${elementToBeCompared}")))`));
    var element7 = `(//td[contains(@class,'${elementName}')])[1]`;
    var value7 = getText(byXPath(element7));
    var element8 = `(//td[contains(@class,'${elementName}')])[2]`;
    var value8 = getText(byXPath(element8));
    if ((value1 === value7) && (value2 === value8)) { 
        log("records are reset to orginal order");
    }else{
        log("records are not reset to original order");
    }

}
function NavigateStockCorrection(){
  click(fallback(`submit("Activities expand_more")`));
  click(fallback(`byXPath('//*[text()=" Stock Correction "]').xy(0.83, 0.63 )`));
  wait(1000);
  assertExists(fallback(`span("Stock Correction[1]")`));
}

function NavigateReplenishStock(){
  setDescription("Click on Activities");
  click(fallback(`submit("Activities expand_more")`));
  setDescription("Click on Replenish Stock");
  click(fallback(`byXPath('//*[text()=" Replenish Stock "]').xy(0.83, 0.63 )`));
  wait(1000);
  setDescription("Validate Replenish Stock");
  assertExists(fallback(`span("Replenish Stock[1]")`));
}


	function searchcatlogNoinReplenishPage(CatLog,QTY){
   let value = _isVisible(fallback(`byXPath('//*[text()=" No Records Found "]')`));
    log(value);
if (true == value){
    click(fallback(`strong("Add Product")`));
    click(fallback(`span("Add Stockroom Product")`));
     wait(1000);
      //SearchFieldWithoutClose("Add Stockroom Product",CatLog)    
  click(fallback(`byXPath("(//button[@aria-label='Table View Preference Card'])[2]")`));
  wait(1000);
  setValue(fallback(`byXPath("(//th[contains(@class,'mat-column-search-catalogNo')]//input)[2]")`),  CatLog  );
     //setValue(fallback(`byXPath('//*[@id="mat-input-47"]')`),    CatLog );
      //setValue(fallback(`byXPath('//h2[text()=" Assign Stockroom "]/following::input[@type="checkbox"][2]')`), CatLog);
      //setValue(byXPath("//h2[text()=' Assign Stockroom ']/following::input[@type='checkbox'][2]"),CatLog);
      //setValue(fallback(`byXPath("//th[contains(@class,'search-catalogNo value')]//input[1]")`),    CatLog );

     // setValue(byXPath("//th[contains(@class,'search-catalogNo value')]//input[1]",CatLog)
       wait(5000);
     //setValue(fallback(`numberbox(/mat-input-.*/)`),"1");
     //click(byXPath(element));
    //setValue(byXPath(element),"250");
      //setValue(fallback(`number(/mat-input.*/,_below(span("Quantity")))`),"250");
     //Click(byXPath(element));
      //sendText(fallback(`byXPath((//input[@type='number'])[11])`) ,10);
      setValue(fallback(`numberbox("ng-star-inserted")`),QTY);
     wait(10000);
   //click(fallback(`span("Confirm")`));
  click2(fallback(`byXPath('//span[text()=" Confirm "]')`));
  //click2(fallback(`span("Confirm")`));
  //click2(fallback(`span("Confirm")`));
  //click2(byXPath('//span[text()=" Confirm "]'));
    wait(1000);
}else{
  
  setValue(fallback(`byXPath('//input[@type="number"]')`),QTY);
}
}

function NavigateArticleActivityLog(){
  wait(1000);
setDescription("Click on Overview");
click(fallback(`submit("Overview expand_more")`));
wait(1000);
setDescription("Click on Article Activity Log");
//click(fallback(`byXPath('//*[text()=" Article Activity Log "]').xy(0.10, 0.43 )`));
 click(fallback(`byXPath('//*[text()=" Article Activity Log " or text()=" Article Activity log "]').xy(0.10, 0.43 )`));
wait(10000);
setDescription("Validate Activity Log");
//assertExists(fallback(`span("Activity Log")`));
 assertExists(fallback(`byXPath('//*[text() = "Activity Log" or text() = "Activity log"]')`));
}

function ValidateArtileActivityLogMovementType(CatlogNo,MovementType){
  wait(1000);
NavigateArticleActivityLog();
  wait(10000);
setDescription("Enter CatLog No");
SearchFieldWithoutClose("Catalog #",CatlogNo);
wait(5000);
setDescription("Click on first catlog link");
//click(fallback(`link("cursor-pointer ng-star-inserted")`));
 click(fallback(`byXPath('(//a[text()=" ${CatlogNo} "])[1]')`));
wait(1000);
 setDescription("Today");
var   date=currdate();
log(   date );
click(fallback(`image(0, _in(button({'aria-label':'Open calendar'}))).xy(0.75, 0.60 )`));
click(fallback(`byXPath('//div[text()=" ${date } "]').xy(0.72, 0.57 )`,
   `div(0, _in(cell({'aria-label':'${date }'}))).xy(0.36, 0.63 )`));
wait(10000);
  setDescription("Enter CatLog No");
  var Stage=$Env;
  if (Stage == "Stage3"){
    setValue(fallback(`textbox(/mat-input.*/,_rightOf(span("Movement Type")))`),MovementType);
  } else{
   //SearchFieldWithoutClose("Movement Type",MovementType);
    //setValue(fallback(`textbox(/mat-input.*/,_leftOf(span("Movement Type")))`),MovementType);
    setValue(fallback(`byXPath('(//span[text()=" Movement Type "])/following::input[2]')`),MovementType);
  }
 
wait(1000);
assertExists(fallback(`link("${MovementType}")`));
//assertExists(fallback(`link(MovementType)`));
  
}

function ValidateStockroomActivityPage(CatlogNo,TransactionType){
      navigateToStockroomActivityLog();
wait(1000);
SearchFieldWithoutClose("Product Catalog #",CatlogNo);
wait(1000);
  setDescription("Today");
var   date=currdate();
log(   date );
click(fallback(`image(0, _in(button({'aria-label':'Open calendar'}))).xy(0.75, 0.60 )`));
click(fallback(`byXPath('//div[text()=" ${date } "]').xy(0.72, 0.57 )`,
   `div(0, _in(cell({'aria-label':'${date }'}))).xy(0.36, 0.63 )`));
wait(10000);
 	 setValue(fallback(`byXPath('//span[text()=" Operation / Transaction " or text()=" Operation/Transaction "]/following::input[3]')`),TransactionType);
  
     //let valuetr = _isVisible(fallback(`byXPath('(//span[text()=" Operation/Transaction "])/following::input[3]')`));
   
  

wait(1000);
setDescription("Validating ${TransactionType} success in stockroom Activity log");
//assertExists(fallback(`byXPath('//*[text()="Location Created"]').xy(0.11, 0.54 )`));
  let value = _isVisible(fallback(`link("${TransactionType}")`));
    log(value);
  if (true == value) {
      	assertExists(fallback(`link("${TransactionType}")`));
      }else{
      	assertExists(fallback(`byXPath('//*[text()="${TransactionType}"]').xy(0.11, 0.54 )`));
      }
   }
function NavigateReceiveStock(){
setDescription("Click on Activities");
click(fallback(`submit("Activities expand_more")`));
setDescription("Click on Receive Stock");
click(fallback(`byXPath('//*[text()=" Receive Stock "]').xy(0.83, 0.63 )`));
wait(1000);
setDescription("Validate Receive Stock");
assertExists(fallback(`span("Receive Stock[1]")`));
}
function StockFullreceiveORStockFullReject(CatlogNo,ActivetyType){
  NavigateReceiveStock();
wait(1000);
setDescription("Click on Orders");
click(fallback(`div("Orders[4]").xy(0.36, 0.39 )`));
wait(1000);
setDescription("Select Articles");
click(fallback(`span("Articles")`));
wait(1000);
  log(CatlogNo);
setDescription("Enter CatLog No");
SearchFieldWithoutClose("Product Catalog #",CatlogNo);
wait(1000);
setDescription("Click on First Arrow");
click(fallback(`custom("mat-icon", "keyboard_arrow_down[1]")`));
wait(1000);
setDescription("Click on First Arrow");
click(fallback(`custom("mat-icon", "keyboard_arrow_down[1]")`));
wait(1000);
setDescription("Click on Ples symble");
click(fallback(`custom("mat-icon", "add[1]")`));
wait(1000);
setDescription("Click on first check box");
click2(fallback(`byXPath("(//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[1]")`));
wait(1000);
if(ActivetyType == "fullreceive"){
     setDescription("Click on Receive Stock Button");
    click(fallback(`span("Receive Stock[3]")`));
    setDescription("Validate Stock received success message");
    assertExists(fallback(`div("STOCK RECEIVED!").xy(0.16, 0.50 )`));
    wait(1000);  
 }else if(ActivetyType == "fullreject"){
   
 }else{
          
  }
 }
function SearchProductinReplenishPage(CatlogNo,QTY){
  setDescription("Enter CatLog No");
  SearchFieldWithoutClose("Catalog Number",CatlogNo);
  wait(1000);
  searchcatlogNoinReplenishPage(CatlogNo,QTY );
  wait(5000);
}

function ReplenishProduct(CatlogNo,QTY){
  NavigateReplenishStock();
  wait(2000);
  SearchProductinReplenishPage(CatlogNo,QTY);
  wait(5000);
  setDescription("Click place your order");
  click(fallback(`span("Place Your Order")`));
  wait(10000);
  click(fallback(`span("Checkout")`));
  setDescription("Verfy Success message");
  assertExists(fallback(`byXPath('//*[text()=" Stock Replenished Successfully! Your products were successfully replenished. "]').xy(0.24, 0.33 )`));
  setDescription("Verfy receipt button");
  assertExists(fallback(`span("Receipt")`));
  wait(10000);
}

function ReplenishProductinApprovalPage(CatlogNo,QTY){
  NavigateReplenishStock();
  wait(1000);
  SearchProductinReplenishPage(CatlogNo,QTY);
  wait(5000);
  setDescription("Click place your order");
  click(fallback(`span("Place Your Order")`));
  wait(10000);
  click(fallback(`span("Checkout")`));
  setDescription("Verfy Success message");
  //assertExists(fallback(`byXPath('//*[text()=" Stock Replenished Successfully! Your products were successfully replenished. "]').xy(0.24, 0.33 )`));
  //assertExists(fallback(`div(["Your order has been placed successf"]).xy(0.53, 0.50 )`));
  assertExists(fallback(`div(["Your order has been sent as picking"]).xy(0.34, 0.33 )`));
  setDescription("Verfy receipt button");
  assertExists(fallback(`span("Receipt")`));
  wait(10000);
}

function datefunc()
{
var d = eval('new Date()');
var curr_date = d.getDate();if(curr_date<10){curr_date='0'+curr_date;}
var curr_month = d.getMonth();if(curr_month<10){curr_month='0'+curr_month;}
//var curr_month = d.getMonth();
var curr_year = d.getFullYear();
//var finaldate = curr_date + "-" + m_names[curr_month]+ "-" + curr_year;
var finaldate = curr_month + "-" +curr_date + "-" + curr_year;
return finaldate
}
function currdate()
{
var d = eval('new Date()');
var curr_date = d.getDate();
return curr_date
}
function NavigateConsumeStock(){
setDescription("Click on Activities");
click(fallback(`submit("Activities expand_more")`));
setDescription("Click on Consume Stock");
click(fallback(`byXPath('//*[text()=" Consume Stock "]').xy(0.83, 0.63 )`));
wait(1000);
setDescription("Validate Consume Stock");
assertExists(fallback(`span("Consume Stock[1]")`));
}

function Consumeproduct(CatlogNo,QTY){
  NavigateConsumeStock();
wait(1000);
setDescription("Set value Catalog No");
SearchFieldWithoutClose("Catalog #",CatlogNo);
wait(1000);
setDescription("Set value to QTY");
setValue(fallback(`byXPath('//input[@type="number"]')`),QTY);
wait(1000);
setDescription("Click on Consume");
  click(fallback(`byXPath('(//span[@class="mat-button-wrapper" and contains(text()," Consume ")])[1]')`));
//click(fallback(`span("Consume")`));
wait(1000);
setDescription("Click on Consume");
click(fallback(`span("Consume Stock[2]")`));
wait(1000);
setDescription("Validate success mesage");
assertExists(fallback(`div("STOCK CONSUMED SUCCESSFULLY!").xy(0.50, 0.50 )`));
wait(1000);

}

function NavigateToManageStockRoom(){
wait(1000);
click(fallback(`submit("Administration expand_more")`));
wait(1000);
click(fallback(`div("Manage Stockroom[1]").xy(0.20, 0.29 )`));
wait(1000);
assertExists(fallback(`span("ADD STOCKROOM")`));
wait(1000);

}

function ChangeStockroom(stockroom){
	setDescription("Click on Change");
	click(fallback(`span("CHANGE")`));
  wait(3000);
	setDescription("Click Stock room");
	click(fallback(`byXPath('//div[text()=" Stockroom "]/following::mat-select[1]')`));
  wait(1000);
	setDescription("StockroomName");
  click2(fallback(`byXPath('//input[@placeholder="Search stockroom"]')`));
	setValue(fallback(`byXPath('//input[@placeholder="Search stockroom"]')`),stockroom);
	wait(1000);
	click(fallback(`byXPath('//*[text()="${stockroom}"]')`));
	wait(1000);
	setDescription("Click on Continue");
	click(fallback(`span("Continue[1]")`));
	wait(10000);
}
function NavigateApproval(){
setDescription("Click on Activities");
click(fallback(`submit("Activities expand_more")`));
setDescription("Click on Approval");
//click(fallback(`byXPath('//*[text()=" Approval "]').xy(0.83, 0.63 )`));
  click(fallback(`span("Approval")`));
wait(1000);
setDescription("Validate Approval");
//assertExists(fallback(`span("Approval[1]")`));
}

function ApproveProductinMastor(){
wait(10000);
setDescription("Click on POU Request Approval");
click(fallback(`span("PoU Order Request Approval")`));
wait(10000);
setDescription("Click on Expand All");
//click(fallback(`custom("mat-icon", "keyboard_arrow_down[1]")`));
click(fallback(`byXPath('//*[text() = " Expand All "]')`));
  wait(1000);
setDescription("Click on first check box");
//click2(fallback(`byXPath("(//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[1]")`));
 click2(fallback(`byXPath("(//span[@class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin'])[2]")`));
setDescription("Click on Approve");
click(fallback(`byXPath('//*[text()=" Approve "]')`));
assertExists(fallback(`div("REQUEST APPROVED").xy(0.31, 0.42 )`));

}
function NavigateReports(){
setDescription("Click on Overview");
click(fallback(`submit("Overview expand_more")`));
wait(10000);
setDescription("Click on Reports");
click(fallback(`byXPath('//*[text()=" Reports "]').xy(0.10, 0.43 )`));
wait(10000);
setDescription("Validate Reporting");
assertExists(fallback(`span("Reporting")`));
}

function NavigateToReferenceCodeFieldUOM(){
setDescription("Click Admin menu");
click(fallback(`submit("Administration expand_more")`));
wait(5);
setDescription("Click on Reference Code Field UOM in Admin Menu");
click(fallback(`div("Reference Code Field UOM[1]").xy(0.29, 0.67 )`));
wait(5);
}
function NavigateToProductMaintenancePage() {
    setShadowDOM(true);
    click(fallback(`submit("Administration expand_more")`));
    wait(300);
    click(fallback(`byXPath('//*[text()=" Product Maintenance "]').xy(0.15, 0.76 )`));
  	wait(500);
    assertExists(fallback(`byXPath('//*[text()=" Add Product "]')`));
    wait(300);

}

function LoginToHome(url, username, password) {
    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    navigateTo(url);
    setValue(fallback(`byXPath('//*[@id="email"]')`), username);
    setValue(fallback(`byXPath('//*[@id="password"]')`), password);
    click(fallback(`byXPath('//*[@id="btn-login"]')`));
    
}


function returnCurrentDay() {
var myDate = new Date();
myDate.setDate(myDate.getDate()+1); 
var day = myDate.getDay(); 
  return Math.round(day);
}

function dataEnterWithLoop(){
var Length = _eval("ds$('td.mat-column-expansion').find('a').length");
log(Length);
var x=1;
if(Length > 0){
while ( x <= Length){
   click(byXPath("(//mat-icon[contains(text(),'add')]//ancestor::a)[1]"));
   var x=x+1;
}
}
var strLength = _eval("ds$('td.mat-column-expansion').find('a').length");
var strtotalRow = _eval("ds$('td.mat-column-variationQty').length");
log(strtotalRow);
var actTotalRow = strtotalRow - strLength;
log(actTotalRow);
for(var i=1; i<=actTotalRow; i++){
  var strXpath =  "(//td[contains(@class,'variationQty')]/mat-form-field[not(contains(@class,'mat-form-field-disabled'))]//input)[Temp]".replace("Temp",i);
  setValue(byXPath(strXpath),"10");
}
}

function LoginWithoutURL(url, username, password, org, stockroom) {
    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    //navigateTo(url);
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

function verifyTableAscendingOrder(ColumnNum){
let stringsTemp1 = [];
let stringsTemp2 = [];
  wait(1000);
var TotalRows = _eval("ds$(\'tbody[role=\"rowgroup\"] tr.striped-rows\').length");
  var TR = Number(TotalRows);
log(TR);
  let j = 1;
for(let i=1; i<TR; i++){
  var Row1Data = getText(byXPath('//tbody//tr['+j+']//td['+ColumnNum+']'));
  log(Row1Data);
  stringsTemp1.push(Row1Data);
  stringsTemp2.push(Row1Data);
  j=j+4;
  log(j);
}
log(stringsTemp2);
log(stringsTemp1);
stringsTemp1.sort();

var length = stringsTemp2.length;
for(var i=0;i<=length-1;i++){
  assertEquals(stringsTemp2[i],stringsTemp1[i]);
}
}

function verifyTableDescendingOrder(ColumnNum){
let stringsTemp1 = [];
let stringsTemp2 = [];
  wait(1000);
var TotalRows = _eval("ds$(\'tbody[role=\"rowgroup\"] tr.striped-rows\').length");
var TR = Number(TotalRows);
log(TR);
  let j = 1;
for(let i=1; i<TR; i++){
  var Row1Data = getText(byXPath('//tbody//tr['+j+']//td['+ColumnNum+']'));
  log(Row1Data);
  stringsTemp1.push(Row1Data);
  stringsTemp2.push(Row1Data);
  j=j+4;
  log(j);
}
log("Application Data");
log(stringsTemp2);
stringsTemp1.sort();
stringsTemp1.reverse();
log("Data after descending order");
log(stringsTemp1);
var length = stringsTemp2.length;
for(var i=0;i<=length-1;i++){
  assertEquals(stringsTemp2[i],stringsTemp1[i]);
}
}

function TableRowCount(){
  var nameCountLength = _eval("ds$(\'tbody[role=\"rowgroup\"] tr.striped-rows\').length");
  log(nameCountLength);
  TableRowCount = nameCountLength;

}

function TableRowCountVerify(num){
  var nameCountLength = _eval("ds$(\'tbody[role=\"rowgroup\"] tr.striped-rows\').length");
  var temp = Number(nameCountLength);
  assertEquals(num,Math.floor(nameCountLength));
}

function LoginToHomeWURL(username, password) {
    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    //navigateTo(url);
    setValue(fallback(`byXPath('//*[@id="email"]')`), username);
    setValue(fallback(`byXPath('//*[@id="password"]')`), password);
    click(fallback(`byXPath('//*[@id="btn-login"]')`));
}

function showentries(){
wait(2000);
setDescription("Click on show entries");
click(byXPath("//span[@class='table-limiter-show-entries']/following::mat-select"));
setDescription("select 25 in show entries");
click(byXPath('//*[text()=" 25 "]'));
wait(2500);
setDescription("Verify the total rows");
TableRowCountVerify(25);
setDescription("Click on show entries");
click(byXPath("//span[@class='table-limiter-show-entries']/following::mat-select"));
setDescription("select 10 in show entries");
click(byXPath('//*[text()=" 10 "]'));
wait(2500);
setDescription("Verify the total rows");
TableRowCountVerify(10);
setDescription("Validate the pagination icon");
assertExists(custom("mat-icon", "last_page"));
setDescription("Validate the pagination icon");
assertExists(byXPath('//*[text()="first_page"]'));
setDescription("Validate the pagination icon");
assertExists(custom("mat-icon", "keyboard_arrow_right"));
setDescription("Validate the pagination icon");
assertExists(custom("mat-icon", "keyboard_arrow_left"));
}

function TableRowCount(){
  var nameCountLength = _eval("ds$(\'tbody[role=\"rowgroup\"] tr.striped-rows\').length");
  log(nameCountLength);
}

function TableRowCountVerify(num){
  var nameCountLength = _eval("ds$(\'tbody[role=\"rowgroup\"] tr.striped-rows\').length");
  var temp = Number(nameCountLength);
  assertEquals(num,Math.floor(nameCountLength));
}

function deleteinternaluser(){
assertExists(fallback(`byXPath('//*[text()="User Maintenance"]')`,
   `span("User Maintenance")`));
click(fallback(`byXPath('//*[text()="Internal Users"]').xy(0.30, 0.54 )`,
   `div("Internal Users[1]").xy(0.30, 0.54 )`));
setValue(fallback(`textbox(/mat-input.*/,_below(span("First & Last Name")))`),strFirstName);
wait(2000);
click(fallback(`image(/ellipsis-icon.svg.*/)`));
click(fallback(`custom("font", "Delete")`));
click(fallback(`span("Confirm[1]")`));
click(fallback(`div("Internal user deleted successfully[9]").xy(0.42, 0.55 )`));
}

function editandsaveduserdetails(){
assertExists(fallback(`span("User Maintenance")`));
click(fallback(`div("New Users in Organization[1]").xy(0.41, 0.38 )`));
click(fallback(`div("Active Users[1]").xy(0.43, 0.58 )`));
click(fallback(`image("https://im-stage3.avantorsciences.com/assets/icons/ellipsis-icon.svg").xy(0.38, 0.78 )`));
click(fallback(`byXPath('//*[text()=" Edit"]')`,
   `custom("font", "Edit")`));
click(fallback(`span("User Maintenance")`,
   `byXPath('//*[text()="User Maintenance"]')`,
   `span("title")`));
var         StrAddress=eval("'VWR Lab Products Pvt Ltd'+ Math.floor(Math.random()*1000)");
click(fallback(`byXPath("//input[contains(@id,'mat-input') and @formcontrolname='address']")`));
setValue(fallback(`byXPath("//input[contains(@id,'mat-input') and @formcontrolname='address']")`),"");
setValue(fallback(`byXPath("//input[contains(@id,'mat-input') and @formcontrolname='address']")`),StrAddress);
click(fallback(`span("Save & Update[1]")`));
assertExists(fallback(`byXPath('//*[text()=" You have successfully updated the User details. "]').xy(0.56, 0.50 )`));
wait(150);
}

function deleteinternaluser(){
assertExists(fallback(`byXPath('//*[text()="User Maintenance"]')`,
   `span("User Maintenance")`));
click(fallback(`byXPath('//*[text()="Internal Users"]').xy(0.30, 0.54 )`,
   `div("Internal Users[1]").xy(0.30, 0.54 )`));
setValue(fallback(`textbox(/mat-input.*/,_below(span("First & Last Name")))`),strFirstName);
wait(2000);
click(fallback(`image(/ellipsis-icon.svg.*/)`));
click(fallback(`custom("font", "Delete")`));
click(fallback(`span("Confirm[1]")`));
click(fallback(`div("Internal user deleted successfully[9]").xy(0.42, 0.55 )`));
}

function enterQty(ProductNum){
var tempValue = ProductNum;
var tempXPath1 = "(//a[contains(text(),'Temp')]//following::input)[2]".replace("Temp",tempValue);
setValue(byXPath(tempXPath1),"1");
}

function navigateConsumeStock(){
setDescription("Click on Activities");
click(fallback(`submit("Activities expand_more")`));
setDescription("Click on Consume Stock");
click(fallback(`byXPath('//*[text()=" Consume Stock "]').xy(0.83, 0.63 )`));
wait(1000);
setDescription("Validate Consume Stock");
assertExists(fallback(`span("Consume Stock[1]")`));
}

function addbatchproductstoconsumeproduct(products){

    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);    
    products.forEach(function(product) {

    setValue(fallback(`textbox(/mat-input.*/,_below(span("Catalog #")))`,
     `textbox(/mat-input.*/,_below(span(" Catalog #")))`),product);
    wait(4000);
    click(fallback(`byXPath('//*[text()=" add"]')`,
   `custom("mat-icon", "add")`));
    wait(4000); 
    click(fallback(`byXPath("//table/tbody//tr[1]/td[5]//input")`));
    clearText(fallback(`byXPath("//table/tbody//tr[1]/td[5]//input")`));
    setValue(fallback(`byXPath("//table/tbody//tr[1]/td[5]//input")`),"1");
    wait(1000);
     });
}

function addproductstoconsumeproduct(products){

    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);    
    products.forEach(function(product) {

    setValue(fallback(`textbox(/mat-input.*/,_below(span("Catalog #")))`,
     `textbox(/mat-input.*/,_below(span(" Catalog #")))`),product);
    wait(1500);
    click(fallback(`byXPath("//table/tbody//tr[1]/td[11]//input")`));
    clearText(fallback(`byXPath("//table/tbody//tr[1]/td[11]//input")`));
    setValue(fallback(`byXPath("//table/tbody//tr[1]/td[11]//input")`),"2");
    });
}

function clickconsumestock(){
setDescription("Click on Consume");
    click(fallback(`span("Consume")`));
    wait(1500);
    setDescription("Click on Consume stock");
    click(fallback(`span("Consume Stock[2]")`));
    wait(1000);
   setDescription("Validate success mesage");
   assertExists(fallback(`div("STOCK CONSUMED SUCCESSFULLY!").xy(0.50, 0.50 )`));
  wait(1000);
} 



function ValidateArtileActivityLogMovementTypes(products,MovementType){

  wait(1000);

NavigateArticleActivityLog();

  wait(3000);

setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);    
    products.forEach(function(product) {


setDescription("Enter CatLog No");

SearchFieldWithoutClose("Catalog #",product);

wait(4000);

setDescription("Click on first catlog link");

click(fallback(`byXPath("//table/tbody/tr[1]/td[contains(@class,'catalogNo')]/a")`));

wait(3000);
setValue(fallback(`byXPath('(//span[text()=" Movement Type "])/following::input[2]')`),"Stock Consumed");
wait(10000);
assertExists(fallback(`byXPath("//table/tbody/tr[1]/td[contains(@class,'activityType')]/a[text()='Stock Consumed']")`));
wait (3000);

click(fallback(`byXPath("//span[text()='Back']")`));
wait (4000);      
  });

}
function clickonsubmitrequest(){

 click(fallback(`byXPath('//*[text()=" Request "]')`,
 `span("Request")`));
 click(fallback(`byXPath('//*[text()=" Submit Request "]')`,
 `span("Submit Request")`));
 assertExists(fallback(`byXPath('//*[text()=" Successfully requested products "]').xy(0.20, 0.63 )`,
 `div("Successfully requested products[3]").xy(0.20, 0.63 )`));
 wait(500);
}

function ValidateArtileActivityLogMovementTypess(products){

  wait(1000);

NavigateArticleActivityLog();

  wait(3000);

setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);    
    products.forEach(function(product) {


setDescription("Enter CatLog No");

SearchFieldWithoutClose("Catalog #",product);

wait(4000);

setDescription("Click on first catlog link");

click(fallback(`byXPath("//table/tbody/tr[1]/td[contains(@class,'catalogNo')]/a")`));

wait(3000);
setValue(fallback(`byXPath('(//span[text()=" Movement Type "])/following::input[2]')`),"Requested");

 wait(10000);
 assertExists(fallback(`byXPath("//table/tbody/tr[1]/td[contains(@class,'activityType')]/a[text()='Consumption Requested']")`));     
wait (3000);

click(fallback(`byXPath("//span[text()='Back']")`));
wait (4000);      
  });

}

function addproductstoconsumeproduct(products){

    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);    
    products.forEach(function(product) {

    setValue(fallback(`textbox(/mat-input.*/,_below(span("Catalog #")))`,
     `textbox(/mat-input.*/,_below(span(" Catalog #")))`),product);
    wait(100);
    click(fallback(`byXPath("//table/tbody//tr[1]/td[11]//input")`));
    clearText(fallback(`byXPath("//table/tbody//tr[1]/td[11]//input")`));
    setValue(fallback(`byXPath("//table/tbody//tr[1]/td[11]//input")`),"1");
    });
}


function addbatchproductstoconsumeproduct(products){

    setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
    setShadowDOM(true);    
    products.forEach(function(product) {

    setValue(fallback(`textbox(/mat-input.*/,_below(span("Catalog #")))`,
     `textbox(/mat-input.*/,_below(span(" Catalog #")))`),product);
    wait(4000);
    click(fallback(`byXPath('//*[text()=" add"]')`,
   `custom("mat-icon", "add")`));
    wait(4000); 
    click(fallback(`byXPath("//table/tbody//tr[1]/td[5]//input")`));
    clearText(fallback(`byXPath("//table/tbody//tr[1]/td[5]//input")`));
    setValue(fallback(`byXPath("//table/tbody//tr[1]/td[5]//input")`),"1");
    wait(1000);
     });
}


function verifycatalognumberandDescription(){

setDescription("Click first Catalog number");
click(fallback(`byXPath("//table/tbody//tr[1]/td[4]/a")`));
assertExists(fallback(`byXPath('//*[text()=" Catalog Number "]').xy(0.61, 0.58 )`,
   `div("Catalog Number").xy(0.61, 0.58 )`));
assertExists(fallback(`byXPath('//*[text()=" Available Quantity "]').xy(0.52, 0.62 )`,
   `div("Available Quantity").xy(0.52, 0.62 )`));
assertExists(fallback(`byXPath('//*[text()=" Quantity in Transfer "]').xy(0.64, 0.58 )`,
   `div("Quantity in Transfer").xy(0.64, 0.58 )`));
click(fallback(`byXPath('//*[text()="Full Details"]')`,
   `span("Full Details")`));
assertExists(fallback(`byXPath('//*[text()=" Technical Article Number "]').xy(0.26, 0.47 )`,
   `div("Technical Article Number").xy(0.26, 0.47 )`));
assertExists(fallback(`byXPath('//*[text()=" Vendor Catalog Number "]').xy(0.22, 0.64 )`,
   `div("Vendor Catalog Number").xy(0.22, 0.64 )`));
click(fallback(`span("Close")`,
   `byXPath('//*[text()=" Close "]')`));
}

function verifycatalognumberdescriptionandvendorname(){
setDescription("Search");
setValue(fallback(`textbox(/mat-input.*/,_below(span("Catalog #")))`,
   `textbox(/mat-input.*/,_below(span("Catalog #")))`,
   `textbox(/mat-input.*/,_below(span("Catalog #")))`),"451");
setDescription("Verify Search result");
VerifyRecordsSorting("Catalog #","catalogNo");
setDescription("Close search string");
click(fallback(`custom("mat-icon", "close[1]")`));
setDescription("Search");
setValue(fallback(`textbox(/mat-input.*/,_below(span("Description")))`),"Auto");
setDescription("Verify Search result");
VerifyRecordsSorting("Description","description");
setDescription("Close search string");
click(fallback(`custom("mat-icon", "close[1]")`));
setDescription("Search");
setValue(fallback(`textbox(/mat-input.*/,_below(span("Vendor Name")))`,
   `textbox(/mat-input.*/,_below(span("Catalog #")))`,
   `textbox(/mat-input.*/,_below(span("Catalog #")))`),"VWR");
setDescription("Verify Search result");
VerifyRecordsSorting("Vendor Name","vendorName");
setDescription("Close search string");
click(fallback(`custom("mat-icon", "close[1]")`));
}

function NavigateToVendorMaintenancePage() {
    setShadowDOM(true);
    click(fallback(`submit("Administration expand_more")`));
    wait(300);
    click(fallback(`byXPath('//*[text()=" Vendor Maintenance "]').xy(0.19, 0.57 )`));
    wait(1000);
    assertExists(fallback(`byXPath('//*[text()="Vendor Maintenance"]')`));
    wait(300);

}

function NavigateToIntegrationMaintenance() {
    setShadowDOM(true);
    click(fallback(`submit("Administration expand_more")`));
    wait(300);
    click(fallback(`byXPath('//*[text()=" Integration Maintenance "]').xy(0.19, 0.57 )`));
    wait(1000);
    assertExists(fallback(`byXPath('//*[text()="Integration Maintenance"]')`));
    wait(300);

}

function DeleteALLintegration(){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[text()=' ALL ']/parent::mat-option")`));
click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
let value = _isVisible(fallback(`byXPath("//img[@src='/assets/icons/ellipsis-icon.svg']/parent::span")`));
log(value);
if(true == value){
click(fallback(`byXPath("//img[@src='/assets/icons/ellipsis-icon.svg']/parent::span")`));
click(fallback(`byXPath("//img[@src='/assets/icons/delete.svg']/parent::button")`));
click(fallback(`byXPath("//span[text()=' Yes ']/parent::button")`));
assertExists(fallback(`byXPath('//*[text()=" You have successfully deleted integration "]')`));  
}
}

function AddALLintegration(){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'ALL') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'PDF OUTPUT')]/parent::span")`));
click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}

function IntegrationAndReviewTabs() {
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}


function AddALLintegrationWithCSV(){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
click(fallback(`byXPath("(//div[contains(text(),'Vendor')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'ALL') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'CSV')]/parent::span")`));

click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}

function AddALLintegrationWithXML(){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
click(fallback(`byXPath("(//div[contains(text(),'Vendor')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'ALL') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'EMAIL XML')]/parent::span")`));

click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}

function AddALLintegrationWithText(){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
wait(2000);
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'ALL') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'TEXT FILE CONFIGURATOR')]/parent::span")`));

click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}

function AddALLintegrationWithXML(){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
click(fallback(`byXPath("(//div[contains(text(),'Vendor')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'ALL') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'EMAIL XML')]/parent::span")`));

click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}

function AddAutomationVendorintegrationWithText(){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
wait(2000);
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'auto1215') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'Ev_Automation_Regular_Stockroom')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'TEXT FILE CONFIGURATOR')]/parent::span")`));

click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}

function AddIntegrationWithVendorAndOutPutTpeSAPRequestion(Vendor,Stockrom,OutPutType){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
wait(2000);
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'${Vendor}') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'${Stockrom}')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'${OutPutType}')]/parent::span")`));

click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);

click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}

function EMailValidationINIntegrationAndEmails(){
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail1);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail2);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);

click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));

}


function AddIntegrationWithVendorAndOutPutTpe(Vendor,Stockrom,OutPutType){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
wait(2000);
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'${Vendor}') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'${Stockrom}')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'${OutPutType}')]/parent::span")`));

click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail1);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail2);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}


function AddIntegrationWithVendorAndOutPutTypeAndCCEmail(Vendor,Stockrom,OutPutType){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
wait(2000);
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'${Vendor}') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'${Stockrom}')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'${OutPutType}')]/parent::span")`));

click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
   wait(2000);
click(fallback(`byXPath("//div[@formarrayname='requestCCEmails']//span[text()='add']")`));
wait(2000);
setValue(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::input)[2]")`),TempEmail1);
click(fallback(`byXPath("//mat-icon[text()='save']")`));


click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail1);
click(fallback(`byXPath("//mat-icon[text()='save']")`));

   wait(2000);
click(fallback(`byXPath("//div[@formarrayname='orderCCEmails']//span[text()='add']")`));
wait(2000);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[2]")`),TempEmail);
   wait(2000);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);

click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail1);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
   wait(2000);
click(fallback(`byXPath("//div[@formarrayname='receivingCCEmails']//span[text()='add']")`));
wait(2000)
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[2]")`),TempEmail1);
   wait(2000);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}

function updateResultWithALL() {
wait(4000);
click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[text()=' ALL ']/parent::mat-option")`));
click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
}

function updateResultWithAutomationVendor() {
click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[text()=' auto1215 ']/parent::mat-option")`));
click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
}

function deleteAll() {
let value = _isVisible(fallback(`byXPath("//img[@src='/assets/icons/ellipsis-icon.svg']/parent::span")`));
log(value);
if(true == value){
click(fallback(`byXPath("//img[@src='/assets/icons/ellipsis-icon.svg']/parent::span")`));
click(fallback(`byXPath("//img[@src='/assets/icons/delete.svg']/parent::button")`));
click(fallback(`byXPath("//span[text()=' Yes ']/parent::button")`));
assertExists(fallback(`byXPath('//*[text()=" You have successfully deleted integration "]')`));  
}
}

function createALLIntegrationIfNotExist(){
let value = _isVisible(fallback(`byXPath("//img[@src='/assets/icons/ellipsis-icon.svg']/parent::span")`));
log(value);
if(false == value){
 AddALLintegration()
}
}


function AddALLintegrationVWRVendor(){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
click(fallback(`byXPath("(//div[contains(text(),'Vendor')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[text()=' VWR ']/ancestor::mat-option")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'EMAIL XML')]/parent::span")`));
click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}


function AddALLintegrationVWRVendor1(){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
click(fallback(`byXPath("(//div[contains(text(),'Vendor')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[text()=' VWR ']/ancestor::mat-option")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'EMAIL XML')]/parent::span")`));
click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}


function CreateVendorAndAddIntegration(){ 
wait(5000);
log(VendorName);
var StockRoomName=$ConsumptionStockroom;
log(StockRoomName);
var Email="Automation"+RandomVal+"@gmail.com";
setDescription("Vendor Maintenance");
NavigateToVendorMaintenancePage();
wait(1000);
setDescription("Click Add new vendor");
click(fallback(`byXPath('//*[text()=" Add New Vendor "]')`));
setDescription("Set vender Naame");
setValue(fallback(`byXPath('//*[text() =" Create New Vendor "]/following::input[1]')`),VendorName);
setValue(fallback(`byXPath('//*[text() =" Create New Vendor "]/following::input[4]')`),RandomVal);
setDescription("Click next");
click(fallback(`custom("mat-icon", "arrow_forward")`));
setDescription("Enter vendor name");
assertExists(fallback(`byXPath('//*[text()="${VendorName }"]')`));
//setDescription("Validate PDF OUTPUT");
//assertExists(fallback(`byXPath('//*[text()="PDF OUTPUT"]')`));
setDescription("Click next");
click(fallback(`custom("mat-icon", "arrow_forward")`));
setDescription("Validate Vendor Name");
assertExists(fallback(`byXPath('//*[text()="${VendorName }"]')`));
//setDescription("Validate out Put type");
//assertExists(fallback(`cell("PDF OUTPUT")`));
setDescription("Click on Save and Add Vendor");
wait(2000);
click(fallback(`button("Save & Add Vendor")`,
   `button("add-vendor cdk-focused cdk-mouse-focused mat-button-base mat-flat-button mat-focus-indicator mat-primary ng-star-inserted py-1")`,
   `byXPath("//mat-dialog-container[@id='mat-dialog-0']/app-create-update-wizard/mat-dialog-actions/button[3]")`,
   `byXPath('//*[@class="mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-actions/button[3]')`,
   `byXPath("id('mat-dialog-0')/app-create-update-wizard[@class='ng-star-inserted']/mat-dialog-actions[@class='mat-dialog-actions px-3 vendor-btns']/button[@class='mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused']")`,
   `byJQuery('div[class="cdk-overlay-pane avantor-dialog"] > mat-dialog-container[class="mat-dialog-container ng-tns-c31-153 ng-trigger ng-trigger-dialogContainer ng-star-inserted"] > app-create-update-wizard[class="ng-star-inserted"] > mat-dialog-actions[class="mat-dialog-actions px-3 vendor-btns"] > button[class="mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused"]')`,
   `byJQuery('#mat-dialog-0 > .ng-star-inserted > .mat-dialog-actions.px-3.vendor-btns > .mat-focus-indicator.py-1.add-vendor.mat-flat-button.mat-button-base.mat-primary.ng-star-inserted.cdk-focused.cdk-mouse-focused')`));
setDescription("Validate Success Message");
assertExists(fallback(`div("VENDOR CREATED SUCCESSFULLY[9]").xy(0.41, 0.32 )`));
wait(1000);
NavigateToIntegrationmaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
click(fallback(`byXPath("(//div[contains(text(),'Vendor')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'{VendorName}') and @class='vendor-option']")`,
   `byXPath("//span[contains(text(),'${VendorName}') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath('//*[text()="${StockRoomName}"]')`,
   `byXPath('//*[text()='{StockRoomName}']')`,
   `byXPath('//*[text()='${StockRoomName}']')`,
   `byXPath('//*[text()="Automation Regular Stockroom"]')`,
   `span(1, _in(custom("mat-option", "mat-option-155")))`,
   `span(1, _in(custom("mat-option", {'id':'mat-option-155'})))`,
   `span("vendor-option[1]")`,
   `span("Automation Regular Stockroom[1]")`,
   `byXPath("//mat-option[@id='mat-option-155']/span/span")`,
   `byXPath('/html/body/div[2]/div[4]/div/div/div/div[2]/mat-option[2]/span/span')`,
   `byXPath("id('mat-option-155')/span[@class='mat-option-text']/span[@class='vendor-option']")`,
   `byJQuery('div[class="ng-tns-c89-179 ng-trigger ng-trigger-transformPanel mat-select-panel mat-primary"] > div[class="ng-tns-c89-179"] > mat-option[class="mat-option mat-focus-indicator mat-option-multiple ng-star-inserted"] > span[class="mat-option-text"] > span[class="vendor-option"]')`,
   `byJQuery('#mat-option-155 > .mat-option-text > .vendor-option')`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'PDF OUTPUT')]/parent::span")`));
click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
wait(1000);

}

function CreateSecondVendorAndAddIntegrationWithEMAILXML(){ 
wait(5000);
log(VendorName);
var StockRoomName=$ConsumptionStockroom;
log(StockRoomName);
var Email="Automation"+RandomVal+"@gmail.com";
setDescription("Vendor Maintenance");
NavigateToVendorMaintenancePage();
wait(1000);
setDescription("Click Add new vendor");
click(fallback(`byXPath('//*[text()=" Add New Vendor "]')`));
setDescription("Set vender Naame");
setValue(fallback(`byXPath('//*[text() =" Create New Vendor "]/following::input[1]')`),VendorName);
setValue(fallback(`byXPath('//*[text() =" Create New Vendor "]/following::input[4]')`),RandomVal);
setDescription("Click next");
click(fallback(`custom("mat-icon", "arrow_forward")`));
setDescription("Enter vendor name");
//assertExists(fallback(`byXPath('//*[text()="${SecondVendorName }"]')`));
//setDescription("Validate PDF OUTPUT");
//assertExists(fallback(`byXPath('//*[text()="PDF OUTPUT"]')`));
setDescription("Click next");
click(fallback(`custom("mat-icon", "arrow_forward")`));
//setDescription("Validate Vendor Name");
//assertExists(fallback(`byXPath('//*[text()="${SecondVendorName }"]')`));
//setDescription("Validate out Put type");
//assertExists(fallback(`cell("PDF OUTPUT")`));
setDescription("Click on Save and Add Vendor");
wait(2000);
click(fallback(`button("Save & Add Vendor")`,
   `button("add-vendor cdk-focused cdk-mouse-focused mat-button-base mat-flat-button mat-focus-indicator mat-primary ng-star-inserted py-1")`,
   `byXPath("//mat-dialog-container[@id='mat-dialog-0']/app-create-update-wizard/mat-dialog-actions/button[3]")`,
   `byXPath('//*[@class="mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-actions/button[3]')`,
   `byXPath("id('mat-dialog-0')/app-create-update-wizard[@class='ng-star-inserted']/mat-dialog-actions[@class='mat-dialog-actions px-3 vendor-btns']/button[@class='mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused']")`,
   `byJQuery('div[class="cdk-overlay-pane avantor-dialog"] > mat-dialog-container[class="mat-dialog-container ng-tns-c31-153 ng-trigger ng-trigger-dialogContainer ng-star-inserted"] > app-create-update-wizard[class="ng-star-inserted"] > mat-dialog-actions[class="mat-dialog-actions px-3 vendor-btns"] > button[class="mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused"]')`,
   `byJQuery('#mat-dialog-0 > .ng-star-inserted > .mat-dialog-actions.px-3.vendor-btns > .mat-focus-indicator.py-1.add-vendor.mat-flat-button.mat-button-base.mat-primary.ng-star-inserted.cdk-focused.cdk-mouse-focused')`));
setDescription("Validate Success Message");
assertExists(fallback(`div("VENDOR CREATED SUCCESSFULLY[9]").xy(0.41, 0.32 )`));
wait(1000);
NavigateToIntegrationmaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
click(fallback(`byXPath("(//div[contains(text(),'Vendor')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'{VendorName}') and @class='vendor-option']")`,
   `byXPath("//span[contains(text(),'${SecondVendorName}') and @class='vendor-option']")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath('//*[text()="${StockRoomName}"]')`,
   `byXPath('//*[text()='{StockRoomName}']')`,
   `byXPath('//*[text()='${StockRoomName}']')`,
   `byXPath('//*[text()="Automation Regular Stockroom"]')`,
   `span(1, _in(custom("mat-option", "mat-option-155")))`,
   `span(1, _in(custom("mat-option", {'id':'mat-option-155'})))`,
   `span("vendor-option[1]")`,
   `span("Automation Regular Stockroom[1]")`,
   `byXPath("//mat-option[@id='mat-option-155']/span/span")`,
   `byXPath('/html/body/div[2]/div[4]/div/div/div/div[2]/mat-option[2]/span/span')`,
   `byXPath("id('mat-option-155')/span[@class='mat-option-text']/span[@class='vendor-option']")`,
   `byJQuery('div[class="ng-tns-c89-179 ng-trigger ng-trigger-transformPanel mat-select-panel mat-primary"] > div[class="ng-tns-c89-179"] > mat-option[class="mat-option mat-focus-indicator mat-option-multiple ng-star-inserted"] > span[class="mat-option-text"] > span[class="vendor-option"]')`,
   `byJQuery('#mat-option-155 > .mat-option-text > .vendor-option')`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'EMAIL XML')]/parent::span")`));
click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
click(fallback(`byXPath("//span[contains(text(),'Save')]/parent::span")`));
wait(3000);
}

function ReplenishStockWithName(StockName){
click(fallback(`byXPath("//button[contains(text(),'Activities')]/span")`,
   `byXPath("")`));
click(fallback(`byXPath("//div[contains(text(),'Replenish Stock')]")`,
   `byXPath("")`));
click(fallback(`byXPath("//button[@aria-label='Table View Preference Card']")`,
   `byXPath("")`));
setValue(fallback(`byXPath("//th[contains(@class,'search-catalogNo')]//input")`,
   `byXPath("")`),StockName);
wait(2000);
setValue(fallback(`byXPath("//td[contains(@class,'mat-column-qty')]//input")`,
   `byXPath("")`),"2");
click(fallback(`byXPath("(//span[contains(text(),'Place Your Order')])[1]")`,
   `byXPath("")`));
click(fallback(`byXPath("(//button[contains(@class,'replenish-checkout-btn')])[1]")`,
   `byXPath("")`));
assertExists(fallback(`byXPath("//div[contains(text(),'Stock Replenished Successfully! Your products were successfully replenished.')]")`,
   `byXPath("")`));
wait(2000);
}

function ReceiveFirstStock(){
click(fallback(`byXPath("//button[contains(text(),'Activities')]/span")`,
   `byXPath("")`));
click(fallback(`byXPath("//div[contains(text(),'Receive Stock')]")`,
   `byXPath("")`));
click(fallback(`byXPath("(//td[contains(@class,'newOrderNo')]//a)[1]")`,
   `byXPath("")`));
click(fallback(`byXPath("(//p[contains(text(),'Not Yet Received')])[1]")`,
   `byXPath("")`));
click(fallback(`byXPath("(//th[contains(@class,'mat-column-_select')]/mat-checkbox)[1]")`,
   `byXPath("")`));
click(fallback(`byXPath("(//span[contains(text(),'Receive Stock')]/ancestor::button)[1]")`,
   `byXPath("")`));
}

function PrintViaStandardModule(){
assertExists(fallback(`byXPath("//h5[contains(text(),'Print Barcodes')]")`,
   `byXPath("")`));
click(fallback(`byXPath("//div[contains(text(),'Zebra Formats')]")`,
   `byXPath("")`));
wait(2000);
click(fallback(`byXPath("//span[text()='Standard Template']")`,
   `byXPath("")`));
click(fallback(`byXPath("//span[text()='Select Standard Zebra Templates']")`,
   `byXPath("")`,
   `byXPath("//span[text()='Select Standard Zebra Templates']")`));
click(fallback(`byXPath("(//mat-option[@role='option']/span)[2]")`,
   `byXPath("")`));
assertExists(fallback(`byXPath("//mat-select[@formcontrolname='zebraTemplateId' and @aria-disabled='true']//span[text()='Select Custom Zebra Templates']")`,
   `byXPath("")`,
   `byXPath("//mat-select[@formcontrolname='zebraTemplateId' and @aria-disabled='true']//span[text()='Select Custom Zebra Templates']")`));
   wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Print')]/ancestor::button")`,
   `byXPath("")`));
wait(2000);
var list=getDownloadedFiles();
var fileName=list.getJSONObject(0).getString("name");
log(fileName);
var Value=fileName.substr(-4);
assertEqual(Value,".txt");
}

function PrintViaCustomModule(){
assertExists(fallback(`byXPath("//h5[contains(text(),'Print Barcodes')]")`,
   `byXPath("")`));
click(fallback(`byXPath("//div[contains(text(),'Zebra Formats')]")`,
   `byXPath("")`));
   wait(2000);
click(fallback(`byXPath("//span[text()='Custom Template']")`,
   `byXPath("")`));
click(fallback(`byXPath("//span[text()='Select Custom Zebra Templates']")`,
   `byXPath("")`));
wait(2000);
click(fallback(`byXPath("(//mat-option[@role='option']/span)[2]")`,
   `byXPath("")`));
assertExists(fallback(`byXPath("//mat-select[@formcontrolname='zebraTemplateId' and @aria-disabled='true']//span[text()='Select Standard Zebra Templates']")`,
   `byXPath("")`));
   wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Print')]/ancestor::button")`,
   `byXPath("")`));
wait(2000);
var list=getDownloadedFiles();
var fileName=list.getJSONObject(0).getString("name");
log(fileName);
var Value=fileName.substr(-4);
assertEqual(Value,".txt");
}

function NavigateToVendorMaintenance1(){
click(fallback(`byXPath("//button[contains(text(),'Administration')]/span")`,
   `byXPath("")`));
click(fallback(`byXPath("//div[contains(text(),'Vendor Maintenance')]")`,
   `byXPath("")`));
assertExists(fallback(`byXPath("//span[contains(text(),'Vendor Maintenance') and @class='title']")`,
   `byXPath("")`));
}

function CreateVendorWithGivenName(VendorName){
click(fallback(`byXPath("(//span[contains(text(),'Add New Vendor')])[1]")`,
   `byXPath("")`));
assertExists(fallback(`byXPath("//input[@formcontrolname='vendorName']")`,
   `byXPath("")`));
setValue(fallback(`byXPath("//input[@formcontrolname='vendorName']")`,
   `byXPath("")`),VendorName);
var AccNum="AutoAcc"+eval("'Num'+ Math.floor(Math.random()*10000)");
log(AccNum);
setValue(fallback(`byXPath("//input[@formcontrolname='accountNo']")`,
   `byXPath("//input[@formcontrolname='vendorName']")`),AccNum);
click(fallback(`byXPath("//button[contains(@class,'next mat-flat-button')]/span[1]")`,
   `byXPath("")`));
click(fallback(`byXPath("//button[contains(@class,'next mat-flat-button')]/span[1]")`,
   `byXPath("")`));
click(fallback(`byXPath("//span[contains(text(),'Save & Add Vendor')]")`,
   `byXPath("")`)); 
}

function AddALLintegrationWithTextWithName(VendorName){
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
wait(2000);
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
wait(2000);
setValue(fallback(`byXPath("//input[@placeholder='Search Vendor ']")`,
   `byXPath("")`),VendorName);
wait(2000);
click(fallback(`byXPath("(//mat-option[@role='option'])[1]")`,
   `byXPath("")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
wait(2000);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
wait(2000);
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
setValue(fallback(`byXPath("//input[@placeholder='Search Output Type ']")`,
   `byXPath("")`),"TEXT");
wait(2000);
click(fallback(`byXPath("(//mat-option[@role='option'])[1]")`,
   `byXPath("")`));
//click(fallback(`byXPath("(//span[contains(text(),'TEXT FILE CONFIGURATOR')]/parent::span)[1]")`));

click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
wait(2000);
click(fallback(`byXPath("(//span[contains(text(),'Request Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`,
   `byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Order Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']")`));
click(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::div[contains(text(),'Add email')])[1]")`));
wait(2000);
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//span[contains(text(),'Receiving Integration') and @class='mat-checkbox-label']/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
wait(4000);
click(fallback(`byXPath("(//span[contains(text(),'Next')]/ancestor::button)[2]")`));
wait(4000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/ancestor::button")`));
assertExists(fallback(`byXPath('//*[text()=" Integration created successfully "]')`));
}

function DeleteAllTextFileIntegration(){
click(fallback(`byXPath("//th[contains(@class,'search-outputType')]//mat-select")`,
   `byXPath("")`));
click(fallback(`byXPath("//mat-option/span[contains(text(),'TEXT FILE CONFIGURATOR')]")`,
   `byXPath("")`));
var TotalRow=_eval("ds$('tr.striped-rows').length");
log(TotalRow);
while (TotalRow>=1){
   deleteAll();
   var TotalRow=_eval("ds$('tr.striped-rows').length");
   }
}

function UpdateResultWithVendorName(VendorName){
wait(1000);
click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
setValue(fallback(`byXPath("//input[@placeholder='Search Vendor ']")`,
   `byXPath("")`),VendorName);
wait(1000);
click(fallback(`byXPath("(//mat-option[@role='option'])[1]")`,
   `byXPath("")`));
click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
wait(1000);
}


