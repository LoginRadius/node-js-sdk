[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PermissionsApiFp

# Function: PermissionsApiFp()

> **PermissionsApiFp**(`configuration?`): `object`

PermissionsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### addPermission()

> **addPermission**(`permissionsPostRequest?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>\>

Adds a new Permission.

#### Parameters

##### permissionsPostRequest?

[`PermissionsPostRequest`](../loginradius-sdk/namespaces/Models/interfaces/PermissionsPostRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>\>

#### Throws

### deleteTenantPermission()

> **deleteTenantPermission**(`id`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes a specific Permission.

#### Parameters

##### id

`string`

The unique identifier for the Permission

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getPermissionById()

> **getPermissionById**(`id`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>\>

Retrieves a Permission by its ID.

#### Parameters

##### id

`string`

The unique identifier for the Permission

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>\>

#### Throws

### permissions()

> **permissions**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Permissions200Response`](../loginradius-sdk/namespaces/Models/interfaces/Permissions200Response.md)\>\>

Retrieves a list of all Permissions.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Permissions200Response`](../loginradius-sdk/namespaces/Models/interfaces/Permissions200Response.md)\>\>

#### Throws

### updateTenantPermission()

> **updateTenantPermission**(`id`, `permissionPutRequest?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>\>

Updates a specific Permission. Note: The Name field cannot be modified for non-B2B apps. If a different Name value is provided, the API will return an error.

#### Parameters

##### id

`string`

The unique identifier for the Permission

##### permissionPutRequest?

[`PermissionPutRequest`](../loginradius-sdk/namespaces/Models/interfaces/PermissionPutRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>\>

#### Throws

## Export
