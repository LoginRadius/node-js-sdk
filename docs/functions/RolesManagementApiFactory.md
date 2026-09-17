[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RolesManagementApiFactory

# Function: RolesManagementApiFactory()

> **RolesManagementApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

RolesManagementApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### deleteContextRoleByUid()

> **deleteContextRoleByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the specified Role from a Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteContextRoleByUidRequest`](../interfaces/RolesManagementApiDeleteContextRoleByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### deleteRoleContextAdditionalPermissionsByUid()

> **deleteRoleContextAdditionalPermissionsByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Removes specified additional Permissions from a Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteRoleContextAdditionalPermissionsByUidRequest`](../interfaces/RolesManagementApiDeleteRoleContextAdditionalPermissionsByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### deleteRoleContextByUid()

> **deleteRoleContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the specified Role Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteRoleContextByUidRequest`](../interfaces/RolesManagementApiDeleteRoleContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### deleteRolesByUid()

> **deleteRolesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Removes specified Roles from a User using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiDeleteRolesByUidRequest`](../interfaces/RolesManagementApiDeleteRolesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getRoleContextByContextName()

> **getRoleContextByContextName**(`requestParameters`, `options?`): `AxiosPromise`\<[`RoleContextProfileResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextProfileResponseModel.md)\>

Retrieves the Role Context for a specified Role.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiGetRoleContextByContextNameRequest`](../interfaces/RolesManagementApiGetRoleContextByContextNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RoleContextProfileResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextProfileResponseModel.md)\>

#### Throws

### getRoleContextByUid()

> **getRoleContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>

Retrieves User Roles for all Contexts using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiGetRoleContextByUidRequest`](../interfaces/RolesManagementApiGetRoleContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>

#### Throws

### getRolesByUid()

> **getRolesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>

Retrieves Roles associated with a specified UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiGetRolesByUidRequest`](../interfaces/RolesManagementApiGetRolesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>

#### Throws

### saveRolesByUid()

> **saveRolesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>

Updates and assigns Roles to a User using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiSaveRolesByUidRequest`](../interfaces/RolesManagementApiSaveRolesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>

#### Throws

### upsertRoleContextByUid()

> **upsertRoleContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>

Creates or updates a Context with a set of Roles using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### requestParameters

[`RolesManagementApiUpsertRoleContextByUidRequest`](../interfaces/RolesManagementApiUpsertRoleContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>

#### Throws

## Export
