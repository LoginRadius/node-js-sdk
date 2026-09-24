[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CaptchaConfigurationApiFp

# Function: CaptchaConfigurationApiFp()

> **CaptchaConfigurationApiFp**(`configuration?`): `object`

CaptchaConfigurationApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getCaptchaConfiguration()

> **getCaptchaConfiguration**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>\>

Retrieves the captcha configuration settings for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>\>

#### Throws

### updateCaptchaConfiguration()

> **updateCaptchaConfiguration**(`captchaConfig`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>\>

Updates the captcha configuration settings for a specific Tenant.

#### Parameters

##### captchaConfig

[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>\>

#### Throws

## Export
