[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionGroupRolesApiFp

# Function: OrganizationConnectionGroupRolesApiFp()

> **OrganizationConnectionGroupRolesApiFp**(`configuration?`): `object`

OrganizationConnectionGroupRolesApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createConnectionGroupRole()

> **createConnectionGroupRole**(`connId`, `orgId`, `createConnectionGroupRoleRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>\>

Creates a new group-to-role mapping for an Identity Provider connection.

#### Parameters

##### connId

`string`

Organization Connection ID

##### orgId

`string`

Organization ID

##### createConnectionGroupRoleRequest

[`ConnectionGroupRoleRequest`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionGroupRoleRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>\>

#### Throws

### deleteConnectionGroupRole()

> **deleteConnectionGroupRole**(`orgId`, `connId`, `groupRoleId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes a specific group-to-role mapping.

#### Parameters

##### orgId

`string`

Organization ID

##### connId

`string`

Organization Connection ID

##### groupRoleId

`string`

Organization Connection Group Role ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllConnectionGroupRoles()

> **getAllConnectionGroupRoles**(`orgId`, `connId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllConnectionGroupRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllConnectionGroupRoles200Response.md)\>\>

Lists all group-to-role mappings for an Identity Provider connection.

#### Parameters

##### orgId

`string`

Organization ID

##### connId

`string`

Organization Connection ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllConnectionGroupRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllConnectionGroupRoles200Response.md)\>\>

#### Throws

### updateConnectionGroupRole()

> **updateConnectionGroupRole**(`connId`, `groupRoleId`, `orgId`, `connectionGroupRoleRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>\>

Updates a specific group-to-role mapping.

#### Parameters

##### connId

`string`

Organization Connection ID

##### groupRoleId

`string`

Organization Connection Group Role ID

##### orgId

`string`

Organization ID

##### connectionGroupRoleRequest

[`ConnectionGroupRoleRequest`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionGroupRoleRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>\>

#### Throws

## Export
