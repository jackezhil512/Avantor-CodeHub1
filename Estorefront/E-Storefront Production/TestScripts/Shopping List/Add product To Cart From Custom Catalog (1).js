/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setVariablesIfNeeded('{ds}/../../TestData/InputSheet_Production_US.csv','HashDPL',0,'en_US');
setShadowDOM(true);
setFindOnlyVisible(false);
setShadowDOM(true);
include("{ds}/../../Reusable Function library/ReusableFunction.js");
Login($URL,$UserName,$Password);
//ClearCart();
CustomCatlogAddProductToCart();
setDescription("Cartpage CatlogNumber Link");
assertExists(fallback(`link("cart-catalog-link-color cx-link")`,
   `link("/ca/en/product/6064875/vwr-ziptop-bubble-6x8-cs50[1]")`,
   `link("89072-316[1]")`,
   `byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[1]/app-avtr-cart-details/div[3]/app-avtr-cart-item-list/div[4]/div/app-avtr-cart-item/div[1]/div/div[1]/div[1]/div[2]/a')`,
   `byXPath('//*[@class="cx-link cart-catalog-link-color"]')`,
   `byXPath('//*[text()=" 89072-316"]')`,
   `byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-avtr-cart-details/div[3]/app-avtr-cart-item-list/div[4]/div/app-avtr-cart-item/div/div/div/div/div[2]/a')`,
   `byXPath("/html[1]/body[1]/app-root[1]/cx-storefront[@class='CartPageTemplate stop-navigating']/main[@class='mouse-focus']/cx-page-layout[@class='CartPageTemplate']/cx-page-slot[@class='TopContent has-components']/app-avtr-cart-details[1]/div[@class='cart-details-wrapper']/app-avtr-cart-item-list[1]/div[@class='cx-item-list-row']/div[@class='cx-item-list-items']/app-avtr-cart-item[1]/div[1]/div[@class='cx-info']/div[@class='align-items-center cx-info-container row']/div[@class='product-info col-md-3 col-lg-3 col-xl-3']/div[@class='cx-code d-none d-xl-block d-md-block d-lg-block']/a[@class='cx-link cart-catalog-link-color']")`,
   `byJQuery('div[class="cx-info"] > div[class="align-items-center cx-info-container row"] > div[class="product-info col-md-3 col-lg-3 col-xl-3"] > div[class="cx-code d-none d-xl-block d-md-block d-lg-block"] > a[class="cx-link cart-catalog-link-color"]')`,
   `byJQuery('.cx-info > .align-items-center.cx-info-container.row > .product-info.col-md-3.col-lg-3.col-xl-3 > .cx-code.d-none.d-xl-block.d-md-block.d-lg-block > .cx-link.cart-catalog-link-color')`));
