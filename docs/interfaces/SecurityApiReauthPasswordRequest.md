[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiReauthPasswordRequest

# Interface: SecurityApiReauthPasswordRequest

Request parameters for reauthPassword operation in SecurityApi.

## Export

SecurityApiReauthPasswordRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

SecurityApiReauthPassword

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

SecurityApiReauthPassword

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

SecurityApiReauthPassword

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

SecurityApiReauthPassword

***

### passwordReauthRequest

> `readonly` **passwordReauthRequest**: [`PasswordReauthRequest`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordReauthRequest.md)

#### Memberof

SecurityApiReauthPassword

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiReauthPassword

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

SecurityApiReauthPassword

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

SecurityApiReauthPassword

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

SecurityApiReauthPassword

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiReauthPassword
