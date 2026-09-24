[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PermissionsApiAxiosParamCreator

# Function: PermissionsApiAxiosParamCreator()

> **PermissionsApiAxiosParamCreator**(`configuration?`): `object`

PermissionsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### addPermission

> **addPermission**: (`permissionsPostRequest?`, `options?`) => `Promise`\<`RequestArgs`\>

Adds a new Permission.

#### Parameters

##### permissionsPostRequest?

[`PermissionsPostRequest`](../loginradius-sdk/namespaces/Models/interfaces/PermissionsPostRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteTenantPermission

> **deleteTenantPermission**: (`id`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes a specific Permission.

#### Parameters

##### id

`string`

The unique identifier for the Permission

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getPermissionById

> **getPermissionById**: (`id`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves a Permission by its ID.

#### Parameters

##### id

`string`

The unique identifier for the Permission

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### permissions

> **permissions**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all Permissions.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateTenantPermission

> **updateTenantPermission**: (`id`, `permissionPutRequest?`, `options?`) => `Promise`\<`RequestArgs`\>

Updates a specific Permission. Note: The Name field cannot be modified for non-B2B apps. If a different Name value is provided, the API will return an error.

#### Parameters

##### id

`string`

The unique identifier for the Permission

##### permissionPutRequest?

[`PermissionPutRequest`](../loginradius-sdk/namespaces/Models/interfaces/PermissionPutRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
