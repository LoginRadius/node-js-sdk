[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / InvitationToken

# Interface: InvitationToken

## Export

InvitationToken

## Properties

### Email?

> `optional` **Email?**: `string`

The Email address of the User to whom the invitation is sent.

#### Memberof

InvitationToken

***

### IsEmailExist?

> `optional` **IsEmailExist?**: `boolean`

Indicates whether the Email address is already associated with an existing User account.

#### Memberof

InvitationToken

***

### Status?

> `optional` **Status?**: [`InvitationTokenStatusEnum`](../enumerations/InvitationTokenStatusEnum.md)

The status of the invitation. Possible values are *invited*, *accepted*, *expired*, and *revoked*.

#### Memberof

InvitationToken
