[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CaptchaConfigurationApiFactory

# Function: CaptchaConfigurationApiFactory()

> **CaptchaConfigurationApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

CaptchaConfigurationApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getCaptchaConfiguration()

> **getCaptchaConfiguration**(`options?`): `AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>

Retrieves the captcha configuration settings for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>

#### Throws

### updateCaptchaConfiguration()

> **updateCaptchaConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>

Updates the captcha configuration settings for a specific Tenant.

#### Parameters

##### requestParameters

[`CaptchaConfigurationApiUpdateCaptchaConfigurationRequest`](../interfaces/CaptchaConfigurationApiUpdateCaptchaConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>

#### Throws

## Export
