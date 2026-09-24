[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountsApiUpdateAccountProfileByUIDRequest

# Interface: AccountsApiUpdateAccountProfileByUIDRequest

Request parameters for updateAccountProfileByUID operation in AccountsApi.

## Export

AccountsApiUpdateAccountProfileByUIDRequest

## Properties

### manageRegisterModel

> `readonly` **manageRegisterModel**: [`ManageRegisterModel`](../loginradius-sdk/namespaces/Models/interfaces/ManageRegisterModel.md)

#### Memberof

AccountsApiUpdateAccountProfileByUID

***

### nullsupport?

> `readonly` `optional` **nullsupport?**: `boolean`

Bool flag, if this flag is sent as true then the fields which are send in payload as null then in the profile as well that will be saved as null only

#### Memberof

AccountsApiUpdateAccountProfileByUID

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

AccountsApiUpdateAccountProfileByUID

***

### uid

> `readonly` **uid**: `string`

The UID associated with the User

#### Memberof

AccountsApiUpdateAccountProfileByUID

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

AccountsApiUpdateAccountProfileByUID
