[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApiResetPasswordByResetTokenRequest

# Interface: PasswordApiResetPasswordByResetTokenRequest

Request parameters for resetPasswordByResetToken operation in PasswordApi.

## Export

PasswordApiResetPasswordByResetTokenRequest

## Properties

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

PasswordApiResetPasswordByResetToken

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

PasswordApiResetPasswordByResetToken

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

PasswordApiResetPasswordByResetToken

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiResetPasswordByResetToken

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ Captcha rand string (required if Bot Protection is enabled)

#### Memberof

PasswordApiResetPasswordByResetToken

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ Captcha ticket (required if Bot Protection is enabled)

#### Memberof

PasswordApiResetPasswordByResetToken

***

### resetPassword

> `readonly` **resetPassword**: [`ResetPassword`](../loginradius-sdk/namespaces/Models/type-aliases/ResetPassword.md)

#### Memberof

PasswordApiResetPasswordByResetToken

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiResetPasswordByResetToken
