[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / Invitation

# Interface: Invitation

## Export

Invitation

## Properties

### CreatedDate?

> `optional` **CreatedDate?**: `string`

The date and time when the invitation was created, UTC format.

#### Memberof

Invitation

***

### EmailId?

> `optional` **EmailId?**: `string`

The Email address of the User to whom the invitation is sent.

#### Memberof

Invitation

***

### ExpirationDate?

> `optional` **ExpirationDate?**: `string`

The date and time when the invitation expires, UTC format.

#### Memberof

Invitation

***

### Id?

> `optional` **Id?**: `string`

The unique identifier for the invitation. The ID is typically in the format *inv_<unique_id>*, where *<unique_id>* is a string of alphanumeric characters.

#### Memberof

Invitation

***

### InviterUid?

> `optional` **InviterUid?**: `string`

The unique identifier for the User who sent the invitation. The ID is typically in the format unique_id, where *<unique_id>* is a string of alphanumeric characters.

#### Memberof

Invitation

***

### ModifiedDate?

> `optional` **ModifiedDate?**: `string`

The date and time when the invitation was last modified, UTC format.

#### Memberof

Invitation

***

### OrgId?

> `optional` **OrgId?**: `string`

The unique identifier for the organization associated with the invitation. The ID is typically in the format *org_<unique_id>*, where *<unique_id>* is a string of alphanumeric characters.

#### Memberof

Invitation

***

### RoleIds?

> `optional` **RoleIds?**: `string`[]

The list of Role IDs associated with the invitation. Each Role ID is typically in the format *role_<unique_id>*, where *<unique_id>* is a string of alphanumeric characters.

#### Memberof

Invitation

***

### Status?

> `optional` **Status?**: [`InvitationStatusEnum`](../enumerations/InvitationStatusEnum.md)

The status of the invitation. Possible values are *invited*, *accepted*, *expired*, and *revoked*.

#### Memberof

Invitation
