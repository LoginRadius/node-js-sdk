[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthCustomProvidersApiAxiosParamCreator

# Function: OAuthCustomProvidersApiAxiosParamCreator()

> **OAuthCustomProvidersApiAxiosParamCreator**(`configuration?`): `object`

OAuthCustomProvidersApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createCustomProvider

> **createCustomProvider**: (`customOAuth2Model`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new Custom OAuth provider for the Tenant.

#### Parameters

##### customOAuth2Model

[`CustomOAuth2Model`](../loginradius-sdk/namespaces/Models/interfaces/CustomOAuth2Model.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteCustomProvider

> **deleteCustomProvider**: (`customOAuth2DeleteModel`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes an existing Custom OAuth provider for the Tenant using the provider name specified in the request body.

#### Parameters

##### customOAuth2DeleteModel

[`CustomOAuth2DeleteModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomOAuth2DeleteModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllCustomOAuthProviders

> **getAllCustomOAuthProviders**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves all custom OAuth providers configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getCustomProviderKeys

> **getCustomProviderKeys**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves all custom OAuth provider keys for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateCustomProvider

> **updateCustomProvider**: (`customOAuth2UpdateModel`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an existing Custom OAuth provider for the Tenant using the provider name specified in the request body.

#### Parameters

##### customOAuth2UpdateModel

[`CustomOAuth2UpdateModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomOAuth2UpdateModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
