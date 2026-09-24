[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasskeyConfigurationApiInterface

# Interface: PasskeyConfigurationApiInterface

PasskeyConfigurationApi - interface

## Export

PasskeyConfigurationApi

## Methods

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

#### Memberof

PasskeyConfigurationApiInterface

***

### upsertPassKeyConfig()

> **upsertPassKeyConfig**(`requestParameters`, `options?`): `AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>

Creates or updates the Passkey configuration settings for the Tenant.

#### Parameters

##### requestParameters

[`PasskeyConfigurationApiUpsertPassKeyConfigRequest`](PasskeyConfigurationApiUpsertPassKeyConfigRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md)\>

#### Throws

#### Memberof

PasskeyConfigurationApiInterface
