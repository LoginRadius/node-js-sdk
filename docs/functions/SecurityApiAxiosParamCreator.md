[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiAxiosParamCreator

# Function: SecurityApiAxiosParamCreator()

> **SecurityApiAxiosParamCreator**(`configuration?`): `object`

SecurityApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### accountRegisterMFAPasskeyBegin

> **accountRegisterMFAPasskeyBegin**: (`accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Initiates the MFA Passkey registration flow for an Account.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### accountRegisterMFAPasskeyFinish

> **accountRegisterMFAPasskeyFinish**: (`accountRegisterMFAPasskeyFinishRequest`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Completes the MFA Passkey registration flow for an Account.

#### Parameters

##### accountRegisterMFAPasskeyFinishRequest

[`AccountRegisterMFAPasskeyFinishRequest`](../loginradius-sdk/namespaces/Models/interfaces/AccountRegisterMFAPasskeyFinishRequest.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### beginMFAPasskeyRegistration

> **beginMFAPasskeyRegistration**: (`secondfactorauthenticationtoken`, `options?`) => `Promise`\<`RequestArgs`\>

Begins the MFA Passkey registration flow.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### beginPasskeyMFAVerification

> **beginPasskeyMFAVerification**: (`secondfactorauthenticationtoken`, `options?`) => `Promise`\<`RequestArgs`\>

Begins the MFA Passkey verification flow.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### changePinByAccessToken

> **changePinByAccessToken**: (`changePin`, `accessToken?`, `xPreventWebhook?`, `preventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `hCaptchaResponse?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an existing PIN by providing the current PIN and a valid Access Token for authentication, allowing a User to change their PIN while logged in.

#### Parameters

##### changePin

[`ChangePin`](../loginradius-sdk/namespaces/Models/type-aliases/ChangePin.md)

##### accessToken?

`string`

Access Token of the User

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### qqCaptchaTicket?

`string`

QQ Captcha ticket (required if Bot Protection is enabled)

##### qqCaptchaRandstr?

`string`

QQ Captcha rand string (required if Bot Protection is enabled)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### duoAuthenticationReAuthVerificationByAccessToken

> **duoAuthenticationReAuthVerificationByAccessToken**: (`duoVerifyRequest`, `preventWebhook?`, `xPreventWebhook?`, `accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Verifies Duo authentication for a User using an Access Token, typically used when re-verification is required.

#### Parameters

##### duoVerifyRequest

[`DuoVerifyRequest`](../loginradius-sdk/namespaces/Models/interfaces/DuoVerifyRequest.md)

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### duoAuthenticationVerificationByAccessToken

> **duoAuthenticationVerificationByAccessToken**: (`duoVerifyRequest`, `preventWebhook?`, `xPreventWebhook?`, `accessToken?`, `fields?`, `options?`) => `Promise`\<`RequestArgs`\>

Verifies Duo authentication for a User using an Access Token, typically after initial authentication.

#### Parameters

##### duoVerifyRequest

[`DuoVerifyRequest`](../loginradius-sdk/namespaces/Models/interfaces/DuoVerifyRequest.md)

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### accessToken?

`string`

Access Token of the User

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### duoAuthVerificationByMFASecondFactorToken

> **duoAuthVerificationByMFASecondFactorToken**: (`secondfactorauthenticationtoken`, `duoVerifyRequest`, `preventWebhook?`, `xPreventWebhook?`, `fields?`, `rbabrowseremailtemplate?`, `rbaoneclickemailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbaotpsmstemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `options?`) => `Promise`\<`RequestArgs`\>

Verifies Duo authentication for a User using a second factor token.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### duoVerifyRequest

[`DuoVerifyRequest`](../loginradius-sdk/namespaces/Models/interfaces/DuoVerifyRequest.md)

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbaoneclickemailtemplate?

`string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbaotpsmstemplate?

`string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### emailOTPAuthVerificationByAccessToken

> **emailOTPAuthVerificationByAccessToken**: (`reAuthModelByEmailOtp`, `preventWebhook?`, `xPreventWebhook?`, `accessToken?`, `fields?`, `options?`) => `Promise`\<`RequestArgs`\>

Verifies Email OTP authentication for a User using an Access Token.

#### Parameters

##### reAuthModelByEmailOtp

[`ReAuthModelByEmailOtp`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthModelByEmailOtp.md)

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### accessToken?

`string`

Access Token of the User

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### finishMFAPasskeyRegistration

> **finishMFAPasskeyRegistration**: (`secondfactorauthenticationtoken`, `finishMFAPasskeyRegistrationRequest`, `preventWebhook?`, `xPreventWebhook?`, `fields?`, `rbabrowseremailtemplate?`, `rbaoneclickemailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbaotpsmstemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `options?`) => `Promise`\<`RequestArgs`\>

Completes the MFA Passkey registration process using the provided MFA token.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### finishMFAPasskeyRegistrationRequest

[`FinishMFAPasskeyRegistrationRequest`](../loginradius-sdk/namespaces/Models/interfaces/FinishMFAPasskeyRegistrationRequest.md)

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbaoneclickemailtemplate?

`string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbaotpsmstemplate?

`string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### finishPasskeyMFAVerification

> **finishPasskeyMFAVerification**: (`secondfactorauthenticationtoken`, `finishPasskeyMFAVerificationRequest`, `preventWebhook?`, `xPreventWebhook?`, `fields?`, `rbabrowseremailtemplate?`, `rbaoneclickemailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbaotpsmstemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `options?`) => `Promise`\<`RequestArgs`\>

Completes the MFA Passkey verification flow.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### finishPasskeyMFAVerificationRequest

[`FinishPasskeyMFAVerificationRequest`](../loginradius-sdk/namespaces/Models/interfaces/FinishPasskeyMFAVerificationRequest.md)

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbaoneclickemailtemplate?

`string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbaotpsmstemplate?

`string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### forgotPinByEmail

> **forgotPinByEmail**: (`forgotPinByEmail`, `emailtemplate?`, `resetpinurl?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends a PIN reset Email to the User\'s registered Email, enabling them to reset their PIN if forgotten.

#### Parameters

##### forgotPinByEmail

[`ForgotPinByEmail`](../loginradius-sdk/namespaces/Models/interfaces/ForgotPinByEmail.md)

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### resetpinurl?

`string`

Reset PIN URL

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### forgotPinByPhone

> **forgotPinByPhone**: (`forgotPinByPhone`, `smstemplate?`, `isvoiceotp?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends a One-Time Password (OTP) to the User\'s registered Phone number, enabling them to reset their PIN if forgotten.

#### Parameters

##### forgotPinByPhone

[`ForgotPinByPhone`](../loginradius-sdk/namespaces/Models/interfaces/ForgotPinByPhone.md)

##### smstemplate?

`string`

SMS Template

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### forgotPinByUsername

> **forgotPinByUsername**: (`forgotPinByUsername`, `emailtemplate?`, `resetpinurl?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends a PIN reset Email to the User IDentified by their Username, enabling them to reset their PIN if forgotten.

#### Parameters

##### forgotPinByUsername

[`ForgotPinByUsername`](../loginradius-sdk/namespaces/Models/interfaces/ForgotPinByUsername.md)

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### resetpinurl?

`string`

Reset PIN URL

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getMfaPushDeviceStatus

> **getMfaPushDeviceStatus**: (`accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Checks whether a Push Notification device is registered on the User\'s profile for MFA, using an Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getMFASettings

> **getMFASettings**: (`duoredirecturi?`, `accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves all MFA settings configured for the User, including the status of each authenticator type and available configuration details.

#### Parameters

##### duoredirecturi?

`string`

Duo auth redirection url.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### mfaGenerateBackupCodes

> **mfaGenerateBackupCodes**: (`accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Generates a set of backup codes for a User with MFA enabled. Returns an error if backup codes already exist.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### mfaResendPushNotification

> **mfaResendPushNotification**: (`secondfactorauthenticationtoken`, `options?`) => `Promise`\<`RequestArgs`\>

Resends a Push Notification for Multi-Factor Authentication.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### mfaResetBackupCodes

> **mfaResetBackupCodes**: (`accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Resets backup codes for a User with MFA enabled, allowing regeneration of backup codes.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### mFAResetSMSAuthByToken

> **mFAResetSMSAuthByToken**: (`accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Resets SMS Authenticator configurations for an Account using an Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### mFAResetTotpByToken

> **mFAResetTotpByToken**: (`accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Resets TOTP Authenticator configurations for an Account using an Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### mFAUpdatePhoneNumberByMfaToken

> **mFAUpdatePhoneNumberByMfaToken**: (`secondfactorauthenticationtoken`, `mFAPhoneUpdateModel`, `smstemplate2fa?`, `isvoiceotp?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends a verification OTP to the provided Phone number as part of the process to update the Phone number used for Multi-Factor Authentication.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### mFAPhoneUpdateModel

[`MFAPhoneUpdateModel`](../loginradius-sdk/namespaces/Models/interfaces/MFAPhoneUpdateModel.md)

##### smstemplate2fa?

`string`

SMS template name to be used for sending the 2FA code to the User.

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### mFAUpdatePhoneNumberByToken

> **mFAUpdatePhoneNumberByToken**: (`mFAPhoneUpdateModel`, `smstemplate2fa?`, `isvoiceotp?`, `accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends a verification OTP to the provided Phone number as part of the process to update the Phone number used for MFA.

#### Parameters

##### mFAPhoneUpdateModel

[`MFAPhoneUpdateModel`](../loginradius-sdk/namespaces/Models/interfaces/MFAPhoneUpdateModel.md)

##### smstemplate2fa?

`string`

SMS template name to be used for sending the 2FA code to the User.

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### mFAVerifyPhoneNumberByAccessToken

> **mFAVerifyPhoneNumberByAccessToken**: (`mFAVerifyPhoneOtpModel`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `fields?`, `options?`) => `Promise`\<`RequestArgs`\>

Updates Phone-based MFA settings after a successful login, managing or verifying Phone MFA configurations for secure operations.

#### Parameters

##### mFAVerifyPhoneOtpModel

[`MFAVerifyPhoneOtpModel`](../loginradius-sdk/namespaces/Models/type-aliases/MFAVerifyPhoneOtpModel.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### pingPushVerificationStatus

> **pingPushVerificationStatus**: (`secondfactorauthenticationtoken`, `rbabrowseremailtemplate?`, `rbaoneclickemailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbaotpsmstemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `options?`) => `Promise`\<`RequestArgs`\>

Checks the status of Push Notification verification and returns the login response when verified.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbaoneclickemailtemplate?

`string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbaotpsmstemplate?

`string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### pINLogin

> **pINLogin**: (`sessionToken`, `pINLoginModel`, `xPreventWebhook?`, `preventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`) => `Promise`\<`RequestArgs`\>

Allows Users to log in using their previously set PIN along with a valid session token.

#### Parameters

##### sessionToken

`string`

Session Token for PIN Auth

##### pINLoginModel

[`PINLoginModel`](../loginradius-sdk/namespaces/Models/interfaces/PINLoginModel.md)

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ Captcha ticket (required if Bot Protection is enabled)

##### qqCaptchaRandstr?

`string`

QQ Captcha rand string (required if Bot Protection is enabled)

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### reauthPassword

> **reauthPassword**: (`passwordReauthRequest`, `accessToken?`, `smstemplate?`, `preventWebhook?`, `xPreventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`) => `Promise`\<`RequestArgs`\>

Verifies the Password for a User using an Access Token, typically used when re-verification is required.

#### Parameters

##### passwordReauthRequest

[`PasswordReauthRequest`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordReauthRequest.md)

##### accessToken?

`string`

Access Token of the User

##### smstemplate?

`string`

SMS Template

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### reauthPin

> **reauthPin**: (`pinReauthRequest`, `smstemplate?`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Verifies the PIN for a User using an Access Token, typically used when re-verification is required.

#### Parameters

##### pinReauthRequest

[`PinReauthRequest`](../loginradius-sdk/namespaces/Models/interfaces/PinReauthRequest.md)

##### smstemplate?

`string`

SMS Template

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### reauthTrigger

> **reauthTrigger**: (`accessToken?`, `smstemplate2fa?`, `duoredirecturi?`, `options?`) => `Promise`\<`RequestArgs`\>

Triggers Step-Up Authentication for Multi-Factor Authentication (MFA) settings, allowing Users to verify their MFA methods.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### smstemplate2fa?

`string`

SMS template name to be used for sending the 2FA code to the User.

##### duoredirecturi?

`string`

Duo auth redirection url.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resend2FAOTP

> **resend2FAOTP**: (`secondfactorauthenticationtoken`, `isvoiceotp?`, `options?`) => `Promise`\<`RequestArgs`\>

Resends the Multi-Factor Authentication OTP via SMS for login.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resend2faSMSOtp

> **resend2faSMSOtp**: (`secondfactorauthenticationtoken`, `isvoiceotp?`, `options?`) => `Promise`\<`RequestArgs`\>

Resends the Multi-Factor Authentication OTP via SMS for login.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resendEmailOTPMFAToken

> **resendEmailOTPMFAToken**: (`secondfactorauthenticationtoken`, `emailModel`, `isvoiceotp?`, `emailtemplate2fa?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends the OTP to the Email if the Email OTP authenticator is enabled in the Tenant\'s MFA configuration.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### emailModel

[`EmailModel`](../loginradius-sdk/namespaces/Models/interfaces/EmailModel.md)

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### emailtemplate2fa?

`string`

Name of the 2FA Email template to use for this notification.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resendTwoFactorEmailOtp

> **resendTwoFactorEmailOtp**: (`emailid?`, `emailtemplate2fa?`, `accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends the OTP to the Email if the Email OTP Authenticator is enabled in the Tenant\'s MFA configuration.

#### Parameters

##### emailid?

`string`

The Email address of User

##### emailtemplate2fa?

`string`

Name of the 2FA Email template to use for this notification.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resetDuoAuthViaAccessToken

> **resetDuoAuthViaAccessToken**: (`accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Resets the Duo Authenticator settings for a User with MFA enabled, allowing reconfiguration or recovery of Duo access.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resetMFAEmailAuthByAccessToken

> **resetMFAEmailAuthByAccessToken**: (`accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Resets the Email OTP Authenticator settings for a User with MFA enabled, allowing reconfiguration.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resetMFAPasskeyByAccessToken

> **resetMFAPasskeyByAccessToken**: (`accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Resets the Passkey Authenticator settings for the specified User.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resetMfaPushAuthSettings

> **resetMfaPushAuthSettings**: (`options?`) => `Promise`\<`RequestArgs`\>

Resets the MFA Push Authenticator settings for a User.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resetPinByOTP

> **resetPinByOTP**: (`type`, `resetPINByOTP`, `xPreventWebhook?`, `preventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`) => `Promise`\<`RequestArgs`\>

Allows a User to reset their PIN by verifying a One-Time Password (OTP). The User must provide the OTP, a new PIN, and one identifier (Phone, Email, or Username), enabling secure PIN recovery when the User forgets their PIN.

#### Parameters

##### type

[`ResetPinByOTPTypeEnum`](../enumerations/ResetPinByOTPTypeEnum.md)

The method of ReAuth MFA verification to use.

##### resetPINByOTP

[`ResetPINByOTP`](../loginradius-sdk/namespaces/Models/interfaces/ResetPINByOTP.md) \| `null`

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ Captcha ticket (required if Bot Protection is enabled)

##### qqCaptchaRandstr?

`string`

QQ Captcha rand string (required if Bot Protection is enabled)

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resetPinByResetToken

> **resetPinByResetToken**: (`resetPINByToken`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Allows a User to reset their PIN by providing a reset token received via Email and a new PIN, enabling secure PIN recovery when the User forgets their PIN.

#### Parameters

##### resetPINByToken

[`ResetPINByToken`](../loginradius-sdk/namespaces/Models/interfaces/ResetPINByToken.md)

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### sendEmailOtpForReauthMFA

> **sendEmailOtpForReauthMFA**: (`emailid?`, `emailtemplate?`, `accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends a One-Time Password (OTP) to the User\'s Email for re-authentication.

#### Parameters

##### emailid?

`string`

The Email address of User

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### sendReAuthEmailOtp

> **sendReAuthEmailOtp**: (`emailid?`, `emailtemplate?`, `accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends a One-Time Password (OTP) to the User\'s Email for re-authentication.

#### Parameters

##### emailid?

`string`

The Email address of User

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### setPinByPinAuthToken

> **setPinByPinAuthToken**: (`pinauthtoken`, `pINModel`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Sets a PIN for Users logging in or registering for the first time. Requires a valid PIN authentication token and is typically part of the onboarding or initial setup process.

#### Parameters

##### pinauthtoken

`string`

Pin auth token to set the PIN on account

##### pINModel

[`PINModel`](../loginradius-sdk/namespaces/Models/interfaces/PINModel.md)

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### validateEmailOtpForReauth

> **validateEmailOtpForReauth**: (`reAuthModelByEmailOtp`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Validates the One-Time Password (OTP) sent to the User\'s Email during re-authentication.

#### Parameters

##### reAuthModelByEmailOtp

[`ReAuthModelByEmailOtp`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthModelByEmailOtp.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### validateEmailOtpForReauthMFA

> **validateEmailOtpForReauthMFA**: (`reAuthModelByEmailOtp`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Verifies the User with Email OTP and Access Token, typically used when re-authentication via Email OTP is required.

#### Parameters

##### reAuthModelByEmailOtp

[`ReAuthModelByEmailOtp`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthModelByEmailOtp.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### validateMfaOTPByEmail

> **validateMfaOTPByEmail**: (`secondfactorauthenticationtoken`, `reAuthModelByEmailOtp`, `rbabrowseremailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `options?`) => `Promise`\<`RequestArgs`\>

Logs in to a User\'s account during the second MFA step with an OTP sent to the Email.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### reAuthModelByEmailOtp

[`ReAuthModelByEmailOtp`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthModelByEmailOtp.md)

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### validateMfaOTPByPhone

> **validateMfaOTPByPhone**: (`secondfactorauthenticationtoken`, `mFAVerifyPhoneOtpModel`, `smstemplate2fa?`, `fields?`, `preventWebhook?`, `xPreventWebhook?`, `isvoiceotp?`, `rbabrowseremailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbaotpsmstemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `options?`) => `Promise`\<`RequestArgs`\>

Allows Users to log in with Multi-Factor Authentication using the OTP sent via SMS or Voice OTP.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### mFAVerifyPhoneOtpModel

[`MFAVerifyPhoneOtpModel`](../loginradius-sdk/namespaces/Models/type-aliases/MFAVerifyPhoneOtpModel.md)

##### smstemplate2fa?

`string`

SMS template name to be used for sending the 2FA code to the User.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbaotpsmstemplate?

`string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### validateReauthMFA

> **validateReauthMFA**: (`type`, `reAuthTwoFAModel`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`) => `Promise`\<`RequestArgs`\>

Validates the triggered MFA authentication flow using a backup code, OTP, or authenticator code.

#### Parameters

##### type

[`ValidateReauthMFATypeEnum`](../enumerations/ValidateReauthMFATypeEnum.md)

The method of ReAuth MFA verification to use.

##### reAuthTwoFAModel

[`ReAuthTwoFAModel`](../loginradius-sdk/namespaces/Models/type-aliases/ReAuthTwoFAModel.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### validateSecurityQuestionReauthMFA

> **validateSecurityQuestionReauthMFA**: (`twoFAAuthBySecQuesAuthModel`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Validates the triggered MFA authentication flow using a security question answer.

#### Parameters

##### twoFAAuthBySecQuesAuthModel

[`TwoFAAuthBySecQuesAuthModel`](../loginradius-sdk/namespaces/Models/interfaces/TwoFAAuthBySecQuesAuthModel.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### verify2faTOTPAuth

> **verify2faTOTPAuth**: (`authenticatorCodeRequest`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Validates an Authenticator Code as part of the MFA process.

#### Parameters

##### authenticatorCodeRequest

[`AuthenticatorCodeRequest`](../loginradius-sdk/namespaces/Models/interfaces/AuthenticatorCodeRequest.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### verifyBackupCodeForMFALogin

> **verifyBackupCodeForMFALogin**: (`secondfactorauthenticationtoken`, `twoFAAuthByBackupCode`, `preventWebhook?`, `xPreventWebhook?`, `rbabrowseremailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `options?`) => `Promise`\<`RequestArgs`\>

Verifies a User\'s MFA backup code as a second factor during the login process, typically used when the primary MFA method is unavailable.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### twoFAAuthByBackupCode

[`TwoFAAuthByBackupCode`](../loginradius-sdk/namespaces/Models/interfaces/TwoFAAuthByBackupCode.md)

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### verifyTotpByMfaToken

> **verifyTotpByMfaToken**: (`secondfactorauthenticationtoken`, `authenticatorCodeRequest`, `fields?`, `rbabrowseremailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `preventWebhook?`, `xPreventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Validates the TOTP Authenticator code provided by the User as part of the Multi-Factor Authentication login process.

#### Parameters

##### secondfactorauthenticationtoken

`string`

Second factor token

##### authenticatorCodeRequest

[`AuthenticatorCodeRequest`](../loginradius-sdk/namespaces/Models/interfaces/AuthenticatorCodeRequest.md)

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
