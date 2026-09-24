[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationInvitationsApiFactory

# Function: OrganizationInvitationsApiFactory()

> **OrganizationInvitationsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

OrganizationInvitationsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### deleteInvitationByInvitationId()

> **deleteInvitationByInvitationId**(`requestParameters`, `options?`): `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

Deletes or revokes an invitation by invitation ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiDeleteInvitationByInvitationIdRequest`](../interfaces/OrganizationInvitationsApiDeleteInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

#### Throws

### getInvitationsByOrgId()

> **getInvitationsByOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetInvitationsByOrgId200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetInvitationsByOrgId200Response.md)\>

Lists all invitations by Organization ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiGetInvitationsByOrgIdRequest`](../interfaces/OrganizationInvitationsApiGetInvitationsByOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetInvitationsByOrgId200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetInvitationsByOrgId200Response.md)\>

#### Throws

### resendInvitationByInvitationId()

> **resendInvitationByInvitationId**(`requestParameters`, `options?`): `AxiosPromise`\<[`ResendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/ResendInvitation.md)\>

Resends an invitation by invitation ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiResendInvitationByInvitationIdRequest`](../interfaces/OrganizationInvitationsApiResendInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/ResendInvitation.md)\>

#### Throws

### sendInvitation()

> **sendInvitation**(`requestParameters`, `options?`): `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

Sends a new invitation.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiSendInvitationRequest`](../interfaces/OrganizationInvitationsApiSendInvitationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

#### Throws

### updateInvitationByInvitationId()

> **updateInvitationByInvitationId**(`requestParameters`, `options?`): `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

Updates invitation details by invitation ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiUpdateInvitationByInvitationIdRequest`](../interfaces/OrganizationInvitationsApiUpdateInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

#### Throws

## Export
