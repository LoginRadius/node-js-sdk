[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiMFAUpdatePhoneNumberByMfaTokenRequest

# Interface: SecurityApiMFAUpdatePhoneNumberByMfaTokenRequest

Request parameters for mFAUpdatePhoneNumberByMfaToken operation in SecurityApi.

## Export

SecurityApiMFAUpdatePhoneNumberByMfaTokenRequest

## Properties

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

SecurityApiMFAUpdatePhoneNumberByMfaToken

***

### mFAPhoneUpdateModel

> `readonly` **mFAPhoneUpdateModel**: [`MFAPhoneUpdateModel`](../loginradius-sdk/namespaces/Models/interfaces/MFAPhoneUpdateModel.md)

#### Memberof

SecurityApiMFAUpdatePhoneNumberByMfaToken

***

### secondfactorauthenticationtoken

> `readonly` **secondfactorauthenticationtoken**: `string`

Second factor token

#### Memberof

SecurityApiMFAUpdatePhoneNumberByMfaToken

***

### smstemplate2fa?

> `readonly` `optional` **smstemplate2fa?**: `string`

SMS template name to be used for sending the 2FA code to the User.

#### Memberof

SecurityApiMFAUpdatePhoneNumberByMfaToken
