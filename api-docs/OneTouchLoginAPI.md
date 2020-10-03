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
