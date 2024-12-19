/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../../Test Data/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
setShadowDOM(true);
include("{ds}/../../ReUsable Functions/IMCM Function Library.js");
Login($URL,$NormalUser,$Password,$ConsumptionOrg,$ConsumptionStockroom);
wait(2000);
NavigateToIntegrationmaintenance();
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
var TempEmail=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail);
var TempEmail1=eval("'Automation'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail1);
var TempEmail2=eval("'Autotech'+ Math.floor(Math.random()*10000) + '@gmail.com'");
log(TempEmail2);
AddIntegrationWithVendorAndOutPutTypeAndCCEmail("auto1215","Ev_Automation_Regular_Stockroom","TEXT FILE CONFIGURATOR");
selectWindow("Avantor Inventory Manager");
wait(3000);
setDescription("click on ecilips menu");
//click(fallback(`byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-layout/div/app-list/div[4]/div/avantor-table/div[2]/table/tbody/tr/td[15]/button/span/img').xy(0.56, 0.57 )`,
//   `image("..").xy(0.56, 0.57 )`,
//   `image("https://im-stage3.avantorsciences.com/assets/icons/ellipsis-icon.svg").xy(0.56, 0.57 )`,
//   `byXPath('//app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-layout/div/app-list/div[4]/div/avantor-table/div[2]/table/tbody/tr[1]/td[15]/button/span[1]/img').xy(0.56, 0.57 )`,
//   `byXPath("/html[1]/body[1]/app-root[1]/app-avantor-layout[@class='ng-star-inserted']/mat-drawer-container[@class='mat-drawer-container example-container']/mat-drawer-content[@class='mat-drawer-content ng-star-inserted']/div[@class='example-sidenav-content']/div[@class='fixed-header min-vh-100']/app-layout[@class='ng-star-inserted']/div[@class='px-4']/app-list[@class='ng-star-inserted']/div[@class='row']/div[@class='col customTable']/avantor-table[@class='table-container fullWidth ng-tns-c330-171 ng-star-inserted']/div[@class='avantor-table-container ng-tns-c330-171']/table[@class='mat-table cdk-table ng-tns-c330-171 table -table']/tbody[1]/tr[@class='mat-row cdk-row ng-tns-c330-171 striped-rows ng-star-inserted']/td[@class='mat-cell cdk-cell cdk-column-Widget mat-column-Widget ng-tns-c330-171 ng-star-inserted mat-table-sticky mat-table-sticky-border-elem-right']/button[@class='mat-focus-indicator mat-menu-trigger mat-icon-button mat-button-base ng-star-inserted cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/img[1]").xy(0.56, 0.57 )`,
//   `image({'src':'/assets/icons/ellipsis-icon.svg'}).xy(0.56, 0.57 )`,
//   `byJQuery('img[alt=".."]').xy(0.56, 0.57 )`));
//selectWindow("Avantor Inventory Manager");
//wait(3000);
click(fallback(`byXPath("//div[@formarrayname='requestCCEmails']//span[text()='add']")`));
//click(fallback(`submit("Edit")`,
//   `submit(0, _in(div("mat-menu-panel-60")))`,
//   `submit(0, _in(div({'id':'mat-menu-panel-60'})))`,
//   `submit("cdk-focused cdk-mouse-focused mat-focus-indicator mat-menu-item ng-tns-c220-210")`,
//   `byXPath("//div[@id='mat-menu-panel-60']/div/button[1]")`,
//   `byXPath('//*[@class="mat-focus-indicator mat-menu-item ng-tns-c220-210 cdk-focused cdk-mouse-focused"]')`,
//   `byXPath('//*[text()=" Edit "]')`,
//   `byXPath('/html/body/div[2]/div[2]/div/div/div/button')`,
//   `byXPath("id('mat-menu-panel-60')/div[@class='mat-menu-content ng-tns-c220-210']/button[@class='mat-focus-indicator mat-menu-item ng-tns-c220-210 cdk-focused cdk-mouse-focused']")`,
//   `submit({'role':'menuitem'})`,
//   `byJQuery('div[class="cdk-overlay-connected-position-bounding-box"] > div[class="cdk-overlay-pane"] > div[class="mat-menu-panel ng-trigger ng-trigger-transformMenu ng-tns-c220-210 mat-menu-before mat-menu-below mat-shadow vendor-maintenance ng-star-inserted mat-elevation-z4"] > div[class="mat-menu-content ng-tns-c220-210"] > button[class="mat-focus-indicator mat-menu-item ng-tns-c220-210 cdk-focused cdk-mouse-focused"]')`,
//   `byJQuery('#mat-menu-panel-60 > .mat-menu-content.ng-tns-c220-210 > .mat-focus-indicator.mat-menu-item.ng-tns-c220-210.cdk-focused.cdk-mouse-focused')`));
//wait(2000);
//click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
//click(fallback(`byXPath("//span[contains(text(),'CSV')]/parent::span")`,
//   `byXPath("//span[contains(text(),'SAP XML REQUISITION')]/parent::span")`,
//   `byXPath("//span[contains(text(),'PDF OUTPUT')]/parent::span")`));
setDescription("Click on empty Space");
//click(fallback(`div("cdk-overlay-backdrop cdk-overlay-backdrop-showing cdk-overlay-transparent-backdrop").xy(0.51, 0.28 )`,
//   `byXPath('//*[@class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.51, 0.28 )`,
//   `byXPath('/html/body/div[2]/div[3]').xy(0.51, 0.28 )`,
//   `byXPath("/html[@class='cdk-global-scrollblock']/body[1]/div[@class='cdk-overlay-container']/div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']").xy(0.51, 0.28 )`,
//   `byJQuery('div[class="cdk-overlay-container"] > div[class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.51, 0.28 )`,
//   `byJQuery('.cdk-overlay-container > .cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing').xy(0.51, 0.28 )`));
//wait(2000);
//click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`));
//EMailValidationINIntegrationAndEmails();
setDescription("Verify Email value is not pre populated");
//assertNotExists(fallback(`byXPath("//mat-icon[@color='remove-email']")`));
setDescription("verify Order Integration auto checked and disabled");
//assertExists(fallback(`byJQuery('mat-checkbox[class="mat-checkbox large mat-accent mat-checkbox-checked mat-checkbox-disabled ng-untouched ng-pristine ng-valid"] > label[class="mat-checkbox-layout"] > span[class="mat-checkbox-inner-container"]')`,
//   `span(0, _in(custom("mat-checkbox", "mat-checkbox-109")))`,
//   `span(0, _in(custom("mat-checkbox", {'id':'mat-checkbox-109'})))`,
//   `span("mat-checkbox-inner-container[3]")`,
//   `byXPath("//mat-checkbox[@id='mat-checkbox-109']/label/span[1]")`,
//   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[3]/mat-checkbox/label/span')`,
//   `byXPath("id('mat-checkbox-109')/label[@class='mat-checkbox-layout']/span[@class='mat-checkbox-inner-container']")`,
//   `byJQuery('#mat-checkbox-109 > .mat-checkbox-layout > .mat-checkbox-inner-container')`));
//wait(2000);
//click(fallback(`byXPath("//span[contains(text(),'Request Integration')]/ancestor::label")`));
//wait(2000);
//click(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::div[contains(text(),'Add email')])[1]")`));
//wait(2000);
//var TempEmail4=eval("'Auto'+ Math.floor(Math.random()*10000) + '@gmail.com'");
//log(TempEmail4);
//setValue(fallback(`byXPath("(//label[contains(text(),'Primary Email')]/following::input)[1]")`),TempEmail);
//click(fallback(`byXPath("//mat-icon[text()='save']")`));
//click(fallback(`span("Next[1]")`,
//   `byXPath("//div[@id='cdk-step-content-1-1']/app-integrations-emails-section/div/button[3]/span[1]/span")`,
//   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/div/button[3]/span/span')`,
//   `byXPath("id('cdk-step-content-1-1')/app-integrations-emails-section[@class='ng-star-inserted']/div[@class='px-2 vendor-btns integration-actions mt-2']/button[@class='mat-focus-indicator py-1 next ml-sm-2 mat-flat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/span[1]")`));
//wait(2000);
setDescription("verify no email showing");
//click(fallback(`paragraph("-")`,
//   `byXPath("//div[@id='cdk-step-content-1-2']/app-review-section/section/section/div[2]/div/div[3]/div/p")`,
//   `byXPath('//*[text()="-"]')`,
//   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[3]/app-review-section/section/section/div[2]/div/div[3]/div/p')`,
//   `byXPath("id('cdk-step-content-1-2')/app-review-section[@class='review-integration ng-star-inserted']/section[@class='px-1 py-2 pr-3 email_integration-div']/section[1]/div[@class='row my-2 ml-2']/div[@class='col-md']/div[@class='ng-star-inserted']/div[@class='ml-1']/p[1]")`));
//wait(2000);
//click(fallback(`byXPath("//span[contains(text(),'Save')]/parent::span")`));
//wait(2000);
click(fallback(`div(1, _in(custom("mat-select", {'id':'mat-select-20'}))).xy(0.54, 0.97 )`,
   `div("All Emails[4]").xy(0.54, 0.97 )`,
   `div(1, _in(custom("mat-select", "mat-select-20"))).xy(0.54, 0.97 )`,
   `byXPath('//*[@id="mat-select-value-21"]').xy(0.54, 0.97 )`,
   `div("mat-select-value ng-tns-c89-91").xy(0.54, 0.97 )`,
   `div("mat-select-value-21").xy(0.54, 0.97 )`,
   `byXPath("//div[@id='mat-select-value-21']").xy(0.54, 0.97 )`,
   `byXPath('//*[@class="mat-select-value ng-tns-c89-91"]').xy(0.54, 0.97 )`,
   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-layout/div/app-list/div[3]/div/div/div[3]/mat-form-field/div/div/div[4]/mat-select/div/div').xy(0.54, 0.97 )`,
   `byXPath("id('mat-select-value-21')").xy(0.54, 0.97 )`,
   `byJQuery('div[class="mat-form-field-flex ng-tns-c49-90"] > div[class="mat-form-field-infix ng-tns-c49-90"] > mat-select[class="mat-select ng-tns-c89-91 ng-tns-c49-90 ng-untouched ng-pristine ng-valid ng-star-inserted"] > div[class="mat-select-trigger ng-tns-c89-91"] > div[class="mat-select-value ng-tns-c89-91"]').xy(0.54, 0.97 )`,
   `byJQuery('#mat-select-value-21').xy(0.54, 0.97 )`));
setDescription("verify existing email not exist in dropdown filter for SAP output type");
assertExists(fallback(`span(${TempEmail})`,
   `span(TempEmail)`));
setDescription("Verify updated email exist in email dropdown");
//SelectVendorStockroomAndEmailInInterations('ALL','All Stockrooms',TempEmail4);
setDescription("click on update results");
//click(fallback(`byXPath("//span[contains(text(),'Update Results')]")`));
//wait(5000);
//var strRows2=_eval("ds$('tr.striped-rows').length");
//log(strRows2);
setDescription("verify no records found for email");
//assertEqual(fallback(`strRows2`),1);
