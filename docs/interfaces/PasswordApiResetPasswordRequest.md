[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApiResetPasswordRequest

# Interface: PasswordApiResetPasswordRequest

Request parameters for resetPassword operation in PasswordApi.

## Export

PasswordApiResetPasswordRequest

## Properties

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

PasswordApiResetPassword

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

PasswordApiResetPassword

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

PasswordApiResetPassword

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiResetPassword

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ Captcha rand string (required if Bot Protection is enabled)

#### Memberof

PasswordApiResetPassword

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ Captcha ticket (required if Bot Protection is enabled)

#### Memberof

PasswordApiResetPassword

***

### resetPassword

> `readonly` **resetPassword**: [`ResetPassword`](../loginradius-sdk/namespaces/Models/type-aliases/ResetPassword.md)

#### Memberof

PasswordApiResetPassword

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiResetPassword
