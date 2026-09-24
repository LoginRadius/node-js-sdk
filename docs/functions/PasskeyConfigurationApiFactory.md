[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasskeyConfigurationApiFactory

# Function: PasskeyConfigurationApiFactory()

> **PasskeyConfigurationApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

PasskeyConfigurationApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getPassKeyConfig()

> **getPassKeyConfig**(`options?`): `AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>

Retrieves the current Passkey configuration settings for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>

#### Throws

### upsertPassKeyConfig()

> **upsertPassKeyConfig**(`requestParameters`, `options?`): `AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>

Creates or updates the Passkey configuration settings for the Tenant.

#### Parameters

##### requestParameters

[`PasskeyConfigurationApiUpsertPassKeyConfigRequest`](../interfaces/PasskeyConfigurationApiUpsertPassKeyConfigRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>

#### Throws

## Export
