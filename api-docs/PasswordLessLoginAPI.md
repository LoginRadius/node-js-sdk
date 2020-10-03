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
