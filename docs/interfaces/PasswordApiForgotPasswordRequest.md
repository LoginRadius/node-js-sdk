[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApiForgotPasswordRequest

# Interface: PasswordApiForgotPasswordRequest

Request parameters for forgotPassword operation in PasswordApi.

## Export

PasswordApiForgotPasswordRequest

## Properties

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

PasswordApiForgotPassword

***

### forgotPasswordRequest?

> `readonly` `optional` **forgotPasswordRequest?**: [`ForgotPasswordRequest`](../loginradius-sdk/namespaces/Models/type-aliases/ForgotPasswordRequest.md)

#### Memberof

PasswordApiForgotPassword

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

PasswordApiForgotPassword

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

PasswordApiForgotPassword

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

PasswordApiForgotPassword

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiForgotPassword

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

PasswordApiForgotPassword

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

PasswordApiForgotPassword

***

### resetpasswordurl?

> `readonly` `optional` **resetpasswordurl?**: `string`

Callback URL for the Password Reset link in the Email.

#### Memberof

PasswordApiForgotPassword

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

PasswordApiForgotPassword
