/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../../Test Data/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
setShadowDOM(true);
include("{ds}/../../ReUsable Functions/IMCM Function Library.js");
Login($URL,$NormalUser,$Password,$ConsumptionOrg,$ConsumptionStockroom);
wait(500);
wait(1000);
NavigateToIntegrationmaintenance();
//click(fallback(`button("Save & Add Vendor")`,
//   `button("add-vendor cdk-focused cdk-mouse-focused mat-button-base mat-flat-button mat-focus-indicator mat-primary ng-star-inserted py-1")`,
//   `byXPath("//mat-dialog-container[@id='mat-dialog-0']/app-create-update-wizard/mat-dialog-actions/button[3]")`,
//   `byXPath('//*[@class="mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused"]')`,
//   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-actions/button[3]')`,
//   `byXPath("id('mat-dialog-0')/app-create-update-wizard[@class='ng-star-inserted']/mat-dialog-actions[@class='mat-dialog-actions px-3 vendor-btns']/button[@class='mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused']")`,
//   `byJQuery('div[class="cdk-overlay-pane avantor-dialog"] > mat-dialog-container[class="mat-dialog-container ng-tns-c31-153 ng-trigger ng-trigger-dialogContainer ng-star-inserted"] > app-create-update-wizard[class="ng-star-inserted"] > mat-dialog-actions[class="mat-dialog-actions px-3 vendor-btns"] > button[class="mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused"]')`,
//   `byJQuery('#mat-dialog-0 > .ng-star-inserted > .mat-dialog-actions.px-3.vendor-btns > .mat-focus-indicator.py-1.add-vendor.mat-flat-button.mat-button-base.mat-primary.ng-star-inserted.cdk-focused.cdk-mouse-focused')`));
updateResultWithAutomationVendor();
wait(1000);
var TotalRow=_eval("ds$('tr.striped-rows').length");
log(TotalRow);
while (TotalRow>=1){
   deleteAll();
   wait(2000);
   var TotalRow=_eval("ds$('tr.striped-rows').length");
}
wait(1000);
//createALLIntegrationIfNotExist();
AddAutomationVendorintegrationWithText();
wait(2000);
NavigateToIntegrationmaintenance();
//click(fallback(`button("Save & Add Vendor")`,
//   `button("add-vendor cdk-focused cdk-mouse-focused mat-button-base mat-flat-button mat-focus-indicator mat-primary ng-star-inserted py-1")`,
//   `byXPath("//mat-dialog-container[@id='mat-dialog-0']/app-create-update-wizard/mat-dialog-actions/button[3]")`,
//   `byXPath('//*[@class="mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused"]')`,
//   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-actions/button[3]')`,
//   `byXPath("id('mat-dialog-0')/app-create-update-wizard[@class='ng-star-inserted']/mat-dialog-actions[@class='mat-dialog-actions px-3 vendor-btns']/button[@class='mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused']")`,
//   `byJQuery('div[class="cdk-overlay-pane avantor-dialog"] > mat-dialog-container[class="mat-dialog-container ng-tns-c31-153 ng-trigger ng-trigger-dialogContainer ng-star-inserted"] > app-create-update-wizard[class="ng-star-inserted"] > mat-dialog-actions[class="mat-dialog-actions px-3 vendor-btns"] > button[class="mat-focus-indicator py-1 add-vendor mat-flat-button mat-button-base mat-primary ng-star-inserted cdk-focused cdk-mouse-focused"]')`,
//   `byJQuery('#mat-dialog-0 > .ng-star-inserted > .mat-dialog-actions.px-3.vendor-btns > .mat-focus-indicator.py-1.add-vendor.mat-flat-button.mat-button-base.mat-primary.ng-star-inserted.cdk-focused.cdk-mouse-focused')`));
updateResultWithALL();
wait(1000);
var TotalRow=_eval("ds$('tr.striped-rows').length");
log(TotalRow);
while (TotalRow>=1){
   deleteAll();
   wait(2000);
   var TotalRow=_eval("ds$('tr.striped-rows').length");
}
wait(2000);
//createALLIntegrationIfNotExist();
AddALLintegration();
var RandomVal=eval(" Math.floor(Math.random()*1000000000)");
var Date=datefunc();
var SecondVendorName="AutomationSecond"+Date+RandomVal;
var VendorName="Automation" +Date+RandomVal;
log(VendorName);
//CreateSecondVendorAndAddIntegrationWithEMAILXML();
CreateVendorAndAddIntegration();
selectWindow("Avantor Inventory Manager");
setDescription("click on ecilips menu");
click(fallback(`byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-layout/div/app-list/div[4]/div/avantor-table/div[2]/table/tbody/tr/td[15]/button/span/img').xy(0.56, 0.57 )`,
   `image("..").xy(0.56, 0.57 )`,
   `image("https://im-stage3.avantorsciences.com/assets/icons/ellipsis-icon.svg").xy(0.56, 0.57 )`,
   `byXPath('//app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-layout/div/app-list/div[4]/div/avantor-table/div[2]/table/tbody/tr[1]/td[15]/button/span[1]/img').xy(0.56, 0.57 )`,
   `byXPath("/html[1]/body[1]/app-root[1]/app-avantor-layout[@class='ng-star-inserted']/mat-drawer-container[@class='mat-drawer-container example-container']/mat-drawer-content[@class='mat-drawer-content ng-star-inserted']/div[@class='example-sidenav-content']/div[@class='fixed-header min-vh-100']/app-layout[@class='ng-star-inserted']/div[@class='px-4']/app-list[@class='ng-star-inserted']/div[@class='row']/div[@class='col customTable']/avantor-table[@class='table-container fullWidth ng-tns-c330-171 ng-star-inserted']/div[@class='avantor-table-container ng-tns-c330-171']/table[@class='mat-table cdk-table ng-tns-c330-171 table -table']/tbody[1]/tr[@class='mat-row cdk-row ng-tns-c330-171 striped-rows ng-star-inserted']/td[@class='mat-cell cdk-cell cdk-column-Widget mat-column-Widget ng-tns-c330-171 ng-star-inserted mat-table-sticky mat-table-sticky-border-elem-right']/button[@class='mat-focus-indicator mat-menu-trigger mat-icon-button mat-button-base ng-star-inserted cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/img[1]").xy(0.56, 0.57 )`,
   `image({'src':'/assets/icons/ellipsis-icon.svg'}).xy(0.56, 0.57 )`,
   `byJQuery('img[alt=".."]').xy(0.56, 0.57 )`));
wait(3000);
click(fallback(`submit("Edit")`,
   `submit(0, _in(div("mat-menu-panel-60")))`,
   `submit(0, _in(div({'id':'mat-menu-panel-60'})))`,
   `submit("cdk-focused cdk-mouse-focused mat-focus-indicator mat-menu-item ng-tns-c220-210")`,
   `byXPath("//div[@id='mat-menu-panel-60']/div/button[1]")`,
   `byXPath('//*[@class="mat-focus-indicator mat-menu-item ng-tns-c220-210 cdk-focused cdk-mouse-focused"]')`,
   `byXPath('//*[text()=" Edit "]')`,
   `byXPath('/html/body/div[2]/div[2]/div/div/div/button')`,
   `byXPath("id('mat-menu-panel-60')/div[@class='mat-menu-content ng-tns-c220-210']/button[@class='mat-focus-indicator mat-menu-item ng-tns-c220-210 cdk-focused cdk-mouse-focused']")`,
   `submit({'role':'menuitem'})`,
   `byJQuery('div[class="cdk-overlay-connected-position-bounding-box"] > div[class="cdk-overlay-pane"] > div[class="mat-menu-panel ng-trigger ng-trigger-transformMenu ng-tns-c220-210 mat-menu-before mat-menu-below mat-shadow vendor-maintenance ng-star-inserted mat-elevation-z4"] > div[class="mat-menu-content ng-tns-c220-210"] > button[class="mat-focus-indicator mat-menu-item ng-tns-c220-210 cdk-focused cdk-mouse-focused"]')`,
   `byJQuery('#mat-menu-panel-60 > .mat-menu-content.ng-tns-c220-210 > .mat-focus-indicator.mat-menu-item.ng-tns-c220-210.cdk-focused.cdk-mouse-focused')`));
wait(2000);
var VendorName1="auto1215";
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),VendorName1);
setDescription("Select First check box");
click(fallback(`custom("mat-pseudo-checkbox", 0, _in(custom("mat-option", "mat-option-424")))`,
   `custom("mat-pseudo-checkbox", 0, _in(custom("mat-option", {'id':'mat-option-424'})))`,
   `custom("mat-pseudo-checkbox", "mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted")`,
   `byXPath("//mat-option[@id='mat-option-424']/mat-pseudo-checkbox")`,
   `byXPath('//*[@class="mat-pseudo-checkbox mat-option-pseudo-checkbox ng-star-inserted"]')`,
   `byXPath('/html/body/div[2]/div[4]/div/div/div/div[2]/mat-option/mat-pseudo-checkbox')`,
   `byXPath("id('mat-option-424')/mat-pseudo-checkbox[@class='mat-pseudo-checkbox mat-option-pseudo-checkbox ng-star-inserted']")`,
   `byJQuery('div[class="mat-select-panel-wrap ng-tns-c89-231 ng-trigger ng-trigger-transformPanelWrap ng-star-inserted"] > div[class="ng-tns-c89-231 ng-trigger ng-trigger-transformPanel mat-select-panel mat-primary"] > div[class="ng-tns-c89-231"] > mat-option[class="mat-option mat-focus-indicator mat-option-multiple ng-star-inserted"] > mat-pseudo-checkbox[class="mat-pseudo-checkbox mat-option-pseudo-checkbox ng-star-inserted"]')`,
   `byJQuery('#mat-option-424 > .mat-pseudo-checkbox.mat-option-pseudo-checkbox.ng-star-inserted')`));
setDescription("Click on empty Space");
click(fallback(`div("cdk-overlay-backdrop cdk-overlay-backdrop-showing cdk-overlay-transparent-backdrop").xy(0.51, 0.28 )`,
   `byXPath('//*[@class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.51, 0.28 )`,
   `byXPath('/html/body/div[2]/div[3]').xy(0.51, 0.28 )`,
   `byXPath("/html[@class='cdk-global-scrollblock']/body[1]/div[@class='cdk-overlay-container']/div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']").xy(0.51, 0.28 )`,
   `byJQuery('div[class="cdk-overlay-container"] > div[class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.51, 0.28 )`,
   `byJQuery('.cdk-overlay-container > .cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing').xy(0.51, 0.28 )`));
wait(2000);
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
//click(fallback(`div("mt-3 ng-pristine ng-untouched ng-valid").xy(0.86, 0.55 )`,
//   `div("CC Email(s) add  Add email").xy(0.86, 0.55 )`,
//   `byXPath("//div[@id='cdk-step-content-2-1']/app-integrations-emails-section/form/section/div[2]/div/div[2]").xy(0.86, 0.55 )`,
//   `byXPath('//*[@class="mt-3 ng-untouched ng-pristine ng-valid"]').xy(0.86, 0.55 )`,
//   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[2]/div/div[2]').xy(0.86, 0.55 )`,
//   `byXPath("id('cdk-step-content-2-1')/app-integrations-emails-section[@class='ng-star-inserted']/form[@class='mt-2 ng-dirty ng-touched ng-valid']/section[@class='px-1 py-2 pr-3 email_integration-div']/div[@class='row mb-5 ml-2 ng-untouched ng-dirty ng-valid']/div[@class='col-md-12']/div[@class='mt-3 ng-untouched ng-pristine ng-valid']").xy(0.86, 0.55 )`,
//   `div({'formarrayname':'requestCCEmails'}).xy(0.86, 0.55 )`,
//   `byJQuery('form[class="mt-2 ng-dirty ng-touched ng-valid"] > section[class="px-1 py-2 pr-3 email_integration-div"] > div[class="row mb-5 ml-2 ng-untouched ng-dirty ng-valid"] > div[class="col-md-12"] > div[class="mt-3 ng-untouched ng-pristine ng-valid"]').xy(0.86, 0.55 )`,
//   `byJQuery('.mt-2.ng-dirty.ng-touched.ng-valid > .px-1.py-2.pr-3.email_integration-div > .row.mb-5.ml-2.ng-untouched.ng-dirty.ng-valid > .col-md-12 > .mt-3.ng-untouched.ng-pristine.ng-valid').xy(0.86, 0.55 )`));
wait(2000);
click(fallback(`span("Next[1]")`,
   `byXPath("//div[@id='cdk-step-content-2-1']/app-integrations-emails-section/div/button[3]/span[1]/span")`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/div/button[3]/span/span')`,
   `byXPath("id('cdk-step-content-2-1')/app-integrations-emails-section[@class='ng-star-inserted']/div[@class='px-2 vendor-btns integration-actions mt-2']/button[@class='mat-focus-indicator py-1 next ml-sm-2 mat-flat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/span[1]")`));
//click(fallback(`span("Previous[1]")`,
//   `byXPath("//div[@id='cdk-step-content-2-2']/app-review-section/div/button[2]/span[1]/span")`,
//   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[3]/app-review-section/div/button[2]/span/span')`,
//   `byXPath("id('cdk-step-content-2-2')/app-review-section[@class='review-integration ng-star-inserted']/div[@class='px-2 vendor-btns integration-actions mt-2']/button[@class='mat-focus-indicator py-1 previous mat-stroked-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/span[1]")`));
setDescription("Click on empty Space");
//click(fallback(`div("cdk-overlay-backdrop cdk-overlay-backdrop-showing cdk-overlay-transparent-backdrop").xy(0.51, 0.28 )`,
//   `byXPath('//*[@class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.51, 0.28 )`,
//   `byXPath('/html/body/div[2]/div[3]').xy(0.51, 0.28 )`,
//   `byXPath("/html[@class='cdk-global-scrollblock']/body[1]/div[@class='cdk-overlay-container']/div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']").xy(0.51, 0.28 )`,
//   `byJQuery('div[class="cdk-overlay-container"] > div[class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.51, 0.28 )`,
//   `byJQuery('.cdk-overlay-container > .cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing').xy(0.51, 0.28 )`));
wait(3000);
//click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
//   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
setDescription("verify Email exists on review tab");
assertExists(fallback(`paragraph("${TempEmail }")`));
wait(2000);
click(fallback(`byXPath("//span[contains(text(),'Save')]/parent::span")`));
wait(2000);
setDescription("Vendor Maintenance");
NavigateToVendorMaintenancePage();
setDescription("Search with vendor");
setValue(fallback(`byXPath('//*[text() = " Vendor Name "]/following::input[1]')`),VendorName);
wait(2000);
setDescription("Click on vendor name");
click(fallback(`byXPath("//span[text()='${VendorName}']")`,
   `byXPath('//span[text()="${VendorName}"]')`));
wait(2000);
click(fallback(`byXPath('//*[text()="Integrations"]')`,
   `custom("mat-panel-title", "Integrations")`,
   `byXPath("//mat-expansion-panel-header[@id='mat-expansion-panel-header-1']/span/mat-panel-title")`,
   `byXPath('//*[@class="mat-expansion-panel-header-title ng-tns-c282-326"]')`,
   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/mat-expansion-panel-header/span/mat-panel-title')`,
   `byXPath("id('mat-expansion-panel-header-1')/span[@class='mat-content ng-tns-c282-326']/mat-panel-title[@class='mat-expansion-panel-header-title ng-tns-c282-326']")`,
   `byJQuery('mat-accordion[class="mat-accordion vendor-information mat-accordion-multi"] > mat-expansion-panel[class="mat-expansion-panel ng-tns-c280-325 ng-star-inserted"] > mat-expansion-panel-header[class="mat-expansion-panel-header mat-focus-indicator ng-tns-c282-326 ng-tns-c280-325 mat-expansion-toggle-indicator-after ng-star-inserted cdk-focused cdk-mouse-focused"] > span[class="mat-content ng-tns-c282-326"] > mat-panel-title[class="mat-expansion-panel-header-title ng-tns-c282-326"]')`,
   `byJQuery('#mat-expansion-panel-header-1 > .mat-content.ng-tns-c282-326 > .mat-expansion-panel-header-title.ng-tns-c282-326')`,
   `custom("mat-panel-title", "mat-expansion-panel-header-title ng-tns-c282-326")`));
wait(2000);
setDescription("Click on vendor name");
assertExists(fallback(`byXPath("//span[text()='${VendorName}']")`,
   `byXPath('//span[text()="${VendorName}"]')`));
setDescription("Click on vendor name");
assertExists(fallback(`byXPath("//span[text()='${VendorName1}']")`,
   `byXPath("//span[text()='${SecondVendorName}']")`,
   `byXPath("//span[text()='${VendorName}']")`,
   `byXPath('//span[text()="${VendorName}"]')`));
//assertExists(fallback(`span("PDF OUTPUT")`,
//   `byXPath("//div[@id='cdk-accordion-child-1']/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[1]/td[3]/span")`,
//   `byXPath('//*[text()="PDF OUTPUT"]')`,
//   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/div/div/section/div[2]/avantor-table/div[2]/table/tbody/tr/td[3]/span')`,
//   `byXPath("id('cdk-accordion-child-1')/div[@class='mat-expansion-panel-body ng-tns-c280-325']/section[@class='pt-4 ng-tns-c280-325']/div[@class='row']/avantor-table[@class='w-100 ng-tns-c328-327 ng-star-inserted']/div[@class='avantor-table-container ng-tns-c328-327']/table[@class='mat-table cdk-table ng-tns-c328-327 table -table']/tbody[1]/tr[@class='mat-row cdk-row ng-tns-c328-327 striped-rows ng-star-inserted']/td[@class='mat-cell cdk-cell cdk-column-outputType mat-column-outputType ng-tns-c328-327 ng-star-inserted']/span[@class='ng-star-inserted']")`,
//   `byXPath('//tbody//tr[1]//td[3]//span[@class="ng-star-inserted"]')`,
//   `byXPath('//tbody//tr[1]//td[3]//span[text()="PDF OUTPUT"]')`,
//   `byJQuery('tr[class="mat-row cdk-row ng-tns-c328-327 striped-rows ng-star-inserted"] > td[class="mat-cell cdk-cell cdk-column-outputType mat-column-outputType ng-tns-c328-327 ng-star-inserted"] > span[class="ng-star-inserted"]')`,
//   `byJQuery('.mat-row.cdk-row.ng-tns-c328-327.striped-rows.ng-star-inserted > .mat-cell.cdk-cell.cdk-column-outputType.mat-column-outputType.ng-tns-c328-327.ng-star-inserted > .ng-star-inserted')`,
//   `span("ng-star-inserted[2]")`));
//assertExists(fallback(`span("EMAIL XML")`,
//   `byXPath("//div[@id='cdk-accordion-child-1']/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[9]/td[3]/span")`,
//   `byXPath('//*[text()="EMAIL XML"]')`,
//   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/div/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[9]/td[3]/span')`,
//   `byXPath('//tbody//tr[9]//td[3]//span[@class="ng-star-inserted"]')`,
//   `byXPath('//tbody//tr[9]//td[3]//span[text()="EMAIL XML"]')`,
//   `span("ng-star-inserted[6]")`));
//assertExists(fallback(`span("CSV")`,
//   `byXPath("//div[@id='cdk-accordion-child-1']/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[5]/td[3]/span")`,
//   `byXPath('//*[text()="CSV"]')`,
//   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/div/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[5]/td[3]/span')`,
//   `byXPath('//tbody//tr[5]//td[3]//span[@class="ng-star-inserted"]')`,
//   `byXPath('//tbody//tr[5]//td[3]//span[text()="CSV"]')`,
//   `span("ng-star-inserted[4]")`,
//   `span("CSV")`));
//assertExists(fallback(`span("TEXT FILE CONFIGURATOR")`,
//   `byXPath("//div[@id='cdk-accordion-child-1']/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[5]/td[3]/span")`,
//   `byXPath('//*[text()="CSV"]')`,
//   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-vendor-maintenance-layout/div/app-vendor-view/div[3]/div/mat-accordion/mat-expansion-panel[2]/div/div/section/div[2]/avantor-table/div[2]/table/tbody/tr[5]/td[3]/span')`,
//   `byXPath('//tbody//tr[5]//td[3]//span[@class="ng-star-inserted"]')`,
//   `byXPath('//tbody//tr[5]//td[3]//span[text()="CSV"]')`));
//NavigateToIntegrationmaintenance();
//click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[text()=' all ']/parent::mat-option")`,
//   `byXPath("//span[text()=' ALL ']/parent::mat-option")`));
//click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
//wait(2000);
//var strRows2=_eval("ds$('tr.striped-rows').length");
//log(strRows2);
//if (strRows2>0){
   //click(fallback(`byXPath("(//img[contains(@src,'ellipsis-icon.svg')]/ancestor::button)[1]")`));
   //click(fallback(`byXPath("//button[text()=' Delete ']")`));
   //click(fallback(`byXPath("//span[text()=' Yes ']/parent::button")`));
//}
//click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[text()=' 10/1 alternates delete ']/parent::mat-option")`));
//click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
//wait(2000);
//var strRows2=_eval("ds$('tr.striped-rows').length");
//log(strRows2);
//if (strRows2>0){
   //click(fallback(`byXPath("(//img[contains(@src,'ellipsis-icon.svg')]/ancestor::button)[1]")`));
   //click(fallback(`byXPath("//button[text()=' Delete ']")`));
   //click(fallback(`byXPath("//span[text()=' Yes ']/parent::button")`));
//}
//click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
//click(fallback(`byXPath("(//div[contains(text(),'Vendor')]/span/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[contains(text(),'all') and @class='vendor-option']")`,
//   `byXPath("//span[contains(text(),'ALL') and @class='vendor-option']")`));
//wait(2000);
//setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
//wait(2000);
//click(fallback(`byXPath("//span[contains(text(),'Exclude Non VWR Vendor Integrations')]")`));
//click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
//wait(2000);
//setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
//wait(2000);
//click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[contains(text(),'PDF OUTPUT')]/parent::span")`));
//click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
//   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
//wait(2000);
//click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
//wait(2000);
//click(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::div[contains(text(),'Add email')])[1]")`));
//wait(2000);
//var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
//log(TempEmail);
//setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
//click(fallback(`byXPath("//mat-icon[text()='save']")`));
//click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
//   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
//click(fallback(`byXPath("//span[contains(text(),'Save')]/parent::span")`));
//wait(2000);
//click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[text()=' 10/1 alternates delete ']/parent::mat-option")`));
//click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
//wait(2000);
//var strRows2=_eval("ds$('tr.striped-rows').length");
//log(strRows2);
//assertEqual(fallback(`strRows2`),1);
//var strData=getText(byXPath("//td[contains(@class,'mat-column-vendorData')]//span"));
//log(strData);
//assertEqual(fallback(`strData`),"all");
//click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
//click(fallback(`byXPath("(//div[contains(text(),'Vendor')]/span/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[contains(text(),'10/1 alternates delete')]")`));
//wait(2000);
//setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
//wait(2000);
//click(fallback(`byXPath("(//div[contains(text(),'Stockroom')]/span/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[contains(text(),'All Stockrooms')]/parent::span/preceding-sibling::mat-pseudo-checkbox")`));
//wait(2000);
//setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
//wait(2000);
//click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[contains(text(),'PDF OUTPUT')]/parent::span")`));
//click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
//   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
//wait(2000);
//click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
//wait(2000);
//click(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::div[contains(text(),'Add email')])[1]")`));
//wait(2000);
//var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
//log(TempEmail);
//setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
//click(fallback(`byXPath("//mat-icon[text()='save']")`));
//click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
//   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
//click(fallback(`byXPath("//span[contains(text(),'Save')]/parent::span")`));
//wait(2000);
//click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[text()=' 10/1 alternates delete ']/parent::mat-option")`));
//click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
//wait(2000);
//var strRows2=_eval("ds$('tr.striped-rows').length");
//log(strRows2);
//assertEqual(fallback(`strRows2`),1);
//var strData=getText(byXPath("//td[contains(@class,'mat-column-vendorData')]//span"));
//log(strData);
//assertEqual(fallback(`strData`),"10/1 alternates delete");
