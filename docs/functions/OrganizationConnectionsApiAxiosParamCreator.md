[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionsApiAxiosParamCreator

# Function: OrganizationConnectionsApiAxiosParamCreator()

> **OrganizationConnectionsApiAxiosParamCreator**(`configuration?`): `object`

OrganizationConnectionsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createOrganizationConnection

> **createOrganizationConnection**: (`orgId`, `organizationConnectionCreateRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new Identity Provider connection for an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### organizationConnectionCreateRequest

[`OrganizationConnectionCreateRequest`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationConnectionCreateRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteOrganizationConnection

> **deleteOrganizationConnection**: (`orgId`, `connId`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes an Identity Provider connection from an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### connId

`string`

Organization Connection ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllOrganizationConnections

> **getAllOrganizationConnections**: (`orgId`, `options?`) => `Promise`\<`RequestArgs`\>

Lists all Identity Provider connections for an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOrganizationConnection

> **getOrganizationConnection**: (`orgId`, `connId`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves details of a specific Identity Provider connection.

#### Parameters

##### orgId

`string`

Organization ID

##### connId

`string`

Organization Connection ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateConnectionStatus

> **updateConnectionStatus**: (`orgId`, `connId`, `connectionStatusRequest`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateOrganizationConnection

> **updateOrganizationConnection**: (`orgId`, `connId`, `organizationConnectionRequest`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
