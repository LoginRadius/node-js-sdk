[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SOTTApiInterface

# Interface: SOTTApiInterface

SOTTApi - interface

## Export

SOTTApi

## Methods

### addSott()

> **addSott**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SottResponse`](../loginradius-sdk/namespaces/Models/interfaces/SottResponse.md)\>

Generates a new Secure One Time Token (SOTT) for the Tenant based on specified technology and parameters.

#### Parameters

##### requestParameters?

[`SOTTApiAddSottRequest`](SOTTApiAddSottRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SottResponse`](../loginradius-sdk/namespaces/Models/interfaces/SottResponse.md)\>

#### Throws

#### Memberof

SOTTApiInterface

***

### getAllSOTT()

> **getAllSOTT**(`options?`): `AxiosPromise`\<[`GetAllSOTT200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSOTT200Response.md)\>

Retrieves a list of all Secure One Time Token (SOTT) entries associated with the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllSOTT200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSOTT200Response.md)\>

#### Throws

#### Memberof

SOTTApiInterface
