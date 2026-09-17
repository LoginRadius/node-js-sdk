[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiChangePhoneNumberRequest

# Interface: UserApiChangePhoneNumberRequest

Request parameters for changePhoneNumber operation in UserApi.

## Export

UserApiChangePhoneNumberRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

UserApiChangePhoneNumber

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

UserApiChangePhoneNumber

***

### phoneIdModel?

> `readonly` `optional` **phoneIdModel?**: [`PhoneIdModel`](../loginradius-sdk/namespaces/Models/interfaces/PhoneIdModel.md)

#### Memberof

UserApiChangePhoneNumber

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiChangePhoneNumber

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

UserApiChangePhoneNumber

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiChangePhoneNumber
