[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiPasswordlessLoginByEmailWithProfileRequest

# Interface: LoginApiPasswordlessLoginByEmailWithProfileRequest

Request parameters for passwordlessLoginByEmailWithProfile operation in LoginApi.

## Export

LoginApiPasswordlessLoginByEmailWithProfileRequest

## Properties

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### invitationToken?

> `readonly` `optional` **invitationToken?**: `string`

Invitation token of an organization

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### profileRequestModel

> `readonly` **profileRequestModel**: [`ProfileRequestModel`](../loginradius-sdk/namespaces/Models/interfaces/ProfileRequestModel.md)

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### sott?

> `readonly` `optional` **sott?**: `string`

SOTT should be generated from the server side and passed here or in the X-LoginRadius-Sott header.

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### xLoginRadiusSott?

> `readonly` `optional` **xLoginRadiusSott?**: `string`

SOTT should be generated from the server side and passed here or in sott query parameter.

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByEmailWithProfile
