[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionsApiFactory

# Function: OrganizationConnectionsApiFactory()

> **OrganizationConnectionsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

OrganizationConnectionsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createOrganizationConnection()

> **createOrganizationConnection**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

Creates a new Identity Provider connection for an Organization.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiCreateOrganizationConnectionRequest`](../interfaces/OrganizationConnectionsApiCreateOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

#### Throws

### deleteOrganizationConnection()

> **deleteOrganizationConnection**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes an Identity Provider connection from an Organization.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiDeleteOrganizationConnectionRequest`](../interfaces/OrganizationConnectionsApiDeleteOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getAllOrganizationConnections()

> **getAllOrganizationConnections**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetAllOrganizationConnections200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationConnections200Response.md)\>

Lists all Identity Provider connections for an Organization.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiGetAllOrganizationConnectionsRequest`](../interfaces/OrganizationConnectionsApiGetAllOrganizationConnectionsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllOrganizationConnections200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationConnections200Response.md)\>

#### Throws

### getOrganizationConnection()

> **getOrganizationConnection**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

Retrieves details of a specific Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiGetOrganizationConnectionRequest`](../interfaces/OrganizationConnectionsApiGetOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

#### Throws

### updateConnectionStatus()

> **updateConnectionStatus**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionStatusResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionStatusResponse.md)\>

Updates the active status of an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiUpdateConnectionStatusRequest`](../interfaces/OrganizationConnectionsApiUpdateConnectionStatusRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionStatusResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionStatusResponse.md)\>

#### Throws

### updateOrganizationConnection()

> **updateOrganizationConnection**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

Updates the configuration of an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiUpdateOrganizationConnectionRequest`](../interfaces/OrganizationConnectionsApiUpdateOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

#### Throws

## Export
