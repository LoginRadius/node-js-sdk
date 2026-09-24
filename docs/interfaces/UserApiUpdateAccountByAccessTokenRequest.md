[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiUpdateAccountByAccessTokenRequest

# Interface: UserApiUpdateAccountByAccessTokenRequest

Request parameters for updateAccountByAccessToken operation in UserApi.

## Export

UserApiUpdateAccountByAccessTokenRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

UserApiUpdateAccountByAccessToken

***

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

UserApiUpdateAccountByAccessToken

***

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

UserApiUpdateAccountByAccessToken

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

UserApiUpdateAccountByAccessToken

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

UserApiUpdateAccountByAccessToken

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

UserApiUpdateAccountByAccessToken

***

### nullsupport?

> `readonly` `optional` **nullsupport?**: `boolean`

Bool flag, if this flag is sent as true then the fields which are send in payload as null then in the profile as well that will be saved as null only

#### Memberof

UserApiUpdateAccountByAccessToken

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiUpdateAccountByAccessToken

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

UserApiUpdateAccountByAccessToken

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

UserApiUpdateAccountByAccessToken

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

UserApiUpdateAccountByAccessToken

***

### updateAccountByAccessTokenRequest

> `readonly` **updateAccountByAccessTokenRequest**: [`UpdateAccountByAccessTokenRequest`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateAccountByAccessTokenRequest.md)

#### Memberof

UserApiUpdateAccountByAccessToken

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

UserApiUpdateAccountByAccessToken

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiUpdateAccountByAccessToken
