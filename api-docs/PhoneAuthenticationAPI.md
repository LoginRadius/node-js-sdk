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
