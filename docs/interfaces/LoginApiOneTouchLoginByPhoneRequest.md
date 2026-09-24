[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiOneTouchLoginByPhoneRequest

# Interface: LoginApiOneTouchLoginByPhoneRequest

Request parameters for oneTouchLoginByPhone operation in LoginApi.

## Export

LoginApiOneTouchLoginByPhoneRequest

## Properties

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiOneTouchLoginByPhone

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

LoginApiOneTouchLoginByPhone

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

LoginApiOneTouchLoginByPhone

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

LoginApiOneTouchLoginByPhone

***

### oneTouchLoginByPhone

> `readonly` **oneTouchLoginByPhone**: [`OneTouchLoginByPhone`](../loginradius-sdk/namespaces/Models/interfaces/OneTouchLoginByPhone.md)

#### Memberof

LoginApiOneTouchLoginByPhone

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiOneTouchLoginByPhone

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiOneTouchLoginByPhone

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiOneTouchLoginByPhone

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

LoginApiOneTouchLoginByPhone

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiOneTouchLoginByPhone
