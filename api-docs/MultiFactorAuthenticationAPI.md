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
