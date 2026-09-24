[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasskeyConfigurationApi

# Class: PasskeyConfigurationApi

PasskeyConfigurationApi - object-oriented interface

## Export

PasskeyConfigurationApi

## Extends

- `BaseAPI`

## Implements

- [`PasskeyConfigurationApiInterface`](../interfaces/PasskeyConfigurationApiInterface.md)

## Constructors

### Constructor

> **new PasskeyConfigurationApi**(`configuration?`, `basePath?`, `axios?`): `PasskeyConfigurationApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`PasskeyConfigurationApi`

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

### getPassKeyConfig()

> **getPassKeyConfig**(`options?`): `Promise`\<`AxiosResponse`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md), `any`, \{ \}, `any`\>\>

Retrieves the current Passkey configuration settings for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasskeyConfigurationApi

#### Implementation of

[`PasskeyConfigurationApiInterface`](../interfaces/PasskeyConfigurationApiInterface.md).[`getPassKeyConfig`](../interfaces/PasskeyConfigurationApiInterface.md#getpasskeyconfig)

***

### upsertPassKeyConfig()

> **upsertPassKeyConfig**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md), `any`, \{ \}, `any`\>\>

Creates or updates the Passkey configuration settings for the Tenant.

#### Parameters

##### requestParameters

[`PasskeyConfigurationApiUpsertPassKeyConfigRequest`](../interfaces/PasskeyConfigurationApiUpsertPassKeyConfigRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PassKeyConfig`](../loginradius-sdk/namespaces/Models/interfaces/PassKeyConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasskeyConfigurationApi

#### Implementation of

[`PasskeyConfigurationApiInterface`](../interfaces/PasskeyConfigurationApiInterface.md).[`upsertPassKeyConfig`](../interfaces/PasskeyConfigurationApiInterface.md#upsertpasskeyconfig)
