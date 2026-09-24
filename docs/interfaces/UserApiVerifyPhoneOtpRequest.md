[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiVerifyPhoneOtpRequest

# Interface: UserApiVerifyPhoneOtpRequest

Request parameters for verifyPhoneOtp operation in UserApi.

## Export

UserApiVerifyPhoneOtpRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

UserApiVerifyPhoneOtp

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

UserApiVerifyPhoneOtp

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

UserApiVerifyPhoneOtp

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

UserApiVerifyPhoneOtp

***

### otp?

> `readonly` `optional` **otp?**: `string`

One-time passcode sent to the User\&#39;s Email.

#### Memberof

UserApiVerifyPhoneOtp

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiVerifyPhoneOtp

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

UserApiVerifyPhoneOtp

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

UserApiVerifyPhoneOtp

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

UserApiVerifyPhoneOtp

***

### verifyOtpPhoneModel

> `readonly` **verifyOtpPhoneModel**: [`VerifyOtpPhoneModel`](../loginradius-sdk/namespaces/Models/interfaces/VerifyOtpPhoneModel.md)

#### Memberof

UserApiVerifyPhoneOtp

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiVerifyPhoneOtp
