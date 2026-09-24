[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SocialProvidersApiFp

# Function: SocialProvidersApiFp()

> **SocialProvidersApiFp**(`configuration?`): `object`

SocialProvidersApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### deleteSocialProviderByName()

> **deleteSocialProviderByName**(`provider`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### provider

[`DeleteSocialProviderByNameProviderEnum`](../enumerations/DeleteSocialProviderByNameProviderEnum.md)

Provider Name

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllProviderConfigurations()

> **getAllProviderConfigurations**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllProviderConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllProviderConfigurations200Response.md)\>\>

Retrieves all social provider configurations available for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllProviderConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllProviderConfigurations200Response.md)\>\>

#### Throws

### getEnabledProviders()

> **getEnabledProviders**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md)\>\>

Retrieves a list of all enabled social providers for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md)\>\>

#### Throws

### getSocialProviderByName()

> **getSocialProviderByName**(`provider`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)\>\>

Retrieves the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### provider

[`GetSocialProviderByNameProviderEnum`](../enumerations/GetSocialProviderByNameProviderEnum.md)

Provider Name

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)\>\>

#### Throws

### setProvidersOrder()

> **setProvidersOrder**(`setProvidersOrderRequest?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)\>\>

Sets the order of social providers for the Tenant to be listed in the UI.

#### Parameters

##### setProvidersOrderRequest?

[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)\>\>

#### Throws

### setProvidersStatus()

> **setProvidersStatus**(`providerStatusList?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md)\>\>

Sets the status of social providers for the Tenant.

#### Parameters

##### providerStatusList?

[`ProviderStatusList`](../loginradius-sdk/namespaces/Models/interfaces/ProviderStatusList.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md)\>\>

#### Throws

### updateSocialProviderByName()

> **updateSocialProviderByName**(`provider`, `appProvider?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)\>\>

Updates the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### provider

[`UpdateSocialProviderByNameProviderEnum`](../enumerations/UpdateSocialProviderByNameProviderEnum.md)

Provider Name

##### appProvider?

[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)\>\>

#### Throws

## Export
