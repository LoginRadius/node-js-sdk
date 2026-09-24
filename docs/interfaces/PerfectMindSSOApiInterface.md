[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PerfectMindSSOApiInterface

# Interface: PerfectMindSSOApiInterface

PerfectMindSSOApi - interface

## Export

PerfectMindSSOApi

## Methods

### getPerfectMindContact()

> **getPerfectMindContact**(`requestParameters`, `options?`): `AxiosPromise`\<[`PerfectMindContactResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindContactResponse.md)\>

Retrieves PerfectMind contact IDs associated with the user\'s email address. Uses the LoginRadius access token to look up the user and match them against PerfectMind contacts using email and birth date.

#### Parameters

##### requestParameters

[`PerfectMindSSOApiGetPerfectMindContactRequest`](PerfectMindSSOApiGetPerfectMindContactRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PerfectMindContactResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindContactResponse.md)\>

#### Throws

#### Memberof

PerfectMindSSOApiInterface

***

### getPerfectMindSession()

> **getPerfectMindSession**(`requestParameters`, `options?`): `AxiosPromise`\<[`PerfectMindSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindSessionResponse.md)\>

Generates a PerfectMind login session using the provided LoginRadius access token. Returns a session ID and URL that can be used to authenticate the user into the PerfectMind platform.

#### Parameters

##### requestParameters

[`PerfectMindSSOApiGetPerfectMindSessionRequest`](PerfectMindSSOApiGetPerfectMindSessionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PerfectMindSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/PerfectMindSessionResponse.md)\>

#### Throws

#### Memberof

PerfectMindSSOApiInterface
