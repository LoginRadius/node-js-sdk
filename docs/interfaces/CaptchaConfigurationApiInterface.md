[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CaptchaConfigurationApiInterface

# Interface: CaptchaConfigurationApiInterface

CaptchaConfigurationApi - interface

## Export

CaptchaConfigurationApi

## Methods

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

#### Memberof

CaptchaConfigurationApiInterface

***

### updateCaptchaConfiguration()

> **updateCaptchaConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>

Updates the captcha configuration settings for a specific Tenant.

#### Parameters

##### requestParameters

[`CaptchaConfigurationApiUpdateCaptchaConfigurationRequest`](CaptchaConfigurationApiUpdateCaptchaConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)\>

#### Throws

#### Memberof

CaptchaConfigurationApiInterface
