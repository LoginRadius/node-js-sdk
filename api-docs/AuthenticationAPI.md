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
