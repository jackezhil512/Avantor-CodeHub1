/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../../Test Data/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
setShadowDOM(true);
include("{ds}/../../ReUsable Functions/IMCM Function Library.js");
setDescription("Login with Normal user");
Login($URL,$NormalUser,$Password,$ConsumptionOrg,$ConsumptionStockroom);
wait(1000);
var CatlogNo=$CatlogNo;
var QTY=250;
click(fallback(`byXPath('//*[text()=" Place Your Order "]')`,
   `byXPath('//*[text()="Order"]')`,
   `byXPath('//*[text()="Order "]')`,
   `span("Place Your Order")`,
   `span("mat-button-wrapper[7]")`,
   `byXPath('//app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-replenish-consumption/div/app-consumption-component/div/div[2]/div[2]/button[1]/span[1]')`,
   `byXPath('/html/body/app-root/app-avantor-layout/mat-drawer-container/mat-drawer-content/div/div/app-replenish-consumption/div/app-consumption-component/div/div[2]/div[2]/button/span')`,
   `byXPath("/html[1]/body[1]/app-root[1]/app-avantor-layout[@class='ng-star-inserted']/mat-drawer-container[@class='mat-drawer-container example-container']/mat-drawer-content[@class='mat-drawer-content ng-star-inserted']/div[@class='example-sidenav-content']/div[@class='fixed-header min-vh-100']/app-replenish-consumption[@class='ng-star-inserted']/div[@class='px-4']/app-consumption-component[1]/div[@class='ng-star-inserted']/div[@class='d-flex align-items-start justify-content-between flex-wrap']/div[@class='d-flex align-items-lg-end department flex-row mt-2 button-row']/button[@class='mat-focus-indicator py-2 px-3 product-order-btn mat-flat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']/span[@class='mat-button-wrapper']")`,
   `byJQuery('div[class="ng-star-inserted"] > div[class="d-flex align-items-start justify-content-between flex-wrap"] > div[class="d-flex align-items-lg-end department flex-row mt-2 button-row"] > button[class="mat-focus-indicator py-2 px-3 product-order-btn mat-flat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused"] > span[class="mat-button-wrapper"]')`,
   `byJQuery('.ng-star-inserted > .d-flex.align-items-start.justify-content-between.flex-wrap > .d-flex.align-items-lg-end.department.flex-row.mt-2.button-row > .mat-focus-indicator.py-2.px-3.product-order-btn.mat-flat-button.mat-button-base.mat-primary.cdk-focused.cdk-mouse-focused > .mat-button-wrapper')`));
setDescription("Replenish product in Replenish Page");
ReplenishProduct(CatlogNo,QTY);
setDescription("Validate Stock Replenished in Article Activity log");
ValidateArtileActivityLogMovementType(CatlogNo,"Stock Replenished");
wait(10000);
setDescription("Validate Stock Replenished in StockRoom Activity log");
ValidateStockroomActivityPage(CatlogNo,"Stock Replenished");
