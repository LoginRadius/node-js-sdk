[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiPasswordlessLoginPhoneVerificationRequest

# Interface: LoginApiPasswordlessLoginPhoneVerificationRequest

Request parameters for passwordlessLoginPhoneVerification operation in LoginApi.

## Export

LoginApiPasswordlessLoginPhoneVerificationRequest

## Properties

### duoredirecturi?

> `readonly` `optional` **duoredirecturi?**: `string`

Duo auth redirection url.

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### emailtemplate2fa?

> `readonly` `optional` **emailtemplate2fa?**: `string`

Name of the 2FA Email template to use for this notification.

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### phoneOTPModel

> `readonly` **phoneOTPModel**: [`PhoneOTPModel`](../loginradius-sdk/namespaces/Models/type-aliases/PhoneOTPModel.md)

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

LoginApiPasswordlessLoginPhoneVerification

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginPhoneVerification
