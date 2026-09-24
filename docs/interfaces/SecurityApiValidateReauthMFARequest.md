[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiValidateReauthMFARequest

# Interface: SecurityApiValidateReauthMFARequest

Request parameters for validateReauthMFA operation in SecurityApi.

## Export

SecurityApiValidateReauthMFARequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

SecurityApiValidateReauthMFA

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

SecurityApiValidateReauthMFA

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

SecurityApiValidateReauthMFA

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

SecurityApiValidateReauthMFA

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiValidateReauthMFA

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

SecurityApiValidateReauthMFA

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

SecurityApiValidateReauthMFA

***

### reAuthTwoFAModel

> `readonly` **reAuthTwoFAModel**: [`ReAuthTwoFAModel`](../loginradius-sdk/namespaces/Models/type-aliases/ReAuthTwoFAModel.md)

#### Memberof

SecurityApiValidateReauthMFA

***

### type

> `readonly` **type**: [`ValidateReauthMFATypeEnum`](../enumerations/ValidateReauthMFATypeEnum.md)

The method of ReAuth MFA verification to use.

#### Memberof

SecurityApiValidateReauthMFA

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiValidateReauthMFA
