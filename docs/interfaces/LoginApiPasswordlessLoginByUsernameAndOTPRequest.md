[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiPasswordlessLoginByUsernameAndOTPRequest

# Interface: LoginApiPasswordlessLoginByUsernameAndOTPRequest

Request parameters for passwordlessLoginByUsernameAndOTP operation in LoginApi.

## Export

LoginApiPasswordlessLoginByUsernameAndOTPRequest

## Properties

### duoredirecturi?

> `readonly` `optional` **duoredirecturi?**: `string`

Duo auth redirection url.

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP

***

### passwordLessUserNameOTPModel

> `readonly` **passwordLessUserNameOTPModel**: [`PasswordLessUserNameOTPModel`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordLessUserNameOTPModel.md)

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP

***

### smstemplate2fa?

> `readonly` `optional` **smstemplate2fa?**: `string`

SMS template name to be used for sending the 2FA code to the User.

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessLoginByUsernameAndOTP
