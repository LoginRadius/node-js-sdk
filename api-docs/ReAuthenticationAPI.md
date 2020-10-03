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
