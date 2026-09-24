[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionsApi

# Class: OrganizationConnectionsApi

OrganizationConnectionsApi - object-oriented interface

## Export

OrganizationConnectionsApi

## Extends

- `BaseAPI`

## Implements

- [`OrganizationConnectionsApiInterface`](../interfaces/OrganizationConnectionsApiInterface.md)

## Constructors

### Constructor

> **new OrganizationConnectionsApi**(`configuration?`, `basePath?`, `axios?`): `OrganizationConnectionsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OrganizationConnectionsApi`

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

### createOrganizationConnection()

> **createOrganizationConnection**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md), `any`, \{ \}, `any`\>\>

Creates a new Identity Provider connection for an Organization.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiCreateOrganizationConnectionRequest`](../interfaces/OrganizationConnectionsApiCreateOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionsApi

#### Implementation of

[`OrganizationConnectionsApiInterface`](../interfaces/OrganizationConnectionsApiInterface.md).[`createOrganizationConnection`](../interfaces/OrganizationConnectionsApiInterface.md#createorganizationconnection)

***

### deleteOrganizationConnection()

> **deleteOrganizationConnection**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes an Identity Provider connection from an Organization.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiDeleteOrganizationConnectionRequest`](../interfaces/OrganizationConnectionsApiDeleteOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionsApi

#### Implementation of

[`OrganizationConnectionsApiInterface`](../interfaces/OrganizationConnectionsApiInterface.md).[`deleteOrganizationConnection`](../interfaces/OrganizationConnectionsApiInterface.md#deleteorganizationconnection)

***

### getAllOrganizationConnections()

> **getAllOrganizationConnections**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetAllOrganizationConnections200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationConnections200Response.md), `any`, \{ \}, `any`\>\>

Lists all Identity Provider connections for an Organization.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiGetAllOrganizationConnectionsRequest`](../interfaces/OrganizationConnectionsApiGetAllOrganizationConnectionsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllOrganizationConnections200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationConnections200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionsApi

#### Implementation of

[`OrganizationConnectionsApiInterface`](../interfaces/OrganizationConnectionsApiInterface.md).[`getAllOrganizationConnections`](../interfaces/OrganizationConnectionsApiInterface.md#getallorganizationconnections)

***

### getOrganizationConnection()

> **getOrganizationConnection**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md), `any`, \{ \}, `any`\>\>

Retrieves details of a specific Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiGetOrganizationConnectionRequest`](../interfaces/OrganizationConnectionsApiGetOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionsApi

#### Implementation of

[`OrganizationConnectionsApiInterface`](../interfaces/OrganizationConnectionsApiInterface.md).[`getOrganizationConnection`](../interfaces/OrganizationConnectionsApiInterface.md#getorganizationconnection)

***

### updateConnectionStatus()

> **updateConnectionStatus**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConnectionStatusResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionStatusResponse.md), `any`, \{ \}, `any`\>\>

Updates the active status of an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiUpdateConnectionStatusRequest`](../interfaces/OrganizationConnectionsApiUpdateConnectionStatusRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConnectionStatusResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionStatusResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionsApi

#### Implementation of

[`OrganizationConnectionsApiInterface`](../interfaces/OrganizationConnectionsApiInterface.md).[`updateConnectionStatus`](../interfaces/OrganizationConnectionsApiInterface.md#updateconnectionstatus)

***

### updateOrganizationConnection()

> **updateOrganizationConnection**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md), `any`, \{ \}, `any`\>\>

Updates the configuration of an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionsApiUpdateOrganizationConnectionRequest`](../interfaces/OrganizationConnectionsApiUpdateOrganizationConnectionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConnectionResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionsApi

#### Implementation of

[`OrganizationConnectionsApiInterface`](../interfaces/OrganizationConnectionsApiInterface.md).[`updateOrganizationConnection`](../interfaces/OrganizationConnectionsApiInterface.md#updateorganizationconnection)
