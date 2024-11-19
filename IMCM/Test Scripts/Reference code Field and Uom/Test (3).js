/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
navigateTo("https://im-stage3.avantorsciences.com/");
navigateTo("https://auth-gqp.vwr.com/login?state=hKFo2SBHLTlBREVhYk40V001NkxKYkM0bEoyTVAyUWV0WVFYcaFupWxvZ2luo3RpZNkgVjlRTFIzeHR3aFpSSWlNeFBzQXB3QmJTN3pBZDA2SU-jY2lk2SBOeHVoQVlQQlhqalJSZTVrTTdUM2FqM3FxWTFlaTZ0bg&client=NxuhAYPBXjjRRe5kM7T3aj3qqY1ei6tn&protocol=oauth2&redirect_uri=https%3A%2F%2Fim-stage3.avantorsciences.com&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=b2gyaXBIN0lwQVd3RFFpQS1aTGxtTGMwd1dvb0FmaG83Qk5kdUY0OWhUbw%3D%3D&code_challenge=dLnzfdEbkXkPXG37gKW0mnLpP8q1GdSqwMLFHhP_Aig&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiQGF1dGgwL2F1dGgwLWFuZ3VsYXIiLCJ2ZXJzaW9uIjoiMS44LjEifQ%3D%3D");
click(byXPath('//*[@id="btn-login"]'));
click(div("form-group").xy(0.15, 0.69 ));
setValue(byXPath('//*[@id="email"]'),"automationgb");
