[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RolesManagementApi

# Class: RolesManagementApi

RolesManagementApi - object-oriented interface

## Export

RolesManagementApi

## Extends

- `BaseAPI`

## Implements

- [`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md)

## Constructors

### Constructor

> **new RolesManagementApi**(`configuration?`, `basePath?`, `axios?`): `RolesManagementApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`RolesManagementApi`

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

### deleteContextRoleByUid()

> **deleteContextRoleByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes the specified Role from a Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteContextRoleByUidRequest`](../interfaces/RolesManagementApiDeleteContextRoleByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesManagementApi

#### Implementation of

[`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md).[`deleteContextRoleByUid`](../interfaces/RolesManagementApiInterface.md#deletecontextrolebyuid)

***

### deleteRoleContextAdditionalPermissionsByUid()

> **deleteRoleContextAdditionalPermissionsByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Removes specified additional Permissions from a Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteRoleContextAdditionalPermissionsByUidRequest`](../interfaces/RolesManagementApiDeleteRoleContextAdditionalPermissionsByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesManagementApi

#### Implementation of

[`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md).[`deleteRoleContextAdditionalPermissionsByUid`](../interfaces/RolesManagementApiInterface.md#deleterolecontextadditionalpermissionsbyuid)

***

### deleteRoleContextByUid()

> **deleteRoleContextByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes the specified Role Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteRoleContextByUidRequest`](../interfaces/RolesManagementApiDeleteRoleContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesManagementApi

#### Implementation of

[`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md).[`deleteRoleContextByUid`](../interfaces/RolesManagementApiInterface.md#deleterolecontextbyuid)

***

### deleteRolesByUid()

> **deleteRolesByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Removes specified Roles from a User using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteRolesByUidRequest`](../interfaces/RolesManagementApiDeleteRolesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesManagementApi

#### Implementation of

[`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md).[`deleteRolesByUid`](../interfaces/RolesManagementApiInterface.md#deleterolesbyuid)

***

### getRoleContextByContextName()

> **getRoleContextByContextName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RoleContextProfileResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextProfileResponseModel.md), `any`, \{ \}, `any`\>\>

Retrieves the Role Context for a specified Role.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiGetRoleContextByContextNameRequest`](../interfaces/RolesManagementApiGetRoleContextByContextNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RoleContextProfileResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextProfileResponseModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesManagementApi

#### Implementation of

[`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md).[`getRoleContextByContextName`](../interfaces/RolesManagementApiInterface.md#getrolecontextbycontextname)

***

### getRoleContextByUid()

> **getRoleContextByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md), `any`, \{ \}, `any`\>\>

Retrieves User Roles for all Contexts using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiGetRoleContextByUidRequest`](../interfaces/RolesManagementApiGetRoleContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesManagementApi

#### Implementation of

[`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md).[`getRoleContextByUid`](../interfaces/RolesManagementApiInterface.md#getrolecontextbyuid)

***

### getRolesByUid()

> **getRolesByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md), `any`, \{ \}, `any`\>\>

Retrieves Roles associated with a specified UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiGetRolesByUidRequest`](../interfaces/RolesManagementApiGetRolesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesManagementApi

#### Implementation of

[`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md).[`getRolesByUid`](../interfaces/RolesManagementApiInterface.md#getrolesbyuid)

***

### saveRolesByUid()

> **saveRolesByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md), `any`, \{ \}, `any`\>\>

Updates and assigns Roles to a User using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiSaveRolesByUidRequest`](../interfaces/RolesManagementApiSaveRolesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesManagementApi

#### Implementation of

[`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md).[`saveRolesByUid`](../interfaces/RolesManagementApiInterface.md#saverolesbyuid)

***

### upsertRoleContextByUid()

> **upsertRoleContextByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md), `any`, \{ \}, `any`\>\>

Creates or updates a Context with a set of Roles using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiUpsertRoleContextByUidRequest`](../interfaces/RolesManagementApiUpsertRoleContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesManagementApi

#### Implementation of

[`RolesManagementApiInterface`](../interfaces/RolesManagementApiInterface.md).[`upsertRoleContextByUid`](../interfaces/RolesManagementApiInterface.md#upsertrolecontextbyuid)
