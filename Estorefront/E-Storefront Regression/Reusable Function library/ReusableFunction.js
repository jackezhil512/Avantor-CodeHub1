/**
 * @aiq.testdesigner
 * This script requires AIQ Test Designer
 */
var operationValue;

function Login(url, username, password) {
    // setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  //setVariablesIfNeeded('{ds}/../../Test Data/TopSellingProducts.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    navigateTo(url);
    wait(5000);
    click(fallback(`submit("Accept all cookies")`));
    //click(fallback(`link("/ca/en/login")`)),
    click(fallback(`link("Login")`));
    wait(5000);
    setValue(fallback(`byXPath('//*[@id="email"]')`), username);
    setValue(fallback(`byXPath('//*[@id="password"]')`), password);
    click(fallback(`byXPath('//*[@id="btn-login"]')`));
      wait(3000);
  
   var Acceptallcookies = _isVisible(fallback(`submit("Accept all cookies")`));
  log(Acceptallcookies);
  if (true == Acceptallcookies){
 log("Verify accept all cookies message is displayed");   
  click(fallback(`submit("Accept all cookies")`));
  }else{
    log("Verify accept all cookies message is disabled after login failed")
  }  
 
   assertExists(fallback(`image(0, _in(header("cx-header"))).xy(0.64, 0.58 )`)),
   log("Application login sucessfully and navigated to home page")
    wait(3000);
    
}



function LoginUS(url, username, password) {
    // setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  //setVariablesIfNeeded('{ds}/../../Test Data/TopSellingProducts.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    navigateTo(url);
    wait(5000);
    click(fallback(`submit("Accept all cookies")`));
    click(fallback(`link("/us/en/login")`)),
    wait(5000);
    setValue(fallback(`byXPath('//*[@id="email"]')`), username);
    setValue(fallback(`byXPath('//*[@id="password"]')`), password);
    click(fallback(`byXPath('//*[@id="btn-login"]')`));
      wait(3000);
  
   var Acceptallcookies = _isVisible(fallback(`submit("Accept all cookies")`));
  log(Acceptallcookies);
  if (true == Acceptallcookies){
 log("Verify accept all cookies message is displayed");   
  click(fallback(`submit("Accept all cookies")`));
  }else{
    log("Verify accept all cookies message is disabled after login failed")
  }  
 
   assertExists(fallback(`image(0, _in(header("cx-header"))).xy(0.64, 0.58 )`)),
   log("Application login sucessfully and navigated to home page")
    wait(3000);
    
}





function AdvanceSearch(Index,input) {
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
  click(fallback(`link("Advanced")`));

     setValue(fallback(`textbox(${Index}, _in(div("ProductDetail")))`), input);
  	click(fallback(`submit("Search")`));
 // assertExists(fallback(`heading1("//*You searched for: ${input}")`));
  assertExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`));
  
                   
 }



function NegativeScenario_AdvanceSearch(FieldNames,input) {
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
  click(fallback(`link("Advanced")`));

     //setValue(fallback(`textbox(${Index}, _in(div("ProductDetail")))`), input);
  	setValue(fallback(`textbox({'formcontrolname':'${FieldNames}'})`), input);
    click(fallback(`submit("Search")`));
 // assertExists(fallback(`heading1("//*You searched for: ${input}")`));
  assertNotExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`));
  
                   
 }
 

function LaunchBrowser(url){
  
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    navigateTo(url);
    //takePicture(fallback(`submit("Accept all cookies")`));
    click(fallback(`submit("Accept all cookies")`));
    assertExists(fallback(`image(0, _in(header("cx-header"))).xy(0.64, 0.58 )`));
  
}

function SDSSearch(Index,input) {
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
  click(fallback(`link("Advanced")`));
  click(fallback(`submit("SDS Search")`));
  setValue(fallback(`textbox(${Index}, _in(div("ProductDetail")))`), input);
  click(fallback(`submit("Search")`));
  wait(3000);
 //assertExists(fallback(`div('/SDS results for.*/${input}.*/)`));
//assertExists(fallback(`div('/.*SDS results for.*/').xy(0.16, 0.45 )`));
  assertExists(fallback(`link("hide-mobile[0]")`));
  
}

function NegativeScenario_SDSSearch(FieldNames,input) {
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
  click(fallback(`link("Advanced")`));
  click(fallback(`submit("SDS Search")`));
  //setValue(fallback(`textbox(${Index}, _in(div("ProductDetail")))`), input);
   setValue(fallback(`textbox({'formcontrolname':'${FieldNames}'})`), input);
  click(fallback(`submit("Search")`));
  wait(3000);
 //assertExists(fallback(`div('/SDS results for.*/${input}.*/)`));
//assertExists(fallback(`div('/.*SDS results for.*/').xy(0.16, 0.45 )`));
  //assertExists(fallback(`link("hide-mobile[0]")`));
  //assertExists(fallback(`heading2(["Please try again. We couldn't find "])`));
  assertExists(fallback(`heading3("No matches were found.")`));
}



function CertificateSearch(Index,input){

   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true);
   click(fallback(`link("Advanced")`));
   click(fallback(`submit("Certificate Search")`));
   setValue(fallback(`textbox(${Index}, _in(div("ProductDetail")))`), input);  
   click(fallback(`submit("Search")`));
   wait(3000);
   assertExists(fallback(`span("hide-mobile[0]")`));
}

function NegativeSceanrio_CertificateSearch(FieldNames,input){

   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true);
   click(fallback(`link("Advanced")`));
   click(fallback(`submit("Certificate Search")`));
   //setValue(fallback(`textbox(${Index}, _in(div("ProductDetail")))`), input);  
   setValue(fallback(`textbox({'formcontrolname':'${FieldNames}'})`), input);
   click(fallback(`submit("Search")`));
   wait(3000);
   //assertNotExists(fallback(`span("hide-mobile[0]")`));
   assertExists(fallback(`heading2(["Please try again. We couldn't find "])`));
}

function ManufacturerSearch(Index0,input0,Index1,input1,Index2,input2){
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true);
   click(fallback(`link("Advanced")`));
  
    click(fallback(`submit("Manufacturer Search")`));
  
  setValue(fallback(`textbox(${Index0}, _in(div("ProductDetail")))`), input0);
  wait(1000);
   setValue(fallback(`textbox(${Index1}, _in(div("ProductDetail")))`), input1);  
  wait(1000);  
  setValue(fallback(`textbox(${Index2}, _in(div("ProductDetail")))`), input2);  
  wait(1000);  
  click(fallback(`submit("Search")`));
    wait(3000);
    assertExists(fallback(`span("CAMK772788")`));
}

function search(input){
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true); 
  setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
  click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
  wait(5000);
  click2(fallback(`heading6(/Expand.*/)`));
  //click(fallback(`heading6(0, _in(section({'aria-label':'Product Results List'})))`));
  wait(7000);
  click(fallback(`button("+")`));
  click(fallback(`submit("Add to cart")`));
  wait(10000);
  click(fallback(`byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a/cx-icon")`));
  click(fallback(`submit("View My Cart")`));
  assertExists(fallback(`heading3("Cart Summary")`));
}

function SearchWithinSearch(input,input1){
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true);
  setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
  click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
  wait(5000);
  setValue(fallback(`byXPath('//*[@id="search"]')`), input1);
  click(fallback(`custom("cx-icon", "cx-icon fa-search fas[1]")`));
  wait(2000);
  assertExists(fallback(`span("Glass Beakers")`));
 assertExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`)); 
  
}

function QuickSearchNavigateToHomePage(input){
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true);
   setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
   click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
   assertExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`)); 
   click(fallback(`image(0, _in(header("cx-header"))).xy(0.64, 0.58 )`)),
   assertExists(fallback(`link("Learn more")`));
}

//function of nagetive scenarios for quick serach with keyword
function QuickSearchwith_invalid_Searchkeyword(input){
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true);
   setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
   click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
   assertNotExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`)); 
   assertExists(fallback(`label("Search Again:")`));
}

//function of nagetive scenarios for quick serach with no kwyword
function QuickSearchwith_No_Searchkeyword(input){
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true);
   setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
   click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
   assertNotExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`)); 
   assertNotExists(fallback(`label("Search Again:")`));
}

function SupplierNameLeftNavigationFilterSearch(input){
   setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true);
   setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
   click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
  wait(2000);
  click(fallback(`link(/VWR International.*/)`));
  wait(2000);
  assertExists(fallback(`span("VWR International")`));
  assertExists(fallback(`paragraph("Supplier: VWR International")`));
}
function ClearCart(){
	// setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true);
   click(fallback(`byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a/cx-icon")`));
 
  //assertExists(fallback(`heading3("Cart Summary")`));
  //click(fallback(`span("Clear Cart")`));
  //assertExists(fallback(`heading2("Your shopping cart is empty")`));
  
  let value = _isVisible(fallback(`submit("View My Cart")`));
    log(value);
if (true == value){
 // if (isEnabled(submit("View My Cart"))){
     click(fallback(`submit("View My Cart")`)); 
  click(fallback(`span("Clear Cart")`));
   assertExists(fallback(`heading2("Your shopping cart is empty")`));
  click(fallback(`image(0, _in(header("cx-header"))).xy(0.64, 0.58 )`));
  
   
   //log(cart is cleared);
}
else {
  assertExists(fallback(`heading2("Your shopping cart is empty")`));
  click(fallback(`image(0, _in(header("cx-header"))).xy(0.64, 0.58 )`));
}
 
}

function ProductPageNavigation(input){
setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true); 
  setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
  click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
  wait(5000);
 click(fallback(`heading2(1, _in(section({'aria-label':'Product Results List'})))`));
  //click(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot[3]/app-avtr-product-lists/div/section/div/div/div[2]/div[2]/app-avtr-product-list-item/div/div[2]/a/h2')`));
  //assertExists(fallback(`heading6("About this item")`));
  //assertExists(fallback(`byXPath('//*[text()="About this item "]')`));
   assertExists(fallback(`byXPath('//*[text()="Related Information "]')`));
}
function ProductPageValidationAdditemToBasket(){
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true); 
  click(fallback(`button("+")`));
  click(fallback(`submit("Add to cart")`));
  wait(10000);
  click(fallback(`byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a/cx-icon")`));
  click(fallback(`submit("View My Cart")`));
  assertExists(fallback(`heading3("Cart Summary")`));
}


function ProductPageValidationwithoutaddItemToBasket(){
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true); 
 // click(fallback(`button("+")`));
 // click(fallback(`submit("Add to cart")`));
 
  click(fallback(`submit("Add to cart[2]")`));
  wait(10000);
  click(fallback(`paragraph("Please select quantity.")`));
 // click(fallback(`byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a/cx-icon")`));
  //click(fallback(`submit("View My Cart")`));
  //assertExists(fallback(`heading3("Cart Summary")`));
}




function NavigateProductpageFromProductlinkShoppingcartDrawdown(input){
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true); 
  setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
  click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
  wait(5000);
  click2(fallback(`heading6(/Expand.*/)`));
  //click(fallback(`byXPath('//*[text()=/Expand.*/]')`),"0");
  //click2(fallback(`heading6(0, _in(section({'aria-label':'Product Results List'})))`));
  wait(7000);
  click(fallback(`button("+")`));
  click(fallback(`submit("Add to cart")`));
  wait(10000);
  click(fallback(`byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a/cx-icon")`));
  click(fallback(`link(0, _in(div("cart-items")))`));
  wait(3000);
  assertExists(fallback(`byXPath('//*[text()="About this item "]')`));
}

function CatalogNumberLinkinCartNavigatetPDP(){
  click(fallback(`byXPath('//*[@class="cx-link cart-catalog-link-color ng-star-inserted"]')`));
  
  wait(5000);
  //assertExists(fallback(`byXPath('//*[text()="About this item "]')`));
  assertExists(fallback(`byXPath('//*[text()="Related Information "]')`));
}

function RecommendedProductsInPDP(){
  assertExists(fallback(`div(["Customers Who Bought This Also Boug"])`));
  assertExists(fallback(`byXPath('//*[@class="cx-link cursor-pointer"]')`));
}

function BreadcrumInPDP(){
  assertExists(fallback(`byXPath('//app-root/cx-storefront/cx-page-slot/app-breadcrumb')`));
}

function VerifyUnitOfMeasureinPDP(input){
setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true); 
  setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
  click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
  assertExists(fallback(`div(/Pack of.*/)`));
  assertExists(fallback(`div(/Case of.*/)`));
  assertExists(fallback(`div(/Pack of.*/)`));
}

function  LogInforAvailabilityisDisplayedforAnanymousPDP(){
//assertExists(fallback(`span("Log in  for availability")`));  
  assertExists(fallback(`span(0, _in(div({'title':'Availability'})))`));
} 

function VerifyBlockedProductinProductpage(input){
setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
   setShadowDOM(true); 
  setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
  click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
 wait(5000);
assertExists(fallback(`custom("cx-icon", "cx-icon icon icon-restricted")`));
}


function AddProductFromOrderEntryCrossReferences(input){
  
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  click(fallback(`link("Order Entry")`));
  assertExists(fallback(`heading3("Order Entry")`));
 setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-avtr-order-entry/div[2]/app-avtr-order-entry-form/form/div/input')`), input);
  click(fallback(`submit("View Cross References")`));
  assertExists(fallback(`byXPath('//*[text()=" Resolving Order Entry Line "]')`));
  wait(3000);
  click(fallback(`checkbox("x-checkbox")`));
  click(fallback(`submit("Accept")`));
  click(fallback(`byXPath('//*[text()=" Add to cart "]')`));
  assertExists(fallback(`heading3("Cart Summary")`));
  
}

function AddproductToCartFromOrderEntry(input){
 setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  click(fallback(`link("Order Entry")`));
  assertExists(fallback(`heading3("Order Entry")`));
 setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-avtr-order-entry/div[2]/app-avtr-order-entry-form/form/div/input')`), input);
  
  click(fallback(`byXPath('//*[@class="price"]')`));
  click(fallback(`byXPath('//*[text()=" Add to cart "]')`));
  assertExists(fallback(`heading3("Cart Summary")`));
  
}

function OrderEntryEmptyPartNumberValidation(input){
 setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  click(fallback(`link("Order Entry")`));
  assertExists(fallback(`heading3("Order Entry")`));
  setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-avtr-order-entry/div[2]/app-avtr-order-entry-form/form/div/input')`), input);
  
 // click(fallback(`byXPath('//*[@class="price"]')`));
  click(fallback(`byXPath('//*[text()=" Add to cart "]')`));
  //assertExists(fallback(`heading3("Cart Summary")`));
  
}


  function AddproductToCartFromCustomCatalog(){
    
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  wait(5000); 
  mouseOver(fallback(`div("hdr-my-account mob-welcomuser").xy(0.87, 0.55 )`));
  click(fallback(`link("/ca/en/my-account/custom-catalog")`));
  assertExists(fallback(`link("QA Automation CC")`));  
  click(fallback(`link("QA Automation CC")`)); 
  click(fallback(`button("+")`));
  click(fallback(`submit("Add To Cart")`));  
    
}


  function RegistrationTellUSAbout(firstna){
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  wait(5000); 
    click(fallback(`link("Register")`));
    
    click(fallback(`byXPath('//*[@class="heading"]')`));
  
  setValue(fallback(`textbox(0, _in(div("cdk-step-content-0-0")))`), firstna);
  setValue(fallback(`textbox(1, _in(div("cdk-step-content-0-0")))`), "Test"); 
    
  //let sec = DateObj.getSeconds();
  var randommail = eval("'TestAutomation'+ Math.floor(Math.random()*1000) +'@yopmail.com'");
    
  setValue(fallback(`byXPath('//*[@name="email"]')`), randommail);
            
  setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div/form/div/div/div[4]/label/input')`), "9876543219");
  // setValue(fallback(`byXPath('//*[@name="email"]')`, "test"+sec+"@yopmail.com");
  setValue(fallback(`password("psw")`),"Test@123");
  
    click(fallback(`submit("Continue")`));
    assertExists(fallback(`byXPath('//*[text()="Does your company currently buy from VWR?"]')`));
  }

  function RigistrationPersonalUse(){
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  wait(5000);
  click(fallback(`radio("form-control ng-pristine ng-untouched ng-valid[2]")`));  
  click(fallback(`submit("Continue[1]")`));
  assertExists(fallback(`heading2("Tell us more")`));  
    
  }

  function TellUsMoreINPersonalUse(){
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  wait(5000);
  setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/div[2]/label/input')`), "Test");

    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/label/input')`), "Test");
            
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/div[3]/label/input')`), "Tornto");
    
    click(fallback(`byXPath('//*[@class="ng-input"]').xy(0.41, 0.27 )`));
    
          click(fallback(`span("Alberta")`));
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/div[4]/div[2]/label/input')`), "T7X 0C9");
    
    click(fallback(`checkbox("newsletter")`));
    click(fallback(`checkbox("termsandconditions")`));
    click(fallback(`submit("Submit")`));
    wait(20000);
    assertExists(fallback(`byXPath('//*[text()="Your Profile Has Been Created"]')`));
  }

  function NewShippingaccountRegistration(){
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  wait(5000);
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[2]/div/form/div/label/input')`), "86019709");

    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[2]/div/form/div/label[2]/input')`), "L5N 5Z7");

    click(fallback(`submit("Continue[1]")`));
    wait(5000);
    assertExists(fallback(`byXPath('//*[text()="Tell us about your Organization."]')`));
    
  }


  function NewShippingAccountRegistration(){
    
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  wait(5000);
  setValue(fallback(`textbox("companyName")`), "Test");
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/div[2]/label/input')`), "Test");

    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/label/input')`), "Test");
            
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/div[3]/label/input')`), "Tornto");
    
    click(fallback(`byXPath('//*[@class="ng-input"]').xy(0.41, 0.27 )`));
    
          click(fallback(`span("Alberta")`));
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/div[4]/div[2]/label/input')`), "T7X 0C9");
    
    click(fallback(`checkbox("newsletter")`));
    click(fallback(`checkbox("termsandconditions")`));
    click(fallback(`submit("Submit")`));
    wait(20000);
    assertExists(fallback(`byXPath('//*[text()="Your Profile Has Been Created"]')`));
    
  }

  function PermenantShippingAccountRegistration(){
  
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
    click(fallback(`radio("newShipToAccNo")`));
    click(fallback(`submit("Continue[1]")`));
  wait(5000);
    assertExists(fallback(`byXPath('//*[text()="Tell us about your Organization."]')`));
  
    
  }

  function PermenentShippingAccountTellUsMoreOrganization(){

  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  wait(5000);
  setValue(fallback(`textbox("companyName")`), "Test");
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/div[2]/label/input')`), "Test");

    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/label/input')`), "Test");
            
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/div[3]/label/input')`), "Tornto");
    
    click(fallback(`byXPath('//*[@class="ng-input"]').xy(0.41, 0.27 )`));
    
          click(fallback(`span("Alberta")`));
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/div[4]/div[2]/label/input')`), "T7X 0C9");
  
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-register/mat-stepper/div/div[2]/div[3]/form/div/div[2]/div/label[3]/input')`), "Test");
    
    click(fallback(`byXPath('//*[@class="ng-untouched ng-pristine ng-valid"]')`));
    
    click(fallback(`checkbox("newsletter")`));
    click(fallback(`checkbox("termsandconditions")`));
    click(fallback(`submit("Submit")`));
    wait(20000);
    assertExists(fallback(`byXPath('//*[text()="Your Profile Has Been Created"]')`));
    
  }

  //adding customcatlogproduct to cart page
  function CustomCatlogAddProductToCart(){
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setShadowDOM(true);
  wait(5000);
  //click(fallback(`link("Custom Catalogs")`));
  click(fallback(`link("cx-link")`));
  
    wait(10000);
  click(fallback(`link("QA Automation CC")`));
  click(fallback(`heading1("Custom Catalog Details")`));
  click(fallback(`button("+")`));
  click(fallback(`submit("Add To Cart")`));
  assertExists(fallback(`heading3("Cart Summary")`));
 // assertExists(fallback(`link("414004-315[1]")`));   
 assertExists(fallback(`link("cx-link cart-catalog-link-color")`));
    
  }


  function VerifyAddProductToCartFromPersonalShoppingList(){
    
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    wait(10000);
    click(fallback(`link("Shopping Lists")`));
    click(fallback(`heading1("Shopping Lists")`));
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-shopping-lists/div/div[2]/form/input')`), "Test11");
    wait (1000)
    click(fallback(`submit("Search")`));
    wait (15000)
    assertExists(fallback(`link("Test11")`));
    wait (2000)
    //assertExists(fallback(`link("10536-518[1]")`));
    click(fallback(`link("Add To Cart")`));
    //Add To Cart
    assertExists(fallback(`heading3("Cart Summary")`));
    
  }

  function Verifyaddtocartfromshoppinglistdetailspage(){
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    wait(10000);
    click(fallback(`link("Shopping Lists")`));
    click(fallback(`heading1("Shopping Lists")`));
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-shopping-lists/div/div[2]/form/input')`), "Test11");
    click(fallback(`byXPath('//*[text()=" Search "]')`));
    wait(3000);
    click(fallback(`link("Test11")`));
    wait(3000); 
    //click(fallback(`checkbox({'type':'checkbox'})`));
    click(fallback(`byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[1]/app-shopping-list-details/div[5]/div/app-shopping-list-cart-items-ui/div/div/div/div[1]/div[1]/div/form/input')`));
  wait(2000);
    click(fallback(`submit("Add To Cart")`));
    assertExists(fallback(`link("10536-518[1]")`));
    assertExists(fallback(`heading3("Cart Summary")`));
    
  }

  function VerifyinvoiceresultswithBilltoNumberasAll(){
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    wait(3000);
  click(fallback(`link("Invoices")`));
  assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search/h2')`));
    setSelected(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search/div/div/form/div/div/select')`), "All");
    setSelected(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search/div/div/form/div[4]/select')`), "Last 90 Days");
    click(fallback(`submit("Search")`));
    wait(3000);
    //assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results')`));
    assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/app-invoice-search-results-item/div/div/div/div/a')`));
  }

  function VerifyInvoiceResultsSearchByInvoice(input){
    
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    wait(3000);
  click(fallback(`link("Invoices")`));
  assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search/h2')`));
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search/div/div[2]/form/div[2]/input')`), input);
    click(fallback(`submit("Search[1]")`));
      wait(3000);
    //assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results')`));
  assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/app-invoice-search-results-item/div/div/div/div/a')`));
  }


  function placeorder(){

    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    wait(3000);
    click(fallback(`submit("Proceed to Checkout")`));
    assertExists(fallback(`heading3("Order Summary")`));
    click(fallback(`submit("Continue to Payment")`));
    assertExists(fallback(`byXPath('//*[text()=" Payment Types "]')`));
    click(fallback(`submit("Review Order")`));
    assertExists(fallback(`byXPath('//*[@class="email-header mt-3 mb-3"]')`));
    click(fallback(`byXPath('//*[text()=" Place Order "]')`));
    assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-avtr-order-confirmation-thank-you-message/div/div/div/div[2]/div[2]')`));
    
  }


  function placeorder_Prod(){

    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    wait(3000);
    click(fallback(`submit("Proceed to Checkout")`));
    assertExists(fallback(`heading3("Order Summary")`));
    click(fallback(`submit("Continue to Payment")`));
    assertExists(fallback(`byXPath('//*[text()=" Payment Types "]')`));
    assertExists(fallback(`submit("Review Order")`));
    
  }


  function AddTwoProducts(input){
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true); 
    setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
    click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
    wait(5000);
    click2(fallback(`heading6(/Expand.*/)`));
    //click(fallback(`heading6(0, _in(section({'aria-label':'Product Results List'})))`));
    wait(7000);
    click(fallback(`button("+")`));
    wait(2000);
    click(fallback(`button("+")`));
    click(fallback(`submit("Add to cart")`));
    wait(10000);
    click(fallback(`byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a/cx-icon")`));
    click(fallback(`submit("View My Cart")`));
    assertExists(fallback(`heading3("Cart Summary")`));
  }

  function RecommendedProductsInHomepage(){
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true); 
      wait(10000);
  assertExists(fallback(`div("recently-viewed-title").xy(0.08, 0.59 )`));
    click(fallback(`link("cursor-pointer cx-link")`));
    assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/cx-page-slot/app-breadcrumb')`));

  }

  function NavigatetoProductpagetoSearch(input){
  
    //setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true); 
    setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
    
    click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
    wait(20000);
    assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/cx-page-slot/app-breadcrumb')`));
    log("navigated to pdp page")

  assertExists(fallback(`div("${input}",_below(div("attribute catalog-attribute")))`));
    
    var CatlogNumber=getText(div(input,_below(div("attribute catalog-attribute"))));
    log(CatlogNumber);

  }


  function VerifymasterflexProduct(input){
            
            var CatlogNumber=getText(div(input,_below(div("attribute catalog-attribute"))));
    log(CatlogNumber);

            click(fallback(`button("Accessories",rightOf(div("${input}",_below(div("attribute catalog-attribute")))))`));
            setDescription("Acceseries window");
           // assertExists(fallback(`byXPath('//ngb-modal-window')`));
            click(fallback(`button("Add one more[6]")`));
            click(fallback(`submit("Add to cart[6]")`));
            wait(15000);
   click(fallback(`button("aria-label==Add one more",rightOf(div("${input}",_below(div("attribute catalog-attribute")))))`));
   click(fallback(`button("Add to cart",rightOf(div("${input}",_below(div("attribute catalog-attribute")))))`));
   wait(10000);
   click(fallback(`byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a/cx-icon")`));
    wait(2000);
    click(fallback(`submit("View My Cart")`));

   assertExists(fallback(`heading3("Cart Summary")`));
    
    assertExists(fallback(`link("${input}")`));
    var CartPageCatlogNumber=getText(fallback(`link("${input}")`));
    log(CartPageCatlogNumber);

  if (CartPageCatlogNumber == CatlogNumber){
  log("catlog number is displayed in cartpage");   
  
    }else{
      log("catlognumber is not displayed or page is not loaded")
    }
        
  }

  function NavigatetolengthyProductpagetoSearch(input){
  
    //setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true); 
    setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
    click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
    wait(5000);
    wait(20000);
    assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/cx-page-slot/app-breadcrumb')`));
    log("navigated to pdp page")

  assertExists(fallback(`div("${input}",_below(div("attribute catalog-attribute")))`));
    
    var CatlogNumber=getText(div(input,_below(div("attribute catalog-attribute"))));
    log(CatlogNumber);

  }



  function ProductpageImageValidation(){
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    //assertExists(fallback(`image("VWR®, Graduated Beakers, Polypropylene")`));
    assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-avtr-product-images/cx-media/img')`));
    
  }


  function NewShippingcreatefromPdPage(){
    
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    
    click(fallback(`button("+")`));
    click(fallback(`span("icon-angle")`));
    click(fallback(`link("Add to Shopping List")`));
    assertExists(fallback(`heading5("Add to Shopping List")`));
    
    var NewShoppingList = eval("'TestAutomation'+ Math.floor(Math.random()*1000)");
    
  setValue(fallback(`textbox("NEW_LIST")`,), NewShoppingList);
    click(fallback(`button("Create & Add")`));
    wait(2000);
    click(fallback(`link("Shopping Lists")`));
    wait(2000);
    click(fallback(`heading1("Shopping Lists")`));
    
    setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-shopping-lists/div/div[2]/form/input')`), NewShoppingList);
  click(fallback(`submit("Search")`));
    assertExists(fallback(`link("cx-link[1]")`)); 
    
  }

  function WithoutQtyaddItemtoNewshoppinglist(){

    //setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    //setShadowDOM(true);
    
    click(fallback(`span("icon-angle[2]")`));
    //click(fallback(`span("icon-angle")`));
    //click(fallback(`link("Add to Shopping List")`));
    click(fallback(`link("Add to Shopping List[3]")`));
    assertExists(fallback(`byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table/section[2]/ul/li[2]/div[3]/div[8]/div[1]/div[2]/app-shared-add-to-cart/form/div[1]/cx-form-errors/p')`));
  }


  function WithoutQtyaddItemtoQuote(){

    //setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    //setShadowDOM(true);
    
    click(fallback(`span("icon-angle[2]")`));
    //click(fallback(`span("icon-angle")`));
    //click(fallback(`link("Add to Shopping List")`));
    click(fallback(`link("Add to Quote[3]")`));
    assertExists(fallback(`byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table/section[2]/ul/li[2]/div[3]/div[8]/div[1]/div[2]/app-shared-add-to-cart/form/div[1]/cx-form-errors/p')`));
  }

  function WithoutAddNameinShoppingcart(){
    
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    
    click(fallback(`button("+")`));
    click(fallback(`span("icon-angle")`));
    click(fallback(`link("Add to Shopping List")`));
    assertExists(fallback(`heading5("Add to Shopping List")`));


  }



  function LeftNavigationInvoice(){
  
    setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    click(fallback(`link("Request a Quote")`));
    assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-avtr-request-quote/div/div/div').xy(0.09, 0.62 )`));
    click(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot[2]/app-cms-side-menu/app-side-nav-ui/nav[8]/cx-generic-link/a')`));
  // selectWindow("Avantor is setting science in motion for a better world | Avantor");
    //selectWindow("Avantor is setting science in motion for a better world | Avantor");
    assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search/h2')`,
    `byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[1]/app-invoice-search/h2')`));
    
  }

  function DiffrentProductvalidation(input){
  setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true); 
    setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
    click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
    wait(5000);
  click(fallback(`heading2(1, _in(section({'aria-label':'Product Results List'})))`));
    //click(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot[3]/app-avtr-product-lists/div/section/div/div/div[2]/div[2]/app-avtr-product-list-item/div/div[2]/a/h2')`));
    //assertExists(fallback(`heading6("About this item")`));
    //assertExists(fallback(`byXPath('//*[text()="About this item "]')`));
    assertExists(fallback(`byXPath('//*[text()="Related Information "]')`));
  }


  function ValidatePDPTitile(input){
    
    wait(10000);
    var PDPTitile = getText(div("product-name mb-1"));
    log(PDPTitile);
    log(input);
    
    if(PDPTitile == input){
      wait(3000);
  log("Validated PDP page titile");   
  
    }else{
      log("Page titile should be diffrent or not displayed")
    }
      
    
    
  }

  function ViewCart(){
    wait(10000);
    click(fallback(`byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a/cx-icon")`));
    wait(2000);
    click(fallback(`submit("View My Cart")`));
    assertExists(fallback(`heading3("Cart Summary")`));


    //var CartSummary = _isVisible(fallback(`heading3("Cart Summary")`));
    //log(CartSummary);
    //if (true == CartSummary){
  //log("Verify page titile");   
  
    //}else{
      //log("Page titile should be diffrent or not displayed")
    //}
      
  }

  function AddingSearchcatlogNumberTocartpageInPdp(Catlog){
    
    
    assertExists(fallback(`byXPath('//*[@class="item item-container sticky-header-pdp"]')`));
    log("Verify ordering table displayed in pdp page")
    assertExists(fallback(`div("${Catlog}",_below(div("attribute catalog-attribute")))`));
    
    var CatlogNumber=getText(div(Catlog,_below(div("attribute catalog-attribute"))));
    log(CatlogNumber);

  wait (10000);  
    click(fallback(`button("aria-label==Add one more",rightOf(div("${Catlog}",_below(div("attribute catalog-attribute")))))`));
    log("add qty on searched catlognumber in pdp")
    takePicture(fallback(`button("Add to cart",rightOf(div("${Catlog}",_below(div("attribute catalog-attribute")))))`));
    click(fallback(`button("Add to cart",rightOf(div("${Catlog}",_below(div("attribute catalog-attribute")))))`));
    log("click on add to cart")
    
  wait(10000);
    click(fallback(`byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a/cx-icon")`));
    wait(2000);
    click(fallback(`submit("View My Cart")`));
    assertExists(fallback(`heading3("Cart Summary")`));
    
    assertExists(fallback(`link("${CatlogNumber}")`));
    var CartPageCatlogNumber=getText(fallback(`link("${CatlogNumber}")`));
    log(CartPageCatlogNumber);

  if (CartPageCatlogNumber == CatlogNumber){
  log("catlog number is displayed in cartpage");   
  
    }else{
      log("catlognumber is not displayed or page is not loaded")
    }
        
  }  

  function searchPage_verticalopenreq(input){
    
    setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
    click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
    //assertExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`)); 
    
    var ProductlinkinSearchpage = _isVisible(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`));
    log(ProductlinkinSearchpage);
    if (true == ProductlinkinSearchpage){
    log("Verify productlink is displayed in search results page");   
    assertExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`)); 
    }else{
      log("productlink is not displayed because searched as empty product");
    }  

    
    click(fallback(`link("btn open-req-banner-sidebar-btn")`));
    assertExists(fallback(`div(["Open Requisition / Non-Catalog Requ"])`));
    log("navigated from horizontal open req from search page")
    click(fallback(`image(0, _in(header("cx-header"))).xy(0.64, 0.58 )`)),
    wait(3000);

  }


  function Searchpage_horizontal(input){
    
  setValue(fallback(`textbox(0, _in(header("cx-header")))`), input);
    click(fallback(`custom("cx-icon", "cx-icon fa-search fas")`));
    //assertExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`)); 
    
      var ProductlinkinSearchpage = _isVisible(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`));
    log(ProductlinkinSearchpage);
    if (true == ProductlinkinSearchpage){
  log("Verify productlink is displayed in search results page");   
    assertExists(fallback(`heading2(0, _in(section({'aria-label':'Product Results List'})))`)); 
    }else{
      log("productlink is not displayed because searched as empty product");
    }  

    click(fallback(`link("Click here to Request a Product[1]")`));
    log("navigated from horizontal open req from search page")
    click(fallback(`image(0, _in(header("cx-header"))).xy(0.64, 0.58 )`)),
    wait(3000);
    
    
  }



  function OpenReqBillInformation(){
  click(fallback(`link("Open Requisition")`));
  click(fallback(`byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-open-req-form/div/app-open-req-info-sections/div/div/div[1]')`));
  setDescription("po number");
  click(fallback(`byXPath("//ng-select[@id='poNumber']/div/div/div[2]")`));
  setDescription("select drop down po number");
  click(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-open-req-form/div/app-open-req-info-sections/div/form/div[3]/div[2]/label/ng-select/ng-dropdown-panel/div/div[2]/div')`));
  setDescription("Change code");
  click(fallback(`div("ng-input[4]")`));
  setDescription("drop down select in change code");
  click(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-open-req-form/div/app-open-req-info-sections/div/form/div[3]/div[2]/label[2]/ng-select/ng-dropdown-panel/div/div[2]/div')`));
  setDescription("Refrence Number");
  click(fallback(`byXPath("//ng-select[@id='referenceNumber']/div/div/div[2]")`));
  setDescription("Select drop down refrence number");
  click(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-open-req-form/div/app-open-req-info-sections/div/form/div[3]/div[2]/label[3]/ng-select/ng-dropdown-panel/div/div[2]/div')`));

  setDescription("ship to attention");
  click(fallback(`byXPath("//ng-select[@id='shipToAttention']/div/div/div[2]")`));
  setDescription("Select drop down ship to attention");
  click(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-open-req-form/div/app-open-req-info-sections/div/form/div[2]/div[2]/label[2]/ng-select/ng-dropdown-panel/div/div[2]/div')`));


  }


  function OpenReqTellUsMore(){

  var TellusMorelink = eval("'TestAutomation'+ Math.floor(Math.random()*1000) +'@yopmail.com'");
  //setValue(fallback(`textbox("form-control ng-dirty ng-untouched ng-valid")`), TellusMorelink);
  setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-open-req-form/div/open-req-product-search/div/form/div/input')`), TellusMorelink);

  assertExists(fallback(`submit("Tell us more")`));
  click(fallback(`submit("Tell us more")`));
  assertExists(fallback(`heading3("Give Us a Few More Details")`));


  }


  function OpenReqGiveUsFewMoredetails(){
  assertExists(fallback(`heading3("Give Us a Few More Details")`));  
  var Descre = eval("'TestAutomation'+ Math.floor(Math.random()*1000) +'Test'");  
  setValue(fallback(`textbox("description")`), Descre);
  setValue(fallback(`textbox("manufacturer")`), "vwr");
  click(fallback(`italic("fa-calendar-days fa-solid")`));
  click(fallback(`span(0, _in(button({'title':'Next month'})))`));
  click(fallback(`div("1[1]")`));
  click(fallback(`byXPath('/html/body/ngb-modal-window/div/div/app-give-us-few-more-details/div/form/div[2]/label/ng-select/div/div/div[2]')`));
  //click(fallback(`byXPath('/html/body/ngb-modal-window/div/div/app-give-us-few-more-details/div/form/div[2]/label/ng-select/ng-dropdown-panel/div').xy(0.88, 0.68 )`,
  click(fallback(`byXPath('//*[text()="CS"]')`));
  setValue(fallback(`byXPath('//*[@name="quantity"]')`),"1");
  click(fallback(`label("Est Price *")`));
  setValue(fallback(`byXPath('//*[@name="estPrice"]')`), "167");
  click(fallback(`submit("btn btn-block btn-primary cx-btn")`));

  var Description=getText(byXPath('//*[@class="col-6 col-md-12 text-center col-lg-12 col-xl-12 text-break"]'));
  log(Description);

  if (Description == Descre){
  log("Give Us More details are updated after save the order table is displaying");   
  
    }else{
      log("Give Us More details are not updated after save the order table is not displaying");  
    }
  }


  function OpenReqViewmatch(){
  //setValue(fallback(`textbox("form-control ng-dirty ng-untouched ng-valid")`), "414");
  setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-open-req-form/div/open-req-product-search/div/form/div/input')`), "414");
  assertExists(fallback(`submit("View Matches")`));
  click(fallback(`submit("View Matches")`));
  assertExists(fallback(`div("Resolving Open Requisition Item")`));

  }

  function OpenReqResolvingOpenReqItem(){
  assertExists(fallback(`div("Resolving Open Requisition Item")`));
  click(fallback(`button("+")`));
  click(fallback(`submit("Add")`));
  assertExists(fallback(`div("1      414")`));

  }



  function addingthesamenoncatalognumberproductforwhichalreadyopenreq(){
  var TellusMorelink = eval("'TestAutomation'+ Math.floor(Math.random()*1000) +'@yopmail.com'");
  //setValue(fallback(`textbox("form-control ng-dirty ng-untouched ng-valid")`), TellusMorelink);
  setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-open-req-form/div/open-req-product-search/div/form/div/input')`), TellusMorelink);

  assertExists(fallback(`submit("Tell us more")`));
  click(fallback(`submit("Tell us more")`));
  assertExists(fallback(`heading3("Give Us a Few More Details")`));

  OpenReqGiveUsFewMoredetails()

  click(fallback(`span("Comments (150 characters or less)")`));
  click(fallback(`submit("btn btn-primary open-req-submit")`));
  assertExists(fallback(`heading3("Cart Summary")`));
  assertExists(fallback(`div("Open Requisition Items")`));

  OpenReqBillInformation()

  setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-open-req-form/div/open-req-product-search/div/form/div/input')`), TellusMorelink);
  assertExists(fallback(`submit("View Matches")`));
  click(fallback(`submit("View Matches")`));
  assertExists(fallback(`div("Resolving Open Requisition Item")`));
  click(fallback(`button("+")`));
  click(fallback(`submit("Add")`));
  click(fallback(`span("Comments (150 characters or less)")`));
  click(fallback(`submit("btn btn-primary open-req-submit")`));
  assertExists(fallback(`heading3("Cart Summary")`));
  assertExists(fallback(`div("Open Requisition Items")`));
  assertExists(fallback(`div("standard-header")`));


  }

  function InvoicePaybyCreditcard(){

   assertExists(fallback(`submit("Pay by Credit Card")`));
  wait(2000);
  setSelected(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/select')`),"Open");
  assertExists(fallback(`div("Open")`));
  log("Click on invoice check box")
  click(fallback(`checkbox("ml-1 mt-0 ng-pristine ng-untouched ng-valid")`));
  log("click on pay by credit card option")
  click(fallback(`submit("btn btn-primary")`));
  log("verify pay by invoice option is displaying or not")
  assertExists(fallback(`span("Pay Invoices")`));
  assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/app-invoice-payment/app-invoice-search-results-item/div/div/div/div/a')`));
  log("get the invoice number")
  var InvoiceNumber=getText(byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/app-invoice-payment/app-invoice-search-results-item/div/div/div/div/a'));
  log(InvoiceNumber);
  wait(5000);
  log("add the credit card details")
  click(fallback(`submit("+Add a new card")`));
  assertExists(fallback(`heading3("Add a New Credit Card")`));
  setSelected(fallback(`select("c-ct")`), "MasterCard");
  setValue(fallback(`byXPath('//*[@id="c-cardname"]')`),"Test");
  setValue(fallback(`byXPath('//*[@id="c-cardnumber"]')`), "5424180279791773");
  setSelected(fallback(`byXPath('//*[@id="c-exmth"]')`), "Apr");
  setSelected(fallback(`byXPath('//*[@id="c-exyr"]')`), "2026");
  setValue(fallback(`byXPath('//*[@id="c-cvv"]')`), "208");
  click(fallback(`byXPath('//ngb-modal-window/div/div/app-add-credit-card-dialog/div/div/div[3]/div[1]/input')`));
  click(fallback(`submit("Continue")`));
  //click(fallback(`radio("creditCardType[19]")`));
  click(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/app-invoice-payment/div[3]/div[20]/div/label/input')`));
  click(fallback(`div("align-end cvv-section")`));
  setValue(fallback(`password("ng-dirty ng-untouched ng-valid")`),"208");
  click(fallback(`submit("btn btn-primary")`));
  wait(10000);
  log("After click on submit total paid amount should be displayed");
  assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/app-invoice-payment/div[3]').xy(0.86, 0.47 )`));
  wait(10000);
  click(fallback(`link("Return to Invoice Search")`));
  click(fallback(`link("Return to Invoice Search")`));
  setValue(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search/div/div[2]/form/div[2]/input')`));
  click(fallback(`submit("Search[1]")`));
  assertExists(fallback(`byXPath('//*[text()=" Paid "]').xy(0.54, 0.31 )`));

  }


  function InvoiceBillingAddresschange(){
   assertExists(fallback(`submit("Pay by Credit Card")`));
   wait(2000);
   setSelected(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/select')`),"Open");
   assertExists(fallback(`div("Open")`));
   log("Click on invoice check box")
   click(fallback(`checkbox("ml-1 mt-0 ng-pristine ng-untouched ng-valid")`));
   log("click on pay by credit card option")
   click(fallback(`submit("btn btn-primary")`));
   log("verify pay by invoice option is displaying or not")
   assertExists(fallback(`span("Pay Invoices")`));
   assertExists(fallback(`byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/app-invoice-payment/app-invoice-search-results-item/div/div/div/div/a')`));
   log("get the invoice number")
   var InvoiceNumber=getText(byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-invoice-search-results/app-invoice-payment/app-invoice-search-results-item/div/div/div/div/a'));
   log(InvoiceNumber);
   wait(5000);
   log("add the credit card details")
   click(fallback(`submit("+Add a new card")`));
   assertExists(fallback(`heading3("Add a New Credit Card")`));


  }






  
  function GlobalWebAddingSearchcatlogNumberTocartpageInPdp(catlog){



    setValue(fallback(`byXPath('//*[@id="keyword"]')`),catlog);
    //click(fallback(`byXPath('//*[@class="icon icon-lg"]')`));
    click2(fallback(`svg("icon icon-lg")`));
    wait(30000);
    assertExists(fallback(`span("${catlog}",_below(tableHeader("VWR Catalog Number")))`));
    //(fallback(`span("${Catlog}",_below(tableHeader("VWR Catalog Number")))`));
  
    //var CatlogNumber=getText(div(Catlog,_below(div("attribute catalog-attribute"))));
    //log(CatlogNumber);


  
    click(fallback(`button("input-number-increment btn btn-default btn-number",rightOf(span("${catlog}",_below(tableHeader("VWR Catalog Number")))))`));
    click(fallback(`byXPath('//*[@id="addItemToCart"]')`));
    wait (10000);
    click(fallback(`span("cart-label")`));
    click(fallback(`link("View Cart")`));
    wait(5000)
    assertExists(fallback(`heading1("Shopping Cart")`));
    assertExists(fallback(`link("${catlog}")`));
  }


  function Globalweblogin(Url, Username, Password){
  //setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
  setVariablesIfNeeded('{ds}/../../Test Data/TestInput.csv','HashDPL',0,'en_US');
   
       setShadowDOM(true);
       navigateTo(Url);
       click(fallback(`submit("Log In")`));
       setValue(fallback(`byXPath('//*[@id="email"]')`), Username);
       setValue(fallback(`byXPath('//*[@id="password"]')`), Password);
       click(fallback(`byXPath('//*[@id="btn-login"]')`));
       assertExists(fallback(`heading1("Welcome  				Uva US-GQ1")`));
  }


function GlobalwebclearCart(){


  click(fallback(`byXPath('//*[@id="cart-dropdown"]')`));
  wait(50000)
  let value = _isVisible(fallback(`link("View Cart")`));
    log(value);
  if (true == value){
  wait(5000)
    click(fallback(`link("View Cart")`));
    click(fallback(`link("Clear Cart[1]")`));
    assertExists(fallback(`listItem("Successfully cleared your cart")`));
    wait(5000)
  assertExists(fallback(`strong("Your Cart is Empty")`));
   
   
   //log(cart is cleared);
}
else {
   assertExists(fallback(`link("0  items in your cart")`));
  
}
 
}
