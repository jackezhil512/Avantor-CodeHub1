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
click(fallback(`span("px-1")`,
   `span("ADD NEW INTEGRATION")`,
   `byXPath('//app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-layout/div/app-list/div[2]/div/div/button/span[1]/span')`,
   `byXPath('//*[@class="px-1"]')`,
   `byXPath('//*[text()=" ADD NEW INTEGRATION "]')`,
   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-layout/div/app-list/div[2]/div/div/button/span/span')`,
   `byXPath("/html[1]/body[1]/app-root[1]/app-avantor-layout[@class='ng-star-inserted']/mat-drawer-container[@class='mat-drawer-container example-container']/mat-drawer-content[@class='mat-drawer-content ng-star-inserted']/div[@class='example-sidenav-content']/div[@class='fixed-header min-vh-100']/app-layout[@class='ng-star-inserted']/div[@class='px-4']/app-list[@class='ng-star-inserted']/div[@class='row']/div[@class='col']/div[@class='d-flex justify-content-end w-100']/button[@class='mat-focus-indicator px-3 py-2 mat-flat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/span[@class='px-1']")`,
   `byJQuery('div[class="col"] > div[class="d-flex justify-content-end w-100"] > button[class="mat-focus-indicator px-3 py-2 mat-flat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused"] > span[class="mat-button-wrapper"] > span[class="px-1"]')`,
   `byJQuery('.col > .d-flex.justify-content-end.w-100 > .mat-focus-indicator.px-3.py-2.mat-flat-button.mat-button-base.mat-primary.cdk-focused.cdk-mouse-focused > .mat-button-wrapper > .px-1')`));
click(fallback(`div(1, _in(custom("mat-select", "mat-select-28"))).xy(0.57, 0.46 )`,
   `div(1, _in(custom("mat-select", {'id':'mat-select-28'}))).xy(0.57, 0.46 )`,
   `byXPath('//*[@id="mat-select-value-29"]').xy(0.57, 0.46 )`,
   `div("mat-select-value ng-tns-c89-116").xy(0.57, 0.46 )`,
   `div("mat-select-value-29").xy(0.57, 0.46 )`,
   `div("Select Vendor[4]").xy(0.57, 0.46 )`,
   `byXPath("//div[@id='mat-select-value-29']").xy(0.57, 0.46 )`,
   `byXPath('//*[@class="mat-select-value ng-tns-c89-116"]').xy(0.57, 0.46 )`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div/app-vendor-stockroom-outputtype-section/form/section/div/div/mat-form-field/div/div/div[4]/mat-select/div/div').xy(0.57, 0.46 )`,
   `byXPath("id('mat-select-value-29')").xy(0.57, 0.46 )`,
   `byJQuery('div[class="mat-form-field-flex ng-tns-c49-115"] > div[class="mat-form-field-infix ng-tns-c49-115"] > mat-select[class="mat-select ng-tns-c89-116 ng-tns-c49-115 mat-select-required mat-select-empty mat-select-multiple ng-untouched ng-pristine ng-invalid ng-star-inserted"] > div[class="mat-select-trigger ng-tns-c89-116"] > div[class="mat-select-value ng-tns-c89-116"]').xy(0.57, 0.46 )`,
   `byJQuery('#mat-select-value-29').xy(0.57, 0.46 )`));
click(fallback(`div("cdk-overlay-backdrop cdk-overlay-backdrop-showing cdk-overlay-transparent-backdrop").xy(0.55, 0.43 )`,
   `byXPath('//*[@class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.55, 0.43 )`,
   `byXPath('/html/body/div[2]/div[3]').xy(0.55, 0.43 )`,
   `byXPath("/html[@class='cdk-global-scrollblock']/body[1]/div[@class='cdk-overlay-container']/div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']").xy(0.55, 0.43 )`,
   `byJQuery('div[class="cdk-overlay-container"] > div[class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.55, 0.43 )`,
   `byJQuery('.cdk-overlay-container > .cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing').xy(0.55, 0.43 )`));
click(fallback(`span(1, _in(custom("mat-option", "mat-option-328")))`,
   `span(1, _in(custom("mat-option", {'id':'mat-option-328'})))`,
   `span("vendor-option")`,
   `span("All Stockrooms[3]")`,
   `byXPath("//mat-option[@id='mat-option-328']/span/span")`,
   `byXPath('//*[@class="vendor-option"]')`,
   `byXPath('/html/body/div[2]/div[4]/div/div/div/div[2]/mat-option/span/span')`,
   `byXPath("id('mat-option-328')/span[@class='mat-option-text']/span[@class='vendor-option']")`,
   `byJQuery('div[class="ng-tns-c89-119 ng-trigger ng-trigger-transformPanel mat-select-panel mat-primary"] > div[class="ng-tns-c89-119"] > mat-option[class="mat-option mat-focus-indicator mat-option-multiple ng-star-inserted mat-active"] > span[class="mat-option-text"] > span[class="vendor-option"]')`,
   `byJQuery('#mat-option-328 > .mat-option-text > .vendor-option')`));
click(fallback(`span(0, _in(div("mat-select-value-33")))`,
   `span(0, _in(div({'id':'mat-select-value-33'})))`,
   `span("mat-select-min-line mat-select-placeholder ng-star-inserted ng-tns-c89-122")`,
   `span("Select Output Type")`,
   `byXPath("//div[@id='mat-select-value-33']/span")`,
   `byXPath('//*[@class="mat-select-placeholder mat-select-min-line ng-tns-c89-122 ng-star-inserted"]')`,
   `byXPath('//*[text()="Select Output Type "]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div/app-vendor-stockroom-outputtype-section/form/section/div/div/mat-form-field[3]/div/div/div[4]/mat-select/div/div/span')`,
   `byXPath("id('mat-select-value-33')/span[@class='mat-select-placeholder mat-select-min-line ng-tns-c89-122 ng-star-inserted']")`,
   `byJQuery('div[class="mat-form-field-infix ng-tns-c49-121"] > mat-select[class="mat-select ng-tns-c89-122 ng-tns-c49-121 mat-select-required mat-select-empty ng-untouched ng-pristine ng-invalid ng-star-inserted"] > div[class="mat-select-trigger ng-tns-c89-122"] > div[class="mat-select-value ng-tns-c89-122"] > span[class="mat-select-placeholder mat-select-min-line ng-tns-c89-122 ng-star-inserted"]')`,
   `byJQuery('#mat-select-value-33 > .mat-select-placeholder.mat-select-min-line.ng-tns-c89-122.ng-star-inserted')`));
click(fallback(`span("Next")`,
   `byXPath("//div[@id='cdk-step-content-0-0']/app-vendor-stockroom-outputtype-section/div/button[2]/span[1]/span")`,
   `byXPath('//*[text()=" Next"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div/app-vendor-stockroom-outputtype-section/div/button[2]/span/span')`,
   `byXPath("id('cdk-step-content-0-0')/app-vendor-stockroom-outputtype-section[@class='vendor-integration ng-star-inserted']/div[@class='integration-actions mt-2']/button[@class='mat-focus-indicator py-1 next mat-flat-button mat-raised-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/span[1]")`));
click(fallback(`span(0, _in(custom("mat-checkbox", "mat-checkbox-67")))`,
   `span(0, _in(custom("mat-checkbox", {'id':'mat-checkbox-67'})))`,
   `span("mat-checkbox-inner-container[2]")`,
   `byXPath("//mat-checkbox[@id='mat-checkbox-67']/label/span[1]")`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div/mat-checkbox/label/span')`,
   `byXPath("id('mat-checkbox-67')/label[@class='mat-checkbox-layout']/span[@class='mat-checkbox-inner-container']")`,
   `byJQuery('mat-checkbox[class="mat-checkbox large mat-accent ng-untouched ng-pristine ng-valid"] > label[class="mat-checkbox-layout"] > span[class="mat-checkbox-inner-container"]')`,
   `byJQuery('#mat-checkbox-67 > .mat-checkbox-layout > .mat-checkbox-inner-container')`));
click(fallback(`div("align-items-center d-flex model-add-email[1]").xy(0.40, 0.56 )`,
   `div("add  Add email[1]").xy(0.40, 0.56 )`,
   `byXPath("//div[@id='cdk-step-content-0-1']/app-integrations-emails-section/form/section/div[2]/div/div[2]/button/span[1]/div").xy(0.40, 0.56 )`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[2]/div/div[2]/button/span/div').xy(0.40, 0.56 )`,
   `byXPath("id('cdk-step-content-0-1')/app-integrations-emails-section[@class='ng-star-inserted']/form[@class='mt-2 ng-invalid ng-dirty ng-touched']/section[@class='px-1 py-2 pr-3 email_integration-div']/div[@class='row mb-5 ml-2 ng-untouched ng-pristine ng-invalid']/div[@class='col-md-12']/div[@class='mt-3 ng-untouched ng-pristine ng-valid']/button[@class='mat-focus-indicator p-0 d-flex align-items-center mat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/div[@class='d-flex align-items-center model-add-email']").xy(0.40, 0.56 )`,
   `byJQuery('div[class="col-md-12"] > div[class="mt-3 ng-untouched ng-pristine ng-valid"] > button[class="mat-focus-indicator p-0 d-flex align-items-center mat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused"] > span[class="mat-button-wrapper"] > div[class="d-flex align-items-center model-add-email"]').xy(0.40, 0.56 )`,
   `byJQuery('.col-md-12 > .mt-3.ng-untouched.ng-pristine.ng-valid > .mat-focus-indicator.p-0.d-flex.align-items-center.mat-button.mat-button-base.mat-primary.cdk-focused.cdk-mouse-focused > .mat-button-wrapper > .d-flex.align-items-center.model-add-email').xy(0.40, 0.56 )`));
click(fallback(`div("mat-form-field-infix ng-tns-c49-134").xy(0.43, 0.39 )`,
   `byXPath("//div[@id='cdk-step-content-0-1']/app-integrations-emails-section/form/section/div[2]/div/div[2]/div[2]/div/mat-form-field/div/div[1]/div[3]").xy(0.43, 0.39 )`,
   `byXPath('//*[@class="mat-form-field-infix ng-tns-c49-134"]').xy(0.43, 0.39 )`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[2]/div/div[2]/div[2]/div/mat-form-field/div/div/div[3]').xy(0.43, 0.39 )`,
   `byXPath("id('cdk-step-content-0-1')/app-integrations-emails-section[@class='ng-star-inserted']/form[@class='mt-2 ng-invalid ng-dirty ng-touched']/section[@class='px-1 py-2 pr-3 email_integration-div']/div[@class='row mb-5 ml-2 ng-untouched ng-pristine ng-invalid']/div[@class='col-md-12']/div[@class='mt-3 ng-untouched ng-pristine ng-valid']/div[@class='ng-star-inserted']/div[@class='d-flex ng-star-inserted']/mat-form-field[@class='mat-form-field w-50 ng-tns-c49-134 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-pristine ng-valid ng-star-inserted mat-focused']/div[@class='mat-form-field-wrapper ng-tns-c49-134']/div[@class='mat-form-field-flex ng-tns-c49-134']/div[@class='mat-form-field-infix ng-tns-c49-134']").xy(0.43, 0.39 )`,
   `byJQuery('div[class="d-flex ng-star-inserted"] > mat-form-field[class="mat-form-field w-50 ng-tns-c49-134 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-pristine ng-valid ng-star-inserted mat-focused"] > div[class="mat-form-field-wrapper ng-tns-c49-134"] > div[class="mat-form-field-flex ng-tns-c49-134"] > div[class="mat-form-field-infix ng-tns-c49-134"]').xy(0.43, 0.39 )`,
   `byJQuery('.d-flex.ng-star-inserted > .mat-form-field.w-50.ng-tns-c49-134.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float.ng-untouched.ng-pristine.ng-valid.ng-star-inserted.mat-focused > .mat-form-field-wrapper.ng-tns-c49-134 > .mat-form-field-flex.ng-tns-c49-134 > .mat-form-field-infix.ng-tns-c49-134').xy(0.43, 0.39 )`));
setValue(fallback(`byXPath('//*[@id="mat-input-38"]')`,
   `textbox("cdk-text-field-autofill-monitored mat-form-field-autofill-control mat-input-element ng-dirty ng-invalid ng-tns-c49-134 ng-untouched")`,
   `textbox("mat-input-38")`,
   `byXPath("//input[@id='mat-input-38']")`,
   `byXPath('//*[@class="mat-input-element mat-form-field-autofill-control ng-tns-c49-134 ng-untouched cdk-text-field-autofill-monitored ng-dirty ng-invalid"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[2]/div/div[2]/div[2]/div/mat-form-field/div/div/div[3]/input')`,
   `byXPath("id('mat-input-38')")`,
   `textbox({'type':'text'})`,
   `byJQuery('mat-form-field[class="mat-form-field w-50 ng-tns-c49-134 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-star-inserted mat-focused ng-dirty ng-invalid"] > div[class="mat-form-field-wrapper ng-tns-c49-134"] > div[class="mat-form-field-flex ng-tns-c49-134"] > div[class="mat-form-field-infix ng-tns-c49-134"] > input[class="mat-input-element mat-form-field-autofill-control ng-tns-c49-134 ng-untouched cdk-text-field-autofill-monitored ng-dirty ng-invalid"]')`,
   `byJQuery('#mat-input-38')`),"test1@gmail.com");
setValue(fallback(`byXPath('//*[@id="mat-input-40"]')`,
   `textbox("cdk-text-field-autofill-monitored mat-form-field-autofill-control mat-input-element ng-dirty ng-invalid ng-tns-c49-136 ng-untouched")`,
   `textbox("mat-input-40")`,
   `byXPath("//input[@id='mat-input-40']")`,
   `byXPath('//*[@class="mat-input-element mat-form-field-autofill-control ng-tns-c49-136 ng-untouched cdk-text-field-autofill-monitored ng-dirty ng-invalid"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[6]/div/div[2]/div[2]/div/mat-form-field/div/div/div[3]/input')`,
   `byXPath("id('mat-input-40')")`,
   `textbox({'type':'text'})`,
   `byJQuery('mat-form-field[class="mat-form-field w-50 ng-tns-c49-136 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-star-inserted mat-focused ng-dirty ng-invalid"] > div[class="mat-form-field-wrapper ng-tns-c49-136"] > div[class="mat-form-field-flex ng-tns-c49-136"] > div[class="mat-form-field-infix ng-tns-c49-136"] > input[class="mat-input-element mat-form-field-autofill-control ng-tns-c49-136 ng-untouched cdk-text-field-autofill-monitored ng-dirty ng-invalid"]')`,
   `byJQuery('#mat-input-40')`),"test3@gmail.com");
click(fallback(`custom("mat-icon", "mat-icon mat-icon-no-color mat-remove-email material-icons notranslate")`,
   `custom("mat-icon", "cancel")`,
   `byXPath("//div[@id='cdk-step-content-0-1']/app-integrations-emails-section/form/section/div[2]/div/div[2]/div[2]/div/span/span/mat-icon")`,
   `byXPath('//*[@class="mat-icon notranslate mat-remove-email material-icons mat-icon-no-color"]')`,
   `byXPath('//*[text()="cancel"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[2]/div/div[2]/div[2]/div/span/span/mat-icon')`,
   `byXPath("id('cdk-step-content-0-1')/app-integrations-emails-section[@class='ng-star-inserted']/form[@class='mt-2 ng-invalid ng-dirty ng-touched']/section[@class='px-1 py-2 pr-3 email_integration-div']/div[@class='row mb-5 ml-2 ng-invalid ng-dirty ng-touched']/div[@class='col-md-12']/div[@class='mt-3 ng-dirty ng-valid ng-touched']/div[@class='ng-star-inserted']/div[@class='d-flex ng-star-inserted']/span[@class='mx-3 mt-1 d-flex align-items-center']/span[1]/mat-icon[@class='mat-icon notranslate mat-remove-email material-icons mat-icon-no-color']")`,
   `custom("mat-icon", {'color':'remove-email'})`,
   `byJQuery('mat-icon[class="mat-icon notranslate mat-remove-email material-icons mat-icon-no-color"]')`,
   `byJQuery('.mat-icon.notranslate.mat-remove-email.material-icons.mat-icon-no-color')`));
click(fallback(`custom("mat-icon", "mat-icon mat-icon-no-color mat-remove-email material-icons notranslate")`,
   `custom("mat-icon", "cancel")`,
   `byXPath("//div[@id='cdk-step-content-0-1']/app-integrations-emails-section/form/section/div[4]/div/div[2]/div[2]/div/span/span/mat-icon")`,
   `byXPath('//*[@class="mat-icon notranslate mat-remove-email material-icons mat-icon-no-color"]')`,
   `byXPath('//*[text()="cancel"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[4]/div/div[2]/div[2]/div/span/span/mat-icon')`,
   `byXPath("id('cdk-step-content-0-1')/app-integrations-emails-section[@class='ng-star-inserted']/form[@class='mt-2 ng-invalid ng-dirty ng-touched']/section[@class='px-1 py-2 pr-3 email_integration-div']/div[@class='row mb-5 ml-2 ng-invalid ng-dirty ng-touched']/div[@class='col-md-12']/div[@class='mt-3 ng-dirty ng-valid ng-touched']/div[@class='ng-star-inserted']/div[@class='d-flex ng-star-inserted']/span[@class='mx-3 mt-1 d-flex align-items-center']/span[1]/mat-icon[@class='mat-icon notranslate mat-remove-email material-icons mat-icon-no-color']")`,
   `custom("mat-icon", {'color':'remove-email'})`,
   `byJQuery('mat-icon[class="mat-icon notranslate mat-remove-email material-icons mat-icon-no-color"]')`,
   `byJQuery('.mat-icon.notranslate.mat-remove-email.material-icons.mat-icon-no-color')`));
click(fallback(`div("align-items-center d-flex model-add-email[5]").xy(0.49, 0.65 )`,
   `div("add  Add email[5]").xy(0.49, 0.65 )`,
   `byXPath("//div[@id='cdk-step-content-0-1']/app-integrations-emails-section/form/section/div[6]/div/div[2]/button/span[1]/div").xy(0.49, 0.65 )`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[6]/div/div[2]/button/span/div').xy(0.49, 0.65 )`,
   `byXPath("id('cdk-step-content-0-1')/app-integrations-emails-section[@class='ng-star-inserted']/form[@class='mt-2 ng-invalid ng-dirty ng-touched']/section[@class='px-1 py-2 pr-3 email_integration-div']/div[@class='row mb-5 ml-2 ng-invalid ng-dirty ng-touched']/div[@class='col-md-12']/div[@class='mt-3 ng-untouched ng-pristine ng-valid']/button[@class='mat-focus-indicator p-0 d-flex align-items-center mat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']/div[@class='d-flex align-items-center model-add-email']").xy(0.49, 0.65 )`,
   `byJQuery('div[class="col-md-12"] > div[class="mt-3 ng-untouched ng-pristine ng-valid"] > button[class="mat-focus-indicator p-0 d-flex align-items-center mat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused"] > span[class="mat-button-wrapper"] > div[class="d-flex align-items-center model-add-email"]').xy(0.49, 0.65 )`,
   `byJQuery('.col-md-12 > .mt-3.ng-untouched.ng-pristine.ng-valid > .mat-focus-indicator.p-0.d-flex.align-items-center.mat-button.mat-button-base.mat-primary.cdk-focused.cdk-mouse-focused > .mat-button-wrapper > .d-flex.align-items-center.model-add-email').xy(0.49, 0.65 )`));
setValue(fallback(`byXPath('//*[@id="mat-input-40"]')`,
   `textbox("cdk-text-field-autofill-monitored mat-form-field-autofill-control mat-input-element ng-dirty ng-invalid ng-tns-c49-136 ng-untouched")`,
   `textbox("mat-input-40")`,
   `byXPath("//input[@id='mat-input-40']")`,
   `byXPath('//*[@class="mat-input-element mat-form-field-autofill-control ng-tns-c49-136 ng-untouched cdk-text-field-autofill-monitored ng-dirty ng-invalid"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[6]/div/div[2]/div[2]/div/mat-form-field/div/div/div[3]/input')`,
   `byXPath("id('mat-input-40')")`,
   `textbox({'type':'text'})`,
   `byJQuery('mat-form-field[class="mat-form-field w-50 ng-tns-c49-136 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-star-inserted mat-focused ng-dirty ng-invalid"] > div[class="mat-form-field-wrapper ng-tns-c49-136"] > div[class="mat-form-field-flex ng-tns-c49-136"] > div[class="mat-form-field-infix ng-tns-c49-136"] > input[class="mat-input-element mat-form-field-autofill-control ng-tns-c49-136 ng-untouched cdk-text-field-autofill-monitored ng-dirty ng-invalid"]')`,
   `byJQuery('#mat-input-40')`),"test3@gmai");
click(fallback(`span(0, _in(custom("mat-checkbox", "mat-checkbox-68")))`,
   `span(0, _in(custom("mat-checkbox", {'id':'mat-checkbox-68'})))`,
   `span("mat-checkbox-inner-container[3]")`,
   `byXPath("//mat-checkbox[@id='mat-checkbox-68']/label/span[1]")`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[3]/mat-checkbox/label/span')`,
   `byXPath("id('mat-checkbox-68')/label[@class='mat-checkbox-layout']/span[@class='mat-checkbox-inner-container']")`,
   `byJQuery('mat-checkbox[class="mat-checkbox large mat-accent ng-untouched ng-pristine ng-valid"] > label[class="mat-checkbox-layout"] > span[class="mat-checkbox-inner-container"]')`,
   `byJQuery('#mat-checkbox-68 > .mat-checkbox-layout > .mat-checkbox-inner-container')`));
click(fallback(`div("mat-form-field-infix ng-tns-c49-135").xy(0.17, 0.79 )`,
   `byXPath("//div[@id='cdk-step-content-0-1']/app-integrations-emails-section/form/section/div[4]/div/div[2]/div[2]/div/mat-form-field/div/div[1]/div[3]").xy(0.17, 0.79 )`,
   `byXPath('//*[@class="mat-form-field-infix ng-tns-c49-135"]').xy(0.17, 0.79 )`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[4]/div/div[2]/div[2]/div/mat-form-field/div/div/div[3]').xy(0.17, 0.79 )`,
   `byXPath("id('cdk-step-content-0-1')/app-integrations-emails-section[@class='ng-star-inserted']/form[@class='mt-2 ng-invalid ng-dirty ng-touched']/section[@class='px-1 py-2 pr-3 email_integration-div']/div[@class='row mb-5 ml-2 ng-invalid ng-dirty ng-touched']/div[@class='col-md-12']/div[@class='mt-3 ng-untouched ng-pristine ng-valid']/div[@class='ng-star-inserted']/div[@class='d-flex ng-star-inserted']/mat-form-field[@class='mat-form-field w-50 ng-tns-c49-135 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-pristine ng-valid ng-star-inserted']/div[@class='mat-form-field-wrapper ng-tns-c49-135']/div[@class='mat-form-field-flex ng-tns-c49-135']/div[@class='mat-form-field-infix ng-tns-c49-135']").xy(0.17, 0.79 )`,
   `byJQuery('div[class="d-flex ng-star-inserted"] > mat-form-field[class="mat-form-field w-50 ng-tns-c49-135 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-pristine ng-valid ng-star-inserted"] > div[class="mat-form-field-wrapper ng-tns-c49-135"] > div[class="mat-form-field-flex ng-tns-c49-135"] > div[class="mat-form-field-infix ng-tns-c49-135"]').xy(0.17, 0.79 )`,
   `byJQuery('.d-flex.ng-star-inserted > .mat-form-field.w-50.ng-tns-c49-135.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float.ng-untouched.ng-pristine.ng-valid.ng-star-inserted > .mat-form-field-wrapper.ng-tns-c49-135 > .mat-form-field-flex.ng-tns-c49-135 > .mat-form-field-infix.ng-tns-c49-135').xy(0.17, 0.79 )`));
setValue(fallback(`byXPath('//*[@id="mat-input-39"]')`,
   `textbox("cdk-text-field-autofill-monitored mat-form-field-autofill-control mat-input-element ng-dirty ng-invalid ng-tns-c49-135 ng-untouched")`,
   `textbox("mat-input-39")`,
   `byXPath("//input[@id='mat-input-39']")`,
   `byXPath('//*[@class="mat-input-element mat-form-field-autofill-control ng-tns-c49-135 ng-untouched cdk-text-field-autofill-monitored ng-dirty ng-invalid"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-create-update-wizard/mat-dialog-content/div/mat-stepper/div[2]/div[2]/app-integrations-emails-section/form/section/div[4]/div/div[2]/div[2]/div/mat-form-field/div/div/div[3]/input')`,
   `byXPath("id('mat-input-39')")`,
   `byJQuery('mat-form-field[class="mat-form-field w-50 ng-tns-c49-135 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-star-inserted mat-focused ng-dirty ng-invalid"] > div[class="mat-form-field-wrapper ng-tns-c49-135"] > div[class="mat-form-field-flex ng-tns-c49-135"] > div[class="mat-form-field-infix ng-tns-c49-135"] > input[class="mat-input-element mat-form-field-autofill-control ng-tns-c49-135 ng-untouched cdk-text-field-autofill-monitored ng-dirty ng-invalid"]')`,
   `byJQuery('#mat-input-39')`),"test2@gmail.com");
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
//click(fallback(`byXPath("//div[@formarrayname='requestCCEmails']//span[text()='add']")`));
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
