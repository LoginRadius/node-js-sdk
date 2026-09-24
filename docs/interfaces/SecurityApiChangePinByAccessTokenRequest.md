[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiChangePinByAccessTokenRequest

# Interface: SecurityApiChangePinByAccessTokenRequest

Request parameters for changePinByAccessToken operation in SecurityApi.

## Export

SecurityApiChangePinByAccessTokenRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

SecurityApiChangePinByAccessToken

***

### changePin

> `readonly` **changePin**: [`ChangePin`](../loginradius-sdk/namespaces/Models/type-aliases/ChangePin.md)

#### Memberof

SecurityApiChangePinByAccessToken

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

SecurityApiChangePinByAccessToken

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

SecurityApiChangePinByAccessToken

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

SecurityApiChangePinByAccessToken

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiChangePinByAccessToken

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ Captcha rand string (required if Bot Protection is enabled)

#### Memberof

SecurityApiChangePinByAccessToken

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ Captcha ticket (required if Bot Protection is enabled)

#### Memberof

SecurityApiChangePinByAccessToken

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiChangePinByAccessToken
