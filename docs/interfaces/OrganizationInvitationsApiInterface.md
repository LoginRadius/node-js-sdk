[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationInvitationsApiInterface

# Interface: OrganizationInvitationsApiInterface

OrganizationInvitationsApi - interface

## Export

OrganizationInvitationsApi

## Methods

### deleteInvitationByInvitationId()

> **deleteInvitationByInvitationId**(`requestParameters`, `options?`): `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

Deletes or revokes an invitation by invitation ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiDeleteInvitationByInvitationIdRequest`](OrganizationInvitationsApiDeleteInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

#### Throws

#### Memberof

OrganizationInvitationsApiInterface

***

### getInvitationsByOrgId()

> **getInvitationsByOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetInvitationsByOrgId200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetInvitationsByOrgId200Response.md)\>

Lists all invitations by Organization ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiGetInvitationsByOrgIdRequest`](OrganizationInvitationsApiGetInvitationsByOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetInvitationsByOrgId200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetInvitationsByOrgId200Response.md)\>

#### Throws

#### Memberof

OrganizationInvitationsApiInterface

***

### resendInvitationByInvitationId()

> **resendInvitationByInvitationId**(`requestParameters`, `options?`): `AxiosPromise`\<[`ResendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/ResendInvitation.md)\>

Resends an invitation by invitation ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiResendInvitationByInvitationIdRequest`](OrganizationInvitationsApiResendInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/ResendInvitation.md)\>

#### Throws

#### Memberof

OrganizationInvitationsApiInterface

***

### sendInvitation()

> **sendInvitation**(`requestParameters`, `options?`): `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

Sends a new invitation.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiSendInvitationRequest`](OrganizationInvitationsApiSendInvitationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

#### Throws

#### Memberof

OrganizationInvitationsApiInterface

***

### updateInvitationByInvitationId()

> **updateInvitationByInvitationId**(`requestParameters`, `options?`): `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

Updates invitation details by invitation ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiUpdateInvitationByInvitationIdRequest`](OrganizationInvitationsApiUpdateInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

#### Throws

#### Memberof

OrganizationInvitationsApiInterface
