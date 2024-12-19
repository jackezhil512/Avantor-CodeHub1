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
ClearCart();
NavigatetoProductpagetoSearch($ProductAccessories);
wait(3000);
click(fallback(`submit("Accessories")`,
   `byXPath('//*[@class="btn btn-accessories lg-accessories btn-white btn-block font-bold my-2"]')`,
   `byXPath('//*[text()=" Accessories "]')`,
   `byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table/section[2]/ul/li[2]/div[6]/div[4]/button')`,
   `byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table[1]/section[2]/ul/li[2]/div[6]/div[4]/button')`,
   `byXPath("/html[1]/body[1]/app-root[1]/cx-storefront[@class='ProductDetailsPageTemplate stop-navigating']/main[@class='mouse-focus']/cx-page-layout[@class='ProductDetailsPageTemplate']/cx-page-slot[@class='orderTableComponent has-components']/app-avtr-product-variant-details[1]/app-avtr-product-variant-table[1]/section[2]/ul[@class='collection collection-container header']/li[@class='item item-container spec-border catalog-highlight-color']/div[@class='d-flex justify-content-start align-items-center pl-2']/div[@class='accessories-row-pdp']/button[@class='btn btn-accessories lg-accessories btn-white btn-block font-bold my-2']")`,
   `byJQuery('.collection.collection-container.header > .item.item-container.spec-border.catalog-highlight-color > .d-flex.justify-content-start.align-items-center.pl-2 > .accessories-row-pdp > .btn.btn-accessories.lg-accessories.btn-white.btn-block.font-bold.my-2')`,
   `byJQuery('ul[class="collection collection-container header"] > li[class="item item-container spec-border catalog-highlight-color"] > div[class="d-flex justify-content-start align-items-center pl-2"] > div[class="accessories-row-pdp"] > button[class="btn btn-accessories lg-accessories btn-white btn-block font-bold my-2"]')`,
   `submit("btn btn-accessories btn-block btn-white font-bold lg-accessories my-2")`));
wait(5000);
click(fallback(`button("+[24]")`,
   `byXPath('/html/body/ngb-modal-window/div/div/app-product-accessories/div/app-avtr-product-variant-table/section[2]/ul/li[2]/div/div[6]/div/app-shared-add-to-cart/form/div/cx-item-counter/button[2]')`,
   `byXPath('//ngb-modal-window/div/div/app-product-accessories/div/app-avtr-product-variant-table/section[2]/ul/li[2]/div/div[6]/div/app-shared-add-to-cart/form/div[1]/cx-item-counter/button[2]')`,
   `byXPath("/html[1]/body[@class='modal-open']/ngb-modal-window[@class='accessories-dialog d-block modal fade show']/div[@class='modal-dialog modal-dialog-centered modal-xl']/div[@class='modal-content']/app-product-accessories[1]/div[1]/app-avtr-product-variant-table[@class='show-header']/section[2]/ul[@class='collection collection-container header']/li[@class='item item-container spec-border']/div[1]/div[@class='attribute-container multi-value']/div[@class='attribute display-price-sm-grid1']/app-shared-add-to-cart[1]/form[@class='ng-pristine ng-valid ng-touched']/div[@class='quantity mb-2']/cx-item-counter[@class='avtr-item-counter']/button[2]")`));
wait(2000);
click(fallback(`submit("Add to cart[1]")`,
   `byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table/section[2]/ul/li[2]/div[5]/div[11]/div/div[2]/app-shared-add-to-cart/form/div[2]/button')`,
   `byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table[1]/section[2]/ul/li[2]/div[5]/div[11]/div/div[2]/app-shared-add-to-cart/form/div[2]/button')`,
   `byXPath("/html[1]/body[1]/app-root[1]/cx-storefront[@class='ProductDetailsPageTemplate stop-navigating']/main[@class='mouse-focus']/cx-page-layout[@class='ProductDetailsPageTemplate']/cx-page-slot[@class='orderTableComponent has-components']/app-avtr-product-variant-details[1]/app-avtr-product-variant-table[1]/section[2]/ul[@class='collection collection-container header']/li[@class='item item-container spec-border catalog-highlight-color']/div[5]/div[@class='attribute-container multi-value']/div[@class='attribute display-price-sm-grid1']/div[2]/app-shared-add-to-cart[1]/form[@class='ng-valid ng-dirty ng-touched']/div[@class='addtocart-btn-wrapper']/button[@class='btn btn-primary btn-block font-bold']")`,
   `byJQuery('.ng-valid.ng-dirty.ng-touched > .addtocart-btn-wrapper > .btn.btn-primary.btn-block.font-bold')`,
   `byJQuery('form[class="ng-valid ng-dirty ng-touched"] > div[class="addtocart-btn-wrapper"] > button[class="btn btn-primary btn-block font-bold"]')`,
   `submit("btn btn-block btn-primary font-bold[1]")`));
click(fallback(`button("+[1]")`,
   `byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table/section[2]/ul/li[2]/div[5]/div[11]/div/div[2]/app-shared-add-to-cart/form/div/cx-item-counter/button[2]')`,
   `byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table[1]/section[2]/ul/li[2]/div[5]/div[11]/div/div[2]/app-shared-add-to-cart/form/div[1]/cx-item-counter/button[2]')`,
   `byXPath("/html[1]/body[1]/app-root[1]/cx-storefront[@class='ProductDetailsPageTemplate stop-navigating']/main[1]/cx-page-layout[@class='ProductDetailsPageTemplate']/cx-page-slot[@class='orderTableComponent has-components']/app-avtr-product-variant-details[1]/app-avtr-product-variant-table[1]/section[2]/ul[@class='collection collection-container header']/li[@class='item item-container spec-border catalog-highlight-color']/div[5]/div[@class='attribute-container multi-value']/div[@class='attribute display-price-sm-grid1']/div[2]/app-shared-add-to-cart[1]/form[@class='ng-untouched ng-pristine ng-valid']/div[@class='quantity mb-2']/cx-item-counter[@class='avtr-item-counter']/button[2]")`));
click(fallback(`submit("btn btn-block btn-primary font-bold[1]")`,
   `submit("Add to cart[1]")`,
   `byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table/section[2]/ul/li[2]/div[5]/div[11]/div/div[2]/app-shared-add-to-cart/form/div[2]/button')`,
   `byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[5]/app-avtr-product-variant-details/app-avtr-product-variant-table[1]/section[2]/ul/li[2]/div[5]/div[11]/div/div[2]/app-shared-add-to-cart/form/div[2]/button')`,
   `byXPath("/html[1]/body[1]/app-root[1]/cx-storefront[@class='ProductDetailsPageTemplate stop-navigating']/main[@class='mouse-focus']/cx-page-layout[@class='ProductDetailsPageTemplate']/cx-page-slot[@class='orderTableComponent has-components']/app-avtr-product-variant-details[1]/app-avtr-product-variant-table[1]/section[2]/ul[@class='collection collection-container header']/li[@class='item item-container spec-border catalog-highlight-color']/div[5]/div[@class='attribute-container multi-value']/div[@class='attribute display-price-sm-grid1']/div[2]/app-shared-add-to-cart[1]/form[@class='ng-valid ng-dirty ng-touched']/div[@class='addtocart-btn-wrapper']/button[@class='btn btn-primary btn-block font-bold']")`,
   `byJQuery('.ng-valid.ng-dirty.ng-touched > .addtocart-btn-wrapper > .btn.btn-primary.btn-block.font-bold')`,
   `byJQuery('form[class="ng-valid ng-dirty ng-touched"] > div[class="addtocart-btn-wrapper"] > button[class="btn btn-primary btn-block font-bold"]')`));
setValue(fallback(`numberbox("ng-pristine ng-touched ng-valid")`,
   `byXPath('//*[@class="ng-pristine ng-valid ng-touched"]')`,
   `byXPath('/html/body/ngb-modal-window/div/div/app-avtr-add-to-cart-dialog/div/div/div[2]/div/div/app-avtr-cart-item/div/div[2]/div/div[4]/div/div/cx-item-counter/input')`,
   `byXPath('//ngb-modal-window/div/div/app-avtr-add-to-cart-dialog/div/div/div[2]/div/div[1]/app-avtr-cart-item/div[1]/div[2]/div[1]/div[4]/div/div/cx-item-counter/input')`,
   `byXPath("/html[1]/body[@class='modal-open']/ngb-modal-window[@class='d-block modal shared-cart fade']/div[@class='modal-dialog modal-dialog-centered modal-lg']/div[@class='modal-content']/app-avtr-add-to-cart-dialog[1]/div[@class='cx-modal-container']/div[@class='cx-modal-content']/div[@class='cx-dialog-body modal-body']/div[@class='cx-dialog-row']/div[@class='cx-dialog-item col-sm-12 col-md-6']/app-avtr-cart-item[1]/div[@class='row']/div[@class='cx-info col-sm-10']/div[@class='align-items-center cx-info-container']/div[4]/div[@class='cx-quantity col-md-3 col-lg-3 col-xl-3 pre-cart-pop-item-counter']/div[@class='cx-value']/cx-item-counter[1]/input[@class='ng-pristine ng-valid ng-touched']")`,
   `byJQuery('.ng-pristine.ng-valid.ng-touched')`,
   `byJQuery('input[class="ng-pristine ng-valid ng-touched"]')`,
   `numberbox({'min':'1'})`),"1");
click(fallback(`byXPath('/html/body/app-root/cx-storefront/header/cx-page-layout/cx-page-slot[6]/app-avtr-mini-cart/div/a')`,
   `link(51, _in(header({'id':'cx-header'})))`,
   `link("1  Total : $13,398.32")`,
   `byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div/a")`,
   `byXPath("id('cx-header')/cx-page-layout[@class='header']/cx-page-slot[@class='MiniCart has-components']/app-avtr-mini-cart[1]/div[1]/a[1]")`,
   `link({'aria-label':'1 item currently in your cart'})`,
   `link(51, _in(header("cx-header")))`));
click(fallback(`submit("View My Cart")`,
   `submit(3, _in(header("cx-header")))`,
   `submit(3, _in(header({'id':'cx-header'})))`,
   `byXPath('//*[@class="col-md-6 btn btn-primary"]')`,
   `byXPath('//*[text()=" View My Cart "]')`,
   `byXPath('/html/body/app-root/cx-storefront/header/cx-page-layout/cx-page-slot[6]/app-avtr-mini-cart/div[2]/div/div[2]/div[4]/button')`,
   `byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[6]/app-avtr-mini-cart/div[2]/div/div[2]/div[4]/button")`,
   `byXPath("id('cx-header')/cx-page-layout[@class='header']/cx-page-slot[@class='MiniCart has-components']/app-avtr-mini-cart[1]/div[@class='minicart-menu minicart-menu-right']/div[@class='mini-cart']/div[2]/div[@class='text-right']/button[@class='col-md-6 btn btn-primary']")`,
   `byJQuery('.text-right > .col-md-6.btn.btn-primary')`,
   `byJQuery('div[class="text-right"] > button[class="col-md-6 btn btn-primary"]')`,
   `submit("btn btn-primary col-md-6")`));
assertExists(fallback(`byXPath('//*[text()=" Accessories for 10791-616 "]')`,
   `byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[1]/app-avtr-cart-details/div[3]/app-avtr-cart-item-list/div[3]/div/app-avtr-cart-item/div[4]/a')`,
   `byXPath("/html[1]/body[1]/app-root[1]/cx-storefront[@class='stop-navigating CartPageTemplate']/main[@class='mouse-focus']/cx-page-layout[@class='CartPageTemplate']/cx-page-slot[@class='TopContent has-components']/app-avtr-cart-details[1]/div[@class='cart-details-wrapper ng-star-inserted']/app-avtr-cart-item-list[1]/div[@class='cx-item-list-row ng-star-inserted']/div[@class='cx-item-list-items ng-star-inserted']/app-avtr-cart-item[@class='ng-star-inserted']/div[@class='row cx-view-cart-accessories ng-star-inserted']/a[1]")`,
   `link("Accessories for 10791-616")`,
   `byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot/app-avtr-cart-details/div[3]/app-avtr-cart-item-list/div[3]/div/app-avtr-cart-item/div[4]/a')`));
