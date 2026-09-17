[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PermissionsApi

# Class: PermissionsApi

PermissionsApi - object-oriented interface

## Export

PermissionsApi

## Extends

- `BaseAPI`

## Implements

- [`PermissionsApiInterface`](../interfaces/PermissionsApiInterface.md)

## Constructors

### Constructor

> **new PermissionsApi**(`configuration?`, `basePath?`, `axios?`): `PermissionsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`PermissionsApi`

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

### addPermission()

> **addPermission**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md), `any`, \{ \}, `any`\>\>

Adds a new Permission.

#### Parameters

##### requestParameters?

[`PermissionsApiAddPermissionRequest`](../interfaces/PermissionsApiAddPermissionRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PermissionsApi

#### Implementation of

[`PermissionsApiInterface`](../interfaces/PermissionsApiInterface.md).[`addPermission`](../interfaces/PermissionsApiInterface.md#addpermission)

***

### deleteTenantPermission()

> **deleteTenantPermission**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes a specific Permission.

#### Parameters

##### requestParameters

[`PermissionsApiDeleteTenantPermissionRequest`](../interfaces/PermissionsApiDeleteTenantPermissionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PermissionsApi

#### Implementation of

[`PermissionsApiInterface`](../interfaces/PermissionsApiInterface.md).[`deleteTenantPermission`](../interfaces/PermissionsApiInterface.md#deletetenantpermission)

***

### getPermissionById()

> **getPermissionById**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md), `any`, \{ \}, `any`\>\>

Retrieves a Permission by its ID.

#### Parameters

##### requestParameters

[`PermissionsApiGetPermissionByIdRequest`](../interfaces/PermissionsApiGetPermissionByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PermissionsApi

#### Implementation of

[`PermissionsApiInterface`](../interfaces/PermissionsApiInterface.md).[`getPermissionById`](../interfaces/PermissionsApiInterface.md#getpermissionbyid)

***

### permissions()

> **permissions**(`options?`): `Promise`\<`AxiosResponse`\<[`Permissions200Response`](../loginradius-sdk/namespaces/Models/interfaces/Permissions200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all Permissions.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Permissions200Response`](../loginradius-sdk/namespaces/Models/interfaces/Permissions200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PermissionsApi

#### Implementation of

[`PermissionsApiInterface`](../interfaces/PermissionsApiInterface.md).[`permissions`](../interfaces/PermissionsApiInterface.md#permissions)

***

### updateTenantPermission()

> **updateTenantPermission**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md), `any`, \{ \}, `any`\>\>

Updates a specific Permission. Note: The Name field cannot be modified for non-B2B apps. If a different Name value is provided, the API will return an error.

#### Parameters

##### requestParameters

[`PermissionsApiUpdateTenantPermissionRequest`](../interfaces/PermissionsApiUpdateTenantPermissionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Permissions`](../loginradius-sdk/namespaces/Models/interfaces/Permissions.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PermissionsApi

#### Implementation of

[`PermissionsApiInterface`](../interfaces/PermissionsApiInterface.md).[`updateTenantPermission`](../interfaces/PermissionsApiInterface.md#updatetenantpermission)
