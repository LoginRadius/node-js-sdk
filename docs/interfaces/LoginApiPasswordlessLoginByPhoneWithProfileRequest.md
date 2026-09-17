[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiPasswordlessLoginByPhoneWithProfileRequest

# Interface: LoginApiPasswordlessLoginByPhoneWithProfileRequest

Request parameters for passwordlessLoginByPhoneWithProfile operation in LoginApi.

## Export

LoginApiPasswordlessLoginByPhoneWithProfileRequest

## Properties

### \_options?

> `readonly` `optional` **\_options?**: `string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### profileRequestModel

> `readonly` **profileRequestModel**: [`ProfileRequestModel`](../loginradius-sdk/namespaces/Models/interfaces/ProfileRequestModel.md)

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### sott?

> `readonly` `optional` **sott?**: `string`

SOTT should be generated from the server side and passed here or in the X-LoginRadius-Sott header.

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### xLoginRadiusSott?

> `readonly` `optional` **xLoginRadiusSott?**: `string`

SOTT should be generated from the server side and passed here or in sott query parameter.

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByPhoneWithProfile
