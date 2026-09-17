[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationInvitationsApiFp

# Function: OrganizationInvitationsApiFp()

> **OrganizationInvitationsApiFp**(`configuration?`): `object`

OrganizationInvitationsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### deleteInvitationByInvitationId()

> **deleteInvitationByInvitationId**(`invitationid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>\>

Deletes or revokes an invitation by invitation ID.

#### Parameters

##### invitationid

`string`

The ID of the invitation. The ID is typically in the format *inv_&lt;unique_id&gt;*, where *&lt;unique_id&gt;* is a string of alphanumeric characters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>\>

#### Throws

### getInvitationsByOrgId()

> **getInvitationsByOrgId**(`orgid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetInvitationsByOrgId200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetInvitationsByOrgId200Response.md)\>\>

Lists all invitations by Organization ID.

#### Parameters

##### orgid

`string`

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetInvitationsByOrgId200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetInvitationsByOrgId200Response.md)\>\>

#### Throws

### resendInvitationByInvitationId()

> **resendInvitationByInvitationId**(`invitationid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/ResendInvitation.md)\>\>

Resends an invitation by invitation ID.

#### Parameters

##### invitationid

`string`

The ID of the invitation. The ID is typically in the format *inv_&lt;unique_id&gt;*, where *&lt;unique_id&gt;* is a string of alphanumeric characters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ResendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/ResendInvitation.md)\>\>

#### Throws

### sendInvitation()

> **sendInvitation**(`sendInvitation`, `invitationUrl?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>\>

Sends a new invitation.

#### Parameters

##### sendInvitation

[`SendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/SendInvitation.md)

##### invitationUrl?

`string`

The URL to which the User will be redirected after accepting the invitation. This URL should be a valid URL and can include query parameters if needed.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>\>

#### Throws

### updateInvitationByInvitationId()

> **updateInvitationByInvitationId**(`invitationid`, `updateInvitationByInvitationIdRequest`, `invitationUrl?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>\>

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

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>\>

#### Throws

## Export
