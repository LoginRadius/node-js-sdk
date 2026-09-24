[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthCustomProvidersApiFactory

# Function: OAuthCustomProvidersApiFactory()

> **OAuthCustomProvidersApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

OAuthCustomProvidersApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createCustomProvider()

> **createCustomProvider**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md)\>

Creates a new Custom OAuth provider for the Tenant.

#### Parameters

##### requestParameters

[`OAuthCustomProvidersApiCreateCustomProviderRequest`](../interfaces/OAuthCustomProvidersApiCreateCustomProviderRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md)\>

#### Throws

### deleteCustomProvider()

> **deleteCustomProvider**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes an existing Custom OAuth provider for the Tenant using the provider name specified in the request body.

#### Parameters

##### requestParameters

[`OAuthCustomProvidersApiDeleteCustomProviderRequest`](../interfaces/OAuthCustomProvidersApiDeleteCustomProviderRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getAllCustomOAuthProviders()

> **getAllCustomOAuthProviders**(`options?`): `AxiosPromise`\<[`GetAllCustomOAuthProviders200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomOAuthProviders200Response.md)\>

Retrieves all custom OAuth providers configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllCustomOAuthProviders200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomOAuthProviders200Response.md)\>

#### Throws

### getCustomProviderKeys()

> **getCustomProviderKeys**(`options?`): `AxiosPromise`\<[`GetCustomProviderKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetCustomProviderKeys200Response.md)\>

Retrieves all custom OAuth provider keys for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetCustomProviderKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetCustomProviderKeys200Response.md)\>

#### Throws

### updateCustomProvider()

> **updateCustomProvider**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md)\>

Updates an existing Custom OAuth provider for the Tenant using the provider name specified in the request body.

#### Parameters

##### requestParameters

[`OAuthCustomProvidersApiUpdateCustomProviderRequest`](../interfaces/OAuthCustomProvidersApiUpdateCustomProviderRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md)\>

#### Throws

## Export
