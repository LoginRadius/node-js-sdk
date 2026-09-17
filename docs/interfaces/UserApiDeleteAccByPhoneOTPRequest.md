[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiDeleteAccByPhoneOTPRequest

# Interface: UserApiDeleteAccByPhoneOTPRequest

Request parameters for deleteAccByPhoneOTP operation in UserApi.

## Export

UserApiDeleteAccByPhoneOTPRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

UserApiDeleteAccByPhoneOTP

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

UserApiDeleteAccByPhoneOTP

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

UserApiDeleteAccByPhoneOTP

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

UserApiDeleteAccByPhoneOTP

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiDeleteAccByPhoneOTP

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ Captcha rand string (required if Bot Protection is enabled)

#### Memberof

UserApiDeleteAccByPhoneOTP

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ Captcha ticket (required if Bot Protection is enabled)

#### Memberof

UserApiDeleteAccByPhoneOTP

***

### verifyDeleteAccountOtp?

> `readonly` `optional` **verifyDeleteAccountOtp?**: [`VerifyDeleteAccountOtp`](../loginradius-sdk/namespaces/Models/interfaces/VerifyDeleteAccountOtp.md)

#### Memberof

UserApiDeleteAccByPhoneOTP

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiDeleteAccByPhoneOTP
