[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / VerifyOtpPhoneModel

# Interface: VerifyOtpPhoneModel

## Export

VerifyOtpPhoneModel

## Properties

### GoogleRecaptchaResponse?

> `optional` **GoogleRecaptchaResponse?**: `string`

Google reCAPTCHA response.

#### Memberof

VerifyOtpPhoneModel

***

### HCaptchaResponse?

> `optional` **HCaptchaResponse?**: `string`

hCaptcha response.

#### Memberof

VerifyOtpPhoneModel

***

### Phone

> **Phone**: `string`

The Phone number for OTP verification.

#### Memberof

VerifyOtpPhoneModel

***

### QQCaptchaRandomString?

> `optional` **QQCaptchaRandomString?**: `string`

QQ Captcha random string.

#### Memberof

VerifyOtpPhoneModel

***

### QQCaptchaTicket?

> `optional` **QQCaptchaTicket?**: `string`

QQ Captcha ticket.

#### Memberof

VerifyOtpPhoneModel

***

### SecurityAnswer?

> `optional` **SecurityAnswer?**: `object`

Optional security answers for additional verification.

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

VerifyOtpPhoneModel
