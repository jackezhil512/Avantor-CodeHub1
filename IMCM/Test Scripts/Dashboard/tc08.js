/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
setShadowDOM(true);
include("{ds}/../IMCM Function Library.js");
setDescription("Login to IMCM as Normal User");
Login($URL,$NormalUser,$Password,$ConsumptionOrg,$ConsumptionStockroom);
setDescription("Click on out of stock button");
click(fallback(`byXPath("//button[@id='dashboard_out_of_stock_click']")`));
setDescription("Click on Table view");
click(fallback(`byXPath("//button[@aria-label='Table View Preference Card']")`));
var totalRows = _eval("ds$(\'tbody[role=\"rowgroup\"] tr.striped-rows\').length");
log(totalRows);
var totalIcon = _eval("ds$('mat-icon.text-danger').length");
log(totalIcon);
