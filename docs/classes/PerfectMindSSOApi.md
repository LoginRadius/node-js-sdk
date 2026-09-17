[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PerfectMindSSOApi

# Class: PerfectMindSSOApi

PerfectMindSSOApi - object-oriented interface

## Export

PerfectMindSSOApi

## Extends

- `BaseAPI`

## Implements

- [`PerfectMindSSOApiInterface`](../interfaces/PerfectMindSSOApiInterface.md)

## Constructors

### Constructor

> **new PerfectMindSSOApi**(`configuration?`, `basePath?`, `axios?`): `PerfectMindSSOApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`PerfectMindSSOApi`

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

### getPerfectMindContact()

> **getPerfectMindContact**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PerfectMindContactResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindContactResponse.md), `any`, \{ \}, `any`\>\>

Retrieves PerfectMind contact IDs associated with the user\'s email address. Uses the LoginRadius access token to look up the user and match them against PerfectMind contacts using email and birth date.

#### Parameters

##### requestParameters

[`PerfectMindSSOApiGetPerfectMindContactRequest`](../interfaces/PerfectMindSSOApiGetPerfectMindContactRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PerfectMindContactResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindContactResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PerfectMindSSOApi

#### Implementation of

[`PerfectMindSSOApiInterface`](../interfaces/PerfectMindSSOApiInterface.md).[`getPerfectMindContact`](../interfaces/PerfectMindSSOApiInterface.md#getperfectmindcontact)

***

### getPerfectMindSession()

> **getPerfectMindSession**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PerfectMindSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindSessionResponse.md), `any`, \{ \}, `any`\>\>

Generates a PerfectMind login session using the provided LoginRadius access token. Returns a session ID and URL that can be used to authenticate the user into the PerfectMind platform.

#### Parameters

##### requestParameters

[`PerfectMindSSOApiGetPerfectMindSessionRequest`](../interfaces/PerfectMindSSOApiGetPerfectMindSessionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PerfectMindSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindSessionResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PerfectMindSSOApi

#### Implementation of

[`PerfectMindSSOApiInterface`](../interfaces/PerfectMindSSOApiInterface.md).[`getPerfectMindSession`](../interfaces/PerfectMindSSOApiInterface.md#getperfectmindsession)
