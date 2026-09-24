[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiMFAUpdatePhoneNumberByTokenRequest

# Interface: SecurityApiMFAUpdatePhoneNumberByTokenRequest

Request parameters for mFAUpdatePhoneNumberByToken operation in SecurityApi.

## Export

SecurityApiMFAUpdatePhoneNumberByTokenRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

SecurityApiMFAUpdatePhoneNumberByToken

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

SecurityApiMFAUpdatePhoneNumberByToken

***

### mFAPhoneUpdateModel

> `readonly` **mFAPhoneUpdateModel**: [`MFAPhoneUpdateModel`](../loginradius-sdk/namespaces/Models/interfaces/MFAPhoneUpdateModel.md)

#### Memberof

SecurityApiMFAUpdatePhoneNumberByToken

***

### smstemplate2fa?

> `readonly` `optional` **smstemplate2fa?**: `string`

SMS template name to be used for sending the 2FA code to the User.

#### Memberof

SecurityApiMFAUpdatePhoneNumberByToken
