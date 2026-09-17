[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SOTTApi

# Class: SOTTApi

SOTTApi - object-oriented interface

## Export

SOTTApi

## Extends

- `BaseAPI`

## Implements

- [`SOTTApiInterface`](../interfaces/SOTTApiInterface.md)

## Constructors

### Constructor

> **new SOTTApi**(`configuration?`, `basePath?`, `axios?`): `SOTTApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SOTTApi`

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

### addSott()

> **addSott**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`SottResponse`](../loginradius-sdk/namespaces/Models/interfaces/SottResponse.md), `any`, \{ \}, `any`\>\>

Generates a new Secure One Time Token (SOTT) for the Tenant based on specified technology and parameters.

#### Parameters

##### requestParameters?

[`SOTTApiAddSottRequest`](../interfaces/SOTTApiAddSottRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SottResponse`](../loginradius-sdk/namespaces/Models/interfaces/SottResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SOTTApi

#### Implementation of

[`SOTTApiInterface`](../interfaces/SOTTApiInterface.md).[`addSott`](../interfaces/SOTTApiInterface.md#addsott)

***

### getAllSOTT()

> **getAllSOTT**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllSOTT200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSOTT200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all Secure One Time Token (SOTT) entries associated with the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllSOTT200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSOTT200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SOTTApi

#### Implementation of

[`SOTTApiInterface`](../interfaces/SOTTApiInterface.md).[`getAllSOTT`](../interfaces/SOTTApiInterface.md#getallsott)
