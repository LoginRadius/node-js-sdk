[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CaptchaConfigurationApiAxiosParamCreator

# Function: CaptchaConfigurationApiAxiosParamCreator()

> **CaptchaConfigurationApiAxiosParamCreator**(`configuration?`): `object`

CaptchaConfigurationApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getCaptchaConfiguration

> **getCaptchaConfiguration**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the captcha configuration settings for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateCaptchaConfiguration

> **updateCaptchaConfiguration**: (`captchaConfig`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the captcha configuration settings for a specific Tenant.

#### Parameters

##### captchaConfig

[`CaptchaConfig`](../loginradius-sdk/namespaces/Models/interfaces/CaptchaConfig.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
