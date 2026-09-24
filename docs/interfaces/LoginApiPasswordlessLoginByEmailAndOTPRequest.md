[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiPasswordlessLoginByEmailAndOTPRequest

# Interface: LoginApiPasswordlessLoginByEmailAndOTPRequest

Request parameters for passwordlessLoginByEmailAndOTP operation in LoginApi.

## Export

LoginApiPasswordlessLoginByEmailAndOTPRequest

## Properties

### duoredirecturi?

> `readonly` `optional` **duoredirecturi?**: `string`

Duo auth redirection url.

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP

***

### passwordLessEmailOTPModel

> `readonly` **passwordLessEmailOTPModel**: [`PasswordLessEmailOTPModel`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordLessEmailOTPModel.md)

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP

***

### smstemplate2fa?

> `readonly` `optional` **smstemplate2fa?**: `string`

SMS template name to be used for sending the 2FA code to the User.

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByEmailAndOTP
