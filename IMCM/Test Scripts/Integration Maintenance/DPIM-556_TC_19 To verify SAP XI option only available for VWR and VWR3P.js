/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../../Test Data/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
setShadowDOM(true);
include("{ds}/../../ReUsable Functions/IMCM Function Library.js");
Login($URL,$NormalUser,$Password,$ConsumptionOrg,$ConsumptionStockroom);
NavigateToIntegrationmaintenance();
click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[text()=' ALL ']/parent::mat-option")`,
   `byXPath("//span[text()=' all ']/parent::mat-option")`));
click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
wait(2000);
var strRows2=_eval("ds$('tr.striped-rows').length");
log(strRows2);
if (strRows2>0){
   click(fallback(`byXPath("(//img[contains(@src,'ellipsis-icon.svg')]/ancestor::button)[1]")`));
   click(fallback(`byXPath("//button[text()=' Delete ']")`));
   click(fallback(`byXPath("//span[text()=' Yes ']/parent::button")`));
}
wait(3000);
click(fallback(`byXPath("//span[contains(text(),'ADD NEW INTEGRATION')]/ancestor::button")`));
var VendorName="ALL";
var VendorName1="Automation";
setDescription("Click on Select Stockroom");
click(fallback(`span("Select Stockroom")`));
click(fallback(`custom("mat-pseudo-checkbox", 0, _in(custom("mat-option", "mat-option-376")))`,
   `custom("mat-pseudo-checkbox", 0, _in(custom("mat-option", {'id':'mat-option-376'})))`,
   `custom("mat-pseudo-checkbox", "mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted")`,
   `byXPath("//mat-option[@id='mat-option-376']/mat-pseudo-checkbox")`,
   `byXPath('//*[@class="mat-pseudo-checkbox mat-option-pseudo-checkbox ng-star-inserted"]')`,
   `byXPath('/html/body/div[2]/div[4]/div/div/div/div[2]/mat-option/mat-pseudo-checkbox')`,
   `byXPath("id('mat-option-376')/mat-pseudo-checkbox[@class='mat-pseudo-checkbox mat-option-pseudo-checkbox ng-star-inserted']")`,
   `byJQuery('div[class="mat-select-panel-wrap ng-tns-c89-234 ng-trigger ng-trigger-transformPanelWrap ng-star-inserted"] > div[class="ng-tns-c89-234 ng-trigger ng-trigger-transformPanel mat-select-panel mat-primary"] > div[class="ng-tns-c89-234"] > mat-option[class="mat-option mat-focus-indicator mat-option-multiple ng-star-inserted mat-active"] > mat-pseudo-checkbox[class="mat-pseudo-checkbox mat-option-pseudo-checkbox ng-star-inserted"]')`,
   `byJQuery('#mat-option-376 > .mat-pseudo-checkbox.mat-option-pseudo-checkbox.ng-star-inserted')`));
setDescription("Click on empty Space");
click(fallback(`div("cdk-overlay-backdrop cdk-overlay-backdrop-showing cdk-overlay-transparent-backdrop").xy(0.51, 0.28 )`,
   `byXPath('//*[@class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.51, 0.28 )`,
   `byXPath('/html/body/div[2]/div[3]').xy(0.51, 0.28 )`,
   `byXPath("/html[@class='cdk-global-scrollblock']/body[1]/div[@class='cdk-overlay-container']/div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']").xy(0.51, 0.28 )`,
   `byJQuery('div[class="cdk-overlay-container"] > div[class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]').xy(0.51, 0.28 )`,
   `byJQuery('.cdk-overlay-container > .cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing').xy(0.51, 0.28 )`));
wait(2000);
setDescription("Click on \"Select vendor\"");
//click(fallback(`span("Select Vendor")`));
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),VendorName);
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
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
setDescription("Verify SAP Xi is disabled");
assertExists(fallback(`byXpath("//span[@class='vendor-disabled' and text()=' SAP XI ']")`));
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),VendorName);
setDescription("Un select selected check box");
click(fallback(`byXPath("//mat-pseudo-checkbox[contains(@class,'mat-pseudo-checkbox-checked')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),"VWR");
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
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
setDescription("Verify SAP Xi is disabled and grayed out");
assertExists(fallback(`byXpath("//span[@class='vendor-disabled' and text()=' SAP XI ']")`));
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),VendorName);
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
setDescription("user should able to select SAP XI");
click(fallback(`byXPath("//span[@class='vendor-option' and text()=' SAP XI ']")`));
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),VendorName);
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
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),"VWR3P");
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
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
setDescription("user should able to select SAP XI");
assertExists(fallback(`byXPath("//span[@class='vendor-option' and text()=' SAP XI ']")`));
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),"VWR");
setDescription("Un select selected check box");
click(fallback(`byXPath("//mat-pseudo-checkbox[contains(@class,'mat-pseudo-checkbox-checked')]")`));
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
setDescription("user should able to select SAP XI");
assertExists(fallback(`byXPath("//span[@class='vendor-option' and text()=' SAP XI ']")`));
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),"VWR3P");
setDescription("Un select selected check box");
click(fallback(`byXPath("//mat-pseudo-checkbox[contains(@class,'mat-pseudo-checkbox-checked')]")`));
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
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
setDescription("Verify SAP Xi is disabled");
assertExists(fallback(`byXpath("//span[@class='vendor-disabled' and text()=' SAP XI ']")`));
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("//mat-select[@formcontrolname='vendor']/div[contains(@class, 'mat-select-trigger')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),VendorName1);
setDescription("Un select selected check box");
click(fallback(`byXPath("//mat-pseudo-checkbox[contains(@class,'mat-pseudo-checkbox-checked')]")`));
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),"VWR");
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
setDescription("Search with vendor Name");
setValue(fallback(`byXPath('//input[@placeholder="Search Vendor "]')`),"VWR3P");
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
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
click(fallback(`byXPath("(//div[contains(text(),'Output Type')]/span/following::mat-select)[1]")`));
setDescription("Verify SAP Xi is disabled");
click(fallback(`byXpath("//span[@class='vendor-disabled' and text()=' SAP XI ']")`));
setValue(fallback(`byXPath("//h4[contains(text(),'Add New Integration')]")`),"{{TAB}}");
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
click(fallback(`byXPath("//span[contains(text(),'Next')]/parent::span")`,
   `byXPath("//span[contains(text(),'Next')]/parent::span")`));
click(fallback(`byXPath("//span[contains(text(),'Save')]/parent::span")`));
wait(2000);
setDescription("Get Vendor Name");
var VendorNameInFirstRow=getText(byXPath("(//td[contains(@class,'mat-column-vendorData')])[1]"));
setDescription("verify updfated and searched vendor results are same or not?");
assertEqual(fallback(`VendorNameInFirstRow`,
   `VendorName`),VendorName);
