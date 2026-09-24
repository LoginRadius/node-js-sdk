[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountsApiInvalidateEmailVerificationRequest

# Interface: AccountsApiInvalidateEmailVerificationRequest

Request parameters for invalidateEmailVerification operation in AccountsApi.

## Export

AccountsApiInvalidateEmailVerificationRequest

## Properties

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

AccountsApiInvalidateEmailVerification

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

AccountsApiInvalidateEmailVerification

***

### uid

> `readonly` **uid**: `string`

The UID associated with the User

#### Memberof

AccountsApiInvalidateEmailVerification

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

AccountsApiInvalidateEmailVerification

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

AccountsApiInvalidateEmailVerification
