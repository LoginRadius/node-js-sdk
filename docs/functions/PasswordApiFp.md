[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApiFp

# Function: PasswordApiFp()

> **PasswordApiFp**(`configuration?`): `object`

PasswordApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### changePassword()

> **changePassword**(`changePassword`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `preventWebhook?`, `xPreventWebhook?`, `hCaptchaResponse?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Updates the Account Password using the current Password for verification.

#### Parameters

##### changePassword

[`ChangePassword`](../loginradius-sdk/namespaces/Models/type-aliases/ChangePassword.md)

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### hCaptchaResponse?

`string`

hCaptcha Response

##### qqCaptchaTicket?

`string`

QQ Captcha ticket (required if Bot Protection is enabled)

##### qqCaptchaRandstr?

`string`

QQ Captcha rand string (required if Bot Protection is enabled)

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### forgotPassword()

> **forgotPassword**(`emailtemplate?`, `resetpasswordurl?`, `preventWebhook?`, `xPreventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `forgotPasswordRequest?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Initiates the Password recovery process using Username or Email.

#### Parameters

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### resetpasswordurl?

`string`

Callback URL for the Password Reset link in the Email.

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

##### forgotPasswordRequest?

[`ForgotPasswordRequest`](../loginradius-sdk/namespaces/Models/type-aliases/ForgotPasswordRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### requestOTPForPasswordReset()

> **requestOTPForPasswordReset**(`forgotPasswordPhoneModel`, `smstemplate?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `hCaptchaResponse?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `isvoiceotp?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

Requests an OTP for resetting the Password using the User\'s Phone number.

#### Parameters

##### forgotPasswordPhoneModel

[`ForgotPasswordPhoneModel`](../loginradius-sdk/namespaces/Models/interfaces/ForgotPasswordPhoneModel.md)

##### smstemplate?

`string`

SMS Template

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

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

#### Throws

### resetPassword()

> **resetPassword**(`resetPassword`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `preventWebhook?`, `xPreventWebhook?`, `hCaptchaResponse?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>\>

Sets a new Password for the specified Account using a reset token and OTP.

#### Parameters

##### resetPassword

[`ResetPassword`](../loginradius-sdk/namespaces/Models/type-aliases/ResetPassword.md)

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

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

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>\>

#### Throws

### resetPasswordByResetToken()

> **resetPasswordByResetToken**(`resetPassword`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `preventWebhook?`, `xPreventWebhook?`, `hCaptchaResponse?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>\>

Sets a new Password for the specified Account using a reset token and OTP.

#### Parameters

##### resetPassword

[`ResetPassword`](../loginradius-sdk/namespaces/Models/type-aliases/ResetPassword.md)

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

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

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>\>

#### Throws

### resetPasswordSecurityAnswer()

> **resetPasswordSecurityAnswer**(`preventWebhook?`, `xPreventWebhook?`, `resetPasswordBySecurityAnswer?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>\>

Resets the Password using a security question and Email, Username, or Phone.

#### Parameters

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### resetPasswordBySecurityAnswer?

[`ResetPasswordBySecurityAnswer`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordBySecurityAnswer.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>\>

#### Throws

### resetPasswordWithOTP()

> **resetPasswordWithOTP**(`resetPasswordWithOTP`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `preventWebhook?`, `xPreventWebhook?`, `hCaptchaResponse?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>\>

Resets the Password using OTP and Phone number verification.

#### Parameters

##### resetPasswordWithOTP

[`ResetPasswordWithOTP`](../loginradius-sdk/namespaces/Models/type-aliases/ResetPasswordWithOTP.md)

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

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

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>\>

#### Throws

## Export
