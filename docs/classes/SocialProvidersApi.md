[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SocialProvidersApi

# Class: SocialProvidersApi

SocialProvidersApi - object-oriented interface

## Export

SocialProvidersApi

## Extends

- `BaseAPI`

## Implements

- [`SocialProvidersApiInterface`](../interfaces/SocialProvidersApiInterface.md)

## Constructors

### Constructor

> **new SocialProvidersApi**(`configuration?`, `basePath?`, `axios?`): `SocialProvidersApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SocialProvidersApi`

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

### deleteSocialProviderByName()

> **deleteSocialProviderByName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### requestParameters

[`SocialProvidersApiDeleteSocialProviderByNameRequest`](../interfaces/SocialProvidersApiDeleteSocialProviderByNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SocialProvidersApi

#### Implementation of

[`SocialProvidersApiInterface`](../interfaces/SocialProvidersApiInterface.md).[`deleteSocialProviderByName`](../interfaces/SocialProvidersApiInterface.md#deletesocialproviderbyname)

***

### getAllProviderConfigurations()

> **getAllProviderConfigurations**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllProviderConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllProviderConfigurations200Response.md), `any`, \{ \}, `any`\>\>

Retrieves all social provider configurations available for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllProviderConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllProviderConfigurations200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SocialProvidersApi

#### Implementation of

[`SocialProvidersApiInterface`](../interfaces/SocialProvidersApiInterface.md).[`getAllProviderConfigurations`](../interfaces/SocialProvidersApiInterface.md#getallproviderconfigurations)

***

### getEnabledProviders()

> **getEnabledProviders**(`options?`): `Promise`\<`AxiosResponse`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all enabled social providers for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SocialProvidersApi

#### Implementation of

[`SocialProvidersApiInterface`](../interfaces/SocialProvidersApiInterface.md).[`getEnabledProviders`](../interfaces/SocialProvidersApiInterface.md#getenabledproviders)

***

### getSocialProviderByName()

> **getSocialProviderByName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md), `any`, \{ \}, `any`\>\>

Retrieves the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### requestParameters

[`SocialProvidersApiGetSocialProviderByNameRequest`](../interfaces/SocialProvidersApiGetSocialProviderByNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SocialProvidersApi

#### Implementation of

[`SocialProvidersApiInterface`](../interfaces/SocialProvidersApiInterface.md).[`getSocialProviderByName`](../interfaces/SocialProvidersApiInterface.md#getsocialproviderbyname)

***

### setProvidersOrder()

> **setProvidersOrder**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md), `any`, \{ \}, `any`\>\>

Sets the order of social providers for the Tenant to be listed in the UI.

#### Parameters

##### requestParameters?

[`SocialProvidersApiSetProvidersOrderRequest`](../interfaces/SocialProvidersApiSetProvidersOrderRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SocialProvidersApi

#### Implementation of

[`SocialProvidersApiInterface`](../interfaces/SocialProvidersApiInterface.md).[`setProvidersOrder`](../interfaces/SocialProvidersApiInterface.md#setprovidersorder)

***

### setProvidersStatus()

> **setProvidersStatus**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md), `any`, \{ \}, `any`\>\>

Sets the status of social providers for the Tenant.

#### Parameters

##### requestParameters?

[`SocialProvidersApiSetProvidersStatusRequest`](../interfaces/SocialProvidersApiSetProvidersStatusRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SetProvidersStatus200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersStatus200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SocialProvidersApi

#### Implementation of

[`SocialProvidersApiInterface`](../interfaces/SocialProvidersApiInterface.md).[`setProvidersStatus`](../interfaces/SocialProvidersApiInterface.md#setprovidersstatus)

***

### updateSocialProviderByName()

> **updateSocialProviderByName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md), `any`, \{ \}, `any`\>\>

Updates the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### requestParameters

[`SocialProvidersApiUpdateSocialProviderByNameRequest`](../interfaces/SocialProvidersApiUpdateSocialProviderByNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SocialProvidersApi

#### Implementation of

[`SocialProvidersApiInterface`](../interfaces/SocialProvidersApiInterface.md).[`updateSocialProviderByName`](../interfaces/SocialProvidersApiInterface.md#updatesocialproviderbyname)
