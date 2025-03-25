# Node-js-sdk-v2

Customer Identity public repo for Node.js V2 SDK, based on LoginRadius V2 APIs.

![Home Image](http://docs.lrcontent.com/resources/github/banner-1544x500.png)


## Introduction ##

LoginRadius Node.js Customer Registration wrapper provides access to LoginRadius Identity Management Platform API.

LoginRadius is an Identity Management Platform that simplifies user registration while securing data. LoginRadius Platform simplifies and secures your user registration process, increases conversion with Social Login that combines 30 major social platforms, and offers a full solution with Traditional User Registration. You can gather a wealth of user profile data from Social Login or Traditional User Registration.

LoginRadius centralizes it all in one place, making it easy to manage and access. Easily integrate LoginRadius with all of your third-party applications, like MailChimp, Google Analytics, Livefyre and many more, making it easy to utilize the data you are capturing.

LoginRadius helps businesses boost user engagement on their web/mobile platform, manage online identities, utilize social media for marketing, capture accurate consumer data, and get unique social insight into their customer base.

Please visit [here](http://www.loginradius.com/) for more information.

# Installing

	$ npm install loginradius-sdk

## Documentation
-----

>Disclaimer<br>
>This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

LoginRadius Combined Node SDK features a combined SDK set to encompass Social Login, User Registration, and Custom Object.


## Getting Started
This document contains information and examples regarding the LoginRadius Node.js SDK. It provides guidance for working with social authentication, user profile data, and sending messages with a variety of social networks such as Facebook, Google, Twitter, Yahoo, LinkedIn, and more. 
You can get the SDK from [here](http://github.com/LoginRadius/node-js-sdk) 

Note: The latest version(11.7.0) of Node js SDK works with LoginRadius V2 APIs.

Installation <br/>
run `npm install loginradius-sdk` <br/>
Configuration <br/>
Create `var config` in project
```js
  var config = {
      apiDomain: 'api.loginradius.com',
      apiKey: '{{ Your API KEY }}',
      apiSecret: '{{ Your API Secret }}',
      siteName: '{{ Your Sitename }}',
	  apiRequestSigning: false,
      proxy:{
        host:'',
        port:'',
        user:'',
        password:''
     }
  }
  ```
Replace the placeholders in the config object with your LoginRadius credentials apikey, apisecret, sitename. These can be obtained from [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret) 

Pass the proxy configurations if you want to set Http Server Proxy Configuration through your NodeJs SDK. Host and port are required to set Http Server Proxy configuration (username and password are optional).


### X-Origin-IP

LoginRadius allows you to add X-Origin-IP in your headers and it determines the IP address of the client's request,this can also be useful to overcome analytics discrepancies where the analytics depend on header data.

```js
 originIp:"{{ Client Ip }}"

```
The originIp will be added in `var config`

### Implementation

Require the loginradius-sdk package and pass the config object.
```js
  var lrv2 = require('loginradius-sdk')(config);
```
The below APIs will be used to implement the loginradius functionalities.

  ### Authentication API


List of APIs in this Section:<br>

* PUT : [Auth Update Profile by Token](#UpdateProfileByAccessToken-put-)<br>
* PUT : [Auth Unlock Account by Access Token](#UnlockAccountByToken-put-)<br>
* PUT : [Auth Verify Email By OTP](#VerifyEmailByOTP-put-)<br>
* PUT : [Auth Reset Password by Security Answer and Email](#ResetPasswordBySecurityAnswerAndEmail-put-)<br>
* PUT : [Auth Reset Password by Security Answer and Phone](#ResetPasswordBySecurityAnswerAndPhone-put-)<br>
* PUT : [Auth Reset Password by Security Answer and UserName](#ResetPasswordBySecurityAnswerAndUserName-put-)<br>
* PUT : [Auth Reset Password by Reset Token](#ResetPasswordByResetToken-put-)<br>
* PUT : [Auth Reset Password by OTP](#ResetPasswordByEmailOTP-put-)<br>
* PUT : [Auth Reset Password by OTP and UserName](#ResetPasswordByOTPAndUserName-put-)<br>
* PUT : [Auth Change Password](#ChangePassword-put-)<br>
* PUT : [Auth Set or Change UserName](#SetOrChangeUserName-put-)<br>
* PUT : [Auth Resend Email Verification](#AuthResendEmailVerification-put-)<br>
* POST : [Auth Add Email](#AddEmail-post-)<br>
* POST : [Auth Login by Email](#LoginByEmail-post-)<br>
* POST : [Auth Login by Username](#LoginByUserName-post-)<br>
* POST : [Auth Forgot Password](#ForgotPassword-post-)<br>
* POST : [Auth Link Social Identities](#LinkSocialIdentities-post-)<br>
* POST : [Auth Link Social Identities By Ping](#LinkSocialIdentitiesByPing-post-)<br>
* POST : [Auth User Registration by Email](#UserRegistrationByEmail-post-)<br>
* POST : [Auth User Registration By Captcha](#UserRegistrationByCaptcha-post-)<br>
* GET : [Get Security Questions By Email](#GetSecurityQuestionsByEmail-get-)<br>
* GET : [Get Security Questions By UserName](#GetSecurityQuestionsByUserName-get-)<br>
* GET : [Get Security Questions By Phone](#GetSecurityQuestionsByPhone-get-)<br>
* GET : [Get Security Questions By Access Token](#GetSecurityQuestionsByAccessToken-get-)<br>
* GET : [Auth Validate Access token](#AuthValidateAccessToken-get-)<br>
* GET : [Access Token Invalidate](#AuthInValidateAccessToken-get-)<br>
* GET : [Access Token Info](#GetAccessTokenInfo-get-)<br>
* GET : [Auth Read all Profiles by Token](#GetProfileByAccessToken-get-)<br>
* GET : [Auth Send Welcome Email](#SendWelcomeEmail-get-)<br>
* GET : [Auth Delete Account](#DeleteAccountByDeleteToken-get-)<br>
* GET : [Get Profile By Ping](#GetProfileByPing-get-)<br>
* GET : [Auth Check Email Availability](#CheckEmailAvailability-get-)<br>
* GET : [Auth Verify Email](#VerifyEmail-get-)<br>
* GET : [Auth Check UserName Availability](#CheckUserNameAvailability-get-)<br>
* GET : [Auth Privacy Policy Accept](#AcceptPrivacyPolicy-get-)<br>
* GET : [Auth Privacy Policy History By Access Token](#GetPrivacyPolicyHistoryByAccessToken-get-)<br>
* GET : [Auth send verification Email for linking social profiles](#AuthSendVerificationEmailForLinkingSocialProfiles-get-)<br>
* DELETE : [Auth Delete Account with Email Confirmation](#DeleteAccountWithEmailConfirmation-delete-)<br>
* DELETE : [Auth Remove Email](#RemoveEmail-delete-)<br>
* DELETE : [Auth Unlink Social Identities](#UnlinkSocialIdentities-delete-)<br>



<h6 id="UpdateProfileByAccessToken-put-"> Auth Update Profile by Token (PUT)</h6>


 This API is used to update the user's profile by passing the access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-update-profile-by-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var userProfileUpdateModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var nullSupport = true; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var isVoiceOtp = true; //Optional
var options = "<options>"; //Optional

lrv2.authenticationApi.updateProfileByAccessToken(accessToken, userProfileUpdateModel, emailTemplate, fields, nullSupport, smsTemplate, verificationUrl, isVoiceOtp, options).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UnlockAccountByToken-put-"> Auth Unlock Account by Access Token (PUT)</h6>

 This API is used to allow a customer with a valid access token to unlock their account provided that they successfully pass the prompted Bot Protection challenges. The Block or Suspend block types are not applicable for this API. For additional details see our Auth Security Configuration documentation.You are only required to pass the Post Parameters that correspond to the prompted challenges.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlock-account-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var unlockProfileModel ={ 
"g-recaptcha-response" : "<g-recaptcha-response>"
};  //Required

lrv2.authenticationApi.unlockAccountByToken(accessToken, unlockProfileModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="VerifyEmailByOTP-put-"> Auth Verify Email By OTP (PUT)</h6>

 This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-verify-email-by-otp/)

 
 

 ```js


var emailVerificationByOtpModel ={ 
"email" : "<email>",
"otp" : "<otp>"
};  //Required
var fields = null; //Optional
var url = "<url>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.verifyEmailByOTP(emailVerificationByOtpModel, fields, url, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPasswordBySecurityAnswerAndEmail-put-"> Auth Reset Password by Security Answer and Email (PUT)</h6>

 This API is used to reset password for the specified account by security question  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-email)

 
 

 ```js

var resetPasswordBySecurityAnswerAndEmailModel ={ 
"email" : "<email>",
"password" : "<password>",
"securityAnswer" : {"QuestionID":"Answer"}
};  //Required

lrv2.authenticationApi.resetPasswordBySecurityAnswerAndEmail(resetPasswordBySecurityAnswerAndEmailModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPasswordBySecurityAnswerAndPhone-put-"> Auth Reset Password by Security Answer and Phone (PUT)</h6>

 This API is used to reset password for the specified account by security question  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-phone)

 
 

 ```js


var resetPasswordBySecurityAnswerAndPhoneModel ={ 
"password" : "<password>",
"phone" : "<phone>",
"securityAnswer" : {"QuestionID":"Answer"}
};  //Required

lrv2.authenticationApi.resetPasswordBySecurityAnswerAndPhone(resetPasswordBySecurityAnswerAndPhoneModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPasswordBySecurityAnswerAndUserName-put-"> Auth Reset Password by Security Answer and UserName (PUT)</h6>

 This API is used to reset password for the specified account by security question  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-username)

 
 

 ```js


var resetPasswordBySecurityAnswerAndUserNameModel ={ 
"password" : "<password>",
"securityAnswer" : {"QuestionID":"Answer"},
"userName" : "<userName>"
};  //Required

lrv2.authenticationApi.resetPasswordBySecurityAnswerAndUserName(resetPasswordBySecurityAnswerAndUserNameModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPasswordByResetToken-put-"> Auth Reset Password by Reset Token (PUT)</h6>

 This API is used to set a new password for the specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-reset-token)

 
 

 ```js


var resetPasswordByResetTokenModel ={ 
"password" : "<password>",
"resetToken" : "<resetToken>"
};  //Required

lrv2.authenticationApi.resetPasswordByResetToken(resetPasswordByResetTokenModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPasswordByEmailOTP-put-"> Auth Reset Password by OTP (PUT)</h6>

 This API is used to set a new password for the specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-otp)

 
 

 ```js


var resetPasswordByEmailAndOtpModel ={ 
"email" : "<email>",
"otp" : "<otp>",
"password" : "<password>"
};  //Required

lrv2.authenticationApi.resetPasswordByEmailOTP(resetPasswordByEmailAndOtpModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPasswordByOTPAndUserName-put-"> Auth Reset Password by OTP and UserName (PUT)</h6>

 This API is used to set a new password for the specified account if you are using the username as the unique identifier in your workflow  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-otp-and-username/)

 
 

 ```js


var resetPasswordByUserNameModel ={ 
"otp" : "<otp>",
"password" : "<password>",
"userName" : "<userName>"
};  //Required

lrv2.authenticationApi.resetPasswordByOTPAndUserName(resetPasswordByUserNameModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ChangePassword-put-"> Auth Change Password (PUT)</h6>

 This API is used to change the accounts password based on the previous password  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-change-password)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var newPassword = "<newPassword>"; //Required
var oldPassword = "<oldPassword>"; //Required

lrv2.authenticationApi.changePassword(accessToken, newPassword, oldPassword).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SetOrChangeUserName-put-"> Auth Set or Change UserName (PUT)</h6>

 This API is used to set or change UserName by access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-set-or-change-user-name/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var username = "<username>"; //Required

lrv2.authenticationApi.setOrChangeUserName(accessToken, username).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="AuthResendEmailVerification-put-"> Auth Resend Email Verification (PUT)</h6>

 This API resends the verification email to the user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-resend-email-verification/)

 
 

 ```js

var email = "<email>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.authResendEmailVerification(email, emailTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="AddEmail-post-"> Auth Add Email (POST)</h6>

 This API is used to add additional emails to a user's account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-add-email)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var email = "<email>"; //Required
var type = "<type>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.addEmail(accessToken, email, type, emailTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="LoginByEmail-post-"> Auth Login by Email (POST)</h6>

 This API retrieves a copy of the user data based on the Email  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email)

 
 

 ```js


var emailAuthenticationModel ={ 
"email" : "<email>",
"password" : "<password>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.loginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="LoginByUserName-post-"> Auth Login by Username (POST)</h6>

 This API retrieves a copy of the user data based on the Username  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-username)

 
 

 ```js


var userNameAuthenticationModel ={ 
"password" : "<password>",
"username" : "<username>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.loginByUserName(userNameAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ForgotPassword-post-"> Auth Forgot Password (POST)</h6>

 This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-forgot-password)

 
 

 ```js

var email = "<email>"; //Required
var resetPasswordUrl = "<resetPasswordUrl>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional

lrv2.authenticationApi.forgotPassword(email, resetPasswordUrl, emailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="LinkSocialIdentities-post-"> Auth Link Social Identities (POST)</h6>

 This API is used to link up a social provider account with an existing LoginRadius account on the basis of access token and the social providers user access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-link-social-identities)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var candidateToken = "<candidateToken>"; //Required

lrv2.authenticationApi.linkSocialIdentities(accessToken, candidateToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="LinkSocialIdentitiesByPing-post-"> Auth Link Social Identities By Ping (POST)</h6>

 This API is used to link up a social provider account with an existing LoginRadius account on the basis of ping and the social providers user access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-link-social-identities-by-ping)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var clientGuid = "<clientGuid>"; //Required

lrv2.authenticationApi.linkSocialIdentitiesByPing(accessToken, clientGuid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UserRegistrationByEmail-post-"> Auth User Registration by Email (POST)</h6>

 This API creates a user in the database as well as sends a verification email to the user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-user-registration-by-email)

 
 

 ```js


var authUserRegistrationModel ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
};  //Required
var sott = "<sott>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var options = "<options>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.authenticationApi.userRegistrationByEmail(authUserRegistrationModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UserRegistrationByCaptcha-post-"> Auth User Registration By Captcha (POST)</h6>

 This API creates a user in the database as well as sends a verification email to the user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-user-registration-by-recaptcha)

 
 

 ```js


var authUserRegistrationModelWithCaptcha ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"g-recaptcha-response" : "<g-recaptcha-response>",
"lastName" : "<lastName>",
"password" : "<password>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var options = "<options>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.authenticationApi.userRegistrationByCaptcha(authUserRegistrationModelWithCaptcha, emailTemplate, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetSecurityQuestionsByEmail-get-"> Get Security Questions By Email (GET)</h6>

 This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-email/)

 
 

 ```js

var email = "<email>"; //Required

lrv2.authenticationApi.getSecurityQuestionsByEmail(email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetSecurityQuestionsByUserName-get-"> Get Security Questions By UserName (GET)</h6>

 This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-user-name/)

 
 

 ```js

var userName = "<userName>"; //Required

lrv2.authenticationApi.getSecurityQuestionsByUserName(userName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetSecurityQuestionsByPhone-get-"> Get Security Questions By Phone (GET)</h6>

 This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-phone/)

 
 

 ```js

var phone = "<phone>"; //Required

lrv2.authenticationApi.getSecurityQuestionsByPhone(phone).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetSecurityQuestionsByAccessToken-get-"> Get Security Questions By Access Token (GET)</h6>

 This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.authenticationApi.getSecurityQuestionsByAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="AuthValidateAccessToken-get-"> Auth Validate Access token (GET)</h6>

 This api validates access token, if valid then returns a response with its expiry otherwise error.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-validate-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.authenticationApi.authValidateAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="AuthInValidateAccessToken-get-"> Access Token Invalidate (GET)</h6>

 This api call invalidates the active access token or expires an access token's validity.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-invalidate-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var preventRefresh = true; //Optional

lrv2.authenticationApi.authInValidateAccessToken(accessToken, preventRefresh).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenInfo-get-"> Access Token Info (GET)</h6>

 This api call provide the active access token Information  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-access-token-info/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.authenticationApi.getAccessTokenInfo(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetProfileByAccessToken-get-"> Auth Read all Profiles by Token (GET)</h6>

 This API retrieves a copy of the user data based on the access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-read-profiles-by-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.getProfileByAccessToken(accessToken, emailTemplate, fields, verificationUrl, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SendWelcomeEmail-get-"> Auth Send Welcome Email (GET)</h6>

 This API sends a welcome email  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-send-welcome-email/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.sendWelcomeEmail(accessToken, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="DeleteAccountByDeleteToken-get-"> Auth Delete Account (GET)</h6>

 This API is used to delete an account by passing it a delete token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-delete-account/)

 
 

 ```js

var deletetoken = "<deletetoken>"; //Required

lrv2.authenticationApi.deleteAccountByDeleteToken(deletetoken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
 <h6 id="GetProfileByPing-get-">Get Profile By Ping (GET)</h6>

This API is used to get a user's profile using the clientGuid parameter if no callback feature enabled. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/social-login-by-ping/)

 

 ```js

var clientGuid = "<clientGuid>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.getProfileByPing(clientGuid, emailTemplate, fields, verificationUrl, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ``` 
  
 
<h6 id="CheckEmailAvailability-get-"> Auth Check Email Availability (GET)</h6>

 This API is used to check the email exists or not on your site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-email-availability/)

 
 

 ```js

var email = "<email>"; //Required

lrv2.authenticationApi.checkEmailAvailability(email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="VerifyEmail-get-"> Auth Verify Email (GET)</h6>

 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-verify-email/)

 
 

 ```js

var verificationToken = "<verificationToken>"; //Required
var fields = null; //Optional
var url = "<url>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional
var uuid = "<uuid>"; //Optional

lrv2.authenticationApi.verifyEmail(verificationToken, fields, url, welcomeEmailTemplate, uuid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="CheckUserNameAvailability-get-"> Auth Check UserName Availability (GET)</h6>

 This API is used to check the UserName exists or not on your site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-username-availability/)

 
 

 ```js

var username = "<username>"; //Required

lrv2.authenticationApi.checkUserNameAvailability(username).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="AcceptPrivacyPolicy-get-"> Auth Privacy Policy Accept (GET)</h6>

 This API is used to update the privacy policy stored in the user's profile by providing the access token of the user accepting the privacy policy  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-privacy-policy-accept)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

lrv2.authenticationApi.acceptPrivacyPolicy(accessToken, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetPrivacyPolicyHistoryByAccessToken-get-"> Auth Privacy Policy History By Access Token (GET)</h6>

 This API will return all the accepted privacy policies for the user by providing the access token of that user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/privacy-policy-history-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.authenticationApi.getPrivacyPolicyHistoryByAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 

 <h6 id="AuthSendVerificationEmailForLinkingSocialProfiles-get-"> Auth send verification Email for linking social profiles (GET)</h6>

 This API is used to Send verification email to the unverified email of the social profile. This API can be used only incase of optional verification workflow.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-send-verification-for-social-email/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var clientguid = "<clientguid>"; //Required

lrv2.authenticationApi.authSendVerificationEmailForLinkingSocialProfiles(accessToken, clientguid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
  
  
 
<h6 id="DeleteAccountWithEmailConfirmation-delete-"> Auth Delete Account with Email Confirmation (DELETE)</h6>

 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-delete-account-with-email-confirmation/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var deleteUrl = "<deleteUrl>"; //Optional
var emailTemplate = "<emailTemplate>"; //Optional

lrv2.authenticationApi.deleteAccountWithEmailConfirmation(accessToken, deleteUrl, emailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="RemoveEmail-delete-"> Auth Remove Email (DELETE)</h6>

 This API is used to remove additional emails from a user's account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-remove-email)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var email = "<email>"; //Required

lrv2.authenticationApi.removeEmail(accessToken, email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UnlinkSocialIdentities-delete-"> Auth Unlink Social Identities (DELETE)</h6>

 This API is used to unlink up a social provider account with the specified account based on the access token and the social providers user access token. The unlinked account will automatically get removed from your database.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlink-social-identities)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var provider = "<provider>"; //Required
var providerId = "<providerId>"; //Required

lrv2.authenticationApi.unlinkSocialIdentities(accessToken, provider, providerId).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### Account API


List of APIs in this Section:<br>

* PUT : [Account Update](#UpdateAccountByUid-put-)<br>
* PUT : [Update Phone ID by UID](#UpdatePhoneIDByUid-put-)<br>
* PUT : [Account Set Password](#SetAccountPasswordByUid-put-)<br>
* PUT : [Account Invalidate Verification Email](#InvalidateAccountEmailVerification-put-)<br>
* PUT : [Reset phone ID verification](#ResetPhoneIDVerificationByUid-put-)<br>
* PUT : [Upsert Email](#UpsertEmail-put-)<br>
* PUT : [Update UID](#AccountUpdateUid-put-)<br>
* POST : [Account Create](#CreateAccount-post-)<br>
* POST : [Forgot Password token](#GetForgotPasswordToken-post-)<br>
* POST : [Email Verification token](#GetEmailVerificationToken-post-)<br>
* POST : [Multipurpose Email Token Generation API](#MultipurposeEmailTokenGeneration-post-)<br>
* POST : [Multipurpose SMS OTP Generation API](#MultipurposeSMSOTPGeneration-post-)<br>
* GET : [Get Privacy Policy History By Uid](#GetPrivacyPolicyHistoryByUid-get-)<br>
* GET : [Account Profiles by Email](#GetAccountProfileByEmail-get-)<br>
* GET : [Account Profiles by Username](#GetAccountProfileByUserName-get-)<br>
* GET : [Account Profile by Phone ID](#GetAccountProfileByPhone-get-)<br>
* GET : [Account Profiles by UID](#GetAccountProfileByUid-get-)<br>
* GET : [Account Password](#GetAccountPasswordHashByUid-get-)<br>
* GET : [Access Token based on UID or User impersonation API](#GetAccessTokenByUid-get-)<br>
* GET : [Refresh Access Token by Refresh Token](#RefreshAccessTokenByRefreshToken-get-)<br>
* GET : [Revoke Refresh Token](#RevokeRefreshToken-get-)<br>
* GET : [Account Identities by Email](#GetAccountIdentitiesByEmail-get-)<br>
* DELETE : [Account Delete](#DeleteAccountByUid-delete-)<br>
* DELETE : [Account Remove Email](#RemoveEmail-delete-)<br>
* DELETE : [Revoke All Refresh Token](#RevokeAllRefreshToken-delete-)<br>
* DELETE : [Delete User Profiles By Email](#AccountDeleteByEmail-delete-)<br>



<h6 id="UpdateAccountByUid-put-"> Account Update (PUT)</h6>

 This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-update)

 
 

 ```js

var accountUserProfileUpdateModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
};  //Required
var uid = "<uid>"; //Required
var fields = null; //Optional
var nullSupport = true; //Optional

lrv2.accountApi.updateAccountByUid(accountUserProfileUpdateModel, uid, fields, nullSupport).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UpdatePhoneIDByUid-put-"> Update Phone ID by UID (PUT)</h6>

 This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/update-phoneid-by-uid)

 
 

 ```js

var phone = "<phone>"; //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.updatePhoneIDByUid(phone, uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SetAccountPasswordByUid-put-"> Account Set Password (PUT)</h6>

 This API is used to set the password of an account in Cloud Storage.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-set-password)

 
 

 ```js

var password = "<password>"; //Required
var uid = "<uid>"; //Required

lrv2.accountApi.setAccountPasswordByUid(password, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="InvalidateAccountEmailVerification-put-"> Account Invalidate Verification Email (PUT)</h6>

 This API is used to invalidate the Email Verification status on an account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-invalidate-verification-email)

 
 

 ```js

var uid = "<uid>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.accountApi.invalidateAccountEmailVerification(uid, emailTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPhoneIDVerificationByUid-put-"> Reset phone ID verification (PUT)</h6>

 This API Allows you to reset the phone no verification of an end user’s account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/reset-phone-id-verification)

 
 

 ```js

var uid = "<uid>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.accountApi.resetPhoneIDVerificationByUid(uid, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UpsertEmail-put-"> Upsert Email (PUT)</h6>

 This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/upsert-email)

 
 

 ```js
var upsertEmailModel ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] 
};  //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.upsertEmail(upsertEmailModel, uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
<h6 id="AccountUpdateUid-put-"> Update UID (PUT)</h6>

 This API is used to update a user's Uid. It will update all profiles, custom objects and consent management logs associated with the Uid.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-update/)

 
 

 ```js
var updateUidModel ={ 
"newUid" : "<newUid>"
};  //Required
var uid = "<uid>"; //Required

lrv2.accountApi.accountUpdateUid(updateUidModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
 
<h6 id="CreateAccount-post-"> Account Create (POST)</h6>

 This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-create)

 
 

 ```js
var accountCreateModel ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
};  //Required
var fields = null; //Optional

lrv2.accountApi.createAccount(accountCreateModel, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetForgotPasswordToken-post-"> Forgot Password token (POST)</h6>

 This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/get-forgot-password-token)

 
 

 ```js

var email = "<email>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var resetPasswordUrl = "<resetPasswordUrl>"; //Optional
var sendEmail = true; //Optional

lrv2.accountApi.getForgotPasswordToken(email, emailTemplate, resetPasswordUrl, sendEmail).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetEmailVerificationToken-post-"> Email Verification token (POST)</h6>

 This API Returns an Email Verification token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/get-email-verification-token)

 
 

 ```js

var email = "<email>"; //Required

lrv2.accountApi.getEmailVerificationToken(email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```


  
<h6 id="MultipurposeEmailTokenGeneration-post-"> Multipurpose Email Token Generation API (POST)</h6>

 This API generate Email tokens and Email OTPs for Email verification, Add email, Forgot password, Delete user, Passwordless login, Forgot pin, One-touch login and Auto login.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/multipurpose-token-and-sms-otp-generation-api/multipurpose-email-token-generation/)

 
 

 ```Js


var multiEmailToken ={ 
"clientguid" : "<clientguid>",
"email" : "<email>",
"name" : "<name>",
"type" : "<type>",
"uid" : "<uid>",
"userName" : "<userName>"
};  //Required
var tokentype = "<tokentype>"; //Required

lrv2.accountApi.multipurposeEmailTokenGeneration(multiEmailToken, tokentype).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MultipurposeSMSOTPGeneration-post-"> Multipurpose SMS OTP Generation API (POST)</h6>

 This API generates SMS OTP for Add phone, Phone Id verification, Forgot password, Forgot pin, One-touch login, smart login and Passwordless login.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/multipurpose-token-and-sms-otp-generation-api/multipurpose-sms-otp-generation/)

 
 

 ```Js


var multiSmsOtp ={ 
"name" : "<name>",
"phone" : "<phone>",
"uid" : "<uid>"
};  //Required
var smsotptype = "<smsotptype>"; //Required

lrv2.accountApi.multipurposeSMSOTPGeneration(multiSmsOtp, smsotptype).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetPrivacyPolicyHistoryByUid-get-"> Get Privacy Policy History By Uid (GET)</h6>

 This API is used to retrieve all of the accepted Policies by the user, associated with their UID.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/privacy-policy-history-by-uid/)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.accountApi.getPrivacyPolicyHistoryByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccountProfileByEmail-get-"> Account Profiles by Email (GET)</h6>

 This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-email)

 
 

 ```js

var email = "<email>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByEmail(email, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccountProfileByUserName-get-"> Account Profiles by Username (GET)</h6>

 This API is used to retrieve all of the profile data associated with the specified account by user name in Cloud Storage.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-user-name)

 
 

 ```js

var userName = "<userName>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByUserName(userName, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccountProfileByPhone-get-"> Account Profile by Phone ID (GET)</h6>

 This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-phone-id/)

 
 

 ```js

var phone = "<phone>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByPhone(phone, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccountProfileByUid-get-"> Account Profiles by UID (GET)</h6>

 This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-uid)

 
 

 ```js

var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByUid(uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccountPasswordHashByUid-get-"> Account Password (GET)</h6>

 This API use to retrive the hashed password of a specified account in Cloud Storage.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-password)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.accountApi.getAccountPasswordHashByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenByUid-get-"> Access Token based on UID or User impersonation API (GET)</h6>

 The API is used to get LoginRadius access token based on UID.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-impersonation-api)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.accountApi.getAccessTokenByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="RefreshAccessTokenByRefreshToken-get-"> Refresh Access Token by Refresh Token (GET)</h6>

 This API is used to refresh an access token via it's associated refresh token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-access-token-by-refresh-token)

 
 

 ```js

var refreshToken = "<refreshToken>"; //Required

lrv2.accountApi.refreshAccessTokenByRefreshToken(refreshToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="RevokeRefreshToken-get-"> Revoke Refresh Token (GET)</h6>

 The Revoke Refresh Access Token API is used to revoke a refresh token or the Provider Access Token, revoking an existing refresh token will invalidate the refresh token but the associated access token will work until the expiry.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/revoke-refresh-token)

 
 

 ```js

var refreshToken = "<refreshToken>"; //Required

lrv2.accountApi.revokeRefreshToken(refreshToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccountIdentitiesByEmail-get-"> Account Identities by Email (GET)</h6>

 Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-identities-by-email)

 
 

 ```js

var email = "<email>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountIdentitiesByEmail(email, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="DeleteAccountByUid-delete-"> Account Delete (DELETE)</h6>

 This API deletes the Users account and allows them to re-register for a new account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-delete)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.accountApi.deleteAccountByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="RemoveEmail-delete-"> Account Remove Email (DELETE)</h6>

 Use this API to Remove emails from a user Account  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-email-delete)

 
 

 ```js

var email = "<email>"; //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.removeEmail(email, uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
<h6 id="RevokeAllRefreshToken-delete-"> Revoke All Refresh Token (DELETE)</h6>

 The Revoke All Refresh Access Token API is used to revoke all refresh tokens for a specific user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/revoke-all-refresh-token/)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.accountApi.revokeAllRefreshToken(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
  
 
<h6 id="AccountDeleteByEmail-delete-"> Delete User Profiles By Email (DELETE)</h6>

 This API is used to delete all user profiles associated with an Email.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-email-delete/)

 
 

 ```js

var email = "<email>"; //Required

lrv2.accountApi.accountDeleteByEmail(email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### Social API


List of APIs in this Section:<br>

* GET : [Access Token](#ExchangeAccessToken-get-)<br>
* GET : [Refresh Token](#RefreshAccessToken-get-)<br>
* GET : [Token Validate](#ValidateAccessToken-get-)<br>
* GET : [Access Token Invalidate](#InValidateAccessToken-get-)<br>
* GET : [Get Active Session Details](#GetActiveSession-get-)<br>
* GET : [Get Active Session By Account Id](#GetActiveSessionByAccountID-get-)<br>
* GET : [Get Active Session By Profile Id](#GetActiveSessionByProfileID-get-)<br>
 
  
  
 
<h6 id="ExchangeAccessToken-get-"> Access Token (GET)</h6>

 This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/access-token)

 
 

 ```js

var token = "<token>"; //Required

lrv2.socialApi.exchangeAccessToken(token).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="RefreshAccessToken-get-"> Refresh Token (GET)</h6>

 The Refresh Access Token API is used to refresh the provider access token after authentication. It will be valid for up to 60 days on LoginRadius depending on the provider. In order to use the access token in other APIs, always refresh the token using this API.<br><br><b>Supported Providers :</b> Facebook,Yahoo,Google,Twitter, Linkedin.<br><br> Contact LoginRadius support team to enable this API.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var expiresIn = 0; //Optional
var isWeb = true; //Optional

lrv2.socialApi.refreshAccessToken(accessToken, expiresIn, isWeb).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ValidateAccessToken-get-"> Token Validate (GET)</h6>

 This API validates access token, if valid then returns a response with its expiry otherwise error.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/validate-access-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.socialApi.validateAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="InValidateAccessToken-get-"> Access Token Invalidate (GET)</h6>

 This api invalidates the active access token or expires an access token validity.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/invalidate-access-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.socialApi.inValidateAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetActiveSession-get-"> Get Active Session Details (GET)</h6>

 This api is use to get all active session by Access Token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/get-active-session-details)

 
 

 ```js

var token = "<token>"; //Required

lrv2.socialApi.getActiveSession(token).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetActiveSessionByAccountID-get-"> Get Active Session By Account Id (GET)</h6>

 This api is used to get all active sessions by AccountID(UID).  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/active-session-by-account-id/)

 
 

 ```js

var accountId = "<accountId>"; //Required

lrv2.socialApi.getActiveSessionByAccountID(accountId).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetActiveSessionByProfileID-get-"> Get Active Session By Profile Id (GET)</h6>

 This api is used to get all active sessions by ProfileId.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/active-session-by-profile-id/)

 
 

 ```js

var profileId = "<profileId>"; //Required

lrv2.socialApi.getActiveSessionByProfileID(profileId).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### CustomObject API


List of APIs in this Section:<br>

* PUT : [Custom Object Update by Access Token](#UpdateCustomObjectByToken-put-)<br>
* PUT : [Custom Object Update by UID](#UpdateCustomObjectByUid-put-)<br>
* POST : [Create Custom Object by Token](#CreateCustomObjectByToken-post-)<br>
* POST : [Create Custom Object by UID](#CreateCustomObjectByUid-post-)<br>
* GET : [Custom Object by Token](#GetCustomObjectByToken-get-)<br>
* GET : [Custom Object by ObjectRecordId and Token](#GetCustomObjectByRecordIDAndToken-get-)<br>
* GET : [Custom Object By UID](#GetCustomObjectByUid-get-)<br>
* GET : [Custom Object by ObjectRecordId and UID](#GetCustomObjectByRecordID-get-)<br>
* DELETE : [Custom Object Delete by Record Id And Token](#DeleteCustomObjectByToken-delete-)<br>
* DELETE : [Account Delete Custom Object by ObjectRecordId](#DeleteCustomObjectByRecordID-delete-)<br>



<h6 id="UpdateCustomObjectByToken-put-"> Custom Object Update by Access Token (PUT)</h6>

 This API is used to update the specified custom object data of the specified account. If the value of updatetype is 'replace' then it will fully replace custom object with the new custom object and if the value of updatetype is 'partialreplace' then it will perform an upsert type operation  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-update-by-objectrecordid-and-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var objectName = "<objectName>"; //Required
var objectRecordId = "<objectRecordId>"; //Required

var object = { "customdata1": "Store my customdata1 value" };  //Required
var updateType = "<updateType>"; //Optional

lrv2.customObjectApi.updateCustomObjectByToken(accessToken, objectName, objectRecordId, object, updateType).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UpdateCustomObjectByUid-put-"> Custom Object Update by UID (PUT)</h6>

 This API is used to update the specified custom object data of a specified account. If the value of updatetype is 'replace' then it will fully replace custom object with new custom object and if the value of updatetype is partialreplace then it will perform an upsert type operation.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-update-by-objectrecordid-and-uid)

 
 

 ```js

var objectName = "<objectName>"; //Required
var objectRecordId = "<objectRecordId>"; //Required

var object = { "customdata1": "Store my customdata1 value" };  //Required
var uid = "<uid>"; //Required
var updateType = "<updateType>"; //Optional

lrv2.customObjectApi.updateCustomObjectByUid(objectName, objectRecordId, object, uid, updateType).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="CreateCustomObjectByToken-post-"> Create Custom Object by Token (POST)</h6>

 This API is used to write information in JSON format to the custom object for the specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/create-custom-object-by-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var objectName = "<objectName>"; //Required

var object = { "customdata1": "Store my customdata1 value" };  //Required

lrv2.customObjectApi.createCustomObjectByToken(accessToken, objectName, object).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="CreateCustomObjectByUid-post-"> Create Custom Object by UID (POST)</h6>

 This API is used to write information in JSON format to the custom object for the specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/create-custom-object-by-uid)

 
 

 ```js

var objectName = "<objectName>"; //Required

var object = { "customdata1": "Store my customdata1 value" };  //Required
var uid = "<uid>"; //Required

lrv2.customObjectApi.createCustomObjectByUid(objectName, object, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetCustomObjectByToken-get-"> Custom Object by Token (GET)</h6>

 This API is used to retrieve the specified Custom Object data for the specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var objectName = "<objectName>"; //Required

lrv2.customObjectApi.getCustomObjectByToken(accessToken, objectName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetCustomObjectByRecordIDAndToken-get-"> Custom Object by ObjectRecordId and Token (GET)</h6>

 This API is used to retrieve the Custom Object data for the specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-objectrecordid-and-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var objectName = "<objectName>"; //Required
var objectRecordId = "<objectRecordId>"; //Required

lrv2.customObjectApi.getCustomObjectByRecordIDAndToken(accessToken, objectName, objectRecordId).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetCustomObjectByUid-get-"> Custom Object By UID (GET)</h6>

 This API is used to retrieve all the custom objects by UID from cloud storage.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-uid)

 
 

 ```js

var objectName = "<objectName>"; //Required
var uid = "<uid>"; //Required

lrv2.customObjectApi.getCustomObjectByUid(objectName, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetCustomObjectByRecordID-get-"> Custom Object by ObjectRecordId and UID (GET)</h6>

 This API is used to retrieve the Custom Object data for the specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-objectrecordid-and-uid)

 
 

 ```js

var objectName = "<objectName>"; //Required
var objectRecordId = "<objectRecordId>"; //Required
var uid = "<uid>"; //Required

lrv2.customObjectApi.getCustomObjectByRecordID(objectName, objectRecordId, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="DeleteCustomObjectByToken-delete-"> Custom Object Delete by Record Id And Token (DELETE)</h6>

 This API is used to remove the specified Custom Object data using ObjectRecordId of a specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-delete-by-objectrecordid-and-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var objectName = "<objectName>"; //Required
var objectRecordId = "<objectRecordId>"; //Required

lrv2.customObjectApi.deleteCustomObjectByToken(accessToken, objectName, objectRecordId).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="DeleteCustomObjectByRecordID-delete-"> Account Delete Custom Object by ObjectRecordId (DELETE)</h6>

 This API is used to remove the specified Custom Object data using ObjectRecordId of specified account.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-delete-by-objectrecordid-and-uid)

 
 

 ```js

var objectName = "<objectName>"; //Required
var objectRecordId = "<objectRecordId>"; //Required
var uid = "<uid>"; //Required

lrv2.customObjectApi.deleteCustomObjectByRecordID(objectName, objectRecordId, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### PhoneAuthentication API


List of APIs in this Section:<br>

* PUT : [Phone Reset Password by OTP](#ResetPasswordByPhoneOTP-put-)<br>
* PUT : [Phone Verification OTP](#PhoneVerificationByOTP-put-)<br>
* PUT : [Phone Verification OTP by Token](#PhoneVerificationOTPByAccessToken-put-)<br>
* PUT : [Phone Number Update](#UpdatePhoneNumber-put-)<br>
* POST : [Phone Login](#LoginByPhone-post-)<br>
* POST : [Phone Forgot Password by OTP](#ForgotPasswordByPhoneOTP-post-)<br>
* POST : [Phone Resend Verification OTP](#PhoneResendVerificationOTP-post-)<br>
* POST : [Phone Resend Verification OTP By Token](#PhoneResendVerificationOTPByToken-post-)<br>
* POST : [Phone User Registration by SMS](#UserRegistrationByPhone-post-)<br>
* GET : [Phone Number Availability](#CheckPhoneNumberAvailability-get-)<br>
* DELETE : [Remove Phone ID by Access Token](#RemovePhoneIDByAccessToken-delete-)<br>



<h6 id="ResetPasswordByPhoneOTP-put-"> Phone Reset Password by OTP (PUT)</h6>

 This API is used to reset the password  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-reset-password-by-otp)

 
 

 ```js

var resetPasswordByOTPModel ={ 
"otp" : "<otp>",
"password" : "<password>",
"phone" : "<phone>"
};  //Required

lrv2.phoneAuthenticationApi.resetPasswordByPhoneOTP(resetPasswordByOTPModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="PhoneVerificationByOTP-put-"> Phone Verification OTP (PUT)</h6>

 This API is used to validate the verification code sent to verify a user's phone number  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-verify-otp)

 
 

 ```js

var otp = "<otp>"; //Required
var phone = "<phone>"; //Required
var fields = null; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.phoneAuthenticationApi.phoneVerificationByOTP(otp, phone, fields, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="PhoneVerificationOTPByAccessToken-put-"> Phone Verification OTP by Token (PUT)</h6>

 This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-verify-otp-by-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var otp = "<otp>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.phoneAuthenticationApi.phoneVerificationOTPByAccessToken(accessToken, otp, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UpdatePhoneNumber-put-"> Phone Number Update (PUT)</h6>

 This API is used to update the login Phone Number of users  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-number-update)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.phoneAuthenticationApi.updatePhoneNumber(accessToken, phone, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="LoginByPhone-post-"> Phone Login (POST)</h6>

 This API retrieves a copy of the user data based on the Phone  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-login)

 
 

 ```js

var phoneAuthenticationModel ={ 
"password" : "<password>",
"phone" : "<phone>"
};  //Required
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.phoneAuthenticationApi.loginByPhone(phoneAuthenticationModel, fields, loginUrl, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ForgotPasswordByPhoneOTP-post-"> Phone Forgot Password by OTP (POST)</h6>

 This API is used to send the OTP to reset the account password.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-forgot-password-by-otp)

 
 

 ```js

var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.phoneAuthenticationApi.forgotPasswordByPhoneOTP(phone, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="PhoneResendVerificationOTP-post-"> Phone Resend Verification OTP (POST)</h6>

 This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-resend-otp)

 
 

 ```js

var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.phoneAuthenticationApi.phoneResendVerificationOTP(phone, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="PhoneResendVerificationOTPByToken-post-"> Phone Resend Verification OTP By Token (POST)</h6>

 This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-resend-otp-by-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.phoneAuthenticationApi.phoneResendVerificationOTPByToken(accessToken, phone, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UserRegistrationByPhone-post-"> Phone User Registration by SMS (POST)</h6>

 This API registers the new users into your Cloud Storage and triggers the phone verification process.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-user-registration-by-sms)

 
 

 ```js

var authUserRegistrationModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>",
"phoneId" : "<phoneId>"
};  //Required
var sott = "<sott>"; //Required
var fields = null; //Optional
var options = "<options>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional
var emailTemplate = "<emailTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.phoneAuthenticationApi.userRegistrationByPhone(authUserRegistrationModel, sott, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate, emailTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="CheckPhoneNumberAvailability-get-"> Phone Number Availability (GET)</h6>

 This API is used to check the Phone Number exists or not on your site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-number-availability)

 
 

 ```js

var phone = "<phone>"; //Required

lrv2.phoneAuthenticationApi.checkPhoneNumberAvailability(phone).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="RemovePhoneIDByAccessToken-delete-"> Remove Phone ID by Access Token (DELETE)</h6>

 This API is used to delete the Phone ID on a user's account via the access token  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/remove-phone-id-by-access-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.phoneAuthenticationApi.removePhoneIDByAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### MultiFactorAuthentication API


List of APIs in this Section:<br>

* PUT : [Update MFA Setting](#MFAUpdateSetting-put-)<br>
* PUT : [MFA Update Phone Number by Token](#MFAUpdatePhoneNumberByToken-put-)<br>
* PUT : [Verify MFA Email OTP by Access Token](#MFAValidateEmailOtpByAccessToken-put-)<br>
* PUT : [Update MFA Security Question by Access Token](#MFASecurityQuestionAnswerByAccessToken-put-)<br>
* PUT : [MFA Validate OTP](#MFAValidateOTPByPhone-put-)<br>
* PUT : [MFA Validate Backup code](#MFAValidateBackupCode-put-)<br>
* PUT : [MFA Update Phone Number](#MFAUpdatePhoneNumber-put-)<br>
* PUT : [Verify MFA Email OTP by MFA Token](#MFAValidateEmailOtp-put-)<br>
* PUT : [Update MFA Security Question by MFA Token](#MFASecurityQuestionAnswer-put-)<br>
* PUT : [MFA Validate Authenticator Code](#MFAValidateAuthenticatorCode-put-)<br>
* PUT : [MFA Verify Authenticator Code](#MFAVerifyAuthenticatorCode-put-)<br>
* POST : [MFA Email Login](#MFALoginByEmail-post-)<br>
* POST : [MFA UserName Login](#MFALoginByUserName-post-)<br>
* POST : [MFA Phone Login](#MFALoginByPhone-post-)<br>
* POST : [Send MFA Email OTP by MFA Token](#MFAEmailOTP-post-)<br>
* POST : [Verify MFA Security Question by MFA Token](#MFASecurityQuestionAnswerVerification-post-)<br>
* GET : [MFA Validate Access Token](#MFAConfigureByAccessToken-get-)<br>
* GET : [MFA Backup Code by Access Token](#MFABackupCodeByAccessToken-get-)<br>
* GET : [Reset Backup Code by Access Token](#MFAResetBackupCodeByAccessToken-get-)<br>
* GET : [Send MFA Email OTP by Access Token](#MFAEmailOtpByAccessToken-get-)<br>
* GET : [MFA Resend Otp](#MFAResendOTP-get-)<br>
* GET : [MFA Backup Code by UID](#MFABackupCodeByUid-get-)<br>
* GET : [MFA Reset Backup Code by UID](#MFAResetBackupCodeByUid-get-)<br>
* DELETE : [MFA Reset Authenticator by Token](#MFAResetAuthenticatorByToken-delete-)<br>
* DELETE : [MFA Reset SMS Authenticator by Token](#MFAResetSMSAuthByToken-delete-)<br>
* DELETE : [Reset MFA Email OTP Authenticator By Access Token](#MFAResetEmailOtpAuthenticatorByAccessToken-delete-)<br>
* DELETE : [MFA Reset Security Question Authenticator By Access Token](#MFAResetSecurityQuestionAuthenticatorByAccessToken-delete-)<br>
* DELETE : [MFA Reset SMS Authenticator By UID](#MFAResetSMSAuthenticatorByUid-delete-)<br>
* DELETE : [MFA Reset Authenticator By UID](#MFAResetAuthenticatorByUid-delete-)<br>
* DELETE : [Reset MFA Email OTP Authenticator Settings by Uid](#MFAResetEmailOtpAuthenticatorByUid-delete-)<br>
* DELETE : [Reset MFA Security Question Authenticator Settings by Uid](#MFAResetSecurityQuestionAuthenticatorByUid-delete-)<br>



<h6 id="MFAUpdateSetting-put-"> Update MFA Setting (PUT)</h6>

 This API is used to trigger the Multi-factor authentication settings after login for secure actions  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/update-mfa-setting/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var multiFactorAuthModelWithLockout ={ 
"otp" : "<otp>"
};  //Required
var fields = null; //Optional

lrv2.multiFactorAuthenticationApi.mfaUpdateSetting(accessToken, multiFactorAuthModelWithLockout, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
 
  
  
 
<h6 id="MFAUpdatePhoneNumberByToken-put-"> MFA Update Phone Number by Token (PUT)</h6>

 This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number-by-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var phoneNo2FA = "<phoneNo2FA>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var isVoiceOtp = true; //Optional
var options = "<options>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaUpdatePhoneNumberByToken(accessToken, phoneNo2FA, smsTemplate2FA, isVoiceOtp,options).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAValidateEmailOtpByAccessToken-put-"> Verify MFA Email OTP by Access Token (PUT)</h6>

 This API is used to set up MFA Email OTP authenticator on profile after login.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/verify-mfa-otp-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var multiFactorAuthModelByEmailOtpWithLockout ={ 
"EmailId":"emailId",
"Otp":"otp"
  };  //Required

lrv2.multiFactorAuthenticationApi.mfaValidateEmailOtpByAccessToken(accessToken, multiFactorAuthModelByEmailOtpWithLockout).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFASecurityQuestionAnswerByAccessToken-put-"> Update MFA Security Question by Access Token (PUT)</h6>

 This API is used to set up MFA Security Question authenticator on profile after login.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/update-mfa-security-question-by-access-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var securityQuestionAnswerModelByAccessToken ={  
     "securityquestionanswer": [
        {
            "QuestionId": "db7****8a73e4******bd9****8c20",
            "Answer": "<answer>"
        }
    ],
     "ReplaceSecurityQuestionAnswer":false // required
 };  //Required

lrv2.multiFactorAuthenticationApi.mfaSecurityQuestionAnswerByAccessToken(accessToken, securityQuestionAnswerModelByAccessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAValidateOTPByPhone-put-"> MFA Validate OTP (PUT)</h6>

 This API is used to login via Multi-factor authentication by passing the One Time Password received via SMS  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-validate-otp/)

 
 

 ```js

var multiFactorAuthModelWithLockout ={ 
"otp" : "<otp>"
};  //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var fields = null; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
var rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
var rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
var rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaValidateOTPByPhone(multiFactorAuthModelWithLockout, secondFactorAuthenticationToken, fields,smsTemplate2FA, rbaBrowserEmailTemplate, rbaCityEmailTemplate, rbaCountryEmailTemplate, rbaIpEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```

 
  
  
 
<h6 id="MFAValidateBackupCode-put-"> MFA Validate Backup code (PUT)</h6>

 This API is used to validate the backup code provided by the user and if valid, we return an access token allowing the user to login incases where Multi-factor authentication (MFA) is enabled and the secondary factor is unavailable. When a user initially downloads the Backup codes, We generate 10 codes, each code can only be consumed once. if any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-validate-backup-code/)

 
 

 ```js

var multiFactorAuthModelByBackupCode ={ 
"backupCode" : "<backupCode>"
};  //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var fields = null; //Optional
var rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
var rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
var rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
var rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaValidateBackupCode(multiFactorAuthModelByBackupCode, secondFactorAuthenticationToken, fields, rbaBrowserEmailTemplate, rbaCityEmailTemplate, rbaCountryEmailTemplate, rbaIpEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAUpdatePhoneNumber-put-"> MFA Update Phone Number (PUT)</h6>

 This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number/)

 
 

 ```js

var phoneNo2FA = "<phoneNo2FA>"; //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var isVoiceOtp = true; //Optional
var options = "<options>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaUpdatePhoneNumber(phoneNo2FA, secondFactorAuthenticationToken, smsTemplate2FA, isVoiceOtp, options).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAValidateEmailOtp-put-"> Verify MFA Email OTP by MFA Token (PUT)</h6>

 This API is used to Verify MFA Email OTP by MFA Token  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/verify-mfa-email-otp-by-mfa-token/)

 
 

 ```js

var multiFactorAuthModelByEmailOtp ={ 
    "EmailId":"email",
    "Otp":"otp"
  };  //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
var rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
var rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
var rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaValidateEmailOtp(multiFactorAuthModelByEmailOtp, secondFactorAuthenticationToken, rbaBrowserEmailTemplate, rbaCityEmailTemplate, rbaCountryEmailTemplate, rbaIpEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFASecurityQuestionAnswer-put-"> Update MFA Security Question by MFA Token (PUT)</h6>

 This API is used to set the security questions on the profile with the MFA token when MFA flow is required.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/update-mfa-security-question-by-mfa-token/)

 
 

 ```js

var securityQuestionAnswerUpdateModel ={  
    "securityquestionanswer": [
        {
            "QuestionId": "db7****8a73e4******bd9****8c20",
            "Answer": "<answer>"
        }
    ]
 };  //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required

lrv2.multiFactorAuthenticationApi.mfaSecurityQuestionAnswer(securityQuestionAnswerUpdateModel, secondFactorAuthenticationToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```

<h6 id="MFAValidateAuthenticatorCode-put-"> MFA Validate Authenticator Code (PUT)</h6>

 This API is used to login to a user's account during the second MFA step with an Authenticator Code.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/authenticator/mfa-validate-authenticator-code/)

 
 

 ```js


var multiFactorAuthModelByAuthenticatorCode ={  
    "authenticatorCode" : "<authenticatorCode>"
 };  //Required
var secondfactorauthenticationtoken = "<secondfactorauthenticationtoken>"; //Required
var fields = null; //Optional

lrv2.multiFactorAuthenticationApi.mfaValidateAuthenticatorCode(multiFactorAuthModelByAuthenticatorCode, secondfactorauthenticationtoken, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAVerifyAuthenticatorCode-put-"> MFA Verify Authenticator Code (PUT)</h6>

 This API is used to validate an Authenticator Code as part of the MFA process.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/authenticator/mfa-verify-authenticator-code/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var multiFactorAuthModelByAuthenticatorCodeSecurityAnswer ={ 
"authenticatorCode" : "<authenticatorCode>"
};  //Required
var fields = null; //Optional

lrv2.multiFactorAuthenticationApi.mfaVerifyAuthenticatorCode(accessToken, multiFactorAuthModelByAuthenticatorCodeSecurityAnswer, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFALoginByEmail-post-"> MFA Email Login (POST)</h6>

 This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-email-login)

 
 

 ```js

var email = "<email>"; //Required
var password = "<password>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var emailTemplate2FA = "<emailTemplate2FA>"; //Optional
var isVoiceOtp = true; //Optional
var options = "<options>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaLoginByEmail(email, password, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl,emailTemplate2FA, isVoiceOtp,options).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFALoginByUserName-post-"> MFA UserName Login (POST)</h6>

 This API can be used to login by username on a Multi-factor authentication enabled LoginRadius site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-user-name-login)

 
 

 ```js

var password = "<password>"; //Required
var username = "<username>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var emailTemplate2FA = "<emailTemplate2FA>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.multiFactorAuthenticationApi.mfaLoginByUserName(password, username, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl, emailTemplate2FA, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFALoginByPhone-post-"> MFA Phone Login (POST)</h6>

 This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-phone-login)

 
 

 ```js

var password = "<password>"; //Required
var phone = "<phone>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var emailTemplate2FA = "<emailTemplate2FA>"; //Optional
var isVoiceOtp = true; //Optional
var options = "<options>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaLoginByPhone(password, phone, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl,emailTemplate2FA, isVoiceOtp, options).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAEmailOTP-post-"> Send MFA Email OTP by MFA Token (POST)</h6>

 An API designed to send the MFA Email OTP to the email.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/send-mfa-email-otp-by-mfa-token/)

 
 

 ```js

var emailIdModel ={  
"EmailId":"email"
 };  //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var emailTemplate2FA = "<emailTemplate2FA>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaEmailOTP(emailIdModel, secondFactorAuthenticationToken, emailTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFASecurityQuestionAnswerVerification-post-"> Verify MFA Security Question by MFA Token (POST)</h6>

 This API is used to resending the verification OTP to the provided phone number  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/verify-mfa-security-question-by-mfa-token/)

 
 

 ```js

var securityQuestionAnswerUpdateModel ={ 
      "securityquestionanswer": [
        {
            "QuestionId": "db7****8a73e4******bd9****8c20",
            "Answer": "<answer>"
        }
    ]
  };  //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
var rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
var rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
var rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaSecurityQuestionAnswerVerification(securityQuestionAnswerUpdateModel, secondFactorAuthenticationToken, rbaBrowserEmailTemplate, rbaCityEmailTemplate, rbaCountryEmailTemplate, rbaIpEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAConfigureByAccessToken-get-"> MFA Validate Access Token (GET)</h6>

 This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-validate-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var isVoiceOtp = true; //Optional

lrv2.multiFactorAuthenticationApi.mfaConfigureByAccessToken(accessToken, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});


 ```
 
  
  
 
<h6 id="MFABackupCodeByAccessToken-get-"> MFA Backup Code by Access Token (GET)</h6>

 This API is used to get a set of backup codes via access token to allow the user login on a site that has Multi-factor Authentication enabled in the event that the user does not have a secondary factor available. We generate 10 codes, each code can only be consumed once. If any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-backup-code-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.multiFactorAuthenticationApi.mfaBackupCodeByAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAResetBackupCodeByAccessToken-get-"> Reset Backup Code by Access Token (GET)</h6>

 API is used to reset the backup codes on a given account via the access token. This API call will generate 10 new codes, each code can only be consumed once  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-reset-backup-code-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetBackupCodeByAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAEmailOtpByAccessToken-get-"> Send MFA Email OTP by Access Token (GET)</h6>

 This API is created to send the OTP to the email if email OTP authenticator is enabled in app's MFA configuration.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/send-mfa-email-otp-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var emailId = "<emailId>"; //Required
var emailTemplate2FA = "<emailTemplate2FA>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaEmailOtpByAccessToken(accessToken, emailId, emailTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAResendOTP-get-"> MFA Resend Otp (GET)</h6>

 This API is used to resending the verification OTP to the provided phone number  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/resend-twofactorauthentication-otp/)

 
 

 ```js

var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.multiFactorAuthenticationApi.mfaResendOTP(secondFactorAuthenticationToken, smsTemplate2FA, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFABackupCodeByUid-get-"> MFA Backup Code by UID (GET)</h6>

 This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-backup-code-by-uid/)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.multiFactorAuthenticationApi.mfaBackupCodeByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAResetBackupCodeByUid-get-"> MFA Reset Backup Code by UID (GET)</h6>

 This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-reset-backup-code-by-uid/)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetBackupCodeByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
 <h6 id="MFAResetAuthenticatorByToken-delete-"> MFA Reset Authenticator by Token (DELETE)</h6>

 This API Resets the Authenticator configurations on a given account via the access_token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/authenticator/mfa-reset-authenticator-by-token/)

 
 

 ```Js

var accessToken = "<accessToken>"; //Required
var authenticator = true; //Required

lrv2.multiFactorAuthenticationApi.mfaResetAuthenticatorByToken(accessToken, authenticator).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAResetSMSAuthByToken-delete-"> MFA Reset SMS Authenticator by Token (DELETE)</h6>

 This API resets the SMS Authenticator configurations on a given account via the access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var otpauthenticator = true; //Required

lrv2.multiFactorAuthenticationApi.mfaResetSMSAuthByToken(accessToken, otpauthenticator).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAResetEmailOtpAuthenticatorByAccessToken-delete-"> Reset MFA Email OTP Authenticator By Access Token (DELETE)</h6>

 This API is used to reset the Email OTP Authenticator settings for an MFA-enabled user  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/reset-mfa-email-otp-authenticator-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetEmailOtpAuthenticatorByAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAResetSecurityQuestionAuthenticatorByAccessToken-delete-"> MFA Reset Security Question Authenticator By Access Token (DELETE)</h6>

 This API is used to Reset MFA Security Question Authenticator By Access Token  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/reset-mfa-security-question-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetSecurityQuestionAuthenticatorByAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAResetSMSAuthenticatorByUid-delete-"> MFA Reset SMS Authenticator By UID (DELETE)</h6>

 This API resets the SMS Authenticator configurations on a given account via the UID.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-uid/)

 
 

 ```js

var otpauthenticator = true; //Required
var uid = "<uid>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetSMSAuthenticatorByUid(otpauthenticator, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
<h6 id="MFAResetAuthenticatorByUid-delete-"> MFA Reset Authenticator By UID (DELETE)</h6>

 This API resets the Authenticator configurations on a given account via the UID.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/authenticator/mfa-reset-authenticator-by-uid/)

 
 

 ```Js

var authenticator = true; //Required
var uid = "<uid>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetAuthenticatorByUid(authenticator, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAResetEmailOtpAuthenticatorByUid-delete-"> Reset MFA Email OTP Authenticator Settings by Uid (DELETE)</h6>

 This API is used to reset the Email OTP Authenticator settings for an MFA-enabled user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/reset-mfa-email-otp-authenticator-settings-by-uid/)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetEmailOtpAuthenticatorByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAResetSecurityQuestionAuthenticatorByUid-delete-"> Reset MFA Security Question Authenticator Settings by Uid (DELETE)</h6>

 This API is used to reset the Security Question Authenticator settings for an MFA-enabled user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/reset-mfa-security-question-authenticator-settings-by-uid/)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetSecurityQuestionAuthenticatorByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### PINAuthentication API


List of APIs in this Section:<br>

* PUT : [Reset PIN By ResetToken](#ResetPINByResetToken-put-)<br>
* PUT : [Reset PIN By SecurityAnswer And Email](#ResetPINByEmailAndSecurityAnswer-put-)<br>
* PUT : [Reset PIN By SecurityAnswer And Username](#ResetPINByUsernameAndSecurityAnswer-put-)<br>
* PUT : [Reset PIN By SecurityAnswer And Phone](#ResetPINByPhoneAndSecurityAnswer-put-)<br>
* PUT : [Change PIN By Token](#ChangePINByAccessToken-put-)<br>
* PUT : [Reset PIN by Phone and OTP](#ResetPINByPhoneAndOtp-put-)<br>
* PUT : [Reset PIN by Email and OTP](#ResetPINByEmailAndOtp-put-)<br>
* PUT : [Reset PIN by Username and OTP](#ResetPINByUsernameAndOtp-put-)<br>
* POST : [PIN Login](#PINLogin-post-)<br>
* POST : [Forgot PIN By Email](#SendForgotPINEmailByEmail-post-)<br>
* POST : [Forgot PIN By UserName](#SendForgotPINEmailByUsername-post-)<br>
* POST : [Forgot PIN By Phone](#SendForgotPINSMSByPhone-post-)<br>
* POST : [Set PIN By PinAuthToken](#SetPINByPinAuthToken-post-)<br>
* GET : [Invalidate PIN Session Token](#InValidatePinSessionToken-get-)<br>



<h6 id="ResetPINByResetToken-put-"> Reset PIN By ResetToken (PUT)</h6>

 This API is used to reset pin using reset token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-resettoken/)

 
 

 ```js

var resetPINByResetToken ={ 
"pin" : "<pin>",
"resetToken" : "<resetToken>"
};  //Required

lrv2.pinAuthenticationApi.resetPINByResetToken(resetPINByResetToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPINByEmailAndSecurityAnswer-put-"> Reset PIN By SecurityAnswer And Email (PUT)</h6>

 This API is used to reset pin using security question answer and email.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-securityanswer-and-email/)

 
 

 ```js

var resetPINBySecurityQuestionAnswerAndEmailModel ={ 
"email" : "<email>",
"pin" : "<pin>",
"securityAnswer" : {"QuestionID":"Answer"}
};  //Required

lrv2.pinAuthenticationApi.resetPINByEmailAndSecurityAnswer(resetPINBySecurityQuestionAnswerAndEmailModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPINByUsernameAndSecurityAnswer-put-"> Reset PIN By SecurityAnswer And Username (PUT)</h6>

 This API is used to reset pin using security question answer and username.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-securityanswer-and-username/)

 
 

 ```js

var resetPINBySecurityQuestionAnswerAndUsernameModel ={ 
"pin" : "<pin>",
"securityAnswer" : {"QuestionID":"Answer"},
"username" : "<username>"
};  //Required

lrv2.pinAuthenticationApi.resetPINByUsernameAndSecurityAnswer(resetPINBySecurityQuestionAnswerAndUsernameModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPINByPhoneAndSecurityAnswer-put-"> Reset PIN By SecurityAnswer And Phone (PUT)</h6>

 This API is used to reset pin using security question answer and phone.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-securityanswer-and-phone/)

 
 

 ```js

var resetPINBySecurityQuestionAnswerAndPhoneModel ={ 
"phone" : "<phone>",
"pin" : "<pin>",
"securityAnswer" : {"QuestionID":"Answer"}
};  //Required

lrv2.pinAuthenticationApi.resetPINByPhoneAndSecurityAnswer(resetPINBySecurityQuestionAnswerAndPhoneModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ChangePINByAccessToken-put-"> Change PIN By Token (PUT)</h6>

 This API is used to change a user's PIN using access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/change-pin-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var changePINModel ={ 
"newPIN" : "<newPIN>",
"oldPIN" : "<oldPIN>"
};  //Required

lrv2.pinAuthenticationApi.changePINByAccessToken(accessToken, changePINModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPINByPhoneAndOtp-put-"> Reset PIN by Phone and OTP (PUT)</h6>

 This API is used to reset pin using phoneId and OTP.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-phone-and-otp/)

 
 

 ```js

var resetPINByPhoneAndOTPModel ={ 
"otp" : "<otp>",
"phone" : "<phone>",
"pin" : "<pin>"
};  //Required

lrv2.pinAuthenticationApi.resetPINByPhoneAndOtp(resetPINByPhoneAndOTPModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPINByEmailAndOtp-put-"> Reset PIN by Email and OTP (PUT)</h6>

 This API is used to reset pin using email and OTP.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-email-and-otp/)

 
 

 ```js

var resetPINByEmailAndOtpModel ={ 
"email" : "<email>",
"otp" : "<otp>",
"pin" : "<pin>"
};  //Required

lrv2.pinAuthenticationApi.resetPINByEmailAndOtp(resetPINByEmailAndOtpModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ResetPINByUsernameAndOtp-put-"> Reset PIN by Username and OTP (PUT)</h6>

 This API is used to reset pin using username and OTP.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-username-and-otp/)

 
 

 ```js

var resetPINByUsernameAndOtpModel ={ 
"otp" : "<otp>",
"pin" : "<pin>",
"username" : "<username>"
};  //Required

lrv2.pinAuthenticationApi.resetPINByUsernameAndOtp(resetPINByUsernameAndOtpModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="PINLogin-post-"> PIN Login (POST)</h6>

 This API is used to login a user by pin and session token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/login-by-pin/)

 
 

 ```js

var loginByPINModel ={ 
"pin" : "<pin>"
};  //Required
var sessionToken = "<sessionToken>"; //Required

lrv2.pinAuthenticationApi.pinLogin(loginByPINModel, sessionToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SendForgotPINEmailByEmail-post-"> Forgot PIN By Email (POST)</h6>

 This API sends the reset pin email to specified email address.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-email/)

 
 

 ```js

var forgotPINLinkByEmailModel ={ 
"email" : "<email>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var resetPINUrl = "<resetPINUrl>"; //Optional

lrv2.pinAuthenticationApi.sendForgotPINEmailByEmail(forgotPINLinkByEmailModel, emailTemplate, resetPINUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SendForgotPINEmailByUsername-post-"> Forgot PIN By UserName (POST)</h6>

 This API sends the reset pin email using username.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-username/)

 
 

 ```js

var forgotPINLinkByUserNameModel ={ 
"userName" : "<userName>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var resetPINUrl = "<resetPINUrl>"; //Optional

lrv2.pinAuthenticationApi.sendForgotPINEmailByUsername(forgotPINLinkByUserNameModel, emailTemplate, resetPINUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SendForgotPINSMSByPhone-post-"> Forgot PIN By Phone (POST)</h6>

 This API sends the OTP to specified phone number  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-phone/)

 
 

 ```js

var forgotPINOtpByPhoneModel ={ 
"phone" : "<phone>"
};  //Required
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.pinAuthenticationApi.sendForgotPINSMSByPhone(forgotPINOtpByPhoneModel, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SetPINByPinAuthToken-post-"> Set PIN By PinAuthToken (POST)</h6>

 This API is used to change a user's PIN using Pin Auth token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/set-pin-by-pinauthtoken/)

 
 

 ```js

var pinRequiredModel ={ 
"pin" : "<pin>"
};  //Required
var pinAuthToken = "<pinAuthToken>"; //Required

lrv2.pinAuthenticationApi.setPINByPinAuthToken(pinRequiredModel, pinAuthToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="InValidatePinSessionToken-get-"> Invalidate PIN Session Token (GET)</h6>

 This API is used to invalidate pin session token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/invalidate-pin-session-token/)

 
 

 ```js

var sessionToken = "<sessionToken>"; //Required

lrv2.pinAuthenticationApi.inValidatePinSessionToken(sessionToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### ReAuthentication API


List of APIs in this Section:<br>

* PUT : [Validate MFA by OTP](#MFAReAuthenticateByOTP-put-)<br>
* PUT : [Validate MFA by Backup Code](#MFAReAuthenticateByBackupCode-put-)<br>
* PUT : [Validate MFA by Password](#MFAReAuthenticateByPassword-put-)<br>
* PUT : [MFA Re-authentication by PIN](#VerifyPINAuthentication-put-)<br>
* PUT : [MFA Re-authentication by Email OTP](#ReAuthValidateEmailOtp-put-)<br>
* PUT : [MFA Step-Up Authentication by Authenticator Code](#MFAReAuthenticateByAuthenticatorCode-put-)<br>
* POST : [Verify Multifactor OTP Authentication](#VerifyMultiFactorOtpReauthentication-post-)<br>
* POST : [Verify Multifactor Password Authentication](#VerifyMultiFactorPasswordReauthentication-post-)<br>
* POST : [Verify Multifactor PIN Authentication](#VerifyMultiFactorPINReauthentication-post-)<br>
* POST : [MFA Re-authentication by Security Question](#ReAuthBySecurityQuestion-post-)<br>
* GET : [Multi Factor Re-Authenticate](#MFAReAuthenticate-get-)<br>
* GET : [Send MFA Re-auth Email OTP by Access Token](#ReAuthSendEmailOtp-get-)<br>



<h6 id="MFAReAuthenticateByOTP-put-"> Validate MFA by OTP (PUT)</h6>

 This API is used to re-authenticate via Multi-factor authentication by passing the One Time Password received via SMS  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-by-otp/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var reauthByOtpModel ={ 
"otp" : "<otp>"
};  //Required

lrv2.reAuthenticationApi.mfaReAuthenticateByOTP(accessToken, reauthByOtpModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAReAuthenticateByBackupCode-put-"> Validate MFA by Backup Code (PUT)</h6>

 This API is used to re-authenticate by set of backup codes via access token on the site that has Multi-factor authentication enabled in re-authentication for the user that does not have the device  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-by-backup-code/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var reauthByBackupCodeModel ={ 
"backupCode" : "<backupCode>"
};  //Required

lrv2.reAuthenticationApi.mfaReAuthenticateByBackupCode(accessToken, reauthByBackupCodeModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 

 
  
  
 
<h6 id="MFAReAuthenticateByPassword-put-"> Validate MFA by Password (PUT)</h6>

 This API is used to re-authenticate via Multi-factor-authentication by passing the password  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/re-auth-by-password)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var passwordEventBasedAuthModelWithLockout ={ 
"password" : "<password>"
};  //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

lrv2.reAuthenticationApi.mfaReAuthenticateByPassword(accessToken, passwordEventBasedAuthModelWithLockout, smsTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="VerifyPINAuthentication-put-"> MFA Re-authentication by PIN (PUT)</h6>

 This API is used to validate the triggered MFA authentication flow with a password.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/pin/re-auth-by-pin/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var pinAuthEventBasedAuthModelWithLockout ={ 
"pin" : "<pin>"
};  //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

lrv2.reAuthenticationApi.verifyPINAuthentication(accessToken, pinAuthEventBasedAuthModelWithLockout, smsTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ReAuthValidateEmailOtp-put-"> MFA Re-authentication by Email OTP (PUT)</h6>

 This API is used to validate the triggered MFA authentication flow with an Email OTP.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/mfa-re-auth-by-email-otp/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var reauthByEmailOtpModel ={  
  "EmailId":"email",
  "otp": "otp"
 };  //Required

lrv2.reAuthenticationApi.reAuthValidateEmailOtp(accessToken, reauthByEmailOtpModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
<h6 id="MFAReAuthenticateByAuthenticatorCode-put-"> MFA Step-Up Authentication by Authenticator Code (PUT)</h6>

 This API is used to validate the triggered MFA authentication flow with the Authenticator Code.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-by-otp/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var multiFactorAuthModelByAuthenticatorCode ={  
  "authenticatorCode" : "<authenticatorCode>"
 };  //Required

lrv2.reAuthenticationApi.mfaReAuthenticateByAuthenticatorCode(accessToken, multiFactorAuthModelByAuthenticatorCode).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ``` 
  
 
<h6 id="VerifyMultiFactorOtpReauthentication-post-"> Verify Multifactor OTP Authentication (POST)</h6>

 This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by OTP.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-validate-mfa/)

 
 

 ```js

var eventBasedMultiFactorToken ={ 
"secondFactorValidationToken" : "<secondFactorValidationToken>"
};  //Required
var uid = "<uid>"; //Required

lrv2.reAuthenticationApi.verifyMultiFactorOtpReauthentication(eventBasedMultiFactorToken, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="VerifyMultiFactorPasswordReauthentication-post-"> Verify Multifactor Password Authentication (POST)</h6>

 This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by password.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/re-auth-validate-password/)

 
 

 ```js

var eventBasedMultiFactorToken ={ 
"secondFactorValidationToken" : "<secondFactorValidationToken>"
};  //Required
var uid = "<uid>"; //Required

lrv2.reAuthenticationApi.verifyMultiFactorPasswordReauthentication(eventBasedMultiFactorToken, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="VerifyMultiFactorPINReauthentication-post-"> Verify Multifactor PIN Authentication (POST)</h6>

 This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by PIN.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/pin/re-auth-validate-pin/)

 
 

 ```js

var eventBasedMultiFactorToken ={ 
"secondFactorValidationToken" : "<secondFactorValidationToken>"
};  //Required
var uid = "<uid>"; //Required

lrv2.reAuthenticationApi.verifyMultiFactorPINReauthentication(eventBasedMultiFactorToken, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ReAuthBySecurityQuestion-post-"> MFA Re-authentication by Security Question (POST)</h6>

 This API is used to validate the triggered MFA re-authentication flow with security questions answers.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/mfa-re-authentication-by-security-question/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var securityQuestionAnswerUpdateModel ={  
    "securityquestionanswer": [
        {
            "QuestionId": "db7****8a73e4******bd9****8c20",
            "Answer": "<answer>"
        }
    ]
 };  //Required

lrv2.reAuthenticationApi.reAuthBySecurityQuestion(accessToken, securityQuestionAnswerUpdateModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="MFAReAuthenticate-get-"> Multi Factor Re-Authenticate (GET)</h6>

 This API is used to trigger the Multi-Factor Autentication workflow for the provided access token  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/re-auth-trigger/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.reAuthenticationApi.mfaReAuthenticate(accessToken, smsTemplate2FA, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ReAuthSendEmailOtp-get-"> Send MFA Re-auth Email OTP by Access Token (GET)</h6>

 This API is used to send the MFA Email OTP to the email for Re-authentication  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/send-mfa-re-auth-email-otp-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var emailId = "<emailId>"; //Required
var emailTemplate2FA = "<emailTemplate2FA>"; //Optional

lrv2.reAuthenticationApi.reAuthSendEmailOtp(accessToken, emailId, emailTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### ConsentManagement API


List of APIs in this Section:<br>

* PUT : [Update Consent By Access Token](#UpdateConsentProfileByAccessToken-put-)<br>
* POST : [Consent By ConsentToken](#SubmitConsentByConsentToken-post-)<br>
* POST : [Post Consent By Access Token](#SubmitConsentByAccessToken-post-)<br>
* GET : [Get Consent Logs By Uid](#GetConsentLogsByUid-get-)<br>
* GET : [Get Consent Log by Access Token](#GetConsentLogs-get-)<br>
* GET : [Get Verify Consent By Access Token](#VerifyConsentByAccessToken-get-)<br>



<h6 id="UpdateConsentProfileByAccessToken-put-"> Update Consent By Access Token (PUT)</h6>

 This API is to update consents using access token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/update-consent-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var consentUpdateModel ={ 
"consents" : [   { 
 "consentOptionId" : "<consentOptionId>"  ,
"isAccepted" : true  
}  ] 
};  //Required

lrv2.consentManagementApi.updateConsentProfileByAccessToken(accessToken, consentUpdateModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SubmitConsentByConsentToken-post-"> Consent By ConsentToken (POST)</h6>

 This API is to submit consent form using consent token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-by-consent-token/)

 
 

 ```js

var consentToken = "<consentToken>"; //Required

var consentSubmitModel ={ 
"data" : [   { 
 "consentOptionId" : "<consentOptionId>"  ,
"isAccepted" : true  
}  ] ,
"events" : [   { 
 "event" : "<event>"  ,
"isCustom" : true  
}  ] 
};  //Required

lrv2.consentManagementApi.submitConsentByConsentToken(consentToken, consentSubmitModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SubmitConsentByAccessToken-post-"> Post Consent By Access Token (POST)</h6>

 API to provide a way to end user to submit a consent form for particular event type.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var consentSubmitModel ={ 
"data" : [   { 
 "consentOptionId" : "<consentOptionId>"  ,
"isAccepted" : true  
}  ] ,
"events" : [   { 
 "event" : "<event>"  ,
"isCustom" : true  
}  ] 
};  //Required

lrv2.consentManagementApi.submitConsentByAccessToken(accessToken, consentSubmitModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetConsentLogsByUid-get-"> Get Consent Logs By Uid (GET)</h6>

 This API is used to get the Consent logs of the user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-log-by-uid/)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.consentManagementApi.getConsentLogsByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetConsentLogs-get-"> Get Consent Log by Access Token (GET)</h6>

 This API is used to fetch consent logs.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-log-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.consentManagementApi.getConsentLogs(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="VerifyConsentByAccessToken-get-"> Get Verify Consent By Access Token (GET)</h6>

 This API is used to check if consent is submitted for a particular event or not.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/verify-consent-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var event = "<event>"; //Required
var isCustom = true; //Required

lrv2.consentManagementApi.verifyConsentByAccessToken(accessToken, event, isCustom).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### SmartLogin API


List of APIs in this Section:<br>

* GET : [Smart Login Verify Token](#SmartLoginTokenVerification-get-)<br>
* GET : [Smart Login By Email](#SmartLoginByEmail-get-)<br>
* GET : [Smart Login By Username](#SmartLoginByUserName-get-)<br>
* GET : [Smart Login Ping](#SmartLoginPing-get-)<br>



<h6 id="SmartLoginTokenVerification-get-"> Smart Login Verify Token (GET)</h6>

 This API verifies the provided token for Smart Login  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-verify-token/)

 
 

 ```js

var verificationToken = "<verificationToken>"; //Required
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.smartLoginApi.smartLoginTokenVerification(verificationToken, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SmartLoginByEmail-get-"> Smart Login By Email (GET)</h6>

 This API sends a Smart Login link to the user's Email Id.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-by-email)

 
 

 ```js

var clientGuid = "<clientGuid>"; //Required
var email = "<email>"; //Required
var redirectUrl = "<redirectUrl>"; //Optional
var smartLoginEmailTemplate = "<smartLoginEmailTemplate>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.smartLoginApi.smartLoginByEmail(clientGuid, email, redirectUrl, smartLoginEmailTemplate, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SmartLoginByUserName-get-"> Smart Login By Username (GET)</h6>

 This API sends a Smart Login link to the user's Email Id.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-by-username)

 
 

 ```js

var clientGuid = "<clientGuid>"; //Required
var username = "<username>"; //Required
var redirectUrl = "<redirectUrl>"; //Optional
var smartLoginEmailTemplate = "<smartLoginEmailTemplate>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.smartLoginApi.smartLoginByUserName(clientGuid, username, redirectUrl, smartLoginEmailTemplate, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="SmartLoginPing-get-"> Smart Login Ping (GET)</h6>

 This API is used to check if the Smart Login link has been clicked or not  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-ping)

 
 

 ```js

var clientGuid = "<clientGuid>"; //Required
var fields = null; //Optional

lrv2.smartLoginApi.smartLoginPing(clientGuid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### OneTouchLogin API


List of APIs in this Section:<br>

* PUT : [One Touch OTP Verification](#OneTouchLoginOTPVerification-put-)<br>
* POST : [One Touch Login by Email](#OneTouchLoginByEmail-post-)<br>
* POST : [One Touch Login by Phone](#OneTouchLoginByPhone-post-)<br>
* GET : [One Touch Email Verification](#OneTouchEmailVerification-get-)<br>
* GET : [One Touch Login Ping](#OneTouchLoginPing-get-)<br>



<h6 id="OneTouchLoginOTPVerification-put-"> One Touch OTP Verification (PUT)</h6>

 This API is used to verify the otp for One Touch Login.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-otp-verification/)

 
 

 ```js

var otp = "<otp>"; //Required
var phone = "<phone>"; //Required
var fields = null; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.oneTouchLoginApi.oneTouchLoginOTPVerification(otp, phone, fields, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="OneTouchLoginByEmail-post-"> One Touch Login by Email (POST)</h6>

 This API is used to send a link to a specified email for a frictionless login/registration  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-by-email-captcha/)

 
 

 ```js

var oneTouchLoginByEmailModel ={ 
"clientguid" : "<clientguid>",
"email" : "<email>",
"g-recaptcha-response" : "<g-recaptcha-response>"
};  //Required
var oneTouchLoginEmailTemplate = "<oneTouchLoginEmailTemplate>"; //Optional
var redirecturl = "<redirecturl>"; //Optional
var welcomeemailtemplate = "<welcomeemailtemplate>"; //Optional

lrv2.oneTouchLoginApi.oneTouchLoginByEmail(oneTouchLoginByEmailModel, oneTouchLoginEmailTemplate, redirecturl, welcomeemailtemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 

<h6 id="OneTouchLoginByPhone-post-"> One Touch Login by Phone (POST)</h6>

 This API is used to send one time password to a given phone number for a frictionless login/registration.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-by-phone-captcha/)

 
 

 ```js

var oneTouchLoginByPhoneModel ={ 
"g-recaptcha-response" : "<g-recaptcha-response>",
"phone" : "<phone>"
};  //Required
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.oneTouchLoginApi.oneTouchLoginByPhone(oneTouchLoginByPhoneModel, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
<h6 id="OneTouchEmailVerification-get-"> One Touch Email Verification (GET)</h6>

 This API verifies the provided token for One Touch Login  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-email-verification)

 
 

 ```js

var verificationToken = "<verificationToken>"; //Required
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.oneTouchLoginApi.oneTouchEmailVerification(verificationToken, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="OneTouchLoginPing-get-"> One Touch Login Ping (GET)</h6>

 This API is used to check if the One Touch Login link has been clicked or not.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-ping/)

 
 

 ```js

var clientGuid = "<clientGuid>"; //Required
var fields = null; //Optional

lrv2.oneTouchLoginApi.oneTouchLoginPing(clientGuid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### PasswordLessLogin API


List of APIs in this Section:<br>

* PUT : [Passwordless Login Phone Verification](#PasswordlessLoginPhoneVerification-put-)<br>
* POST : [Passwordless Login Verification By Email And OTP](#PasswordlessLoginVerificationByEmailAndOTP-post-)<br>
* POST : [Passwordless Login Verification By User Name And OTP](#PasswordlessLoginVerificationByUserNameAndOTP-post-)<br>
* GET : [Passwordless Login by Phone](#PasswordlessLoginByPhone-get-)<br>
* GET : [Passwordless Login By Email](#PasswordlessLoginByEmail-get-)<br>
* GET : [Passwordless Login By UserName](#PasswordlessLoginByUserName-get-)<br>
* GET : [Passwordless Login Verification](#PasswordlessLoginVerification-get-)<br>



<h6 id="PasswordlessLoginPhoneVerification-put-"> Passwordless Login Phone Verification (PUT)</h6>

 This API verifies an account by OTP and allows the customer to login.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-phone-verification)

 
 

 ```js

var passwordLessLoginOtpModel ={ 
"otp" : "<otp>",
"phone" : "<phone>"
};  //Required
var fields = null; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginPhoneVerification(passwordLessLoginOtpModel, fields, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 

 
<h6 id="PasswordlessLoginVerificationByEmailAndOTP-post-">Passwordless Login Verification By Email And OTP (POST)</h6>

This API is used to verify the otp sent to the email when doing a passwordless login. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-verify-by-email-and-otp/)

 
 

 ```js

var passwordLessLoginByEmailAndOtpModel ={
"email": "<email>",
"otp": "<otp>",
"welcomeemailtemplate": "<welcome_email_template>"
};  //Required
var fields = null; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginVerificationByEmailAndOTP(passwordLessLoginByEmailAndOtpModel, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
  
<h6 id="PasswordlessLoginVerificationByUserNameAndOTP-post-">Passwordless Login Verification By User Name And OTP (POST)</h6>

This API is used to verify the otp sent to the email when doing a passwordless login. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-verify-by-username-and-otp/)

 
 

 ```js

var passwordLessLoginByUserNameAndOtpModel ={
"username": "<User name>",
"otp": "<otp>",
"welcomeemailtemplate": "<welcome_email_template>"
};  //Required
var fields = null; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginVerificationByUserNameAndOTP(passwordLessLoginByUserNameAndOtpModel, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```   
  
 
<h6 id="PasswordlessLoginByPhone-get-"> Passwordless Login by Phone (GET)</h6>

 API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-phone)

 
 

 ```js

var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional
var isVoiceOtp = true; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginByPhone(phone, smsTemplate, isVoiceOtp).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="PasswordlessLoginByEmail-get-"> Passwordless Login By Email (GET)</h6>

 This API is used to send a Passwordless Login verification link to the provided Email ID  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-email)

 
 

 ```js

var email = "<email>"; //Required
var passwordLessLoginTemplate = "<passwordLessLoginTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginByEmail(email, passwordLessLoginTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="PasswordlessLoginByUserName-get-"> Passwordless Login By UserName (GET)</h6>

 This API is used to send a Passwordless Login Verification Link to a customer by providing their UserName  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-username)

 
 

 ```js

var username = "<username>"; //Required
var passwordLessLoginTemplate = "<passwordLessLoginTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginByUserName(username, passwordLessLoginTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="PasswordlessLoginVerification-get-"> Passwordless Login Verification (GET)</h6>

 This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-verification)

 
 

 ```js

var verificationToken = "<verificationToken>"; //Required
var fields = null; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginVerification(verificationToken, fields, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### Configuration API


List of APIs in this Section:<br>

* GET : [Get Server Time](#GetServerInfo-get-)<br>
* GET : [Get Configurations](#getConfigurations-get-)<br>


<h6 id="GetServerInfo-get-"> Get Server Time (GET)</h6>

 This API allows you to query your LoginRadius account for basic server information and server time information which is useful when generating an SOTT token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/configuration/get-server-time/)

 
 

 ```js

var timeDifference = 0; //Optional

lrv2.configurationApi.getServerInfo(timeDifference).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 <h6 id="getConfigurations-get-"> Get Configuration (GET)</h6>

 This API is used to get the configurations which are set in the LoginRadius Admin Console for a particular LoginRadius site/environment. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/configuration/get-configurations)
  
  ```js
  lrv2.configurationApi.getConfigurations().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```
 
 

### Role API


List of APIs in this Section:<br>

* PUT : [Assign Roles by UID](#AssignRolesByUid-put-)<br>
* PUT : [Upsert Context](#UpdateRoleContextByUid-put-)<br>
* PUT : [Add Permissions to Role](#AddRolePermissions-put-)<br>
* POST : [Roles Create](#CreateRoles-post-)<br>
* GET : [Roles by UID](#GetRolesByUid-get-)<br>
* GET : [Get Context with Roles and Permissions](#GetRoleContextByUid-get-)<br>
* GET : [Role Context profile](#GetRoleContextByContextName-get-)<br>
* GET : [Roles List](#GetRolesList-get-)<br>
* DELETE : [Unassign Roles by UID](#UnassignRolesByUid-delete-)<br>
* DELETE : [Delete Role Context](#DeleteRoleContextByUid-delete-)<br>
* DELETE : [Delete Role from Context](#DeleteRolesFromRoleContextByUid-delete-)<br>
* DELETE : [Delete Additional Permission from Context](#DeleteAdditionalPermissionFromRoleContextByUid-delete-)<br>
* DELETE : [Account Delete Role](#DeleteRole-delete-)<br>
* DELETE : [Remove Permissions](#RemoveRolePermissions-delete-)<br>



<h6 id="AssignRolesByUid-put-"> Assign Roles by UID (PUT)</h6>

 This API is used to assign your desired roles to a given user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/assign-roles-by-uid/)

 
 

 ```js


var accountRolesModel ={ 
"roles" : [  "roles" ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.assignRolesByUid(accountRolesModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UpdateRoleContextByUid-put-"> Upsert Context (PUT)</h6>

 This API creates a Context with a set of Roles  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/upsert-context)

 
 

 ```js

var accountRoleContextModel ={ 
"roleContext" : [   { 
  "additionalPermissions" : ["<additionalPermissions>" ] ,
 "context" : "<context>"  ,
 "expiration" : "<expiration>"  ,
  "roles" : ["<roles>" ]  
}  ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.updateRoleContextByUid(accountRoleContextModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="AddRolePermissions-put-"> Add Permissions to Role (PUT)</h6>

 This API is used to add permissions to a given role.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/add-permissions-to-role)

 
 

 ```js

var permissionsModel ={ 
"permissions" : [  "permissions" ] 
};  //Required
var role = "<role>"; //Required

lrv2.roleApi.addRolePermissions(permissionsModel, role).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="CreateRoles-post-"> Roles Create (POST)</h6>

 This API creates a role with permissions.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/roles-create)

 
 

 ```js

var rolesModel ={ 
"roles" : [   { 
 "name" : "<name>"  ,
"permissions" : {"Permission_name":true}  
}  ] 
};  //Required

lrv2.roleApi.createRoles(rolesModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetRolesByUid-get-"> Roles by UID (GET)</h6>

 API is used to retrieve all the assigned roles of a particular User.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/get-roles-by-uid)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.roleApi.getRolesByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetRoleContextByUid-get-"> Get Context with Roles and Permissions (GET)</h6>

 This API Gets the contexts that have been configured and the associated roles and permissions.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/get-context)

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.roleApi.getRoleContextByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetRoleContextByContextName-get-"> Role Context profile (GET)</h6>

 The API is used to retrieve role context by the context name.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/role-context-profile/)

 
 

 ```js

var contextName = "<contextName>"; //Required

lrv2.roleApi.getRoleContextByContextName(contextName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetRolesList-get-"> Roles List (GET)</h6>

 This API retrieves the complete list of created roles with permissions of your app.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/roles-list)

 
 

 ```js

lrv2.roleApi.getRolesList().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="UnassignRolesByUid-delete-"> Unassign Roles by UID (DELETE)</h6>

 This API is used to unassign roles from a user.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/unassign-roles-by-uid)

 
 

 ```js

var accountRolesModel ={ 
"roles" : [  "roles" ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.unassignRolesByUid(accountRolesModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="DeleteRoleContextByUid-delete-"> Delete Role Context (DELETE)</h6>

 This API Deletes the specified Role Context  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-context)

 
 

 ```js

var contextName = "<contextName>"; //Required
var uid = "<uid>"; //Required

lrv2.roleApi.deleteRoleContextByUid(contextName, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="DeleteRolesFromRoleContextByUid-delete-"> Delete Role from Context (DELETE)</h6>

 This API Deletes the specified Role from a Context.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-role-from-context/)

 
 

 ```js

var contextName = "<contextName>"; //Required

var roleContextRemoveRoleModel ={ 
"roles" : [  "roles" ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.deleteRolesFromRoleContextByUid(contextName, roleContextRemoveRoleModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="DeleteAdditionalPermissionFromRoleContextByUid-delete-"> Delete Additional Permission from Context (DELETE)</h6>

 This API Deletes Additional Permissions from Context.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-permissions-from-context)

 
 

 ```js

var contextName = "<contextName>"; //Required

var roleContextAdditionalPermissionRemoveRoleModel ={ 
"additionalPermissions" : [  "additionalPermissions" ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.deleteAdditionalPermissionFromRoleContextByUid(contextName, roleContextAdditionalPermissionRemoveRoleModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="DeleteRole-delete-"> Account Delete Role (DELETE)</h6>

 This API is used to delete the role.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-role)

 
 

 ```js

var role = "<role>"; //Required

lrv2.roleApi.deleteRole(role).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="RemoveRolePermissions-delete-"> Remove Permissions (DELETE)</h6>

 API is used to remove permissions from a role.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/remove-permissions)

 
 

 ```js

var permissionsModel ={ 
"permissions" : [  "permissions" ] 
};  //Required
var role = "<role>"; //Required

lrv2.roleApi.removeRolePermissions(permissionsModel, role).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 

### RiskBasedAuthentication API


List of APIs in this Section:<br>

* POST : [Risk Based Authentication Login by Email](#RBALoginByEmail-post-)<br>
* POST : [Risk Based Authentication Login by Username](#RBALoginByUserName-post-)<br>
* POST : [Risk Based Authentication Phone Login](#RBALoginByPhone-post-)<br>



<h6 id="RBALoginByEmail-post-"> Risk Based Authentication Login by Email (POST)</h6>

 This API retrieves a copy of the user data based on the Email  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email)

 
 

 ```js

var emailAuthenticationModel ={ 
"email" : "<email>",
"password" : "<password>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var passwordDelegation = true; //Optional
var passwordDelegationApp = "<passwordDelegationApp>"; //Optional
var rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
var rbaBrowserSmsTemplate = "<rbaBrowserSmsTemplate>"; //Optional
var rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
var rbaCitySmsTemplate = "<rbaCitySmsTemplate>"; //Optional
var rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
var rbaCountrySmsTemplate = "<rbaCountrySmsTemplate>"; //Optional
var rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional
var rbaIpSmsTemplate = "<rbaIpSmsTemplate>"; //Optional
var rbaOneclickEmailTemplate = "<rbaOneclickEmailTemplate>"; //Optional
var rbaOTPSmsTemplate = "<rbaOTPSmsTemplate>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.riskBasedAuthenticationApi.rbaLoginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, passwordDelegation, passwordDelegationApp, rbaBrowserEmailTemplate, rbaBrowserSmsTemplate, rbaCityEmailTemplate, rbaCitySmsTemplate, rbaCountryEmailTemplate, rbaCountrySmsTemplate, rbaIpEmailTemplate, rbaIpSmsTemplate, rbaOneclickEmailTemplate, rbaOTPSmsTemplate, smsTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="RBALoginByUserName-post-"> Risk Based Authentication Login by Username (POST)</h6>

 This API retrieves a copy of the user data based on the Username  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-username)

 
 

 ```js

var userNameAuthenticationModel ={ 
"password" : "<password>",
"username" : "<username>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var passwordDelegation = true; //Optional
var passwordDelegationApp = "<passwordDelegationApp>"; //Optional
var rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
var rbaBrowserSmsTemplate = "<rbaBrowserSmsTemplate>"; //Optional
var rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
var rbaCitySmsTemplate = "<rbaCitySmsTemplate>"; //Optional
var rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
var rbaCountrySmsTemplate = "<rbaCountrySmsTemplate>"; //Optional
var rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional
var rbaIpSmsTemplate = "<rbaIpSmsTemplate>"; //Optional
var rbaOneclickEmailTemplate = "<rbaOneclickEmailTemplate>"; //Optional
var rbaOTPSmsTemplate = "<rbaOTPSmsTemplate>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.riskBasedAuthenticationApi.rbaLoginByUserName(userNameAuthenticationModel, emailTemplate, fields, loginUrl, passwordDelegation, passwordDelegationApp, rbaBrowserEmailTemplate, rbaBrowserSmsTemplate, rbaCityEmailTemplate, rbaCitySmsTemplate, rbaCountryEmailTemplate, rbaCountrySmsTemplate, rbaIpEmailTemplate, rbaIpSmsTemplate, rbaOneclickEmailTemplate, rbaOTPSmsTemplate, smsTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="RBALoginByPhone-post-"> Risk Based Authentication Phone Login (POST)</h6>

 This API retrieves a copy of the user data based on the Phone  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-login)

 
 

 ```js

var phoneAuthenticationModel ={ 
"password" : "<password>",
"phone" : "<phone>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var passwordDelegation = true; //Optional
var passwordDelegationApp = "<passwordDelegationApp>"; //Optional
var rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
var rbaBrowserSmsTemplate = "<rbaBrowserSmsTemplate>"; //Optional
var rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
var rbaCitySmsTemplate = "<rbaCitySmsTemplate>"; //Optional
var rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
var rbaCountrySmsTemplate = "<rbaCountrySmsTemplate>"; //Optional
var rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional
var rbaIpSmsTemplate = "<rbaIpSmsTemplate>"; //Optional
var rbaOneclickEmailTemplate = "<rbaOneclickEmailTemplate>"; //Optional
var rbaOTPSmsTemplate = "<rbaOTPSmsTemplate>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.riskBasedAuthenticationApi.rbaLoginByPhone(phoneAuthenticationModel, emailTemplate, fields, loginUrl, passwordDelegation, passwordDelegationApp, rbaBrowserEmailTemplate, rbaBrowserSmsTemplate, rbaCityEmailTemplate, rbaCitySmsTemplate, rbaCountryEmailTemplate, rbaCountrySmsTemplate, rbaIpEmailTemplate, rbaIpSmsTemplate, rbaOneclickEmailTemplate, rbaOTPSmsTemplate, smsTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### Sott API


List of APIs in this Section:<br>

* GET : [Generate SOTT](#GenerateSott-get-)<br>



<h6 id="GenerateSott-get-"> Generate SOTT (GET)</h6>

 This API allows you to generate SOTT with a given expiration time.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/session/generate-sott-token)

 
 

 ```js

var timeDifference = 0; //Optional



lrv2.sottApi.generateSott(timeDifference).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### NativeSocial API


List of APIs in this Section:<br>

* GET : [Get Access Token via Custom JWT Token](#AccessTokenViaCustomJWTToken-get-)<br>
* GET : [Access Token via Facebook Token](#GetAccessTokenByFacebookAccessToken-get-)<br>
* GET : [Access Token via Twitter Token](#GetAccessTokenByTwitterAccessToken-get-)<br>
* GET : [Access Token via Google Token](#GetAccessTokenByGoogleAccessToken-get-)<br>
* GET : [Access Token using google JWT token for Native Mobile Login](#GetAccessTokenByGoogleJWTAccessToken-get-)<br>
* GET : [Access Token via Linkedin Token](#GetAccessTokenByLinkedinAccessToken-get-)<br>
* GET : [Get Access Token By Foursquare Access Token](#GetAccessTokenByFoursquareAccessToken-get-)<br>
* GET : [Access Token via Apple Id Code](#GetAccessTokenByAppleIdCode-get-)<br>
* GET : [Access Token via WeChat Code](#GetAccessTokenByWeChatCode-get-)<br>
* GET : [Access Token via Google AuthCode](#GetAccessTokenByGoogleAuthCode-get-)<br>


<h6 id="AccessTokenViaCustomJWTToken-get-"> Get Access Token via Custom JWT Token (GET)</h6>

 This API is used to retrieve a LoginRadius access token by passing in a valid custom JWT token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-by-custom-jwt-token/)

 
 

 ```js

var idToken = "<idToken>"; //Required
var providername = "<providername>"; //Required

lrv2.nativeSocialApi.accessTokenViaCustomJWTToken(idToken, providername).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```

<h6 id="GetAccessTokenByFacebookAccessToken-get-"> Access Token via Facebook Token (GET)</h6>

 The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-facebook-token/)

 
 

 ```js

var fbAccessToken = "<fbAccessToken>"; //Required
var socialAppName = "<socialAppName>"; //Optional

lrv2.nativeSocialApi.getAccessTokenByFacebookAccessToken(fbAccessToken, socialAppName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenByTwitterAccessToken-get-"> Access Token via Twitter Token (GET)</h6>

 The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-twitter-token)

 
 

 ```js

var twAccessToken = "<twAccessToken>"; //Required
var twTokenSecret = "<twTokenSecret>"; //Required
var socialAppName = "<socialAppName>"; //Optional

lrv2.nativeSocialApi.getAccessTokenByTwitterAccessToken(twAccessToken, twTokenSecret, socialAppName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenByGoogleAccessToken-get-"> Access Token via Google Token (GET)</h6>

 The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-token)

 
 

 ```js

var googleAccessToken = "<googleAccessToken>"; //Required
var clientId = "<clientId>"; //Optional
var refreshToken = "<refreshToken>"; //Optional
var socialAppName = "<socialAppName>"; //Optional

lrv2.nativeSocialApi.getAccessTokenByGoogleAccessToken(googleAccessToken, clientId, refreshToken, socialAppName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenByGoogleJWTAccessToken-get-"> Access Token using google JWT token for Native Mobile Login (GET)</h6>

 This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-googlejwt)

 
 

 ```js

var idToken = "<idToken>"; //Required

lrv2.nativeSocialApi.getAccessTokenByGoogleJWTAccessToken(idToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenByLinkedinAccessToken-get-"> Access Token via Linkedin Token (GET)</h6>

 The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-linkedin-token/)

 
 

 ```js

var lnAccessToken = "<lnAccessToken>"; //Required
var socialAppName = "<socialAppName>"; //Optional

lrv2.nativeSocialApi.getAccessTokenByLinkedinAccessToken(lnAccessToken, socialAppName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenByFoursquareAccessToken-get-"> Get Access Token By Foursquare Access Token (GET)</h6>

 The API is used to get LoginRadius access token by sending Foursquare's access token. It will be valid for the specific duration of time specified in the response.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-foursquare-token/)

 
 

 ```js

var fsAccessToken = "<fsAccessToken>"; //Required

lrv2.nativeSocialApi.getAccessTokenByFoursquareAccessToken(fsAccessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenByAppleIdCode-get-"> Access Token via Apple Id Code (GET)</h6>

 The API is used to get LoginRadius access token by sending a valid Apple ID OAuth Code. It will be valid for the specific duration of time specified in the response.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-apple-id-code)

 
 

 ```js

var code = "<code>"; //Required
var socialAppName = "<socialAppName>"; //Optional

lrv2.nativeSocialApi.getAccessTokenByAppleIdCode(code, socialAppName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenByWeChatCode-get-"> Access Token via WeChat Code (GET)</h6>

 This API is used to retrieve a LoginRadius access token by passing in a valid WeChat OAuth Code.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-wechat-code)

 
 

 ```js

var code = "<code>"; //Required

lrv2.nativeSocialApi.getAccessTokenByWeChatCode(code).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetAccessTokenByGoogleAuthCode-get-"> Access Token via Google AuthCode (GET)</h6>

 The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-auth-code)

 
 

 ```js

var googleAuthcode = "<googleAuthcode>"; //Required
var socialAppName = "<socialAppName>"; //Optional

lrv2.nativeSocialApi.getAccessTokenByGoogleAuthCode(googleAuthcode, socialAppName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### WebHook API


List of APIs in this Section:

* PUT : [Update Webhook Subscription](#UpdateWebhookSubscription-put-)
* POST : [Create Webhook Subscription](#CreateWebhookSubscription-post-)
* GET : [Get Webhook Subscription Detail](#GetWebhookSubscriptionDetail-get-)
* GET : [List All Webhooks](#ListAllWebhooks-get-)
* GET : [Get Webhook Events](#GetWebhookEvents-get-)
* DELETE : [Delete Webhook Subscription](#DeleteWebhookSubscription-delete-)



<h6 id="UpdateWebhookSubscription-put-"> Update Webhook Subscription (PUT)</h6>

 This API is used to update a webhook subscription  [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/update-webhook-subscription/)

 
 

 ```

var hookId = "<hookId>"; //Required

var webHookSubscriptionUpdateModel ={ 
"Headers": {
    "x-test-header": "qa"
},
"QueryParams": {
    "apikey": "859faf40a7c54c209360b45376bf529f"
},
"Authentication": {
    "AuthType": "Basic",
    "BasicAuth": {
    "Username": "lrqaadmin",
    "Password": "ZBz6JcnZadxc2gB7sf5vby87zBIu6q"
    }
}
};  //Required

lrv2.webHookApi.updateWebhookSubscription(hookId, webHookSubscriptionUpdateModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="CreateWebhookSubscription-post-"> Create Webhook Subscription (POST)</h6>

 This API is used to create a new webhook subscription on your LoginRadius site.  [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/create-webhook-subscription/)

 
 

 ```


var webHookSubscribeModel ={ 
"event" : "<event>",
"name" : "<name>",
"targetUrl" : "<targetUrl>",
"Headers": {
"Custom-Header": "headerValue"
},
"QueryParams": {
    "apikey": "yourApiKey"
 },
"Authentication": {
    "AuthType": "Basic",
    "BasicAuth": {
    "Username": "yourUsername",
    "Password": "yourPassword"
    }
}
};  //Required

lrv2.webHookApi.createWebhookSubscription(webHookSubscribeModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetWebhookSubscriptionDetail-get-"> Get Webhook Subscription Detail (GET)</h6>

 This API is used to get details of a webhook subscription by Id  [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/get-webhook-subscription-details/)

 
 

 ```

var hookId = "<hookId>"; //Required

lrv2.webHookApi.getWebhookSubscriptionDetail(hookId).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="ListAllWebhooks-get-"> List All Webhooks (GET)</h6>

 This API is used to get the list of all the webhooks  [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/list-all-webhooks/)

 
 

 ```


lrv2.webHookApi.listAllWebhooks().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="GetWebhookEvents-get-"> Get Webhook Events (GET)</h6>

 This API is used to retrieve all the webhook events.  [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/get-webhook-events/)

 
 

 ```


lrv2.webHookApi.getWebhookEvents().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h6 id="DeleteWebhookSubscription-delete-"> Delete Webhook Subscription (DELETE)</h6>

 This API is used to delete webhook subscription  [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/delete-webhook-subscription/)

 
 

 ```

var hookId = "<hookId>"; //Required

lrv2.webHookApi.deleteWebhookSubscription(hookId).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  

### SlidingToken API


List of APIs in this Section:<br>

* GET : [Get Sliding Access Token](#SlidingAccessToken-get-)<br>


<h6 id="SlidingAccessToken-get-"> (GET) Sliding Access Token</h6>

This API is used to get access token and refresh token with the expired/nonexpired access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/sliding-access-token)
 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.slidingTokenApi.slidingAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

```
 

### Generate SOTT Manually

SOTT is a secure one-time token that can be created using the API key, API secret, and a timestamp ( start time and end time ). You can manually create a SOTT using the following util function.

```js
var sottConfig={
     apiKey: '', //(Optional) LoginRadius Api Key.
     apiSecret: '', //(Optional) LoginRadius Api Secret (Only Primary Api Secret is used to generate the SOTT manually).	
};

//do not pass the time difference if you are passing startTime & endTime.

var timeDifference="5"; // (Optional) The time difference will be used to set the expiration time of SOTT, If you do not pass time difference then the default expiration time of SOTT is 10 minutes.


// You can pass the start and end time interval and the SOTT will be valid for this time duration. 

var startDate="2022-05-17 07:10:42"; // (Optional) Valid Start Date with Date and time

var endDate="2022-05-17 07:20:42"; // (Optional) Valid End Date with Date and time


lrv2.helper.getSott(sottConfig,startDate, endDate,timeDifference).then(function (sott) {
       console.log(sott)
});

```


### Demo <br/>
We have a demo web application using the Node SDK, which includes the following features:
* Traditional email login
* Multi-Factor login
* Passwordless login
* Social login
* Register
* Email verification
* Forgot password
* Reset password
* Change password
* Set password
* Update account
* Account linking
* Custom object management
* Roles management <br/>


You can get a copy of our demo project at [Github](http://github.com/LoginRadius/node-js-sdk) .


### Demo Configuration
Terminal/Command Line:

1. Install Node.Js here . Ensure `npm --version` and `node --version` runs properly
2. Navigate to the demo directory, and run: `npm install`
3. Set your LoginRadius credentials on the client and server side:
   * Client side: `demo/demo/assets/js/options.js`
   * Server side : `demo/server.js`
   
   Replace the placeholders with your LoginRadius credentials apikey, apisecret, sitename. These can be obtained from [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret) 

4. Navigate to the demo directory, and run: node server.js
5. Demo will appear on http://localhost:3000