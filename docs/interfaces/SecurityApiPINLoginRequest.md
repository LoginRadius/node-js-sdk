[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiPINLoginRequest

# Interface: SecurityApiPINLoginRequest

Request parameters for pINLogin operation in SecurityApi.

## Export

SecurityApiPINLoginRequest

## Properties

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

SecurityApiPINLogin

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

SecurityApiPINLogin

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

SecurityApiPINLogin

***

### pINLoginModel

> `readonly` **pINLoginModel**: [`PINLoginModel`](../loginradius-sdk/namespaces/Models/interfaces/PINLoginModel.md)

#### Memberof

SecurityApiPINLogin

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiPINLogin

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ Captcha rand string (required if Bot Protection is enabled)

#### Memberof

SecurityApiPINLogin

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ Captcha ticket (required if Bot Protection is enabled)

#### Memberof

SecurityApiPINLogin

***

### sessionToken

> `readonly` **sessionToken**: `string`

Session Token for PIN Auth

#### Memberof

SecurityApiPINLogin

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiPINLogin
