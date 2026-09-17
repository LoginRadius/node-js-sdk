[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CaptchaConfigurationApi

# Class: CaptchaConfigurationApi

CaptchaConfigurationApi - object-oriented interface

## Export

CaptchaConfigurationApi

## Extends

- `BaseAPI`

## Implements

- [`CaptchaConfigurationApiInterface`](../interfaces/CaptchaConfigurationApiInterface.md)

## Constructors

### Constructor

> **new CaptchaConfigurationApi**(`configuration?`, `basePath?`, `axios?`): `CaptchaConfigurationApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`CaptchaConfigurationApi`

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

### getCaptchaConfiguration()

> **getCaptchaConfiguration**(`options?`): `Promise`\<`AxiosResponse`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md), `any`, \{ \}, `any`\>\>

Retrieves the captcha configuration settings for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CaptchaConfigurationApi

#### Implementation of

[`CaptchaConfigurationApiInterface`](../interfaces/CaptchaConfigurationApiInterface.md).[`getCaptchaConfiguration`](../interfaces/CaptchaConfigurationApiInterface.md#getcaptchaconfiguration)

***

### updateCaptchaConfiguration()

> **updateCaptchaConfiguration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md), `any`, \{ \}, `any`\>\>

Updates the captcha configuration settings for a specific Tenant.

#### Parameters

##### requestParameters

[`CaptchaConfigurationApiUpdateCaptchaConfigurationRequest`](../interfaces/CaptchaConfigurationApiUpdateCaptchaConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CaptchaConfigurationApi

#### Implementation of

[`CaptchaConfigurationApiInterface`](../interfaces/CaptchaConfigurationApiInterface.md).[`updateCaptchaConfiguration`](../interfaces/CaptchaConfigurationApiInterface.md#updatecaptchaconfiguration)
