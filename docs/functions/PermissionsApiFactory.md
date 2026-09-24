[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PermissionsApiFactory

# Function: PermissionsApiFactory()

> **PermissionsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

PermissionsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### addPermission()

> **addPermission**(`requestParameters?`, `options?`): `AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>

Adds a new Permission.

#### Parameters

##### requestParameters?

[`PermissionsApiAddPermissionRequest`](../interfaces/PermissionsApiAddPermissionRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>

#### Throws

### deleteTenantPermission()

> **deleteTenantPermission**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a specific Permission.

#### Parameters

##### requestParameters

[`PermissionsApiDeleteTenantPermissionRequest`](../interfaces/PermissionsApiDeleteTenantPermissionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getPermissionById()

> **getPermissionById**(`requestParameters`, `options?`): `AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>

Retrieves a Permission by its ID.

#### Parameters

##### requestParameters

[`PermissionsApiGetPermissionByIdRequest`](../interfaces/PermissionsApiGetPermissionByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>

#### Throws

### permissions()

> **permissions**(`options?`): `AxiosPromise`\<[`Permissions200Response`](../loginradius-sdk/namespaces/Models/interfaces/Permissions200Response.md)\>

Retrieves a list of all Permissions.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Permissions200Response`](../loginradius-sdk/namespaces/Models/interfaces/Permissions200Response.md)\>

#### Throws

### updateTenantPermission()

> **updateTenantPermission**(`requestParameters`, `options?`): `AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>

Updates a specific Permission. Note: The Name field cannot be modified for non-B2B apps. If a different Name value is provided, the API will return an error.

#### Parameters

##### requestParameters

[`PermissionsApiUpdateTenantPermissionRequest`](../interfaces/PermissionsApiUpdateTenantPermissionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md)\>

#### Throws

## Export
