[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationInvitationsApiAxiosParamCreator

# Function: OrganizationInvitationsApiAxiosParamCreator()

> **OrganizationInvitationsApiAxiosParamCreator**(`configuration?`): `object`

OrganizationInvitationsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### deleteInvitationByInvitationId

> **deleteInvitationByInvitationId**: (`invitationid`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes or revokes an invitation by invitation ID.

#### Parameters

##### invitationid

`string`

The ID of the invitation. The ID is typically in the format *inv_&lt;unique_id&gt;*, where *&lt;unique_id&gt;* is a string of alphanumeric characters.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getInvitationsByOrgId

> **getInvitationsByOrgId**: (`orgid`, `options?`) => `Promise`\<`RequestArgs`\>

Lists all invitations by Organization ID.

#### Parameters

##### orgid

`string`

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resendInvitationByInvitationId

> **resendInvitationByInvitationId**: (`invitationid`, `options?`) => `Promise`\<`RequestArgs`\>

Resends an invitation by invitation ID.

#### Parameters

##### invitationid

`string`

The ID of the invitation. The ID is typically in the format *inv_&lt;unique_id&gt;*, where *&lt;unique_id&gt;* is a string of alphanumeric characters.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### sendInvitation

> **sendInvitation**: (`sendInvitation`, `invitationUrl?`, `options?`) => `Promise`\<`RequestArgs`\>

Sends a new invitation.

#### Parameters

##### sendInvitation

[`SendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/SendInvitation.md)

##### invitationUrl?

`string`

The URL to which the User will be redirected after accepting the invitation. This URL should be a valid URL and can include query parameters if needed.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateInvitationByInvitationId

> **updateInvitationByInvitationId**: (`invitationid`, `updateInvitationByInvitationIdRequest`, `invitationUrl?`, `options?`) => `Promise`\<`RequestArgs`\>

Updates invitation details by invitation ID.

#### Parameters

##### invitationid

`string`

The ID of the invitation. The ID is typically in the format *inv_&lt;unique_id&gt;*, where *&lt;unique_id&gt;* is a string of alphanumeric characters.

##### updateInvitationByInvitationIdRequest

[`UpdateInvitationByInvitationIdRequest`](../loginradius-sdk/namespaces/Models/interfaces/UpdateInvitationByInvitationIdRequest.md)

##### invitationUrl?

`string`

The URL to which the User will be redirected after accepting the invitation. This URL should be a valid URL and can include query parameters if needed.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
