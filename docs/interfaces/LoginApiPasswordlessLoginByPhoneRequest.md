[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiPasswordlessLoginByPhoneRequest

# Interface: LoginApiPasswordlessLoginByPhoneRequest

Request parameters for passwordlessLoginByPhone operation in LoginApi.

## Export

LoginApiPasswordlessLoginByPhoneRequest

## Properties

### \_options?

> `readonly` `optional` **\_options?**: `string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### phone?

> `readonly` `optional` **phone?**: `string`

Phone ID of the associated Account.

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

LoginApiPasswordlessLoginByPhone

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByPhone
