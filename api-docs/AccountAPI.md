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
