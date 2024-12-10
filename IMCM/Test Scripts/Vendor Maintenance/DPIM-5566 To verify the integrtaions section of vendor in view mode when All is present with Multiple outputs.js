/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../../Test Data/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
setShadowDOM(true);
include("{ds}/../../ReUsable Functions/IMCM Function Library.js");
setDescription("Login");
Login($URL,$Super_User,$Password,$ConsumptionOrg,$ConsumptionStockroom);
NavigateToIntegrationMaintenance();
updateResultWithALL();
var TotalRow=_eval("ds$('tr.striped-rows').length");
log(TotalRow);
while (TotalRow>=1){
   deleteAll();
   var TotalRow=_eval("ds$('tr.striped-rows').length");
}
wait(1000);
var RandomVal=eval(" Math.floor(Math.random()*1000000000)");
var Date=datefunc();
var VendorName="Automation" +Date+RandomVal;
log(VendorName);
var Email="Auto"+RandomVal+"@avantorsciences.com";
AddALLintegration();
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
assertExists(fallback(`byXPath('//*[text()="${VendorName }"]')`,
   `byXPath('//*[text()="Automation "]')`));
setDescription("Validate PDF OUTPUT");
assertExists(fallback(`byXPath('//*[text()="PDF OUTPUT"]')`));
click(fallback(`byXPath("(//th[text()='Order Email']/following::span[contains(text(),'Add Email')])[3]")`,
   `byXPath("(//th[text()='Order Email']/following::span[contains(text(),'Add Email')])[1]")`,
   `byXPath("(//th[text()='Order Email']/following::span[contains(text(),'Add Email')])[1]")`));
setDescription("Enter Email ID");
setValue(fallback(`byXPath("//input[@title='']")`),Email);
wait(1000);
setDescription("Click on Save");
click(fallback(`custom("mat-icon", "save")`,
   `custom("mat-icon", 0, _in(custom("mat-tab-body", {'id':'mat-tab-content-1-1'})))`,
   `custom("mat-icon", "mat-icon mat-icon-no-color material-icons notranslate[9]")`,
   `byXPath("//mat-tab-body[@id='mat-tab-content-1-1']/div/app-integrations-tab/form/table[2]/tbody/tr[2]/td/table/tbody/tr/td[2]/div/div[1]/app-email-integartion/form/section/div/div/ul/li[1]/div/div[2]/div/div[1]/button/span[1]/mat-icon")`,
   `byXPath('//*[text()="save"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/section/form/mat-tab-group/div/mat-tab-body[2]/div/app-integrations-tab/form/table[2]/tbody/tr[2]/td/table/tbody/tr/td[2]/div/div/app-email-integartion/form/section/div/div/ul/li/div/div[2]/div/div/button/span/mat-icon')`,
   `byXPath("id('mat-tab-content-1-1')/div[@class='mat-tab-body-content ng-tns-c102-92 ng-trigger ng-trigger-translateTab']/app-integrations-tab[@class='ng-star-inserted']/form[@class='ng-touched ng-dirty ng-valid']/table[@class='integration-table']/tbody[1]/tr[@class='ng-star-inserted']/td[1]/table[@class='nested-table']/tbody[1]/tr[1]/td[2]/div[@class='ng-star-inserted']/div[@class='ng-star-inserted']/app-email-integartion[1]/form[@class='ng-star-inserted ng-dirty ng-valid ng-touched']/section[1]/div[@class='ms-email-block']/div[@class='mt-2 ng-dirty ng-valid ng-touched']/ul[@class='ms-email-list']/li[@class='ng-star-inserted']/div[@class='d-flex align-items-center justify-content-between']/div[@class='p-1 ml-auto ng-star-inserted']/div[@class='d-flex email-button-block ms-2 ng-star-inserted']/div[1]/button[@class='mat-focus-indicator mat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/mat-icon[@class='mat-icon notranslate material-icons mat-icon-no-color']")`,
   `byJQuery('button[class="mat-focus-indicator mat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused"] > span[class="mat-button-wrapper"] > mat-icon[class="mat-icon notranslate material-icons mat-icon-no-color"]')`,
   `byJQuery('.mat-focus-indicator.mat-button.mat-button-base.mat-primary.cdk-focused.cdk-mouse-focused > .mat-button-wrapper > .mat-icon.notranslate.material-icons.mat-icon-no-color')`,
   `custom("mat-icon", 0, _in(custom("mat-tab-body", "mat-tab-content-1-1")))`));
