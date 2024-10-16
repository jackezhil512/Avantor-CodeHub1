/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
setShadowDOM(true);
include("{ds}/IMCM Function Library.js");
Login($URL,$NormalUser,$Password,$ConsumptionOrg,$ConsumptionStockroom);
AddProductsToList([$NORMAL_PRODUCT,$UOM_PRODUCT,$BATCHANDEXPIRY_PRODUCT, $BATCHALONE_PRODUCT, $EXPIRYALONE_PRODUCT,$UOMBATCHANDEXPIRYWITHDYNAMIC_PRODUCT]);
setDescription("Click Action List");
click(fallback(`byXPath('//*[text()="list"]')`));
setDescription("Select Activities Drop Down in Action List");
click(fallback(`submit({'type':'submit'})`));
setDescription("Select Consume Stock From Activities Drop Down in Action List");
click(fallback(`span("Consume Stock")`));
setDescription("Click Next Arrow");
click(fallback(`span("Next  arrow_forward")`));
wait(2000);


enterQty("500004-022");
enterQty("500003-966");
enterQty("76409-318");
enterQty("89374-880");

function enterQty(ProductNum){
var tempValue = ProductNum;
//var tempXPath = "(//a[contains(text(),'Temp')]//following::input)[1]".replace("Temp",tempValue);
//var qtyValue = getProp(byXPath(tempXPath),"disabled");
//log(qtyValue);
var tempXPath1 = "(//a[contains(text(),'Temp')]//following::input)[2]".replace("Temp",tempValue);
setValue(byXPath(tempXPath1),"1");
}





setValue(fallback(`numberbox("mat-input-66",_below(link($UOMBATCHANDEXPIRYWITHDYNAMIC_PRODUCT)))`,
   `numberbox("cdk-text-field-autofill-monitored mat-form-field-autofill-control mat-input-element ng-dirty ng-tns-c49-146 ng-untouched ng-valid text-center")`,
   `byXPath("//input[@id='mat-input-66']")`,
   `byXPath('//*[@class="mat-input-element mat-form-field-autofill-control text-center ng-tns-c49-146 ng-untouched ng-valid cdk-text-field-autofill-monitored ng-dirty"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/div/mat-stepper/div[2]/div[3]/app-consume-stock-confirm/div/div/div/div[2]/div[2]/avantor-table/div[2]/table/tbody/tr/td[5]/span/mat-form-field/div/div/div[3]/input')`,
   `byXPath("id('mat-input-66')")`,
   `byJQuery('mat-form-field[class="mat-form-field ng-tns-c49-146 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-valid ng-star-inserted mat-focused ng-dirty"] > div[class="mat-form-field-wrapper ng-tns-c49-146"] > div[class="mat-form-field-flex ng-tns-c49-146"] > div[class="mat-form-field-infix ng-tns-c49-146"] > input[class="mat-input-element mat-form-field-autofill-control text-center ng-tns-c49-146 ng-untouched ng-valid cdk-text-field-autofill-monitored ng-dirty"]')`,
   `byJQuery('#mat-input-66')`,
   `byXPath('//*[@id="mat-input-66"]')`,
   `numberbox("mat-input-66")`,
   `numberbox("mat-input-66",_below(link("89374-880")))`),"1");
setValue(fallback(`byXPath('//*[@id="mat-input-85"]',_below(link($EXPIRYALONE_PRODUCT)))`,
   `numberbox("cdk-text-field-autofill-monitored mat-form-field-autofill-control mat-input-element ng-dirty ng-tns-c49-165 ng-untouched ng-valid text-center")`,
   `numberbox("mat-input-85")`,
   `byXPath("//input[@id='mat-input-85']")`,
   `byXPath('//*[@class="mat-input-element mat-form-field-autofill-control text-center ng-tns-c49-165 ng-untouched ng-valid cdk-text-field-autofill-monitored ng-dirty"]')`,
   `byXPath('/html/body/div[2]/div[2]/div/mat-dialog-container/div/mat-stepper/div[2]/div[3]/app-consume-stock-confirm/div/div/div/div[3]/div[2]/avantor-table/div[2]/table/tbody/tr/td[5]/span/mat-form-field/div/div/div[3]/input')`,
   `byXPath("id('mat-input-85')")`,
   `byJQuery('mat-form-field[class="mat-form-field ng-tns-c49-165 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float ng-untouched ng-valid ng-star-inserted mat-focused ng-dirty"] > div[class="mat-form-field-wrapper ng-tns-c49-165"] > div[class="mat-form-field-flex ng-tns-c49-165"] > div[class="mat-form-field-infix ng-tns-c49-165"] > input[class="mat-input-element mat-form-field-autofill-control text-center ng-tns-c49-165 ng-untouched ng-valid cdk-text-field-autofill-monitored ng-dirty"]')`,
   `byJQuery('#mat-input-85')`,
   `byXPath('//*[@id="mat-input-85"]')`),"1");
setDescription("Set Quantity for Batch Products");
//setValue(fallback(`numberbox(/cdk-text-field-.*/,_below(link($UOMBATCHANDEXPIRYWITHDYNAMIC_PRODUCT)))`,
//   `numberbox(/cdk-text-field-.*/,_below(link($EXPIRYALONE_PRODUCT)))`,
//   `numberbox(/cdk-text-field-.*/,_below(link($EXPIRYALONE_PRODUCT)))`,
//   `numberbox(/cdk-text-field-.*/,_below(link($EXPIRYALONE_PRODUCT)))`),"1");
setDescription("Set Quantity for Batch Products");
//setValue(fallback(`numberbox(/cdk-text-field-.*/,_below(link($EXPIRYALONE_PRODUCT)))`,
//   `numberbox(/cdk-text-field-.*/,_below(link($EXPIRYALONE_PRODUCT)))`,
//   `numberbox(/cdk-text-field-.*/,_below(link($EXPIRYALONE_PRODUCT)))`),"1");
setDescription("Set Quantity for Batch Products");
setValue(fallback(`numberbox(/cdk-text-field-.*/,_below(link($BATCHALONE_PRODUCT)))`),"1");
setDescription("Set Quantity for Batch Products");
setValue(fallback(`numberbox(/cdk-text-field-.*/,_below(link($BATCHANDEXPIRY_PRODUCT)))`,
   `numberbox(/cdk-text-field-.*/,_below(link($EXPIRYALONE_PRODUCT)))`),"1");
setDescription("Click Consume");
click(fallback(`span("Consume Stock")`));
setDescription("Verify if Consumed Successfully pop up is displayed");
assertExists(fallback(`div("STOCK CONSUMED SUCCESSFULL")`,
   `div("STOCK CONSUMED SUCCESSFULL").xy(0.02, 0.58 )`));
setOperation("Stock Consumed");
ValidateStockroomActivity([$NORMAL_PRODUCT,$UOM_PRODUCT,$BATCHANDEXPIRY_PRODUCT, $BATCHALONE_PRODUCT, $EXPIRYALONE_PRODUCT]);
