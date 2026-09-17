[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SOTTApiFactory

# Function: SOTTApiFactory()

> **SOTTApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

SOTTApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### addSott()

> **addSott**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SottResponse`](../loginradius-sdk/namespaces/Models/interfaces/SottResponse.md)\>

Generates a new Secure One Time Token (SOTT) for the Tenant based on specified technology and parameters.

#### Parameters

##### requestParameters?

[`SOTTApiAddSottRequest`](../interfaces/SOTTApiAddSottRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SottResponse`](../loginradius-sdk/namespaces/Models/interfaces/SottResponse.md)\>

#### Throws

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

## Export
