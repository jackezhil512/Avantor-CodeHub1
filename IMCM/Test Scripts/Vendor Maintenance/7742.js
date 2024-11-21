/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../../Test Data/IMCM_INPUTFILE.csv','HashDPL',0,'null');
setShadowDOM(true);
include("{ds}/../../ReUsable Functions/IMCM Function Library.js");
setDescription("Login");
Login($URL,$Super_User,$Password,$ConsumptionOrg,$ConsumptionStockroom);
var RandomVal=eval(" Math.floor(Math.random()*1000000000)");
var RandomVal2=eval(" Math.floor(Math.random()*1000000000)");
var Email="Auto"+RandomVal+"@avantorsciences.com";
var Email2="Auto"+RandomVal2+"@avantorsciences.com";
setDescription("Vendor Maintenance");
NavigateToVendorMaintenancePage();
wait(1000);
assertExists(fallback(`byXPath("//span[@class='title' and text()='Vendor Maintenance']")`));
setValue(fallback(`byXPath("//th[contains(@class,'mat-column-search-vendorName')]//input")`),"Automation1");
wait(3000);
click(fallback(`byXPath("(//td[contains(@class,'mat-column-vendorName')])[1]//span")`));
assertExists(fallback(`byXPath("//mat-panel-title[text()='Vendor Information']")`));
click(fallback(`byXPath("(//mat-icon[text()='edit'])[1]")`));
assertExists(fallback(`byXPath("//div[contains(text(),'Edit Vendor')]")`));
click(fallback(`byXPath("//mat-icon[text()='arrow_forward']")`));
wait(2000);
var TCount=_eval("ds$('button.mat-button-base.mat-secondary').length");
log(TCount);
if (TCount>1){
   while (TCount>1){
      click(fallback(`byXPath("(//img[@src='/assets/icons/delete-secondary.svg'])[2]")`));
      click(fallback(`byXPath("//span[contains(text(),'YES')]/ancestor::button")`));
      wait(1000);
      var TCount=_eval("ds$('button.mat-button-base.mat-secondary').length");
   }
}
click(fallback(`byXPath("//mat-icon[text()='arrow_forward']")`));
click(fallback(`byXPath("//span[text()=' Save ']/parent::span")`));
wait(2000);
click(fallback(`byXPath("(//mat-icon[text()='edit'])[1]")`));
assertExists(fallback(`byXPath("//div[contains(text(),'Edit Vendor')]")`));
click(fallback(`byXPath("//mat-icon[text()='arrow_forward']")`));
click(fallback(`byXPath("(//td[1]//h6[contains(text(),'Primary Email')]/span/following::span[contains(text(),'Add Email')])[1]")`,
   `byXPath("(//h6[contains(text(),'Primary Email')]/span/following::span[contains(text(),'Add Email')])[1]")`,
   `byXPath("(//h6[contains(text(),'Primary Email')]/span/following::span[contains(text(),'Add Email')])[1]")`,
   `byXPath("(//td[2]//h6[contains(text(),'Primary Email')]/span/following::span[contains(text(),'Add Email')])[1]")`));
setValue(fallback(`byXPath("//div[contains(text(),'Edit Vendor')]//following::div/div/input[@title='']")`),Email);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("(//td[1]//h6[contains(text(),'Primary Email')]/span/following::span[contains(text(),'Add Email')])[2]")`,
   `byXPath("(//td[2]//h6[contains(text(),'Primary Email')]/span/following::span[contains(text(),'Add Email')])[2]")`));
setValue(fallback(`byXPath("//div[contains(text(),'Edit Vendor')]//following::div/div/input[@title='']")`),Email2);
click(fallback(`byXPath("//mat-icon[text()='save']")`));
click(fallback(`byXPath("//mat-icon[text()='arrow_forward']")`));
click(fallback(`byXPath("//span[text()=' Save ']/parent::span")`));
assertExists(fallback(`byXPath("//div[contains(text(),'VENDOR UPDATED SUCCESSFULLY')]")`,
   `byXPath("")`));
wait(2000);
click(fallback(`byXPath("//mat-panel-title[text()='Integrations']")`));
var strEmail1=getText(byXPath("(//td[contains(@class,'mat-column-requestMail')]//p)[2]"));
var strEmail2=getText(byXPath("(//td[contains(@class,'mat-column-requestMail')]//p)[3]"));
log(strEmail1);
log(strEmail2);
assertEqual(fallback(`strEmail1`),Email);
assertEqual(fallback(`strEmail2`),Email2);
NavigateToIntegrationMaintenance();
click(fallback(`byXPath("(//div[text()=' Vendor ']/following::mat-select)[1]")`));
click(fallback(`byXPath("//span[text()=' ALL ']/parent::mat-option")`,
   `byXPath("//span[text()=' 10/1 alternates delete ']/parent::mat-option")`));
click(fallback(`byXPath("//span[text()='Update Results']/ancestor::button")`));
wait(2000);
click(fallback(`byXPath("//td[contains(@class,'mat-column-requisitionEmailId')]//a")`));
assertExists(fallback(`byXPath("//td[contains(text(),' ${Email} ')]")`,
   `byXPath("//td[contains(text(),' Auto587378858@avantorsciences.com ')]")`));
assertExists(fallback(`byXPath("//td[contains(text(),' ${Email2} ')]")`,
   `byXPath("//td[contains(text(),' Auto587378858@avantorsciences.com ')]")`,
   `byXPath("//td[contains(text(),' Auto587378858@avantorsciences.com ')]")`));
