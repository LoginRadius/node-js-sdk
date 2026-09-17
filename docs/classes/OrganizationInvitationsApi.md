[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationInvitationsApi

# Class: OrganizationInvitationsApi

OrganizationInvitationsApi - object-oriented interface

## Export

OrganizationInvitationsApi

## Extends

- `BaseAPI`

## Implements

- [`OrganizationInvitationsApiInterface`](../interfaces/OrganizationInvitationsApiInterface.md)

## Constructors

### Constructor

> **new OrganizationInvitationsApi**(`configuration?`, `basePath?`, `axios?`): `OrganizationInvitationsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OrganizationInvitationsApi`

#### Inherited from

`BaseAPI.constructor`

## Properties

### axios

> `protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

`BaseAPI.axios`

***

### basePath

> `protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

`BaseAPI.basePath`

***

### configuration

> `protected` **configuration**: `Configuration` \| `undefined`

#### Inherited from

`BaseAPI.configuration`

## Methods

### deleteInvitationByInvitationId()

> **deleteInvitationByInvitationId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md), `any`, \{ \}, `any`\>\>

Deletes or revokes an invitation by invitation ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiDeleteInvitationByInvitationIdRequest`](../interfaces/OrganizationInvitationsApiDeleteInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationInvitationsApi

#### Implementation of

[`OrganizationInvitationsApiInterface`](../interfaces/OrganizationInvitationsApiInterface.md).[`deleteInvitationByInvitationId`](../interfaces/OrganizationInvitationsApiInterface.md#deleteinvitationbyinvitationid)

***

### getInvitationsByOrgId()

> **getInvitationsByOrgId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetInvitationsByOrgId200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetInvitationsByOrgId200Response.md), `any`, \{ \}, `any`\>\>

Lists all invitations by Organization ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiGetInvitationsByOrgIdRequest`](../interfaces/OrganizationInvitationsApiGetInvitationsByOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetInvitationsByOrgId200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetInvitationsByOrgId200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationInvitationsApi

#### Implementation of

[`OrganizationInvitationsApiInterface`](../interfaces/OrganizationInvitationsApiInterface.md).[`getInvitationsByOrgId`](../interfaces/OrganizationInvitationsApiInterface.md#getinvitationsbyorgid)

***

### resendInvitationByInvitationId()

> **resendInvitationByInvitationId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ResendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/ResendInvitation.md), `any`, \{ \}, `any`\>\>

Resends an invitation by invitation ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiResendInvitationByInvitationIdRequest`](../interfaces/OrganizationInvitationsApiResendInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ResendInvitation`](../loginradius-sdk/namespaces/Models/interfaces/ResendInvitation.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationInvitationsApi

#### Implementation of

[`OrganizationInvitationsApiInterface`](../interfaces/OrganizationInvitationsApiInterface.md).[`resendInvitationByInvitationId`](../interfaces/OrganizationInvitationsApiInterface.md#resendinvitationbyinvitationid)

***

### sendInvitation()

> **sendInvitation**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md), `any`, \{ \}, `any`\>\>

Sends a new invitation.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiSendInvitationRequest`](../interfaces/OrganizationInvitationsApiSendInvitationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationInvitationsApi

#### Implementation of

[`OrganizationInvitationsApiInterface`](../interfaces/OrganizationInvitationsApiInterface.md).[`sendInvitation`](../interfaces/OrganizationInvitationsApiInterface.md#sendinvitation)

***

### updateInvitationByInvitationId()

> **updateInvitationByInvitationId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md), `any`, \{ \}, `any`\>\>

Updates invitation details by invitation ID.

#### Parameters

##### requestParameters

[`OrganizationInvitationsApiUpdateInvitationByInvitationIdRequest`](../interfaces/OrganizationInvitationsApiUpdateInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationInvitationsApi

#### Implementation of

[`OrganizationInvitationsApiInterface`](../interfaces/OrganizationInvitationsApiInterface.md).[`updateInvitationByInvitationId`](../interfaces/OrganizationInvitationsApiInterface.md#updateinvitationbyinvitationid)
