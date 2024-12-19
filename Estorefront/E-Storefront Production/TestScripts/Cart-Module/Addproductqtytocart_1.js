/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
navigateTo("https://avantorsciences.com/ca/ea/");
click(fallback(`submit("Accept all cookies")`,
   `submit("btn btn-block btn-primary font-bold")`,
   `byXPath('//app-root/cx-storefront/footer/cx-page-layout/cx-page-slot/app-consent-banner/div/div[2]/div/div[1]/button')`,
   `byXPath('//*[@class="btn btn-primary btn-block font-bold"]')`,
   `byXPath('//*[text()=" Accept all cookies "]')`,
   `byXPath('/html/body/app-root/cx-storefront/footer/cx-page-layout/cx-page-slot/app-consent-banner/div/div[2]/div/div/button')`,
   `byXPath("/html[1]/body[1]/app-root[@class='cxFeat_a11yMobileVisibleFocus cxFeat_a11yOrganizationsBanner']/cx-storefront[@class='stop-navigating ContentNoBreadcrumbTemplate']/footer[@class='mouse-focus']/cx-page-layout[@class='footer']/cx-page-slot[@class='Footer has-components']/app-consent-banner[1]/div[@class='consent-banner']/div[@class='cookie-content']/div[@class='row']/div[@class='col-md-5 col-lg-4 col-xs-12 consent-margin mt-3']/button[@class='btn btn-primary btn-block font-bold']")`,
   `submit({'type':'submit'})`,
   `byJQuery('div[class="consent-banner"] > div[class="cookie-content"] > div[class="row"] > div[class="col-md-5 col-lg-4 col-xs-12 consent-margin mt-3"] > button[class="btn btn-primary btn-block font-bold"]')`,
   `byJQuery('.consent-banner > .cookie-content > .row > .col-md-5.col-lg-4.col-xs-12.consent-margin.mt-3 > .btn.btn-primary.btn-block.font-bold')`));
click(fallback(`image("hybris Accelerator")`,
   `image("https://p2.occapi.avantorsciences.com/medias/logo-hybris-b2b-responsive.svg?context=bWFzdGVyfGltYWdlc3w1MjUzM3xpbWFnZS9zdmcreG1sfGFEUmxMMmd5T1M4NU5EazNNRFk0TURFeE5UVXdMMnh2WjI5ZmFIbGljbWx6WDJJeVlsOXlaWE53YjI1emFYWmxMbk4yWnd8YTU2NjJmZmQ2ZTJmYzRjYmJhZTk0NGM2Nzg3Y2M1Y2Q4YTJmZDkzY2FiOGQwNGZhOWFiMjA5YTkzMjE3OWE4OQ").xy(0.69, 0.49 )`,
   `byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[1]/app-banner/cx-generic-link/a/app-media/img").xy(0.69, 0.49 )`,
   `byXPath('/html/body/app-root/cx-storefront/header/cx-page-layout/cx-page-slot/app-banner/cx-generic-link/a/app-media/img').xy(0.69, 0.49 )`,
   `byXPath("id('cx-header')/cx-page-layout[@class='header']/cx-page-slot[@class='SiteLogo has-components']/app-banner[1]/cx-generic-link[1]/a[1]/app-media[@class='is-initialized']/img[1]").xy(0.69, 0.49 )`,
   `image({'src':'https://p2.occapi.avantorsciences.com/medias/logo-hybris-b2b-responsive.svg?context=bWFzdGVyfGltYWdlc3w1MjUzM3xpbWFnZS9zdmcreG1sfGFEUmxMMmd5T1M4NU5EazNNRFk0TURFeE5UVXdMMnh2WjI5ZmFIbGljbWx6WDJJeVlsOXlaWE53YjI1emFYWmxMbk4yWnd8YTU2NjJmZmQ2ZTJmYzRjYmJhZTk0NGM2Nzg3Y2M1Y2Q4YTJmZDkzY2FiOGQwNGZhOWFiMjA5YTkzMjE3OWE4OQ'}).xy(0.69, 0.49 )`,
   `byJQuery('img[alt="hybris Accelerator"]').xy(0.69, 0.49 )`,
   `image("hybris Accelerator").xy(0.69, 0.49 )`));
setValue(fallback(`textbox(0, _below(label("searchbox")))`,
   `byXPath("id('cx-header')/cx-page-layout[@class='header']/cx-page-slot[@class='SearchBox has-components']/app-avtr-search-box[1]/label[@class='searchbox']/input[1]")`,
   `byXPath("//header[@id='cx-header']/cx-page-layout[1]/cx-page-slot[2]/app-avtr-search-box/label/input")`,
   `byXPath('/html/body/app-root/cx-storefront/header/cx-page-layout/cx-page-slot[2]/app-avtr-search-box/label/input')`,
   `textbox({'autocomplete':'off'})`),"beakers{{ENTER}}");
//click(fallback(`path(0, _in(submit("hj-survey-toggle-1"))).xy(0.42, 0.05 )`,
//   `path(0, _in(submit({'aria-label':'Hide survey'}))).xy(0.42, 0.05 )`,
//   `path({'fill':'#3e4a44'}).xy(0.42, 0.05 )`));
wait(20000, 'isVisible(heading6(["Expand"]))');
click2(fallback(`heading6(["Expand"])`,
   `heading6("Expand 8 Items")`,
   `heading6("accordion-heading")`,
   `byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[2]/app-avtr-product-lists/div/section/div/div/div[2]/div[3]/app-avtr-product-list-item[1]/div/div[3]/div/avtr-accordion-item/div/h6')`,
   `byXPath('//*[@class="accordion-heading"]')`,
   `byXPath('//*[text()=" Expand 8 Items "]')`,
   `byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot[2]/app-avtr-product-lists/div/section/div/div/div[2]/div[3]/app-avtr-product-list-item/div/div[3]/div/avtr-accordion-item/div/h6')`,
   `byXPath("/html[1]/body[1]/app-root[@class='cxFeat_a11yMobileVisibleFocus cxFeat_a11yOrganizationsBanner cxFeat_a11ySortingOptionsTruncation cxFeat_a11yExpandedFocusIndicator cxFeat_a11yFocusableCarouselControls']/cx-storefront[@class='ProductListPageTemplate stop-navigating']/main[@class='mouse-focus']/cx-page-layout[@class='ProductListPageTemplate']/cx-page-slot[@class='ProductListSlot has-components']/app-avtr-product-lists[1]/div[@class='cx-page']/section[@class='cx-page-section']/div[@class='container']/div[@class='row']/div[@class='col-12 col-lg-12']/div[@class='cx-product-container']/app-avtr-product-list-item[@class='cx-product-search-list']/div[@class='row']/div[@class='w-100']/div[@class='search-sm-accordion accordion avtr-product-accordion']/avtr-accordion-item[1]/div[@class='accordion-item']/h6[@class='accordion-heading']")`,
   `heading6({'tabindex':'0'})`,
   `byJQuery('div[class="accordion-item"] > h6[class="accordion-heading"]')`,
   `byJQuery('.accordion-item > .accordion-heading')`));
wait(20000,'isVisible(button("Add one more"))');
focus(button("Add one more"));
click2(fallback(`button("Add one more")`));
wait(20000);
click2(fallback(`submit("Add to cart")`,
   `submit("btn btn-block btn-primary font-bold text-center")`,
   `byXPath('//app-root/cx-storefront/main/cx-page-layout/cx-page-slot[2]/app-avtr-product-lists/div/section/div/div/div[2]/div[3]/app-avtr-product-list-item[1]/div/div[3]/div/avtr-accordion-item/div/div/app-avtr-product-variant-table/section[2]/ul/li[2]/div[3]/div[8]/div[1]/div[2]/app-shared-add-to-cart/form/div[2]/button')`,
   `byXPath('/html/body/app-root/cx-storefront/main/cx-page-layout/cx-page-slot[2]/app-avtr-product-lists/div/section/div/div/div[2]/div[3]/app-avtr-product-list-item/div/div[3]/div/avtr-accordion-item/div/div/app-avtr-product-variant-table/section[2]/ul/li[2]/div[3]/div[8]/div/div[2]/app-shared-add-to-cart/form/div[2]/button')`,
   `byXPath("/html[1]/body[1]/app-root[@class='cxFeat_a11yMobileVisibleFocus cxFeat_a11yOrganizationsBanner cxFeat_a11ySortingOptionsTruncation cxFeat_a11yExpandedFocusIndicator cxFeat_a11yFocusableCarouselControls']/cx-storefront[@class='ProductListPageTemplate stop-navigating']/main[@class='mouse-focus']/cx-page-layout[@class='ProductListPageTemplate']/cx-page-slot[@class='ProductListSlot has-components']/app-avtr-product-lists[1]/div[@class='cx-page']/section[@class='cx-page-section']/div[@class='container']/div[@class='row']/div[@class='col-12 col-lg-12']/div[@class='cx-product-container']/app-avtr-product-list-item[@class='cx-product-search-list']/div[@class='row']/div[@class='w-100']/div[@class='search-sm-accordion accordion avtr-product-accordion']/avtr-accordion-item[1]/div[@class='accordion-item active']/div[@class='accordion-item-wrapper active']/app-avtr-product-variant-table[1]/section[2]/ul[@class='collection collection-container header']/li[@class='item item-container spec-border']/div[3]/div[@class='attribute-container multi-value']/div[@class='attribute display-price-sm-grid1 border-attribute']/div[2]/app-shared-add-to-cart[1]/form[@class='ng-untouched ng-valid ng-dirty']/div[@class='addtocart-btn-wrapper']/button[@class='btn btn-primary btn-block font-bold text-center']")`,
   `submit({'type':'submit'})`,
   `byJQuery('form[class="ng-untouched ng-valid ng-dirty"] > div[class="addtocart-btn-wrapper"] > button[class="btn btn-primary btn-block font-bold text-center"]')`,
   `byJQuery('.ng-untouched.ng-valid.ng-dirty > .addtocart-btn-wrapper > .btn.btn-primary.btn-block.font-bold.text-center')`));
