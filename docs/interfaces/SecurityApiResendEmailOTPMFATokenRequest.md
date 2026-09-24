[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiResendEmailOTPMFATokenRequest

# Interface: SecurityApiResendEmailOTPMFATokenRequest

Request parameters for resendEmailOTPMFAToken operation in SecurityApi.

## Export

SecurityApiResendEmailOTPMFATokenRequest

## Properties

### emailModel

> `readonly` **emailModel**: [`EmailModel`](../loginradius-sdk/namespaces/Models/interfaces/EmailModel.md)

#### Memberof

SecurityApiResendEmailOTPMFAToken

***

### emailtemplate2fa?

> `readonly` `optional` **emailtemplate2fa?**: `string`

Name of the 2FA Email template to use for this notification.

#### Memberof

SecurityApiResendEmailOTPMFAToken

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

SecurityApiResendEmailOTPMFAToken

***

### secondfactorauthenticationtoken

> `readonly` **secondfactorauthenticationtoken**: `string`

Second factor token

#### Memberof

SecurityApiResendEmailOTPMFAToken
