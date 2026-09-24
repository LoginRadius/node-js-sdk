[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PerfectMindSSOApiFactory

# Function: PerfectMindSSOApiFactory()

> **PerfectMindSSOApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

PerfectMindSSOApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getPerfectMindContact()

> **getPerfectMindContact**(`requestParameters`, `options?`): `AxiosPromise`\<[`PerfectMindContactResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindContactResponse.md)\>

Retrieves PerfectMind contact IDs associated with the user\'s email address. Uses the LoginRadius access token to look up the user and match them against PerfectMind contacts using email and birth date.

#### Parameters

##### requestParameters

[`PerfectMindSSOApiGetPerfectMindContactRequest`](../interfaces/PerfectMindSSOApiGetPerfectMindContactRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PerfectMindContactResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindContactResponse.md)\>

#### Throws

### getPerfectMindSession()

> **getPerfectMindSession**(`requestParameters`, `options?`): `AxiosPromise`\<[`PerfectMindSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindSessionResponse.md)\>

Generates a PerfectMind login session using the provided LoginRadius access token. Returns a session ID and URL that can be used to authenticate the user into the PerfectMind platform.

#### Parameters

##### requestParameters

[`PerfectMindSSOApiGetPerfectMindSessionRequest`](../interfaces/PerfectMindSSOApiGetPerfectMindSessionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PerfectMindSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindSessionResponse.md)\>

#### Throws

## Export
