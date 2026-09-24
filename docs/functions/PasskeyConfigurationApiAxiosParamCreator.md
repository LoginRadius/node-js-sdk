[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasskeyConfigurationApiAxiosParamCreator

# Function: PasskeyConfigurationApiAxiosParamCreator()

> **PasskeyConfigurationApiAxiosParamCreator**(`configuration?`): `object`

PasskeyConfigurationApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getPassKeyConfig

> **getPassKeyConfig**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the current Passkey configuration settings for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### upsertPassKeyConfig

> **upsertPassKeyConfig**: (`passKeyConfig`, `options?`) => `Promise`\<`RequestArgs`\>

Creates or updates the Passkey configuration settings for the Tenant.

#### Parameters

##### passKeyConfig

[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