setDescription("Click on Forward arrow");
click(fallback(`byXPath('//*[text()="arrow_forward"]')`,
   `custom("mat-icon", "arrow_forward")`,
   `byXPath("//mat-dialog-container[@id='mat-dialog-0']/app-create-update-wizard/mat-dialog-actions/button[3]/span[1]/mat-icon")`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-actions/button[3]/span/mat-icon')`,
   `byXPath("id('mat-dialog-0')/app-create-update-wizard[@class='ng-star-inserted']/mat-dialog-actions[@class='mat-dialog-actions px-3 vendor-btns']/button[@class='mat-focus-indicator py-1 next mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/mat-icon[@class='mat-icon notranslate material-icons mat-icon-no-color']")`,
   `byJQuery('app-create-update-wizard[class="ng-star-inserted"] > mat-dialog-actions[class="mat-dialog-actions px-3 vendor-btns"] > button[class="mat-focus-indicator py-1 next mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused"] > span[class="mat-button-wrapper"] > mat-icon[class="mat-icon notranslate material-icons mat-icon-no-color"]')`,
   `byJQuery('.ng-star-inserted > .mat-dialog-actions.px-3.vendor-btns > .mat-focus-indicator.py-1.next.mat-flat-button.mat-button-base.mat-primary.ng-star-inserted.cdk-focused.cdk-mouse-focused > .mat-button-wrapper > .mat-icon.notranslate.material-icons.mat-icon-no-color')`,
   `custom("mat-icon", "mat-icon mat-icon-no-color material-icons notranslate[12]")`));
setDescription("Validate Vendor Name");
assertExists(fallback(`byXPath('//*[text()="${VendorName }"]')`));
setDescription("Validate out Put type");
assertExists(fallback(`cell("PDF OUTPUT")`));
setDescription("Validate email");
assertExists(fallback(`byXPath('//*[text() =" ${Email} "]')`,
   `byXPath('//*[text() =" ${Email} "]')`,
   `byXPath('//*[text() ="${Email}"]')`));
setDescription("Click on Save and ADD vendor");
click(fallback(`span("Save & Add Vendor[1]")`));
setDescription("Validate Success Message");
assertExists(fallback(`div("VENDOR CREATED SUCCESSFULLY[9]").xy(0.41, 0.32 )`));
wait(1000);
setDescription("Search with vendor");
setValue(fallback(`byXPath('//*[text() = " Vendor Name "]/following::input[1]')`),VendorName);
wait(2000);
click(fallback(`byXPath("(//img[@src='/assets/icons/ellipsis-icon.svg'])[1]")`));
setDescription("Click on Edit");
click(fallback(`byXPath('//*[text()=" Edit "]')`));
setDescription("Click on Forword Arrow");
click(fallback(`custom("mat-icon", "arrow_forward")`));
setDescription("Validate vendor name exist");
assertExists(fallback(`byXPath('//*[text()="${VendorName }"]')`));
setDescription("Validate out put type");
assertExists(fallback(`cell("PDF OUTPUT")`));
setDescription("Validate Email");
assertExists(fallback(`byXPath("//input[@title ='${Email}']")`));
setDescription("click on Close");
click(fallback(`byXPath('//*[text()=" Cancel "]')`));
setDescription("Click on Yes");
click(fallback(`byXPath('//*[text()=" Yes "]')`));
wait(1000);
AddALLintegrationWithCSV();
AddALLintegrationWithXML();
AddALLintegrationWithText();
setDescription("Vendor Maintenance");
NavigateToVendorMaintenancePage();
wait(1000);
setDescription("Search with vendor");
setValue(fallback(`byXPath('//*[text() = " Vendor Name "]/following::input[1]')`),VendorName);
wait(2000);
setDescription("Click on vendor name");
click(fallback(`byXPath("//span[text()='${VendorName}']")`,
   `byXPath('//span[text()="${VendorName}"]')`));
