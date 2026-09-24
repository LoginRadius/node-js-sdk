[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserNameRequest

# Interface: RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserNameRequest

Request parameters for userRegistrationByReCaptchaEmailPhoneUserName operation in RegistrationApi.

## Export

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserNameRequest

## Properties

### \_options?

> `readonly` `optional` **\_options?**: `string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### invitationToken?

> `readonly` `optional` **invitationToken?**: `string`

Invitation token of an organization

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### userRegistrationByReCaptchaEmailPhoneUserNameRequest

> `readonly` **userRegistrationByReCaptchaEmailPhoneUserNameRequest**: [`UserRegistrationByReCaptchaEmailPhoneUserNameRequest`](../loginradius-sdk/namespaces/Models/type-aliases/UserRegistrationByReCaptchaEmailPhoneUserNameRequest.md)

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### welcomeemailtemplate?

> `readonly` `optional` **welcomeemailtemplate?**: `string`

Welcome Email Template

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserName
