[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RolesManagementApiFp

# Function: RolesManagementApiFp()

> **RolesManagementApiFp**(`configuration?`): `object`

RolesManagementApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### deleteContextRoleByUid()

> **deleteContextRoleByUid**(`uid`, `contextName`, `preventWebhook?`, `removeRoleContextRoleModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes the specified Role from a Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### uid

`string`

UID of the User

##### contextName

`string`

Name of the Role Context

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### removeRoleContextRoleModel?

[`RemoveRoleContextRoleModel`](../loginradius-sdk/namespaces/Models/interfaces/RemoveRoleContextRoleModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### deleteRoleContextAdditionalPermissionsByUid()

> **deleteRoleContextAdditionalPermissionsByUid**(`uid`, `contextName`, `preventWebhook?`, `removeRoleContextAdditionalPermissionsModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Removes specified additional Permissions from a Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### uid

`string`

UID of the User

##### contextName

`string`

Name of the Role Context

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### removeRoleContextAdditionalPermissionsModel?

[`RemoveRoleContextAdditionalPermissionsModel`](../loginradius-sdk/namespaces/Models/interfaces/RemoveRoleContextAdditionalPermissionsModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### deleteRoleContextByUid()

> **deleteRoleContextByUid**(`contextName`, `uid`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes the specified Role Context.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### contextName

`string`

Name of the Role Context

##### uid

`string`

UID of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### deleteRolesByUid()

> **deleteRolesByUid**(`uid`, `preventWebhook?`, `userRolesModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Removes specified Roles from a User using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### uid

`string`

UID of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### userRolesModel?

[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getRoleContextByContextName()

> **getRoleContextByContextName**(`contextName`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleContextProfileResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextProfileResponseModel.md)\>\>

Retrieves the Role Context for a specified Role.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### contextName

`string`

Name of the Role Context

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleContextProfileResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextProfileResponseModel.md)\>\>

#### Throws

### getRoleContextByUid()

> **getRoleContextByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>\>

Retrieves User Roles for all Contexts using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>\>

#### Throws

### getRolesByUid()

> **getRolesByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>\>

Retrieves Roles associated with a specified UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>\>

#### Throws

### saveRolesByUid()

> **saveRolesByUid**(`uid`, `preventWebhook?`, `userRolesModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>\>

Updates and assigns Roles to a User using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### uid

`string`

UID of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### userRolesModel?

[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserRolesModel`](../loginradius-sdk/namespaces/Models/interfaces/UserRolesModel.md)\>\>

#### Throws

### upsertRoleContextByUid()

> **upsertRoleContextByUid**(`uid`, `preventWebhook?`, `xPreventWebhook?`, `updateRoleContextBodyModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>\>

Creates or updates a Context with a set of Roles using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### uid

`string`

UID of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### updateRoleContextBodyModel?

[`UpdateRoleContextBodyModel`](../loginradius-sdk/namespaces/Models/interfaces/UpdateRoleContextBodyModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleContextResponseModal`](../loginradius-sdk/namespaces/Models/interfaces/RoleContextResponseModal.md)\>\>

#### Throws

## Export
