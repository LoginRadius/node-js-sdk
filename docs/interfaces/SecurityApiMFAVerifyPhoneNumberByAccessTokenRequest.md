[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiMFAVerifyPhoneNumberByAccessTokenRequest

# Interface: SecurityApiMFAVerifyPhoneNumberByAccessTokenRequest

Request parameters for mFAVerifyPhoneNumberByAccessToken operation in SecurityApi.

## Export

SecurityApiMFAVerifyPhoneNumberByAccessTokenRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

SecurityApiMFAVerifyPhoneNumberByAccessToken

***

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

SecurityApiMFAVerifyPhoneNumberByAccessToken

***

### mFAVerifyPhoneOtpModel

> `readonly` **mFAVerifyPhoneOtpModel**: [`MFAVerifyPhoneOtpModel`](../loginradius-sdk/namespaces/Models/type-aliases/MFAVerifyPhoneOtpModel.md)

#### Memberof

SecurityApiMFAVerifyPhoneNumberByAccessToken

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiMFAVerifyPhoneNumberByAccessToken

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiMFAVerifyPhoneNumberByAccessToken
