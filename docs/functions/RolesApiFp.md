[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RolesApiFp

# Function: RolesApiFp()

> **RolesApiFp**(`configuration?`): `object`

RolesApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createTenantRole()

> **createTenantRole**(`rolePostRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`TenantRole`](../loginradius-sdk/namespaces/Models/interfaces/TenantRole.md)\>\>

Creates a Role within the Tenant.

#### Parameters

##### rolePostRequest

[`RolePostRequest`](../loginradius-sdk/namespaces/Models/interfaces/RolePostRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`TenantRole`](../loginradius-sdk/namespaces/Models/interfaces/TenantRole.md)\>\>

#### Throws

### deleteTenantRole()

> **deleteTenantRole**(`id`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes a Role by its ID.

#### Parameters

##### id

`string`

Role ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllTenantRoles()

> **getAllTenantRoles**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllTenantRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllTenantRoles200Response.md)\>\>

Lists all Roles within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllTenantRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllTenantRoles200Response.md)\>\>

#### Throws

### getRoleById()

> **getRoleById**(`id`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>\>

Retrieves details of a Role by its ID.

#### Parameters

##### id

`string`

Role ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>\>

#### Throws

### roleByName()

> **roleByName**(`name`, `orgid?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>\>

Retrieves details of a Role by its name.

#### Parameters

##### name

`string`

Role Name

##### orgid?

`string`

Organization ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>\>

#### Throws

### setDefaultRole()

> **setDefaultRole**(`id`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DefaultResponse`](../loginradius-sdk/namespaces/Models/interfaces/DefaultResponse.md)\>\>

Sets a Role as the default for new Users. This API is supported only for B2B tenants.

#### Parameters

##### id

`string`

Role ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DefaultResponse`](../loginradius-sdk/namespaces/Models/interfaces/DefaultResponse.md)\>\>

#### Throws

### updateRole()

> **updateRole**(`id`, `rolesPutRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>\>

Updates a Role by its ID.

#### Parameters

##### id

`string`

Role ID

##### rolesPutRequest

[`RolesPutRequest`](../loginradius-sdk/namespaces/Models/interfaces/RolesPutRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>\>

#### Throws

## Export
