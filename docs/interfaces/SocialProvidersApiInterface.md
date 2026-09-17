[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SocialProvidersApiInterface

# Interface: SocialProvidersApiInterface

SocialProvidersApi - interface

## Export

SocialProvidersApi

## Methods

### deleteSocialProviderByName()

> **deleteSocialProviderByName**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### requestParameters

[`SocialProvidersApiDeleteSocialProviderByNameRequest`](SocialProvidersApiDeleteSocialProviderByNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

SocialProvidersApiInterface

***

### getAllProviderConfigurations()

> **getAllProviderConfigurations**(`options?`): `AxiosPromise`\<[`GetAllProviderConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllProviderConfigurations200Response.md)\>

Retrieves all social provider configurations available for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllProviderConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllProviderConfigurations200Response.md)\>

#### Throws

#### Memberof

SocialProvidersApiInterface

***

### getEnabledProviders()

> **getEnabledProviders**(`options?`): `AxiosPromise`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md)\>

Retrieves a list of all enabled social providers for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md)\>

#### Throws

#### Memberof

SocialProvidersApiInterface

***

### getSocialProviderByName()

> **getSocialProviderByName**(`requestParameters`, `options?`): `AxiosPromise`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)\>

Retrieves the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### requestParameters

[`SocialProvidersApiGetSocialProviderByNameRequest`](SocialProvidersApiGetSocialProviderByNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)\>

#### Throws

#### Memberof

SocialProvidersApiInterface

***

### setProvidersOrder()

> **setProvidersOrder**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)\>

Sets the order of social providers for the Tenant to be listed in the UI.

#### Parameters

##### requestParameters?

[`SocialProvidersApiSetProvidersOrderRequest`](SocialProvidersApiSetProvidersOrderRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)\>

#### Throws

#### Memberof

SocialProvidersApiInterface

***

### setProvidersStatus()

> **setProvidersStatus**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md)\>

Sets the status of social providers for the Tenant.

#### Parameters

##### requestParameters?

[`SocialProvidersApiSetProvidersStatusRequest`](SocialProvidersApiSetProvidersStatusRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md)\>

#### Throws

#### Memberof

SocialProvidersApiInterface

***

### updateSocialProviderByName()

> **updateSocialProviderByName**(`requestParameters`, `options?`): `AxiosPromise`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)\>

Updates the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### requestParameters

[`SocialProvidersApiUpdateSocialProviderByNameRequest`](SocialProvidersApiUpdateSocialProviderByNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)\>

#### Throws

#### Memberof

SocialProvidersApiInterface
