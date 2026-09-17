[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SOTTApiFp

# Function: SOTTApiFp()

> **SOTTApiFp**(`configuration?`): `object`

SOTTApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### addSott()

> **addSott**(`sottGenerateTechnology?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SottResponse`](../loginradius-sdk/namespaces/Models/interfaces/SottResponse.md)\>\>

Generates a new Secure One Time Token (SOTT) for the Tenant based on specified technology and parameters.

#### Parameters

##### sottGenerateTechnology?

[`SottGenerateTechnology`](../loginradius-sdk/namespaces/Models/type-aliases/SottGenerateTechnology.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SottResponse`](../loginradius-sdk/namespaces/Models/interfaces/SottResponse.md)\>\>

#### Throws

### getAllSOTT()

> **getAllSOTT**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllSOTT200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSOTT200Response.md)\>\>

Retrieves a list of all Secure One Time Token (SOTT) entries associated with the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllSOTT200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSOTT200Response.md)\>\>

#### Throws

## Export
