[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionsApiInterface

# Interface: OrganizationConnectionsApiInterface

OrganizationConnectionsApi - interface

## Export

OrganizationConnectionsApi

## Methods

### createOrganizationConnection()

> **createOrganizationConnection**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

Creates a new Identity Provider connection for an Organization.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiCreateOrganizationConnectionRequest`](OrganizationConnectionsApiCreateOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

#### Throws

#### Memberof

OrganizationConnectionsApiInterface

***

### deleteOrganizationConnection()

> **deleteOrganizationConnection**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes an Identity Provider connection from an Organization.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiDeleteOrganizationConnectionRequest`](OrganizationConnectionsApiDeleteOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

OrganizationConnectionsApiInterface

***

### getAllOrganizationConnections()

> **getAllOrganizationConnections**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetAllOrganizationConnections200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationConnections200Response.md)\>

Lists all Identity Provider connections for an Organization.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiGetAllOrganizationConnectionsRequest`](OrganizationConnectionsApiGetAllOrganizationConnectionsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllOrganizationConnections200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationConnections200Response.md)\>

#### Throws

#### Memberof

OrganizationConnectionsApiInterface

***

### getOrganizationConnection()

> **getOrganizationConnection**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

Retrieves details of a specific Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiGetOrganizationConnectionRequest`](OrganizationConnectionsApiGetOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

#### Throws

#### Memberof

OrganizationConnectionsApiInterface

***

### updateConnectionStatus()

> **updateConnectionStatus**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionStatusResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionStatusResponse.md)\>

Updates the active status of an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiUpdateConnectionStatusRequest`](OrganizationConnectionsApiUpdateConnectionStatusRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionStatusResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionStatusResponse.md)\>

#### Throws

#### Memberof

OrganizationConnectionsApiInterface

***

### updateOrganizationConnection()

> **updateOrganizationConnection**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

Updates the configuration of an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiUpdateOrganizationConnectionRequest`](OrganizationConnectionsApiUpdateOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md)\>

#### Throws

#### Memberof

OrganizationConnectionsApiInterface
