[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiAddEmailRequest

# Interface: UserApiAddEmailRequest

Request parameters for addEmail operation in UserApi.

## Export

UserApiAddEmailRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

UserApiAddEmail

***

### addEmailModel

> `readonly` **addEmailModel**: [`AddEmailModel`](../loginradius-sdk/namespaces/Models/interfaces/AddEmailModel.md)

#### Memberof

UserApiAddEmail

***

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

UserApiAddEmail

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiAddEmail

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

UserApiAddEmail

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiAddEmail
