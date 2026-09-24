[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasskeyConfigurationApiFp

# Function: PasskeyConfigurationApiFp()

> **PasskeyConfigurationApiFp**(`configuration?`): `object`

PasskeyConfigurationApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getPassKeyConfig()

> **getPassKeyConfig**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>\>

Retrieves the current Passkey configuration settings for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>\>

#### Throws

### upsertPassKeyConfig()

> **upsertPassKeyConfig**(`passKeyConfig`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>\>

Creates or updates the Passkey configuration settings for the Tenant.

#### Parameters

##### passKeyConfig

[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>\>

#### Throws

## Export
