[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionsApiFp

# Function: OrganizationConnectionsApiFp()

> **OrganizationConnectionsApiFp**(`configuration?`): `object`

OrganizationConnectionsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createOrganizationConnection()

> **createOrganizationConnection**(`orgId`, `organizationConnectionCreateRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>\>

Creates a new Identity Provider connection for an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### organizationConnectionCreateRequest

[`OrganizationConnectionCreateRequest`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationConnectionCreateRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>\>

#### Throws

### deleteOrganizationConnection()

> **deleteOrganizationConnection**(`orgId`, `connId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes an Identity Provider connection from an Organization.

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllOrganizationConnections()

> **getAllOrganizationConnections**(`orgId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOrganizationConnections200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationConnections200Response.md)\>\>

Lists all Identity Provider connections for an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOrganizationConnections200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationConnections200Response.md)\>\>

#### Throws

### getOrganizationConnection()

> **getOrganizationConnection**(`orgId`, `connId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>\>

Retrieves details of a specific Identity Provider connection.

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>\>

#### Throws

### updateConnectionStatus()

> **updateConnectionStatus**(`orgId`, `connId`, `connectionStatusRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionStatusResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionStatusResponse.md)\>\>

Updates the active status of an Identity Provider connection.

#### Parameters

##### orgId

`string`

Organization ID

##### connId

`string`

Organization Connection ID

##### connectionStatusRequest

[`ConnectionStatusRequest`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionStatusRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionStatusResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionStatusResponse.md)\>\>

#### Throws

### updateOrganizationConnection()

> **updateOrganizationConnection**(`orgId`, `connId`, `organizationConnectionRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>\>

Updates the configuration of an Identity Provider connection.

#### Parameters

##### orgId

`string`

Organization ID

##### connId

`string`

Organization Connection ID

##### organizationConnectionRequest

[`OrganizationConnectionRequest`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationConnectionRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>\>

#### Throws

## Export
