[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / MultipurposeTokensApiGetVerificationTokenRequest

# Interface: MultipurposeTokensApiGetVerificationTokenRequest

Request parameters for getVerificationToken operation in MultipurposeTokensApi.

## Export

MultipurposeTokensApiGetVerificationTokenRequest

## Properties

### email?

> `readonly` `optional` **email?**: `string`

Email address of the associated Account.

#### Memberof

MultipurposeTokensApiGetVerificationToken

***

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

MultipurposeTokensApiGetVerificationToken

***

### expiresIn?

> `readonly` `optional` **expiresIn?**: `string`

#### Memberof

MultipurposeTokensApiGetVerificationToken

***

### sendemail?

> `readonly` `optional` **sendemail?**: [`GetVerificationTokenSendemailEnum`](../enumerations/GetVerificationTokenSendemailEnum.md)

Indicates whether to send an Email with the forgot Password token.

#### Memberof

MultipurposeTokensApiGetVerificationToken

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

MultipurposeTokensApiGetVerificationToken

***

### vtype

> `readonly` **vtype**: [`email`](../enumerations/GetVerificationTokenVtypeEnum.md#email)

The type of verification. Currently, only \&quot;Email\&quot; is supported.

#### Memberof

MultipurposeTokensApiGetVerificationToken
