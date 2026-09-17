[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RegistrationApiFp

# Function: RegistrationApiFp()

> **RegistrationApiFp**(`configuration?`): `object`

RegistrationApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### beginPasskeyRegistration()

> **beginPasskeyRegistration**(`identifier`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyRegistration200Response.md)\>\>

Begins the registration process using a Passkey.

#### Parameters

##### identifier

`string`

Email of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyRegistration200Response.md)\>\>

#### Throws

### finishPasskeyRegistration()

> **finishPasskeyRegistration**(`passkeyRegisterFinish`, `verificationurl?`, `emailtemplate?`, `welcomeemailtemplate?`, `fields?`, `_options?`, `invitationToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>\>

Completes the registration process using a Passkey.

#### Parameters

##### passkeyRegisterFinish

[`PasskeyRegisterFinish`](../loginradius-sdk/namespaces/Models/type-aliases/PasskeyRegisterFinish.md)

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### \_options?

`string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

##### invitationToken?

`string`

Invitation token of an organization

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>\>

#### Throws

### userRegistrationByReCaptchaEmailPhoneUserName()

> **userRegistrationByReCaptchaEmailPhoneUserName**(`userRegistrationByReCaptchaEmailPhoneUserNameRequest`, `verificationurl?`, `emailtemplate?`, `smstemplate?`, `welcomeemailtemplate?`, `_options?`, `isvoiceotp?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `preventWebhook?`, `xPreventWebhook?`, `fields?`, `invitationToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>\>

Registers a new User using Email, Phone, or Username with Captcha verification.

#### Parameters

##### userRegistrationByReCaptchaEmailPhoneUserNameRequest

[`UserRegistrationByReCaptchaEmailPhoneUserNameRequest`](../loginradius-sdk/namespaces/Models/type-aliases/UserRegistrationByReCaptchaEmailPhoneUserNameRequest.md)

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### smstemplate?

`string`

SMS Template

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### \_options?

`string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### invitationToken?

`string`

Invitation token of an organization

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>\>

#### Throws

### userRegistrationBySottEmailPhoneUserName()

> **userRegistrationBySottEmailPhoneUserName**(`profileRequestModel`, `emailtemplate?`, `sott?`, `welcomeemailtemplate?`, `verificationurl?`, `smstemplate?`, `preventWebhook?`, `xPreventWebhook?`, `fields?`, `xLoginRadiusSott?`, `_options?`, `invitationToken?`, `isvoiceotp?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>\>

Registers a new User using Email, Phone, or Username via a Secure One Time Token (SOTT).

#### Parameters

##### profileRequestModel

[`ProfileRequestModel`](../loginradius-sdk/namespaces/Models/interfaces/ProfileRequestModel.md)

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### sott?

`string`

SOTT should be generated from the server side and passed here or in the X-LoginRadius-Sott header.

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### smstemplate?

`string`

SMS Template

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### xLoginRadiusSott?

`string`

SOTT should be generated from the server side and passed here or in sott query parameter.

##### \_options?

`string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

##### invitationToken?

`string`

Invitation token of an organization

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>\>

#### Throws

## Export
