/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../../Test Data/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
setShadowDOM(true);
include("{ds}/../../ReUsable Functions/IMCM Function Library.js");
Login($URL,$NormalUser,$Password,$ConsumptionOrg,$ConsumptionStockroom);
wait(5000);
var RandomVal=eval(" Math.floor(Math.random()*1000)");
var Date=datefunc();
log(Date);
var VendorName="Automation" +RandomVal;
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
//click(fallback(`byXPath('//*[text()="Automation "]')`,
//   `cell(0, _in(custom("mat-tab-body", {'id':'mat-tab-content-1-1'})))`,
//   `cell("fixed-width-column")`,
//   `cell("Automation")`,
//   `byXPath("//mat-tab-body[@id='mat-tab-content-1-1']/div/app-integrations-tab/form/table[2]/tbody/tr[1]/td[1]")`,
//   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/section/form/mat-tab-group/div/mat-tab-body[2]/div/app-integrations-tab/form/table[2]/tbody/tr/td')`,
//   `byXPath("id('mat-tab-content-1-1')/div[@class='mat-tab-body-content ng-tns-c102-92 ng-trigger ng-trigger-translateTab']/app-integrations-tab[@class='ng-star-inserted']/form[@class='ng-touched ng-dirty ng-valid']/table[@class='integration-table']/tbody[1]/tr[@class='ng-star-inserted']/td[@class='fixed-width-column']")`,
//   `byXPath('//tbody//tr[1]//td[1][@class="fixed-width-column"]')`,
//   `byXPath('//tbody//tr[1]//td[1][text()="Automation "]')`,
//   `cell({'style':'text-align: center;'})`,
//   `byJQuery('tr[class="ng-star-inserted"] > td[class="fixed-width-column"]')`,
//   `byJQuery('.ng-star-inserted > .fixed-width-column')`,
//   `cell(0, _in(custom("mat-tab-body", "mat-tab-content-1-1")))`));
setDescription("Validate PDF OUTPUT");
assertExists(fallback(`byXPath('//*[text()="PDF OUTPUT"]')`));
setDescription("Click next");
click(fallback(`custom("mat-icon", "arrow_forward")`));
setDescription("Validate Vendor Name");
assertExists(fallback(`byXPath('//*[text()="${VendorName }"]')`));
setDescription("Validate out Put type");
assertExists(fallback(`cell("PDF OUTPUT")`));
setDescription("Click on Save and Add Vendor");
click(fallback(`span("Save & Add Vendor[1]")`));
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
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
click(fallback(`byXPath("//span[contains(text(),'Save')]/parent::span")`));
wait(2000);
setDescription("Get Vendor Name");
var VendorNameInFirstRow=getText(byXPath("(//td[contains(@class,'mat-column-vendorData')])[1]"));
setDescription("Get Stockroom Name");
var StockroomNameFirstRow=getText(byXPath("(//td[contains(@class,'mat-column-stockroomData')])[1]"));
setDescription("verify updfated and searched vendor results are same or not?");
assertEqual(fallback(`VendorNameInFirstRow`,
   `VendorName`),VendorName);
setDescription("verify updfated and searched stockroom results are same or not?");
assertEqual(fallback(`StockroomNameFirstRow`,
   `StockroomName`),StockRoomName);
