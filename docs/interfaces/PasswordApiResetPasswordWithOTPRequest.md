[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApiResetPasswordWithOTPRequest

# Interface: PasswordApiResetPasswordWithOTPRequest

Request parameters for resetPasswordWithOTP operation in PasswordApi.

## Export

PasswordApiResetPasswordWithOTPRequest

## Properties

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

PasswordApiResetPasswordWithOTP

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

PasswordApiResetPasswordWithOTP

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

PasswordApiResetPasswordWithOTP

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiResetPasswordWithOTP

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ Captcha rand string (required if Bot Protection is enabled)

#### Memberof

PasswordApiResetPasswordWithOTP

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ Captcha ticket (required if Bot Protection is enabled)

#### Memberof

PasswordApiResetPasswordWithOTP

***

### resetPasswordWithOTP

> `readonly` **resetPasswordWithOTP**: [`ResetPasswordWithOTP`](../loginradius-sdk/namespaces/Models/type-aliases/ResetPasswordWithOTP.md)

#### Memberof

PasswordApiResetPasswordWithOTP

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiResetPasswordWithOTP
