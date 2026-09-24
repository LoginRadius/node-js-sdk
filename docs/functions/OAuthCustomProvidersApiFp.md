[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthCustomProvidersApiFp

# Function: OAuthCustomProvidersApiFp()

> **OAuthCustomProvidersApiFp**(`configuration?`): `object`

OAuthCustomProvidersApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createCustomProvider()

> **createCustomProvider**(`customOAuth2Model`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md)\>\>

Creates a new Custom OAuth provider for the Tenant.

#### Parameters

##### customOAuth2Model

[`CustomOAuth2Model`](../loginradius-sdk/namespaces/Models/interfaces/CustomOAuth2Model.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md)\>\>

#### Throws

### deleteCustomProvider()

> **deleteCustomProvider**(`customOAuth2DeleteModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes an existing Custom OAuth provider for the Tenant using the provider name specified in the request body.

#### Parameters

##### customOAuth2DeleteModel

[`CustomOAuth2DeleteModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomOAuth2DeleteModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllCustomOAuthProviders()

> **getAllCustomOAuthProviders**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllCustomOAuthProviders200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomOAuthProviders200Response.md)\>\>

Retrieves all custom OAuth providers configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllCustomOAuthProviders200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomOAuthProviders200Response.md)\>\>

#### Throws

### getCustomProviderKeys()

> **getCustomProviderKeys**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetCustomProviderKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetCustomProviderKeys200Response.md)\>\>

Retrieves all custom OAuth provider keys for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetCustomProviderKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetCustomProviderKeys200Response.md)\>\>

#### Throws

### updateCustomProvider()

> **updateCustomProvider**(`customOAuth2UpdateModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md)\>\>

Updates an existing Custom OAuth provider for the Tenant using the provider name specified in the request body.

#### Parameters

##### customOAuth2UpdateModel

[`CustomOAuth2UpdateModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomOAuth2UpdateModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md)\>\>

#### Throws

## Export
