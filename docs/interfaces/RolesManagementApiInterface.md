[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RolesManagementApiInterface

# Interface: RolesManagementApiInterface

RolesManagementApi - interface

## Export

RolesManagementApi

## Methods

### deleteContextRoleByUid()

> **deleteContextRoleByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the specified Role from a Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteContextRoleByUidRequest`](RolesManagementApiDeleteContextRoleByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

RolesManagementApiInterface

***

### deleteRoleContextAdditionalPermissionsByUid()

> **deleteRoleContextAdditionalPermissionsByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Removes specified additional Permissions from a Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteRoleContextAdditionalPermissionsByUidRequest`](RolesManagementApiDeleteRoleContextAdditionalPermissionsByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

RolesManagementApiInterface

***

### deleteRoleContextByUid()

> **deleteRoleContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the specified Role Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteRoleContextByUidRequest`](RolesManagementApiDeleteRoleContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

RolesManagementApiInterface

***

### deleteRolesByUid()

> **deleteRolesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Removes specified Roles from a User using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteRolesByUidRequest`](RolesManagementApiDeleteRolesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

RolesManagementApiInterface

***

### getRoleContextByContextName()

> **getRoleContextByContextName**(`requestParameters`, `options?`): `AxiosPromise`\<[`RoleContextProfileResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextProfileResponseModel.md)\>

Retrieves the Role Context for a specified Role.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiGetRoleContextByContextNameRequest`](RolesManagementApiGetRoleContextByContextNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RoleContextProfileResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextProfileResponseModel.md)\>

#### Throws

#### Memberof

RolesManagementApiInterface

***

### getRoleContextByUid()

> **getRoleContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>

Retrieves User Roles for all Contexts using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiGetRoleContextByUidRequest`](RolesManagementApiGetRoleContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>

#### Throws

#### Memberof

RolesManagementApiInterface

***

### getRolesByUid()

> **getRolesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>

Retrieves Roles associated with a specified UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiGetRolesByUidRequest`](RolesManagementApiGetRolesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>

#### Throws

#### Memberof

RolesManagementApiInterface

***

### saveRolesByUid()

> **saveRolesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>

Updates and assigns Roles to a User using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiSaveRolesByUidRequest`](RolesManagementApiSaveRolesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>

#### Throws

#### Memberof

RolesManagementApiInterface

***

### upsertRoleContextByUid()

> **upsertRoleContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>

Creates or updates a Context with a set of Roles using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiUpsertRoleContextByUidRequest`](RolesManagementApiUpsertRoleContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>

#### Throws

#### Memberof

RolesManagementApiInterface
