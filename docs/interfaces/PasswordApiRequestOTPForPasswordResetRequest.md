[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApiRequestOTPForPasswordResetRequest

# Interface: PasswordApiRequestOTPForPasswordResetRequest

Request parameters for requestOTPForPasswordReset operation in PasswordApi.

## Export

PasswordApiRequestOTPForPasswordResetRequest

## Properties

### forgotPasswordPhoneModel

> `readonly` **forgotPasswordPhoneModel**: [`ForgotPasswordPhoneModel`](../loginradius-sdk/namespaces/Models/interfaces/ForgotPasswordPhoneModel.md)

#### Memberof

PasswordApiRequestOTPForPasswordReset

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

PasswordApiRequestOTPForPasswordReset

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

PasswordApiRequestOTPForPasswordReset

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

PasswordApiRequestOTPForPasswordReset

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

PasswordApiRequestOTPForPasswordReset

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ Captcha rand string (required if Bot Protection is enabled)

#### Memberof

PasswordApiRequestOTPForPasswordReset

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ Captcha ticket (required if Bot Protection is enabled)

#### Memberof

PasswordApiRequestOTPForPasswordReset

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

PasswordApiRequestOTPForPasswordReset
