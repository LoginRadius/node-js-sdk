[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationInvitationsApiUpdateInvitationByInvitationIdRequest

# Interface: OrganizationInvitationsApiUpdateInvitationByInvitationIdRequest

Request parameters for updateInvitationByInvitationId operation in OrganizationInvitationsApi.

## Export

OrganizationInvitationsApiUpdateInvitationByInvitationIdRequest

## Properties

### invitationid

> `readonly` **invitationid**: `string`

The ID of the invitation. The ID is typically in the format *inv_&lt;unique_id&gt;*, where *&lt;unique_id&gt;* is a string of alphanumeric characters.

#### Memberof

OrganizationInvitationsApiUpdateInvitationByInvitationId

***

### invitationUrl?

> `readonly` `optional` **invitationUrl?**: `string`

The URL to which the User will be redirected after accepting the invitation. This URL should be a valid URL and can include query parameters if needed.

#### Memberof

OrganizationInvitationsApiUpdateInvitationByInvitationId

***

### updateInvitationByInvitationIdRequest

> `readonly` **updateInvitationByInvitationIdRequest**: [`UpdateInvitationByInvitationIdRequest`](../loginradius-sdk/namespaces/Models/interfaces/UpdateInvitationByInvitationIdRequest.md)

#### Memberof

OrganizationInvitationsApiUpdateInvitationByInvitationId
