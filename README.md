# Node-js-sdk-v2

Customer Identity public repo for Node.js V2 SDK, based on LoginRadius V2 APIs.

![Home Image](http://docs.lrcontent.com/resources/github/banner-1544x500.png)

## Introduction

LoginRadius Node.js Customer Registration wrapper provides access to LoginRadius Identity Management Platform API.

LoginRadius is an Identity Management Platform that simplifies user registration while securing data. LoginRadius Platform simplifies and secures your user registration process, increases conversion with Social Login that combines 30 major social platforms, and offers a full solution with Traditional User Registration. You can gather a wealth of user profile data from Social Login or Traditional User Registration.

LoginRadius centralizes it all in one place, making it easy to manage and access. Easily integrate LoginRadius with all of your third-party applications, like MailChimp, Google Analytics, Livefyre and many more, making it easy to utilize the data you are capturing.

LoginRadius helps businesses boost user engagement on their web/mobile platform, manage online identities, utilize social media for marketing, capture accurate consumer data, and get unique social insight into their customer base.

Please visit [here](http://www.loginradius.com/) for more information.

# Installing

```bash
$ npm install loginradius-sdk
```

## Documentation

##### **Disclaimer**<br>
> This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

LoginRadius Combined Node SDK features a combined SDK set to encompass Social Login, User Registration, and Custom Object.

## Getting Started

This document contains information and examples regarding the LoginRadius Node.js SDK. It provides guidance for working with social authentication, user profile data, and sending messages with a variety of social networks such as Facebook, Google, Twitter, Yahoo, LinkedIn, and more.
You can get the SDK from [here](http://github.com/LoginRadius/node-js-sdk)

**Note**: The latest version(11.0.0) of Node js SDK works with LoginRadius V2 APIs.

Installation <br/>
run `npm install loginradius-sdk` <br/>
Configuration <br/>
Create `const config` in project

```js
const config = {
  apiDomain: 'api.loginradius.com',
  apiKey: '{{ Your API KEY }}',
  apiSecret: '{{ Your API Secret }}',
  siteName: '{{ Your Sitename }}',
  apiRequestSigning: false,
  proxy: {
    host: '',
    port: '',
    user: '',
    password: '',
  },
};
```

Replace the placeholders in the config object with your LoginRadius credentials apikey, apisecret, sitename. These can be obtained from [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret)

Pass the proxy configurations if you want to set Http Server Proxy Configuration through your NodeJs SDK. Host and port are required to set Http Server Proxy configuration (username and password are optional).

Require the loginradius-sdk package and pass the `config` object

```js
const lrv2 = require('loginradius-sdk')(config);
```

## Authentication API


<details>
    <summary>PUT: Auth Update Profile by Token</summary>
    
#### This API is used to update the user's profile by passing the access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-update-profile-by-token/)

```js
const accessToken = '<accessToken>'; //Required

let userProfileUpdateModel = {
  firstName: '<firstName>',
  lastName: '<lastName>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let nullSupport = true; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.authenticationApi
  .updateProfileByAccessToken(
    accessToken,
    userProfileUpdateModel,
    emailTemplate,
    fields,
    nullSupport,
    smsTemplate,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Unlock Account by Access Token</summary>
    
#### This API is used to allow a customer with a valid access token to unlock their account provided that they successfully pass the prompted Bot Protection challenges. The Block or Suspend block types are not applicable for this API. For additional details see our Auth Security Configuration documentation.You are only required to pass the Post Parameters that correspond to the prompted challenges. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlock-account-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

let unlockProfileModel = {
  'g-recaptcha-response': '<g-recaptcha-response>',
}; //Required

lrv2.authenticationApi
  .unlockAccountByToken(accessToken, unlockProfileModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Verify Email By OTP</summary>
    
#### This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-verify-email-by-otp/)

```js
let emailVerificationByOtpModel = {
  email: '<email>',
  otp: '<otp>',
}; //Required
let fields = null; //Optional
let url = '<url>'; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.authenticationApi
  .verifyEmailByOTP(
    emailVerificationByOtpModel,
    fields,
    url,
    welcomeEmailTemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Reset Password by Security Answer and Email</summary>
    
#### This API is used to reset password for the specified account by security question. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-email)

```js
let resetPasswordBySecurityAnswerAndEmailModel = {
  email: '<email>',
  password: '<password>',
  securityAnswer: { QuestionID: 'Answer' },
}; //Required

lrv2.authenticationApi
  .resetPasswordBySecurityAnswerAndEmail(
    resetPasswordBySecurityAnswerAndEmailModel
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Reset Password by Security Answer and Phone</summary>
    
#### This API is used to reset password for the specified account by security question. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-phone)

```js
let resetPasswordBySecurityAnswerAndPhoneModel = {
  password: '<password>',
  phone: '<phone>',
  securityAnswer: { QuestionID: 'Answer' },
}; //Required

lrv2.authenticationApi
  .resetPasswordBySecurityAnswerAndPhone(
    resetPasswordBySecurityAnswerAndPhoneModel
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Reset Password by Security Answer and UserName</summary>
    
#### This API is used to reset password for the specified account by security question. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-username)

```js
let resetPasswordBySecurityAnswerAndUserNameModel = {
  password: '<password>',
  securityAnswer: { QuestionID: 'Answer' },
  userName: '<userName>',
}; //Required

lrv2.authenticationApi
  .resetPasswordBySecurityAnswerAndUserName(
    resetPasswordBySecurityAnswerAndUserNameModel
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Reset Password by Reset Token</summary>

#### This API is used to set a new password for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-reset-token)

```js
let resetPasswordByResetTokenModel = {
  password: '<password>',
  resetToken: '<resetToken>',
}; //Required

lrv2.authenticationApi
  .resetPasswordByResetToken(resetPasswordByResetTokenModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Reset Password by OTP</summary>

#### This API is used to set a new password for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-otp)

```js
let resetPasswordByEmailAndOtpModel = {
  email: '<email>',
  otp: '<otp>',
  password: '<password>',
}; //Required

lrv2.authenticationApi
  .resetPasswordByEmailOTP(resetPasswordByEmailAndOtpModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Reset Password by OTP and UserName</summary>

#### This API is used to set a new password for the specified account if you are using the username as the unique identifier in your workflow. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-otp-and-username/)

```js
let resetPasswordByUserNameModel = {
  otp: '<otp>',
  password: '<password>',
  userName: '<userName>',
}; //Required

lrv2.authenticationApi
  .resetPasswordByOTPAndUserName(resetPasswordByUserNameModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Change Password</summary>

#### This API is used to change the accounts password based on the previous password. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-change-password)

```js
let accessToken = '<accessToken>'; //Required
let newPassword = '<newPassword>'; //Required
let oldPassword = '<oldPassword>'; //Required

lrv2.authenticationApi
  .changePassword(accessToken, newPassword, oldPassword)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Set or Change UserName</summary>

#### This API is used to set or change UserName by access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-set-or-change-user-name/)

```js
let accessToken = '<accessToken>'; //Required
let username = '<username>'; //Required

lrv2.authenticationApi
  .setOrChangeUserName(accessToken, username)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Auth Resend Email Verification</summary>

#### This API resends the verification email to the user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-resend-email-verification/)

```js
let email = '<email>'; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.authenticationApi
  .authResendEmailVerification(email, emailTemplate, verificationUrl)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Auth Add Email</summary>

#### This API is used to add additional emails to a user's account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-add-email)

```js
let accessToken = '<accessToken>'; //Required
let email = '<email>'; //Required
let type = '<type>'; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.authenticationApi
  .addEmail(accessToken, email, type, emailTemplate, verificationUrl)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Auth Login by Email</summary>

#### This API retrieves a copy of the user data based on the Email. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email)

```js
let emailAuthenticationModel = {
  email: '<email>',
  password: '<password>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.authenticationApi
  .loginByEmail(
    emailAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Auth Login by Username</summary>

#### This API retrieves a copy of the user data based on the Username. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-username)

```js
let userNameAuthenticationModel = {
  password: '<password>',
  username: '<username>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.authenticationApi
  .loginByUserName(
    userNameAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Auth Forgot Password</summary>

#### This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the `email` parameter with `username`. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-forgot-password)

```js
let email = '<email>'; //Required
let resetPasswordUrl = '<resetPasswordUrl>'; //Required
let emailTemplate = '<emailTemplate>'; //Optional

lrv2.authenticationApi
  .forgotPassword(email, resetPasswordUrl, emailTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Auth Link Social Identities</summary>

#### This API is used to link up a social provider account with an existing LoginRadius account on the basis of access token and the social providers user access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-link-social-identities)

```js
let accessToken = '<accessToken>'; //Required
let candidateToken = '<candidateToken>'; //Required

lrv2.authenticationApi
  .linkSocialIdentities(accessToken, candidateToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Auth Link Social Identities By Ping</summary>

#### This API is used to link up a social provider account with an existing LoginRadius account on the basis of ping and the social providers user access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-link-social-identities-by-ping)

```js
let accessToken = '<accessToken>'; //Required
let clientGuid = '<clientGuid>'; //Required

lrv2.authenticationApi
  .linkSocialIdentitiesByPing(accessToken, clientGuid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Auth User Registration by Email</summary>

#### This API creates a user in the database as well as sends a verification email to the user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-user-registration-by-email)

```js
let authUserRegistrationModel = {
  email: [
    {
      type: '<type>',
      value: '<value>',
    },
  ],
  firstName: '<firstName>',
  lastName: '<lastName>',
  password: '<password>',
}; //Required
let sott = '<sott>'; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let options = '<options>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.authenticationApi
  .userRegistrationByEmail(
    authUserRegistrationModel,
    sott,
    emailTemplate,
    fields,
    options,
    verificationUrl,
    welcomeEmailTemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Auth User Registration By Captcha</summary>

#### This API creates a user in the database as well as sends a verification email to the user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-user-registration-by-recaptcha)

```js
let authUserRegistrationModelWithCaptcha = {
  email: [
    {
      type: '<type>',
      value: '<value>',
    },
  ],
  firstName: '<firstName>',
  'g-recaptcha-response': '<g-recaptcha-response>',
  lastName: '<lastName>',
  password: '<password>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let options = '<options>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.authenticationApi
  .userRegistrationByCaptcha(
    authUserRegistrationModelWithCaptcha,
    emailTemplate,
    fields,
    options,
    smsTemplate,
    verificationUrl,
    welcomeEmailTemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Security Questions By Email</summary>

#### This API is used to retrieve the list of questions that are configured on the respective LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-email/)

```js
let email = '<email>'; //Required

lrv2.authenticationApi
  .getSecurityQuestionsByEmail(email)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Security Questions By UserName</summary>

#### This API is used to retrieve the list of questions that are configured on the respective LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-user-name/)

```js
let userName = '<userName>'; //Required

lrv2.authenticationApi
  .getSecurityQuestionsByUserName(userName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Security Questions By Phone</summary>

#### This API is used to retrieve the list of questions that are configured on the respective LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-phone/)

```js
let phone = '<phone>'; //Required

lrv2.authenticationApi
  .getSecurityQuestionsByPhone(phone)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Security Questions By Access Token</summary>

#### This API is used to retrieve the list of questions that are configured on the respective LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.authenticationApi
  .getSecurityQuestionsByAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Validate Access token</summary>

#### This api validates access token, if valid then returns a response with its expiry otherwise error. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-validate-access-token/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.authenticationApi
  .authValidateAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token Invalidate</summary>

#### This api call invalidates the active access token or expires an access token's validity. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-invalidate-access-token/)

```js
let accessToken = '<accessToken>'; //Required
let preventRefresh = true; //Optional

lrv2.authenticationApi
  .authInValidateAccessToken(accessToken, preventRefresh)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token Info</summary>

#### This api call provide the active access token Information [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-access-token-info/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.authenticationApi
  .getAccessTokenInfo(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Read all Profiles by Token</summary>

#### This API retrieves a copy of the user data based on the access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-read-profiles-by-token/)

```js
let accessToken = '<accessToken>'; //Required
let fields = null; //Optional

lrv2.authenticationApi
  .getProfileByAccessToken(accessToken, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Send Welcome Email</summary>

#### This API sends a welcome email. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-send-welcome-email/)

```js
let accessToken = '<accessToken>'; //Required
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.authenticationApi
  .sendWelcomeEmail(accessToken, welcomeEmailTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Delete Account</summary>

#### This API is used to delete an account by passing it a delete token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-delete-account/)

```js
let deletetoken = '<deletetoken>'; //Required

lrv2.authenticationApi
  .deleteAccountByDeleteToken(deletetoken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Check Email Availability</summary>

#### This API is used to check the email exists or not on your site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-email-availability/)

```js
let email = '<email>'; //Required

lrv2.authenticationApi
  .checkEmailAvailability(email)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Verify Email</summary>

#### This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-verify-email/)

```js
let verificationToken = '<verificationToken>'; //Required
let fields = null; //Optional
let url = '<url>'; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.authenticationApi
  .verifyEmail(verificationToken, fields, url, welcomeEmailTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Check UserName Availability</summary>

#### This API is used to check the UserName exists or not on your site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-username-availability/)

```js
let username = '<username>'; //Required

lrv2.authenticationApi
  .checkUserNameAvailability(username)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Privacy Policy Accept</summary>

#### This API is used to update the privacy policy stored in the user's profile by providing the access token of the user accepting the privacy policy. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-privacy-policy-accept)

```js
let accessToken = '<accessToken>'; //Required
let fields = null; //Optional

lrv2.authenticationApi
  .acceptPrivacyPolicy(accessToken, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Privacy Policy History By Access Token</summary>

#### This API will return all the accepted privacy policies for the user by providing the access token of that user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/privacy-policy-history-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.authenticationApi
  .getPrivacyPolicyHistoryByAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Auth Delete Account with Email Confirmation</summary>

#### This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-delete-account-with-email-confirmation/)

```js
let accessToken = '<accessToken>'; //Required
let deleteUrl = '<deleteUrl>'; //Optional
let emailTemplate = '<emailTemplate>'; //Optional

lrv2.authenticationApi
  .deleteAccountWithEmailConfirmation(accessToken, deleteUrl, emailTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Auth Remove Email</summary>

#### This API is used to remove additional emails from a user's account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-remove-email)

```js
let accessToken = '<accessToken>'; //Required
let email = '<email>'; //Required

lrv2.authenticationApi
  .removeEmail(accessToken, email)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Auth Unlink Social Identities</summary>

#### This API is used to unlink up a social provider account with the specified account based on the access token and the social providers user access token. The unlinked account will automatically get removed from your database. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlink-social-identities)

```js
let accessToken = '<accessToken>'; //Required
let provider = '<provider>'; //Required
let providerId = '<providerId>'; //Required

lrv2.authenticationApi
  .unlinkSocialIdentities(accessToken, provider, providerId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## Account API

<details>
    <summary>PUT: Account Update</summary>

#### This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-update)

```js
let accountUserProfileUpdateModel = {
  firstName: '<firstName>',
  lastName: '<lastName>',
}; //Required
let uid = '<uid>'; //Required
let fields = null; //Optional
let nullSupport = true; //Optional

lrv2.accountApi
  .updateAccountByUid(accountUserProfileUpdateModel, uid, fields, nullSupport)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Update Phone ID by UID</summary>

#### This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/update-phoneid-by-uid)

```js
let phone = '<phone>'; //Required
let uid = '<uid>'; //Required
let fields = null; //Optional

lrv2.accountApi
  .updatePhoneIDByUid(phone, uid, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Account Set Password</summary>

#### This API is used to set the password of an account in Cloud Storage. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-set-password)

```js
let password = '<password>'; //Required
let uid = '<uid>'; //Required

lrv2.accountApi
  .setAccountPasswordByUid(password, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Account Invalidate Verification Email</summary>

#### This API is used to invalidate the Email Verification status on an account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-invalidate-verification-email)

```js
let uid = '<uid>'; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.accountApi
  .invalidateAccountEmailVerification(uid, emailTemplate, verificationUrl)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Reset phone ID verification</summary>

#### This API Allows you to reset the phone no verification of an end user’s account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/reset-phone-id-verification)

```js
let uid = '<uid>'; //Required
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.accountApi
  .resetPhoneIDVerificationByUid(uid, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Upsert Email</summary>

#### This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/upsert-email)

```js
let upsertEmailModel = {
  email: [
    {
      type: '<type>',
      value: '<value>',
    },
  ],
}; //Required
let uid = '<uid>'; //Required
let fields = null; //Optional

lrv2.accountApi
  .upsertEmail(upsertEmailModel, uid, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Account Create</summary>

#### This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user.

In order to use this API, you need to format a JSON request body with all of the mandatory fields. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-create)

```js
let accountCreateModel = {
  email: [
    {
      type: '<type>',
      value: '<value>',
    },
  ],
  firstName: '<firstName>',
  lastName: '<lastName>',
  password: '<password>',
}; //Required
let fields = null; //Optional

lrv2.accountApi
  .createAccount(accountCreateModel, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Forgot Password Token</summary>

#### This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the `email` parameter with `username` in the body. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/get-forgot-password-token)

```js
let email = '<email>'; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let resetPasswordUrl = '<resetPasswordUrl>'; //Optional
let sendEmail = true; //Optional

lrv2.accountApi
  .getForgotPasswordToken(email, emailTemplate, resetPasswordUrl, sendEmail)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Email Verification token</summary>

#### This API Returns an Email Verification token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/get-email-verification-token)

```js
let email = '<email>'; //Required

lrv2.accountApi
  .getEmailVerificationToken(email)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Privacy Policy History By Uid</summary>

#### This API is used to retrieve all of the accepted Policies by the user, associated with their UID. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/privacy-policy-history-by-uid/)

```js
let uid = '<uid>'; //Required

lrv2.accountApi
  .getPrivacyPolicyHistoryByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Account Profiles by Email</summary>

#### This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-email)

```js
let email = '<email>'; //Required
let fields = null; //Optional

lrv2.accountApi
  .getAccountProfileByEmail(email, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Account Profiles by Username</summary>

#### This API is used to retrieve all of the profile data associated with the specified account by user name in Cloud Storage. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-user-name)

```js
let userName = '<userName>'; //Required
let fields = null; //Optional

lrv2.accountApi
  .getAccountProfileByUserName(userName, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Account Profile by Phone ID</summary>

#### This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-phone-id/)

```js
let phone = '<phone>'; //Required
let fields = null; //Optional

lrv2.accountApi
  .getAccountProfileByPhone(phone, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Account Profiles by UID</summary>

#### This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-uid)

```js
let uid = '<uid>'; //Required
let fields = null; //Optional

lrv2.accountApi
  .getAccountProfileByUid(uid, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Account Password</summary>

#### This API use to retrive the hashed password of a specified account in Cloud Storage. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-password)

```js
let uid = '<uid>'; //Required

lrv2.accountApi
  .getAccountPasswordHashByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token based on UID or User impersonation API</summary>

#### The API is used to get LoginRadius access token based on UID. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-impersonation-api)

```js
let uid = '<uid>'; //Required

lrv2.accountApi
  .getAccessTokenByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Refresh Access Token by Refresh Token</summary>

#### This API is used to refresh an access token via it's associated refresh token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-access-token-by-refresh-token)

```js
let refreshToken = '<refreshToken>'; //Required

lrv2.accountApi
  .refreshAccessTokenByRefreshToken(refreshToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Revoke Refresh Token</summary>

#### The Revoke Refresh Access Token API is used to revoke a refresh token or the Provider Access Token, revoking an existing refresh token will invalidate the refresh token but the associated access token will work until the expiry. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/revoke-refresh-token)

```js
let refreshToken = '<refreshToken>'; //Required

lrv2.accountApi
  .revokeRefreshToken(refreshToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Account Identities by Email</summary>

#### **Note**: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-identities-by-email)

```js
let email = '<email>'; //Required
let fields = null; //Optional

lrv2.accountApi
  .getAccountIdentitiesByEmail(email, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Account Delete</summary>

#### This API deletes the Users account and allows them to re-register for a new account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-delete)

```js
let uid = '<uid>'; //Required

lrv2.accountApi
  .deleteAccountByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Account Remove Email</summary>

#### Use this API to Remove emails from a user Account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-email-delete)

```js
let email = '<email>'; //Required
let uid = '<uid>'; //Required
let fields = null; //Optional

lrv2.accountApi
  .removeEmail(email, uid, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete User Profiles By Email</summary>

#### This API is used to delete all user profiles associated with an Email. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-email-delete/)

```js
let email = '<email>'; //Required

lrv2.accountApi
  .accountDeleteByEmail(email)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## Social API

<details>
    <summary>POST: Post Message API</summary>

Post Message API is used to post messages to the user's contacts.

**Supported Providers:** Twitter, LinkedIn

The Message API is used to post messages to the user?s contacts. This is one of the APIs that makes up the LoginRadius Friend Invite System. After using the Contact API, you can send messages to the retrieved contacts. This API requires setting permissions in your LoginRadius Dashboard.

GET & POST Message API work the same way except the API method is different. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/post-message-api)

```js
let accessToken = '<accessToken>'; //Required
let message = '<message>'; //Required
let subject = '<subject>'; //Required
let to = '<to>'; //Required

lrv2.socialApi
  .postMessage(accessToken, message, subject, to)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Status Posting</summary>

The Status API is used to update the status on the user's wall.

**Supported Providers:** Facebook, Twitter, LinkedIn. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/status-posting/)

```js
let accessToken = '<accessToken>'; //Required
let caption = '<caption>'; //Required
let description = '<description>'; //Required
let imageurl = '<imageurl>'; //Required
let status = '<status>'; //Required
let title = '<title>'; //Required
let url = '<url>'; //Required
let shorturl = '<shorturl>'; //Optional

lrv2.socialApi
  .statusPosting(
    accessToken,
    caption,
    description,
    imageurl,
    status,
    title,
    url,
    shorturl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Trackable Status Posting</summary>

The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.

The Trackable Status API is used to update the status on the user's wall and return an Post ID value. It is commonly referred to as Permission based sharing or Push notifications.

POST Input Parameter Format: application/x-www-form-urlencoded [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/trackable-status-posting/)

```js
let accessToken = '<accessToken>'; //Required

let statusModel = {
  caption: '<caption>',
  description: '<description>',
  imageurl: '<imageurl>',
  status: '<status>',
  title: '<title>',
  url: '<url>',
}; //Required

lrv2.socialApi
  .trackableStatusPosting(accessToken, statusModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token</summary>

This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/access-token)

```js
let token = '<token>'; //Required

lrv2.socialApi
  .exchangeAccessToken(token)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Refresh Token</summary>

The Refresh Access Token API is used to refresh the provider access token after authentication. It will be valid for up to 60 days on LoginRadius depending on the provider. In order to use the access token in other APIs, always refresh the token using this API.

**Supported Providers :** Facebook,Yahoo,Google,Twitter, Linkedin.

Contact LoginRadius support team to enable this API. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-token)

```js
let accessToken = '<accessToken>'; //Required
let expiresIn = 0; //Optional
let isWeb = true; //Optional

lrv2.socialApi
  .refreshAccessToken(accessToken, expiresIn, isWeb)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Token Validate</summary>

This API validates access token, if valid then returns a response with its expiry otherwise error. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/validate-access-token)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .validateAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token Invalidate</summary>

This api invalidates the active access token or expires an access token validity. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/invalidate-access-token)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .inValidateAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Active Session Details</summary>

This api is use to get all active session by Access Token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/get-active-session-details)

```js
let token = '<token>'; //Required

lrv2.socialApi
  .getActiveSession(token)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Active Session By Account Id</summary>

This api is used to get all active sessions by AccountID(UID). [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/active-session-by-account-id/)

```js
let accountId = '<accountId>'; //Required

lrv2.socialApi
  .getActiveSessionByAccountID(accountId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Active Session By Profile Id</summary>

 This api is used to get all active sessions by ProfileId.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/active-session-by-profile-id/)

```js
let profileId = '<profileId>'; //Required

lrv2.socialApi
  .getActiveSessionByProfileID(profileId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Album</summary>

**Supported Providers:** Facebook, Google, Live, Vkontakte.

This API returns the photo albums associated with the passed in access tokens Social Profile. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/album/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getAlbums(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Albums with cursor</summary>

**Supported Providers:** Facebook, Google, Live, Vkontakte.

This API returns the photo albums associated with the passed in access tokens Social Profile. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/album/)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getAlbumsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Audio</summary>

The Audio API is used to get audio files data from the user's social account.
 
**Supported Providers:** Live, Vkontakte  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/audio)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getAudios(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Audio With Cursor</summary>

The Audio API is used to get audio files data from the user's social account.

**Supported Providers:** Live, Vkontakte [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/audio)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getAudiosWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Check In</summary>

The Check In API is used to get check Ins data from the user's social account.

**Supported Providers:** Facebook, Foursquare, Vkontakte [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/check-in)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getCheckIns(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get CheckIns With Cursor</summary>

The Check In API is used to get check Ins data from the user's social account.

**Supported Providers:** Facebook, Foursquare, Vkontakte. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/check-in)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getCheckInsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Contact</summary>

The Contact API is used to get contacts/friends/connections data from the user's social account.This is one of the APIs that makes up the LoginRadius Friend Invite System. The data will normalized into LoginRadius' standard data format. This API requires setting permissions in your LoginRadius Dashboard.

**Note:** Facebook restricts access to the list of friends that is returned. When using the Contacts API with Facebook you will only receive friends that have accepted some permissions with your app.

**Supported Providers:** Facebook, Foursquare, Google, LinkedIn, Live, Twitter, Vkontakte, Yahoo. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/contact)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Optional

lrv2.socialApi
  .getContacts(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Event</summary>

The Event API is used to get the event data from the user's social account.
 
**Supported Providers:** Facebook, Live. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/event)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getEvents(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Events With Cursor</summary>

The Event API is used to get the event data from the user's social account.

**Supported Providers:** Facebook, Live. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/event)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getEventsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Following</summary>

Get the following user list from the user's social account.

**Supported Providers:** Twitter. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/following)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getFollowings(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Followings With Cursor</summary>

Get the following user list from the user's social account.

**Supported Providers:** Twitter. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/following)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getFollowingsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Group</summary>

The Group API is used to get group data from the user's social account.

**Supported Providers:** Facebook, Vkontakte. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/group)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getGroups(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Groups With Cursor</summary>

The Group API is used to get group data from the user's social account.

**Supported Providers:** Facebook, Vkontakte [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/group)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getGroupsWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Like</summary>

The Like API is used to get likes data from the user's social account.

**Supported Providers:** Facebook [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/like)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getLikes(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Likes With Cursor</summary>

The Like API is used to get likes data from the user's social account.

**Supported Providers:** Facebook. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/like)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getLikesWithCursor(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Mention</summary>

The Mention API is used to get mentions data from the user's social account.

**Supported Providers:** Twitter. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/mention)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getMentions(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Page</summary>

The Page API is used to get the page data from the user's social account.

**Supported Providers:** Facebook, LinkedIn. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/page)

```js
let accessToken = '<accessToken>'; //Required
let pageName = '<pageName>'; //Required

lrv2.socialApi
  .getPage(accessToken, pageName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Photo</summary>

The Photo API is used to get photo data from the user's social account.

**Supported Providers:** Facebook, Foursquare, Google, Live, Vkontakte. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/photo)

```js
let accessToken = '<accessToken>'; //Required
let albumId = '<albumId>'; //Required

lrv2.socialApi
  .getPhotos(accessToken, albumId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Post</summary>

The Post API is used to get post message data from the user's social account.

**Supported Providers:** Facebook. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/post)

```js
let accessToken = '<accessToken>'; //Required

lrv2.socialApi
  .getPosts(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Trackable Status Stats</summary>

The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.

The Trackable Status API is used to update the status on the user's wall and return an Post ID value. It is commonly referred to as Permission based sharing or Push notifications. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/get-trackable-status-stats/)

```js
let accessToken = '<accessToken>'; //Required
let caption = '<caption>'; //Required
let description = '<description>'; //Required
let imageurl = '<imageurl>'; //Required
let status = '<status>'; //Required
let title = '<title>'; //Required
let url = '<url>'; //Required

lrv2.socialApi
  .getTrackableStatusStats(
    accessToken,
    caption,
    description,
    imageurl,
    status,
    title,
    url
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Trackable Status Fetching</summary>

The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.

This API is used to retrieve a tracked post based on the passed in post ID value. This API requires setting permissions in your LoginRadius Dashboard

**Note:** To utilize this API you need to find the ID for the post you want to track, which might require using Trackable Status Posting API first. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/trackable-status-fetching/)

```js
let postId = '<postId>'; //Required

lrv2.socialApi
  .trackableStatusFetching(postId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: User Profile</summary>

The User Profile API is used to get social profile data from the user's social account after authentication.

<b>Supported Providers:</b> All. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/user-profile)

```js
let accessToken = '<accessToken>'; //Required
let fields = null; //Optional

lrv2.socialApi
  .getSocialUserProfile(accessToken, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Refresh User Profile</summary>

The User Profile API is used to get the latest updated social profile data from the user's social account after authentication. The social profile will be retrieved via oAuth and OpenID protocols. The data is normalized into LoginRadius' standard data format. This API should be called using the access token retrieved from the refresh access token API. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-user-profile)

```js
let accessToken = '<accessToken>'; //Required
let fields = null; //Optional

lrv2.socialApi
  .getRefreshedSocialUserProfile(accessToken, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Video</summary>

The Video API is used to get video files data from the user's social account.

<b>Supported Providers:</b> Facebook, Google, Live, Vkontakte. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/video)

```js
let accessToken = '<accessToken>'; //Required
let nextCursor = '<nextCursor>'; //Required

lrv2.socialApi
  .getVideos(accessToken, nextCursor)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## CustomObject API

<details>
    <summary>PUT: Custom Object Update by Access Token</summary>

This API is used to update the specified custom object data of the specified account. If the value of updatetype is 'replace' then it will fully replace custom object with the new custom object and if the value of updatetype is 'partialreplace' then it will perform an upsert type operation. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-update-by-objectrecordid-and-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required

let object = { customdata1: 'Store my customdata1 value' }; //Required
let updateType = '<updateType>'; //Optional

lrv2.customObjectApi
  .updateCustomObjectByToken(
    accessToken,
    objectName,
    objectRecordId,
    object,
    updateType
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Custom Object Update by UID</summary>

This API is used to update the specified custom object data of a specified account. If the value of updatetype is 'replace' then it will fully replace custom object with new custom object and if the value of updatetype is partialreplace then it will perform an upsert type operation. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-update-by-objectrecordid-and-uid)

```js
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required

let object = { customdata1: 'Store my customdata1 value' }; //Required
let uid = '<uid>'; //Required
let updateType = '<updateType>'; //Optional

lrv2.customObjectApi
  .updateCustomObjectByUid(objectName, objectRecordId, object, uid, updateType)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Create Custom Object by Token</summary>

This API is used to write information in JSON format to the custom object for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/create-custom-object-by-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required

let object = { customdata1: 'Store my customdata1 value' }; //Required

lrv2.customObjectApi
  .createCustomObjectByToken(accessToken, objectName, object)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Create Custom Object by UID</summary>

This API is used to write information in JSON format to the custom object for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/create-custom-object-by-uid)

```js
let objectName = '<objectName>'; //Required

let object = { customdata1: 'Store my customdata1 value' }; //Required
let uid = '<uid>'; //Required

lrv2.customObjectApi
  .createCustomObjectByUid(objectName, object, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Custom Object by Token</summary>

This API is used to retrieve the specified Custom Object data for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required

lrv2.customObjectApi
  .getCustomObjectByToken(accessToken, objectName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Custom Object by ObjectRecordId and Token</summary>

This API is used to retrieve the Custom Object data for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-objectrecordid-and-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required

lrv2.customObjectApi
  .getCustomObjectByRecordIDAndToken(accessToken, objectName, objectRecordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Custom Object By UID</summary>

This API is used to retrieve all the custom objects by UID from cloud storage. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-uid)

```js
let objectName = '<objectName>'; //Required
let uid = '<uid>'; //Required

lrv2.customObjectApi
  .getCustomObjectByUid(objectName, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Custom Object by ObjectRecordId and UID</summary>

This API is used to retrieve the Custom Object data for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-objectrecordid-and-uid)

```js
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required
let uid = '<uid>'; //Required

lrv2.customObjectApi
  .getCustomObjectByRecordID(objectName, objectRecordId, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Custom Object Delete by Record Id And Token</summary>

This API is used to remove the specified Custom Object data using ObjectRecordId of a specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-delete-by-objectrecordid-and-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required

lrv2.customObjectApi
  .deleteCustomObjectByToken(accessToken, objectName, objectRecordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Account Delete Custom Object by ObjectRecordId</summary>

This API is used to remove the specified Custom Object data using ObjectRecordId of specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-delete-by-objectrecordid-and-uid)

```js
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required
let uid = '<uid>'; //Required

lrv2.customObjectApi
  .deleteCustomObjectByRecordID(objectName, objectRecordId, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## PhoneAuthentication API

<details>
    <summary>PUT: Phone Reset Password by OTP</summary>

This API is used to reset the password. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-reset-password-by-otp)

```js
let resetPasswordByOTPModel = {
  otp: '<otp>',
  password: '<password>',
  phone: '<phone>',
}; //Required

lrv2.phoneAuthenticationApi
  .resetPasswordByPhoneOTP(resetPasswordByOTPModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Phone Verification OTP</summary>

This API is used to validate the verification code sent to verify a user's phone number. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-verify-otp)

```js
let otp = '<otp>'; //Required
let phone = '<phone>'; //Required
let fields = null; //Optional
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.phoneAuthenticationApi
  .phoneVerificationByOTP(otp, phone, fields, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Phone Verification OTP by Token</summary>

This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-verify-otp-by-token)

```js
let accessToken = '<accessToken>'; //Required
let otp = '<otp>'; //Required
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.phoneAuthenticationApi
  .phoneVerificationOTPByAccessToken(accessToken, otp, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Phone Number Update</summary>

This API is used to update the login Phone Number of users. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-number-update)

```js
let accessToken = '<accessToken>'; //Required
let phone = '<phone>'; //Required
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.phoneAuthenticationApi
  .updatePhoneNumber(accessToken, phone, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Phone Login</summary>

This API retrieves a copy of the user data based on the Phone. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-login)

```js
let phoneAuthenticationModel = {
  password: '<password>',
  phone: '<phone>',
}; //Required
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.phoneAuthenticationApi
  .loginByPhone(phoneAuthenticationModel, fields, loginUrl, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Phone Forgot Password by OTP</summary>

This API is used to send the OTP to reset the account password. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-forgot-password-by-otp)

```js
let phone = '<phone>'; //Required
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.phoneAuthenticationApi
  .forgotPasswordByPhoneOTP(phone, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Phone Resend Verification OTP</summary>

This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-resend-otp)

```js
let phone = '<phone>'; //Required
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.phoneAuthenticationApi
  .phoneResendVerificationOTP(phone, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Phone Resend Verification OTP By Token</summary>

This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-resend-otp-by-token)

```js
let accessToken = '<accessToken>'; //Required
let phone = '<phone>'; //Required
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.phoneAuthenticationApi
  .phoneResendVerificationOTPByToken(accessToken, phone, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Phone User Registration by SMS</summary>

This API registers the new users into your Cloud Storage and triggers the phone verification process. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-user-registration-by-sms)

```js
let authUserRegistrationModel = {
  firstName: '<firstName>',
  lastName: '<lastName>',
  password: '<password>',
  phoneId: '<phoneId>',
}; //Required
let sott = '<sott>'; //Required
let fields = null; //Optional
let options = '<options>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.phoneAuthenticationApi
  .userRegistrationByPhone(
    authUserRegistrationModel,
    sott,
    fields,
    options,
    smsTemplate,
    verificationUrl,
    welcomeEmailTemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Phone Number Availability</summary>

This API is used to check the Phone Number exists or not on your site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-number-availability)

```js
let phone = '<phone>'; //Required

lrv2.phoneAuthenticationApi
  .checkPhoneNumberAvailability(phone)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Remove Phone ID by Access Token</summary>

This API is used to delete the Phone ID on a user's account via the access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/remove-phone-id-by-access-token)

```js
let accessToken = '<accessToken>'; //Required

lrv2.phoneAuthenticationApi
  .removePhoneIDByAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## MultiFactorAuthentication API

<details>
    <summary>PUT: Update MFA Setting</summary>

This API is used to trigger the Multi-factor authentication settings after login for secure actions. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/update-mfa-setting/)

```js
let accessToken = '<accessToken>'; //Required

let multiFactorAuthModelWithLockout = {
  otp: '<otp>',
}; //Required
let fields = null; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaUpdateSetting(accessToken, multiFactorAuthModelWithLockout, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Update MFA by Access Token</summary>

This API is used to Enable Multi-factor authentication by access token on user login. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/update-mfa-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

let multiFactorAuthModelByGoogleAuthenticatorCode = {
  googleAuthenticatorCode: '<googleAuthenticatorCode>',
}; //Required
let fields = null; //Optional
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaUpdateByAccessToken(
    accessToken,
    multiFactorAuthModelByGoogleAuthenticatorCode,
    fields,
    smsTemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: MFA Update Phone Number by Token</summary>

This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number-by-token/)

```js
let accessToken = '<accessToken>'; //Required
let phoneNo2FA = '<phoneNo2FA>'; //Required
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaUpdatePhoneNumberByToken(accessToken, phoneNo2FA, smsTemplate2FA)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: MFA Validate OTP</summary>

This API is used to login via Multi-factor authentication by passing the One Time Password received via SMS. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-validate-otp/)

```js
let multiFactorAuthModelWithLockout = {
  otp: '<otp>',
}; //Required
let secondFactorAuthenticationToken = '<secondFactorAuthenticationToken>'; //Required
let fields = null; //Optional
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaValidateOTPByPhone(
    multiFactorAuthModelWithLockout,
    secondFactorAuthenticationToken,
    fields,
    smsTemplate2FA
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: MFA Validate Google Auth Code</summary>

This API is used to login via Multi-factor-authentication by passing the google authenticator code. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-validate-google-auth-code/)

```js
let googleAuthenticatorCode = '<googleAuthenticatorCode>'; //Required
let secondFactorAuthenticationToken = '<secondFactorAuthenticationToken>'; //Required
let fields = null; //Optional
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaValidateGoogleAuthCode(
    googleAuthenticatorCode,
    secondFactorAuthenticationToken,
    fields,
    smsTemplate2FA
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: MFA Validate Backup code</summary>

This API is used to validate the backup code provided by the user and if valid, we return an access token allowing the user to login incases where Multi-factor authentication (MFA) is enabled and the secondary factor is unavailable. When a user initially downloads the Backup codes, We generate 10 codes, each code can only be consumed once. if any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-validate-backup-code/)

```js
let multiFactorAuthModelByBackupCode = {
  backupCode: '<backupCode>',
}; //Required
let secondFactorAuthenticationToken = '<secondFactorAuthenticationToken>'; //Required
let fields = null; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaValidateBackupCode(
    multiFactorAuthModelByBackupCode,
    secondFactorAuthenticationToken,
    fields
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: MFA Update Phone Number</summary>

This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number/)

```js
let phoneNo2FA = '<phoneNo2FA>'; //Required
let secondFactorAuthenticationToken = '<secondFactorAuthenticationToken>'; //Required
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaUpdatePhoneNumber(
    phoneNo2FA,
    secondFactorAuthenticationToken,
    smsTemplate2FA
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: MFA Email Login</summary>

This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-email-login)

```js
let email = '<email>'; //Required
let password = '<password>'; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaLoginByEmail(
    email,
    password,
    emailTemplate,
    fields,
    loginUrl,
    smsTemplate,
    smsTemplate2FA,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: MFA UserName Login</summary>

This API can be used to login by username on a Multi-factor authentication enabled LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-user-name-login)

```js
let password = '<password>'; //Required
let username = '<username>'; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaLoginByUserName(
    password,
    username,
    emailTemplate,
    fields,
    loginUrl,
    smsTemplate,
    smsTemplate2FA,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: MFA Phone Login</summary>

This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-phone-login)

```js
let password = '<password>'; //Required
let phone = '<phone>'; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaLoginByPhone(
    password,
    phone,
    emailTemplate,
    fields,
    loginUrl,
    smsTemplate,
    smsTemplate2FA,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: MFA Validate Access Token</summary>

This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-validate-access-token/)

```js
let accessToken = '<accessToken>'; //Required
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaConfigureByAccessToken(accessToken, smsTemplate2FA)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: MFA Backup Code by Access Token</summary>

This API is used to get a set of backup codes via access token to allow the user login on a site that has Multi-factor Authentication enabled in the event that the user does not have a secondary factor available. We generate 10 codes, each code can only be consumed once. If any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-backup-code-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.multiFactorAuthenticationApi
  .mfaBackupCodeByAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Reset Backup Code by Access Token</summary>

API is used to reset the backup codes on a given account via the access token. This API call will generate 10 new codes, each code can only be consumed once. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-reset-backup-code-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.multiFactorAuthenticationApi
  .mfaResetBackupCodeByAccessToken(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: MFA Resend Otp</summary>

This API is used to resending the verification OTP to the provided phone number. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/resend-twofactorauthentication-otp/)

```js
let secondFactorAuthenticationToken = '<secondFactorAuthenticationToken>'; //Required
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional

lrv2.multiFactorAuthenticationApi
  .mfaResendOTP(secondFactorAuthenticationToken, smsTemplate2FA)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: MFA Backup Code by UID</summary>

This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-backup-code-by-uid/)

```js
let uid = '<uid>'; //Required

lrv2.multiFactorAuthenticationApi
  .mfaBackupCodeByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: MFA Reset Backup Code by UID</summary>

This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-reset-backup-code-by-uid/)

```js
let uid = '<uid>'; //Required

lrv2.multiFactorAuthenticationApi
  .mfaResetBackupCodeByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: MFA Reset Google Authenticator by Token</summary>

This API Resets the Google Authenticator configurations on a given account via the access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-reset-google-authenticator-by-token/)

```js
let accessToken = '<accessToken>'; //Required
let googleauthenticator = true; //Required

lrv2.multiFactorAuthenticationApi
  .mfaResetGoogleAuthByToken(accessToken, googleauthenticator)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: MFA Reset SMS Authenticator by Token</summary>

This API resets the SMS Authenticator configurations on a given account via the access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-token/)

```js
let accessToken = '<accessToken>'; //Required
let otpauthenticator = true; //Required

lrv2.multiFactorAuthenticationApi
  .mfaResetSMSAuthByToken(accessToken, otpauthenticator)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: MFA Reset SMS Authenticator By UID</summary>

This API resets the SMS Authenticator configurations on a given account via the UID. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-uid/)

```js
let otpauthenticator = true; //Required
let uid = '<uid>'; //Required

lrv2.multiFactorAuthenticationApi
  .mfaResetSMSAuthenticatorByUid(otpauthenticator, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: MFA Reset Google Authenticator By UID</summary>

This API resets the Google Authenticator configurations on a given account via the UID. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-reset-google-authenticator-by-uid/)

```js
let googleauthenticator = true; //Required
let uid = '<uid>'; //Required

lrv2.multiFactorAuthenticationApi
  .mfaResetGoogleAuthenticatorByUid(googleauthenticator, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## PINAuthentication API

<details>
    <summary>PUT: Reset PIN By ResetToken</summary>

This API is used to reset pin using reset token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-resettoken/)

```js
let resetPINByResetToken = {
  pin: '<pin>',
  resetToken: '<resetToken>',
}; //Required

lrv2.pinAuthenticationApi
  .resetPINByResetToken(resetPINByResetToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Reset PIN By SecurityAnswer And Email</summary>

This API is used to reset pin using security question answer and email. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-securityanswer-and-email/)

```js
let resetPINBySecurityQuestionAnswerAndEmailModel = {
  email: '<email>',
  pin: '<pin>',
  securityAnswer: { QuestionID: 'Answer' },
}; //Required

lrv2.pinAuthenticationApi
  .resetPINByEmailAndSecurityAnswer(
    resetPINBySecurityQuestionAnswerAndEmailModel
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Reset PIN By SecurityAnswer And Username</summary>

This API is used to reset pin using security question answer and username. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-securityanswer-and-username/)

```js
let resetPINBySecurityQuestionAnswerAndUsernameModel = {
  pin: '<pin>',
  securityAnswer: { QuestionID: 'Answer' },
  username: '<username>',
}; //Required

lrv2.pinAuthenticationApi
  .resetPINByUsernameAndSecurityAnswer(
    resetPINBySecurityQuestionAnswerAndUsernameModel
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Reset PIN By SecurityAnswer And Phone</summary>

This API is used to reset pin using security question answer and phone. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-securityanswer-and-phone/)

```js
let resetPINBySecurityQuestionAnswerAndPhoneModel = {
  phone: '<phone>',
  pin: '<pin>',
  securityAnswer: { QuestionID: 'Answer' },
}; //Required

lrv2.pinAuthenticationApi
  .resetPINByPhoneAndSecurityAnswer(
    resetPINBySecurityQuestionAnswerAndPhoneModel
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Change PIN By Token</summary>

This API is used to change a user's PIN using access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/change-pin-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

let changePINModel = {
  newPIN: '<newPIN>',
  oldPIN: '<oldPIN>',
}; //Required

lrv2.pinAuthenticationApi
  .changePINByAccessToken(accessToken, changePINModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Reset PIN by Phone and OTP</summary>

This API is used to reset pin using phoneId and OTP. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-phone-and-otp/)

```js
let resetPINByPhoneAndOTPModel = {
  otp: '<otp>',
  phone: '<phone>',
  pin: '<pin>',
}; //Required

lrv2.pinAuthenticationApi
  .resetPINByPhoneAndOtp(resetPINByPhoneAndOTPModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Reset PIN by Email and OTP</summary>

This API is used to reset pin using email and OTP. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-email-and-otp/)

```js
let resetPINByEmailAndOtpModel = {
  email: '<email>',
  otp: '<otp>',
  pin: '<pin>',
}; //Required

lrv2.pinAuthenticationApi
  .resetPINByEmailAndOtp(resetPINByEmailAndOtpModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Reset PIN by Username and OTP</summary>

This API is used to reset pin using username and OTP. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-username-and-otp/)

```js
let resetPINByUsernameAndOtpModel = {
  otp: '<otp>',
  pin: '<pin>',
  username: '<username>',
}; //Required

lrv2.pinAuthenticationApi
  .resetPINByUsernameAndOtp(resetPINByUsernameAndOtpModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: PIN Login</summary>

This API is used to login a user by pin and session token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/login-by-pin/)

```js
let loginByPINModel = {
  pin: '<pin>',
}; //Required
let sessionToken = '<sessionToken>'; //Required

lrv2.pinAuthenticationApi
  .pinLogin(loginByPINModel, sessionToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Forgot PIN By Email</summary>

This API sends the reset pin email to specified email address. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-email/)

```js
let forgotPINLinkByEmailModel = {
  email: '<email>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let resetPINUrl = '<resetPINUrl>'; //Optional

lrv2.pinAuthenticationApi
  .sendForgotPINEmailByEmail(
    forgotPINLinkByEmailModel,
    emailTemplate,
    resetPINUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Forgot PIN By UserName</summary>

This API sends the reset pin email using username. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-username/)

```js
let forgotPINLinkByUserNameModel = {
  userName: '<userName>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let resetPINUrl = '<resetPINUrl>'; //Optional

lrv2.pinAuthenticationApi
  .sendForgotPINEmailByUsername(
    forgotPINLinkByUserNameModel,
    emailTemplate,
    resetPINUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Forgot PIN By Phone</summary>

This API sends the OTP to specified phone number. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-phone/)

```js
let forgotPINOtpByPhoneModel = {
  phone: '<phone>',
}; //Required
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.pinAuthenticationApi
  .sendForgotPINSMSByPhone(forgotPINOtpByPhoneModel, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Set PIN By PinAuthToken</summary>

This API is used to change a user's PIN using Pin Auth token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/set-pin-by-pinauthtoken/)

```js
let pinRequiredModel = {
  pin: '<pin>',
}; //Required
let pinAuthToken = '<pinAuthToken>'; //Required

lrv2.pinAuthenticationApi
  .setPINByPinAuthToken(pinRequiredModel, pinAuthToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Invalidate PIN Session Token</summary>

This API is used to invalidate pin session token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/invalidate-pin-session-token/)

```js
let sessionToken = '<sessionToken>'; //Required

lrv2.pinAuthenticationApi
  .inValidatePinSessionToken(sessionToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## ReAuthentication API

<details>
    <summary>PUT: Validate MFA by OTP</summary>

This API is used to re-authenticate via Multi-factor authentication by passing the One Time Password received via SMS. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-by-otp/)

```js
let accessToken = '<accessToken>'; //Required

let reauthByOtpModel = {
  otp: '<otp>',
}; //Required

lrv2.reAuthenticationApi
  .mfaReAuthenticateByOTP(accessToken, reauthByOtpModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Validate MFA by Backup Code</summary>

This API is used to re-authenticate by set of backup codes via access token on the site that has Multi-factor authentication enabled in re-authentication for the user that does not have the device. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-by-backup-code/)

```js
let accessToken = '<accessToken>'; //Required

let reauthByBackupCodeModel = {
  backupCode: '<backupCode>',
}; //Required

lrv2.reAuthenticationApi
  .mfaReAuthenticateByBackupCode(accessToken, reauthByBackupCodeModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Validate MFA by Google Authenticator Code</summary>

This API is used to re-authenticate via Multi-factor-authentication by passing the google authenticator code. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/re-auth-by-google-authenticator-code)

```js
let accessToken = '<accessToken>'; //Required

let reauthByGoogleAuthenticatorCodeModel = {
  googleAuthenticatorCode: '<googleAuthenticatorCode>',
}; //Required

lrv2.reAuthenticationApi
  .mfaReAuthenticateByGoogleAuth(
    accessToken,
    reauthByGoogleAuthenticatorCodeModel
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Validate MFA by Password</summary>

This API is used to re-authenticate via Multi-factor-authentication by passing the password. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/re-auth-by-password)

```js
let accessToken = '<accessToken>'; //Required

let passwordEventBasedAuthModelWithLockout = {
  password: '<password>',
}; //Required
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional

lrv2.reAuthenticationApi
  .mfaReAuthenticateByPassword(
    accessToken,
    passwordEventBasedAuthModelWithLockout,
    smsTemplate2FA
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: MFA Re-authentication by PIN</summary>

This API is used to validate the triggered MFA authentication flow with a password. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/pin/re-auth-by-pin/)

```js
let accessToken = '<accessToken>'; //Required

let pinAuthEventBasedAuthModelWithLockout = {
  pin: '<pin>',
}; //Required
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional

lrv2.reAuthenticationApi
  .verifyPINAuthentication(
    accessToken,
    pinAuthEventBasedAuthModelWithLockout,
    smsTemplate2FA
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Verify Multifactor OTP Authentication</summary>

This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by OTP. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-validate-mfa/)

```js
let eventBasedMultiFactorToken = {
  secondFactorValidationToken: '<secondFactorValidationToken>',
}; //Required
let uid = '<uid>'; //Required

lrv2.reAuthenticationApi
  .verifyMultiFactorOtpReauthentication(eventBasedMultiFactorToken, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Verify Multifactor Password Authentication</summary>

This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by password. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/re-auth-validate-password/)

```js
let eventBasedMultiFactorToken = {
  secondFactorValidationToken: '<secondFactorValidationToken>',
}; //Required
let uid = '<uid>'; //Required

lrv2.reAuthenticationApi
  .verifyMultiFactorPasswordReauthentication(eventBasedMultiFactorToken, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Verify Multifactor PIN Authentication</summary>

This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by PIN. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/pin/re-auth-validate-pin/)

```js
let eventBasedMultiFactorToken = {
  secondFactorValidationToken: '<secondFactorValidationToken>',
}; //Required
let uid = '<uid>'; //Required

lrv2.reAuthenticationApi
  .verifyMultiFactorPINReauthentication(eventBasedMultiFactorToken, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Multi Factor Re-Authenticate</summary>

This API is used to trigger the Multi-Factor Autentication workflow for the provided access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/re-auth-trigger/)

```js
let accessToken = '<accessToken>'; //Required
let smsTemplate2FA = '<smsTemplate2FA>'; //Optional

lrv2.reAuthenticationApi
  .mfaReAuthenticate(accessToken, smsTemplate2FA)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## ConsentManagement API

<details>
    <summary>PUT: Update Consent By Access Token</summary>

This API is to update consents using access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/update-consent-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

let consentUpdateModel = {
  consents: [
    {
      consentOptionId: '<consentOptionId>',
      isAccepted: true,
    },
  ],
}; //Required

lrv2.consentManagementApi
  .updateConsentProfileByAccessToken(accessToken, consentUpdateModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Consent By ConsentToken</summary>

This API is to submit consent form using consent token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-by-consent-token/)

```js
let consentToken = '<consentToken>'; //Required

let consentSubmitModel = {
  data: [
    {
      consentOptionId: '<consentOptionId>',
      isAccepted: true,
    },
  ],
  events: [
    {
      event: '<event>',
      isCustom: true,
    },
  ],
}; //Required

lrv2.consentManagementApi
  .submitConsentByConsentToken(consentToken, consentSubmitModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Post Consent By Access Token</summary>

API to provide a way to end user to submit a consent form for particular event type. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

let consentSubmitModel = {
  data: [
    {
      consentOptionId: '<consentOptionId>',
      isAccepted: true,
    },
  ],
  events: [
    {
      event: '<event>',
      isCustom: true,
    },
  ],
}; //Required

lrv2.consentManagementApi
  .submitConsentByAccessToken(accessToken, consentSubmitModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Consent Logs By Uid</summary>

This API is used to get the Consent logs of the user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-log-by-uid/)

```js
let uid = '<uid>'; //Required

lrv2.consentManagementApi
  .getConsentLogsByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Consent Log by Access Token</summary>

This API is used to fetch consent logs. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-log-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.consentManagementApi
  .getConsentLogs(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Verify Consent By Access Token</summary>

This API is used to check if consent is submitted for a particular event or not. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/verify-consent-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required
let event = '<event>'; //Required
let isCustom = true; //Required

lrv2.consentManagementApi
  .verifyConsentByAccessToken(accessToken, event, isCustom)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## SmartLogin API

<details>
    <summary>GET: Smart Login Verify Token</summary>

This API verifies the provided token for Smart Login. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-verify-token/)

```js
let verificationToken = '<verificationToken>'; //Required
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.smartLoginApi
  .smartLoginTokenVerification(verificationToken, welcomeEmailTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Smart Login By Email</summary>

This API sends a Smart Login link to the user's Email Id. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-by-email)

```js
let clientGuid = '<clientGuid>'; //Required
let email = '<email>'; //Required
let redirectUrl = '<redirectUrl>'; //Optional
let smartLoginEmailTemplate = '<smartLoginEmailTemplate>'; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.smartLoginApi
  .smartLoginByEmail(
    clientGuid,
    email,
    redirectUrl,
    smartLoginEmailTemplate,
    welcomeEmailTemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Smart Login By Username</summary>

This API sends a Smart Login link to the user's Email Id. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-by-username)

```js
let clientGuid = '<clientGuid>'; //Required
let username = '<username>'; //Required
let redirectUrl = '<redirectUrl>'; //Optional
let smartLoginEmailTemplate = '<smartLoginEmailTemplate>'; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.smartLoginApi
  .smartLoginByUserName(
    clientGuid,
    username,
    redirectUrl,
    smartLoginEmailTemplate,
    welcomeEmailTemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Smart Login Ping</summary>

This API is used to check if the Smart Login link has been clicked or not. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-ping)

```js
let clientGuid = '<clientGuid>'; //Required
let fields = null; //Optional

lrv2.smartLoginApi
  .smartLoginPing(clientGuid, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## OneTouchLogin API

<details>
    <summary>PUT: One Touch OTP Verification</summary>

This API is used to verify the otp for One Touch Login. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-otp-verification/)

```js
let otp = '<otp>'; //Required
let phone = '<phone>'; //Required
let fields = null; //Optional
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.oneTouchLoginApi
  .oneTouchLoginOTPVerification(otp, phone, fields, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: One Touch Login by Email</summary>

This API is used to send a link to a specified email for a frictionless login/registration. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-by-email-captcha/)

```js
let oneTouchLoginByEmailModel = {
  clientguid: '<clientguid>',
  email: '<email>',
  'g-recaptcha-response': '<g-recaptcha-response>',
}; //Required
let oneTouchLoginEmailTemplate = '<oneTouchLoginEmailTemplate>'; //Optional
let redirecturl = '<redirecturl>'; //Optional
let welcomeemailtemplate = '<welcomeemailtemplate>'; //Optional

lrv2.oneTouchLoginApi
  .oneTouchLoginByEmail(
    oneTouchLoginByEmailModel,
    oneTouchLoginEmailTemplate,
    redirecturl,
    welcomeemailtemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: One Touch Login by Phone</summary>

This API is used to send one time password to a given phone number for a frictionless login/registration. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-by-phone-captcha/)

```js
let oneTouchLoginByPhoneModel = {
  'g-recaptcha-response': '<g-recaptcha-response>',
  phone: '<phone>',
}; //Required
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.oneTouchLoginApi
  .oneTouchLoginByPhone(oneTouchLoginByPhoneModel, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: One Touch Email Verification</summary>

This API verifies the provided token for One Touch Login. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-email-verification)

```js
let verificationToken = '<verificationToken>'; //Required
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.oneTouchLoginApi
  .oneTouchEmailVerification(verificationToken, welcomeEmailTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: One Touch Login Ping</summary>

This API is used to check if the One Touch Login link has been clicked or not. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-ping/)

```js
let clientGuid = '<clientGuid>'; //Required
let fields = null; //Optional

lrv2.oneTouchLoginApi
  .oneTouchLoginPing(clientGuid, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## PasswordLessLogin API

<details>
    <summary>PUT: Passwordless Login Phone Verification</summary>

This API verifies an account by OTP and allows the customer to login. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-phone-verification)

```js
let passwordLessLoginOtpModel = {
  otp: '<otp>',
  phone: '<phone>',
}; //Required
let fields = null; //Optional
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.passwordLessLoginApi
  .passwordlessLoginPhoneVerification(
    passwordLessLoginOtpModel,
    fields,
    smsTemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Passwordless Login by Phone</summary>

API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-phone)

```js
let phone = '<phone>'; //Required
let smsTemplate = '<smsTemplate>'; //Optional

lrv2.passwordLessLoginApi
  .passwordlessLoginByPhone(phone, smsTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Passwordless Login By Email</summary>

This API is used to send a Passwordless Login verification link to the provided Email ID. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-email)

```js
let email = '<email>'; //Required
let passwordLessLoginTemplate = '<passwordLessLoginTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.passwordLessLoginApi
  .passwordlessLoginByEmail(email, passwordLessLoginTemplate, verificationUrl)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Passwordless Login By UserName</summary>

This API is used to send a Passwordless Login Verification Link to a customer by providing their UserName. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-username)

```js
let username = '<username>'; //Required
let passwordLessLoginTemplate = '<passwordLessLoginTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.passwordLessLoginApi
  .passwordlessLoginByUserName(
    username,
    passwordLessLoginTemplate,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Passwordless Login Verification</summary>

 This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-verification)

```js
let verificationToken = '<verificationToken>'; //Required
let fields = null; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.passwordLessLoginApi
  .passwordlessLoginVerification(
    verificationToken,
    fields,
    welcomeEmailTemplate
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## Configuration API

<details>
    <summary>GET: Get Server Time</summary>

 This API allows you to query your LoginRadius account for basic server information and server time information which is useful when generating an SOTT token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/configuration/get-server-time/)

```js
let timeDifference = 0; //Optional

lrv2.configurationApi
  .getServerInfo(timeDifference)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Configuration</summary>

This API is used to get the configurations which are set in the LoginRadius Admin Console for a particular LoginRadius site/environment. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/configuration/get-configurations)

```js
lrv2.configurationApi
  .getConfigurations()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## Role API

<details>
    <summary>PUT: Assign Roles by UID</summary>

This API is used to assign your desired roles to a given user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/assign-roles-by-uid/)

```js
let accountRolesModel = {
  roles: ['roles'],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .assignRolesByUid(accountRolesModel, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Upsert Context</summary>

This API creates a Context with a set of Roles [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/upsert-context)

```js
let accountRoleContextModel = {
  roleContext: [
    {
      additionalPermissions: ['<additionalPermissions>'],
      context: '<context>',
      expiration: '<expiration>',
      roles: ['<roles>'],
    },
  ],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .updateRoleContextByUid(accountRoleContextModel, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Add Permissions to Role</summary>

This API is used to add permissions to a given role. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/add-permissions-to-role)

```js
let permissionsModel = {
  permissions: ['permissions'],
}; //Required
let role = '<role>'; //Required

lrv2.roleApi
  .addRolePermissions(permissionsModel, role)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Roles Create</summary>

This API creates a role with permissions. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/roles-create)

```js
let rolesModel = {
  roles: [
    {
      name: '<name>',
      permissions: { Permission_name: true },
    },
  ],
}; //Required

lrv2.roleApi
  .createRoles(rolesModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Roles by UID</summary>

This API is used to retrieve all the assigned roles of a particular User. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/get-roles-by-uid)

```js
let uid = '<uid>'; //Required

lrv2.roleApi
  .getRolesByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Context with Roles and Permissions</summary>

This API Gets the contexts that have been configured and the associated roles and permissions. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/get-context)

```js
let uid = '<uid>'; //Required

lrv2.roleApi
  .getRoleContextByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Role Context profile</summary>

The API is used to retrieve role context by the context name. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/role-context-profile/)

```js
let contextName = '<contextName>'; //Required

lrv2.roleApi
  .getRoleContextByContextName(contextName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Roles List</summary>

This API retrieves the complete list of created roles with permissions of your app. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/roles-list)

```js
lrv2.roleApi
  .getRolesList()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Unassign Roles by UID</summary>

This API is used to unassign roles from a user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/unassign-roles-by-uid)

```js
let accountRolesModel = {
  roles: ['roles'],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .unassignRolesByUid(accountRolesModel, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete Role Context</summary>

This API Deletes the specified Role Context [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-context)

```js
let contextName = '<contextName>'; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .deleteRoleContextByUid(contextName, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete Role from Context</summary>

This API Deletes the specified Role from a Context. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-role-from-context/)

```js
let contextName = '<contextName>'; //Required

let roleContextRemoveRoleModel = {
  roles: ['roles'],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .deleteRolesFromRoleContextByUid(contextName, roleContextRemoveRoleModel, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete Additional Permission from Context</summary>

This API Deletes Additional Permissions from Context. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-permissions-from-context)

```js
let contextName = '<contextName>'; //Required

let roleContextAdditionalPermissionRemoveRoleModel = {
  additionalPermissions: ['additionalPermissions'],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .deleteAdditionalPermissionFromRoleContextByUid(
    contextName,
    roleContextAdditionalPermissionRemoveRoleModel,
    uid
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Account Delete Role</summary>

This API is used to delete the role. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-role)

```js
let role = '<role>'; //Required

lrv2.roleApi
  .deleteRole(role)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Remove Permissions</summary>

API is used to remove permissions from a role. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/remove-permissions)

```js
let permissionsModel = {
  permissions: ['permissions'],
}; //Required
let role = '<role>'; //Required

lrv2.roleApi
  .removeRolePermissions(permissionsModel, role)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## CustomRegistrationData API

<details>
    <summary>PUT: Update Registration Data</summary>

This API allows you to update a dropdown item [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/update-registration-data)

```js
let registrationDataUpdateModel = {
  isActive: true,
  key: '<key>',
  type: '<type>',
  value: '<value>',
}; //Required
let recordId = '<recordId>'; //Required

lrv2.customRegistrationDataApi
  .updateRegistrationData(registrationDataUpdateModel, recordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Validate secret code</summary>

This API allows you to validate code for a particular dropdown member. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/validate-code)

```js
let code = '<code>'; //Required
let recordId = '<recordId>'; //Required

lrv2.customRegistrationDataApi
  .validateRegistrationDataCode(code, recordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Add Registration Data</summary>

This API allows you to fill data into a dropdown list which you have created for user Registration. For more details on how to use this API please see our Custom Registration Data Overview [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/add-registration-data)

```js
let registrationDataCreateModelList = {
  data: [
    {
      code: '<code>',
      isActive: true,
      key: '<key>',
      parentId: '<parentId>',
      type: '<type>',
      value: '<value>',
    },
  ],
}; //Required

lrv2.customRegistrationDataApi
  .addRegistrationData(registrationDataCreateModelList)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Get Registration Data Server</summary>

This API is used to retrieve dropdown data. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/auth-get-registration-data)

```js
let type = '<type>'; //Required
let limit = 0; //Optional
let parentId = '<parentId>'; //Optional
let skip = 0; //Optional

lrv2.customRegistrationDataApi
  .authGetRegistrationData(type, limit, parentId, skip)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Registration Data</summary>

This API is used to retrieve dropdown data. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/get-registration-data)

```js
let type = '<type>'; //Required
let limit = 0; //Optional
let parentId = '<parentId>'; //Optional
let skip = 0; //Optional

lrv2.customRegistrationDataApi
  .getRegistrationData(type, limit, parentId, skip)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete Registration Data</summary>

This API allows you to delete an item from a dropdown list. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/delete-registration-data)

```js
let recordId = '<recordId>'; //Required

lrv2.customRegistrationDataApi
  .deleteRegistrationData(recordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete All Records by Datasource</summary>

This API allows you to delete all records contained in a datasource. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/delete-all-records-by-datasource)

```js
let type = '<type>'; //Required

lrv2.customRegistrationDataApi
  .deleteAllRecordsByDataSource(type)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## RiskBasedAuthentication API

<details>
    <summary>POST: Risk Based Authentication Login by Email</summary>

This API retrieves a copy of the user data based on the Email [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email)

```js
let emailAuthenticationModel = {
  email: '<email>',
  password: '<password>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let passwordDelegation = true; //Optional
let passwordDelegationApp = '<passwordDelegationApp>'; //Optional
let rbaBrowserEmailTemplate = '<rbaBrowserEmailTemplate>'; //Optional
let rbaBrowserSmsTemplate = '<rbaBrowserSmsTemplate>'; //Optional
let rbaCityEmailTemplate = '<rbaCityEmailTemplate>'; //Optional
let rbaCitySmsTemplate = '<rbaCitySmsTemplate>'; //Optional
let rbaCountryEmailTemplate = '<rbaCountryEmailTemplate>'; //Optional
let rbaCountrySmsTemplate = '<rbaCountrySmsTemplate>'; //Optional
let rbaIpEmailTemplate = '<rbaIpEmailTemplate>'; //Optional
let rbaIpSmsTemplate = '<rbaIpSmsTemplate>'; //Optional
let rbaOneclickEmailTemplate = '<rbaOneclickEmailTemplate>'; //Optional
let rbaOTPSmsTemplate = '<rbaOTPSmsTemplate>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.riskBasedAuthenticationApi
  .rbaLoginByEmail(
    emailAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    passwordDelegation,
    passwordDelegationApp,
    rbaBrowserEmailTemplate,
    rbaBrowserSmsTemplate,
    rbaCityEmailTemplate,
    rbaCitySmsTemplate,
    rbaCountryEmailTemplate,
    rbaCountrySmsTemplate,
    rbaIpEmailTemplate,
    rbaIpSmsTemplate,
    rbaOneclickEmailTemplate,
    rbaOTPSmsTemplate,
    smsTemplate,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Risk Based Authentication Login by Username</summary>

This API retrieves a copy of the user data based on the Username [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-username)

```js
let userNameAuthenticationModel = {
  password: '<password>',
  username: '<username>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let passwordDelegation = true; //Optional
let passwordDelegationApp = '<passwordDelegationApp>'; //Optional
let rbaBrowserEmailTemplate = '<rbaBrowserEmailTemplate>'; //Optional
let rbaBrowserSmsTemplate = '<rbaBrowserSmsTemplate>'; //Optional
let rbaCityEmailTemplate = '<rbaCityEmailTemplate>'; //Optional
let rbaCitySmsTemplate = '<rbaCitySmsTemplate>'; //Optional
let rbaCountryEmailTemplate = '<rbaCountryEmailTemplate>'; //Optional
let rbaCountrySmsTemplate = '<rbaCountrySmsTemplate>'; //Optional
let rbaIpEmailTemplate = '<rbaIpEmailTemplate>'; //Optional
let rbaIpSmsTemplate = '<rbaIpSmsTemplate>'; //Optional
let rbaOneclickEmailTemplate = '<rbaOneclickEmailTemplate>'; //Optional
let rbaOTPSmsTemplate = '<rbaOTPSmsTemplate>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.riskBasedAuthenticationApi
  .rbaLoginByUserName(
    userNameAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    passwordDelegation,
    passwordDelegationApp,
    rbaBrowserEmailTemplate,
    rbaBrowserSmsTemplate,
    rbaCityEmailTemplate,
    rbaCitySmsTemplate,
    rbaCountryEmailTemplate,
    rbaCountrySmsTemplate,
    rbaIpEmailTemplate,
    rbaIpSmsTemplate,
    rbaOneclickEmailTemplate,
    rbaOTPSmsTemplate,
    smsTemplate,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Risk Based Authentication Phone Login</summary>

This API retrieves a copy of the user data based on the Phone. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-login)

```js
let phoneAuthenticationModel = {
  password: '<password>',
  phone: '<phone>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let passwordDelegation = true; //Optional
let passwordDelegationApp = '<passwordDelegationApp>'; //Optional
let rbaBrowserEmailTemplate = '<rbaBrowserEmailTemplate>'; //Optional
let rbaBrowserSmsTemplate = '<rbaBrowserSmsTemplate>'; //Optional
let rbaCityEmailTemplate = '<rbaCityEmailTemplate>'; //Optional
let rbaCitySmsTemplate = '<rbaCitySmsTemplate>'; //Optional
let rbaCountryEmailTemplate = '<rbaCountryEmailTemplate>'; //Optional
let rbaCountrySmsTemplate = '<rbaCountrySmsTemplate>'; //Optional
let rbaIpEmailTemplate = '<rbaIpEmailTemplate>'; //Optional
let rbaIpSmsTemplate = '<rbaIpSmsTemplate>'; //Optional
let rbaOneclickEmailTemplate = '<rbaOneclickEmailTemplate>'; //Optional
let rbaOTPSmsTemplate = '<rbaOTPSmsTemplate>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.riskBasedAuthenticationApi
  .rbaLoginByPhone(
    phoneAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    passwordDelegation,
    passwordDelegationApp,
    rbaBrowserEmailTemplate,
    rbaBrowserSmsTemplate,
    rbaCityEmailTemplate,
    rbaCitySmsTemplate,
    rbaCountryEmailTemplate,
    rbaCountrySmsTemplate,
    rbaIpEmailTemplate,
    rbaIpSmsTemplate,
    rbaOneclickEmailTemplate,
    rbaOTPSmsTemplate,
    smsTemplate,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## Sott API

<details>
    <summary>GET: Generate SOTT</summary>
<h6 id="GenerateSott-get-">  (GET)</h6>

This API allows you to generate SOTT with a given expiration time. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/session/generate-sott-token)

```js
let timeDifference = 0; //Optional

lrv2.sottApi
  .generateSott(timeDifference)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## NativeSocial API

<details>
    <summary>GET: Access Token via Facebook Token</summary>

The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-facebook-token)

```js
let fbAccessToken = '<fbAccessToken>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByFacebookAccessToken(fbAccessToken, socialAppName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Twitter Token</summary>
 
The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-twitter-token)

```js
let twAccessToken = '<twAccessToken>'; //Required
let twTokenSecret = '<twTokenSecret>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByTwitterAccessToken(
    twAccessToken,
    twTokenSecret,
    socialAppName
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Google Token</summary>

The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-token)

```js
let googleAccessToken = '<googleAccessToken>'; //Required
let clientId = '<clientId>'; //Optional
let refreshToken = '<refreshToken>'; //Optional
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByGoogleAccessToken(
    googleAccessToken,
    clientId,
    refreshToken,
    socialAppName
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token using google JWT token for Native Mobile Login</summary>

This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-googlejwt)

```js
let idToken = '<idToken>'; //Required

lrv2.nativeSocialApi
  .getAccessTokenByGoogleJWTAccessToken(idToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Linkedin Token</summary>

The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-linkedin-token/)

```js
let lnAccessToken = '<lnAccessToken>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByLinkedinAccessToken(lnAccessToken, socialAppName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Access Token By Foursquare Access Token</summary>

The API is used to get LoginRadius access token by sending Foursquare's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-foursquare-token/)

```js
let fsAccessToken = '<fsAccessToken>'; //Required

lrv2.nativeSocialApi
  .getAccessTokenByFoursquareAccessToken(fsAccessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Apple Id Code</summary>

The API is used to get LoginRadius access token by sending a valid Apple ID OAuth Code. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-apple-id-code)

```js
let code = '<code>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByAppleIdCode(code, socialAppName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via WeChat Code</summary>

This API is used to retrieve a LoginRadius access token by passing in a valid WeChat OAuth Code. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-wechat-code)

```js
let code = '<code>'; //Required

lrv2.nativeSocialApi
  .getAccessTokenByWeChatCode(code)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Vkontakte Code</summary>
 
The API is used to get LoginRadius access token by sending Vkontakte's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-vkontakte-token)

```js
let vkAccessToken = '<vkAccessToken>'; //Required

lrv2.nativeSocialApi
  .getAccessTokenByVkontakteAccessToken(vkAccessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Google AuthCode</summary>
 
The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-auth-code)

```js
let googleAuthcode = '<googleAuthcode>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByGoogleAuthCode(googleAuthcode, socialAppName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## WebHook API

<details>
    <summary>POST: Webhook Subscribe</summary>

API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call. [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-subscribe)

```js
let webHookSubscribeModel = {
  event: '<event>',
  targetUrl: '<targetUrl>',
}; //Required

lrv2.webHookApi
  .webHookSubscribe(webHookSubscribeModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Webhook Subscribed URLs</summary>

This API is used to fatch all the subscribed URLs, for particular event [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-subscribed-urls)

```js
let event = '<event>'; //Required

lrv2.webHookApi
  .getWebHookSubscribedURLs(event)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Webhook Test</summary>

API can be used to test a subscribed WebHook. [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-test)

```js
lrv2.webHookApi
  .webhookTest()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: WebHook Unsubscribe</summary>

API can be used to unsubscribe a WebHook configured on your LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-unsubscribe)

```js
let webHookSubscribeModel = {
  event: '<event>',
  targetUrl: '<targetUrl>',
}; //Required

lrv2.webHookApi
  .webHookUnsubscribe(webHookSubscribeModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

## Demo <br/>

We have a demo web application using the Node SDK, which includes the following features:

- Traditional email login
- Multi-Factor login
- Passwordless login
- Social login
- Register
- Email verification
- Forgot password
- Reset password
- Change password
- Set password
- Update account
- Account linking
- Custom object management
- Roles management <br/>

You can get a copy of our demo project at [Github](http://github.com/LoginRadius/node-js-sdk).

### Demo Configuration

Terminal/Command Line:

1. Install Node.Js here . Ensure `npm --version` and `node --version` runs properly
2. Navigate to the demo directory, and run: `npm install`
3. Set your LoginRadius credentials on the client and server side:
   - Client side: `demo/demo/assets/js/options.js`
   - Server side (note: do not set credentials as consts i.e. with quotes): `demo/server.js`
4. Navigate to the demo directory, and run: node server.js
5. Demo will appear on http://localhost:3000