wait(5000);
click(fallback(`byXPath('//*[text()="Integrations"]')`,
   `custom("mat-panel-title", "Integrations")`,
   `byXPath("//mat-expansion-panel-header[@id='mat-expansion-panel-header-1']/span/mat-panel-title")`,
   `byXPath('//*[@class="mat-expansion-panel-header-title ng-tns-c282-326"]')`,
   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/mat-expansion-panel-header/span/mat-panel-title')`,
   `byXPath("id('mat-expansion-panel-header-1')/span[@class='mat-content ng-tns-c282-326']/mat-panel-title[@class='mat-expansion-panel-header-title ng-tns-c282-326']")`,
   `byJQuery('mat-accordion[class="mat-accordion vendor-information mat-accordion-multi"] > mat-expansion-panel[class="mat-expansion-panel ng-tns-c280-325 ng-star-inserted"] > mat-expansion-panel-header[class="mat-expansion-panel-header mat-focus-indicator ng-tns-c282-326 ng-tns-c280-325 mat-expansion-toggle-indicator-after ng-star-inserted cdk-focused cdk-mouse-focused"] > span[class="mat-content ng-tns-c282-326"] > mat-panel-title[class="mat-expansion-panel-header-title ng-tns-c282-326"]')`,
   `byJQuery('#mat-expansion-panel-header-1 > .mat-content.ng-tns-c282-326 > .mat-expansion-panel-header-title.ng-tns-c282-326')`,
   `custom("mat-panel-title", "mat-expansion-panel-header-title ng-tns-c282-326")`));
wait(5000);
assertExists(fallback(`span("PDF OUTPUT")`,
   `byXPath("//div[@id='cdk-accordion-child-1']/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[1]/td[3]/span")`,
   `byXPath('//*[text()="PDF OUTPUT"]')`,
   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/div/div/section/div[2]/avantor-table/div[2]/table/tbody/tr/td[3]/span')`,
   `byXPath("id('cdk-accordion-child-1')/div[@class='mat-expansion-panel-body ng-tns-c280-325']/section[@class='pt-4 ng-tns-c280-325']/div[@class='row']/avantor-table[@class='w-100 ng-tns-c328-327 ng-star-inserted']/div[@class='avantor-table-container ng-tns-c328-327']/table[@class='mat-table cdk-table ng-tns-c328-327 table -table']/tbody[1]/tr[@class='mat-row cdk-row ng-tns-c328-327 striped-rows ng-star-inserted']/td[@class='mat-cell cdk-cell cdk-column-outputType mat-column-outputType ng-tns-c328-327 ng-star-inserted']/span[@class='ng-star-inserted']")`,
   `byXPath('//tbody//tr[1]//td[3]//span[@class="ng-star-inserted"]')`,
   `byXPath('//tbody//tr[1]//td[3]//span[text()="PDF OUTPUT"]')`,
   `byJQuery('tr[class="mat-row cdk-row ng-tns-c328-327 striped-rows ng-star-inserted"] > td[class="mat-cell cdk-cell cdk-column-outputType mat-column-outputType ng-tns-c328-327 ng-star-inserted"] > span[class="ng-star-inserted"]')`,
   `byJQuery('.mat-row.cdk-row.ng-tns-c328-327.striped-rows.ng-star-inserted > .mat-cell.cdk-cell.cdk-column-outputType.mat-column-outputType.ng-tns-c328-327.ng-star-inserted > .ng-star-inserted')`,
   `span("ng-star-inserted[2]")`));
assertExists(fallback(`span("EMAIL XML")`,
   `byXPath("//div[@id='cdk-accordion-child-1']/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[9]/td[3]/span")`,
   `byXPath('//*[text()="EMAIL XML"]')`,
   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/div/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[9]/td[3]/span')`,
   `byXPath('//tbody//tr[9]//td[3]//span[@class="ng-star-inserted"]')`,
   `byXPath('//tbody//tr[9]//td[3]//span[text()="EMAIL XML"]')`,
   `span("ng-star-inserted[6]")`));
assertExists(fallback(`span("CSV")`,
   `byXPath("//div[@id='cdk-accordion-child-1']/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[5]/td[3]/span")`,
   `byXPath('//*[text()="CSV"]')`,
   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/div/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[5]/td[3]/span')`,
   `byXPath('//tbody//tr[5]//td[3]//span[@class="ng-star-inserted"]')`,
   `byXPath('//tbody//tr[5]//td[3]//span[text()="CSV"]')`,
   `span("ng-star-inserted[4]")`,
   `span("CSV")`));
assertExists(fallback(`span("TEXT FILE CONFIGURATOR")`,
   `byXPath("//div[@id='cdk-accordion-child-1']/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[5]/td[3]/span")`,
   `byXPath('//*[text()="CSV"]')`,
   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/div/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[5]/td[3]/span')`,
   `byXPath('//tbody//tr[5]//td[3]//span[@class="ng-star-inserted"]')`,
   `byXPath('//tbody//tr[5]//td[3]//span[text()="CSV"]')`));
NavigateToIntegrationMaintenance();
updateResultWithALL();
var TotalRow=_eval("ds$('tr.striped-rows').length");
log(TotalRow);
while (TotalRow>=1){
   deleteAll();
   var TotalRow=_eval("ds$('tr.striped-rows').length");
}
