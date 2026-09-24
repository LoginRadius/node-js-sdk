[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiLoginByNoRegistrationPassCodeRequest

# Interface: LoginApiLoginByNoRegistrationPassCodeRequest

Request parameters for loginByNoRegistrationPassCode operation in LoginApi.

## Export

LoginApiLoginByNoRegistrationPassCodeRequest

## Properties

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiLoginByNoRegistrationPassCode

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

LoginApiLoginByNoRegistrationPassCode

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

LoginApiLoginByNoRegistrationPassCode

***

### otp?

> `readonly` `optional` **otp?**: `string`

One-time passcode sent to the User\&#39;s Email.

#### Memberof

LoginApiLoginByNoRegistrationPassCode

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiLoginByNoRegistrationPassCode

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiLoginByNoRegistrationPassCode

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiLoginByNoRegistrationPassCode

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

LoginApiLoginByNoRegistrationPassCode

***

### verifyOtpPhoneModel

> `readonly` **verifyOtpPhoneModel**: [`VerifyOtpPhoneModel`](../loginradius-sdk/namespaces/Models/interfaces/VerifyOtpPhoneModel.md)

#### Memberof

LoginApiLoginByNoRegistrationPassCode

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiLoginByNoRegistrationPassCode
