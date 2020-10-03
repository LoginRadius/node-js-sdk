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
