[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApiChangePasswordRequest

# Interface: PasswordApiChangePasswordRequest

Request parameters for changePassword operation in PasswordApi.

## Export

PasswordApiChangePasswordRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

PasswordApiChangePassword

***

### changePassword

> `readonly` **changePassword**: [`ChangePassword`](../loginradius-sdk/namespaces/Models/type-aliases/ChangePassword.md)

#### Memberof

PasswordApiChangePassword

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

PasswordApiChangePassword

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

PasswordApiChangePassword

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

PasswordApiChangePassword

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiChangePassword

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ Captcha rand string (required if Bot Protection is enabled)

#### Memberof

PasswordApiChangePassword

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ Captcha ticket (required if Bot Protection is enabled)

#### Memberof

PasswordApiChangePassword

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiChangePassword
