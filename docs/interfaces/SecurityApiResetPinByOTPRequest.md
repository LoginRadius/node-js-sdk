[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiResetPinByOTPRequest

# Interface: SecurityApiResetPinByOTPRequest

Request parameters for resetPinByOTP operation in SecurityApi.

## Export

SecurityApiResetPinByOTPRequest

## Properties

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

SecurityApiResetPinByOTP

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

SecurityApiResetPinByOTP

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

SecurityApiResetPinByOTP

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiResetPinByOTP

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ Captcha rand string (required if Bot Protection is enabled)

#### Memberof

SecurityApiResetPinByOTP

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ Captcha ticket (required if Bot Protection is enabled)

#### Memberof

SecurityApiResetPinByOTP

***

### resetPINByOTP

> `readonly` **resetPINByOTP**: [`ResetPINByOTP`](../loginradius-sdk/namespaces/Models/interfaces/ResetPINByOTP.md) \| `null`

#### Memberof

SecurityApiResetPinByOTP

***

### type

> `readonly` **type**: [`ResetPinByOTPTypeEnum`](../enumerations/ResetPinByOTPTypeEnum.md)

The method of ReAuth MFA verification to use.

#### Memberof

SecurityApiResetPinByOTP

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiResetPinByOTP
