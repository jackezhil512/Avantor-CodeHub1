/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../../Test Data/IMCM_INPUTFILE.csv','HashDPL',0,'en_US');
setShadowDOM(true);
include("{ds}/../../ReUsable Functions/IMCM Function Library.js");
setDescription("Login With Normal user");
Login($URL,$NormalUser,$Password,$ConsumptionOrg,$ConsumptionStockroom);
setDescription("Change To POU stockroom");
ChangeStockroom($POUStockRoom);
wait(1000);
var CatlogNo=$PouCatlogNo;
var QTY=5;
setDescription("Replenish product in POU stock room");
ReplenishProductinApprovalPage(CatlogNo,QTY);
setDescription("Validate Stock replenished in Article Activity log");
ValidateArtileActivityLogMovementType(CatlogNo,"Stock Replenished");
wait(10000);
ValidateStockroomActivityPage(CatlogNo,"Stock Replenished");
setDescription("Validate Stock replenished in StockRoom Activity log");
wait(10000);
setDescription("Change Stockroom to Master");
ChangeStockroom($mastersourcemasterroom);
wait(10000);
setDescription("Navigate to Approval Page");
NavigateApproval();
wait(10000);
setDescription("Approved Product in Approval page");
ApproveProductinMastor();
setDescription("Validate PoU Order Approved in Article Activity log");
ValidateArtileActivityLogMovementType(CatlogNo,"POU Order Approved");
wait(10000);
setDescription("Validate PoU Order Approved in StockRoom Activity log");
ValidateStockroomActivityPage(CatlogNo,"POU Order Approved");
wait(10000);
setDescription("Change To POU stockroom");
ChangeStockroom($POUStockRoom);
wait(1000);
setDescription("Validate Stock Full receive in Receive Page");
StockFullreceiveORStockFullReject(CatlogNo ,"fullreceive");
wait(1000);
setDescription("Validate Stock Received in Article Activity log");
ValidateArtileActivityLogMovementType(CatlogNo,"Stock Received");
wait(10000);
setDescription("Validate Stock Received in StockRoom Activity log");
ValidateStockroomActivityPage(CatlogNo,"Stock Received");
