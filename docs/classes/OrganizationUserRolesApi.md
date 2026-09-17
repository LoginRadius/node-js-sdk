[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationUserRolesApi

# Class: OrganizationUserRolesApi

OrganizationUserRolesApi - object-oriented interface

## Export

OrganizationUserRolesApi

## Extends

- `BaseAPI`

## Implements

- [`OrganizationUserRolesApiInterface`](../interfaces/OrganizationUserRolesApiInterface.md)

## Constructors

### Constructor

> **new OrganizationUserRolesApi**(`configuration?`, `basePath?`, `axios?`): `OrganizationUserRolesApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OrganizationUserRolesApi`

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

### assignRolesToUser()

> **assignRolesToUser**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

Assigns Roles to a User within a specific Organization.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiAssignRolesToUserRequest`](../interfaces/OrganizationUserRolesApiAssignRolesToUserRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationUserRolesApi

#### Implementation of

[`OrganizationUserRolesApiInterface`](../interfaces/OrganizationUserRolesApiInterface.md).[`assignRolesToUser`](../interfaces/OrganizationUserRolesApiInterface.md#assignrolestouser)

***

### assignRolesToUserInAllOrgs()

> **assignRolesToUserInAllOrgs**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

Assigns Roles to a User within a Tenant.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiAssignRolesToUserInAllOrgsRequest`](../interfaces/OrganizationUserRolesApiAssignRolesToUserInAllOrgsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationUserRolesApi

#### Implementation of

[`OrganizationUserRolesApiInterface`](../interfaces/OrganizationUserRolesApiInterface.md).[`assignRolesToUserInAllOrgs`](../interfaces/OrganizationUserRolesApiInterface.md#assignrolestouserinallorgs)

***

### deleteOrgContextByUid()

> **deleteOrgContextByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes User Roles for all Organizations by UID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiDeleteOrgContextByUidRequest`](../interfaces/OrganizationUserRolesApiDeleteOrgContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationUserRolesApi

#### Implementation of

[`OrganizationUserRolesApiInterface`](../interfaces/OrganizationUserRolesApiInterface.md).[`deleteOrgContextByUid`](../interfaces/OrganizationUserRolesApiInterface.md#deleteorgcontextbyuid)

***

### deleteOrgContextByUidAndOrgId()

> **deleteOrgContextByUidAndOrgId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes User Roles of an Organization by UID and OrgID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiDeleteOrgContextByUidAndOrgIdRequest`](../interfaces/OrganizationUserRolesApiDeleteOrgContextByUidAndOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationUserRolesApi

#### Implementation of

[`OrganizationUserRolesApiInterface`](../interfaces/OrganizationUserRolesApiInterface.md).[`deleteOrgContextByUidAndOrgId`](../interfaces/OrganizationUserRolesApiInterface.md#deleteorgcontextbyuidandorgid)

***

### getOrgContextByUid()

> **getOrgContextByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

Retrieves User Roles for all Organizations by UID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiGetOrgContextByUidRequest`](../interfaces/OrganizationUserRolesApiGetOrgContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationUserRolesApi

#### Implementation of

[`OrganizationUserRolesApiInterface`](../interfaces/OrganizationUserRolesApiInterface.md).[`getOrgContextByUid`](../interfaces/OrganizationUserRolesApiInterface.md#getorgcontextbyuid)

***

### getOrgContextByUidAndOrgId()

> **getOrgContextByUidAndOrgId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

Retrieves User Roles of an Organization by UID and OrgID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiGetOrgContextByUidAndOrgIdRequest`](../interfaces/OrganizationUserRolesApiGetOrgContextByUidAndOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationUserRolesApi

#### Implementation of

[`OrganizationUserRolesApiInterface`](../interfaces/OrganizationUserRolesApiInterface.md).[`getOrgContextByUidAndOrgId`](../interfaces/OrganizationUserRolesApiInterface.md#getorgcontextbyuidandorgid)
