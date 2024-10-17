/**
 * @aiq.testdesigner
 * This script requires AIQ Test Designer
 */
var operationValue;

function Login(url, username, password) {
     setVariablesIfNeeded('{ds}/../../Test Data/InputSheet_Regreesion.csv','HashDPL',0,'en_US');
    setShadowDOM(true);
    navigateTo(url);
    wait(3000);
    click(text(submit("Accept all cookies")));
    click(text(link("/ca/en/login")));
    wait(5000);
    setValue(fallback(`byXPath('//*[@id="email"]')`), username);
    setValue(fallback(`byXPath('//*[@id="password"]')`), password);
    click(fallback(`byXPath('//*[@id="btn-login"]')`));
      wait(3000);
   // click(text(submit("Accept all cookies")));
    AssertExists(Parent(image(0, _in(header("cx-header"))).xy(0.64, 0.58 )));
    wait(3000);
    
}