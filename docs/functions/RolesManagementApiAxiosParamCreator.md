[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RolesManagementApiAxiosParamCreator

# Function: RolesManagementApiAxiosParamCreator()

> **RolesManagementApiAxiosParamCreator**(`configuration?`): `object`

RolesManagementApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### deleteContextRoleByUid

> **deleteContextRoleByUid**: (`uid`, `contextName`, `preventWebhook?`, `removeRoleContextRoleModel?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteRoleContextAdditionalPermissionsByUid

> **deleteRoleContextAdditionalPermissionsByUid**: (`uid`, `contextName`, `preventWebhook?`, `removeRoleContextAdditionalPermissionsModel?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteRoleContextByUid

> **deleteRoleContextByUid**: (`contextName`, `uid`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteRolesByUid

> **deleteRolesByUid**: (`uid`, `preventWebhook?`, `userRolesModel?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getRoleContextByContextName

> **getRoleContextByContextName**: (`contextName`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Role Context for a specified Role.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### contextName

`string`

Name of the Role Context

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getRoleContextByUid

> **getRoleContextByUid**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves User Roles for all Contexts using the UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getRolesByUid

> **getRolesByUid**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves Roles associated with a specified UID.  This API is supported only for B2C tenants. For improved role and permission management, we recommend migrating to a B2B tenant. Please contact support for assistance with the migration.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### saveRolesByUid

> **saveRolesByUid**: (`uid`, `preventWebhook?`, `userRolesModel?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### upsertRoleContextByUid

> **upsertRoleContextByUid**: (`uid`, `preventWebhook?`, `xPreventWebhook?`, `updateRoleContextBodyModel?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
