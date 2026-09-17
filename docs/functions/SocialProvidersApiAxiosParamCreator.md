[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SocialProvidersApiAxiosParamCreator

# Function: SocialProvidersApiAxiosParamCreator()

> **SocialProvidersApiAxiosParamCreator**(`configuration?`): `object`

SocialProvidersApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### deleteSocialProviderByName

> **deleteSocialProviderByName**: (`provider`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### provider

[`DeleteSocialProviderByNameProviderEnum`](../enumerations/DeleteSocialProviderByNameProviderEnum.md)

Provider Name

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllProviderConfigurations

> **getAllProviderConfigurations**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves all social provider configurations available for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getEnabledProviders

> **getEnabledProviders**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all enabled social providers for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getSocialProviderByName

> **getSocialProviderByName**: (`provider`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### provider

[`GetSocialProviderByNameProviderEnum`](../enumerations/GetSocialProviderByNameProviderEnum.md)

Provider Name

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### setProvidersOrder

> **setProvidersOrder**: (`setProvidersOrderRequest?`, `options?`) => `Promise`\<`RequestArgs`\>

Sets the order of social providers for the Tenant to be listed in the UI.

#### Parameters

##### setProvidersOrderRequest?

[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### setProvidersStatus

> **setProvidersStatus**: (`providerStatusList?`, `options?`) => `Promise`\<`RequestArgs`\>

Sets the status of social providers for the Tenant.

#### Parameters

##### providerStatusList?

[`ProviderStatusList`](../loginradius-sdk/namespaces/Models/interfaces/ProviderStatusList.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateSocialProviderByName

> **updateSocialProviderByName**: (`provider`, `appProvider?`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the social provider configuration for a specified provider name for the Tenant.

#### Parameters

##### provider

[`UpdateSocialProviderByNameProviderEnum`](../enumerations/UpdateSocialProviderByNameProviderEnum.md)

Provider Name

##### appProvider?

[`AppProvider`](../loginradius-sdk/namespaces/Models/interfaces/AppProvider.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
