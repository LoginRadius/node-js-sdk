[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / IPAccessRestrictionsApiFp

# Function: IPAccessRestrictionsApiFp()

> **IPAccessRestrictionsApiFp**(`configuration?`): `object`

IPAccessRestrictionsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getIPAccessRestrictions()

> **getIPAccessRestrictions**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>\>

Retrieves the IP access restrictions configured for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>\>

#### Throws

### resetIPAccessRestrictions()

> **resetIPAccessRestrictions**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Resets the IP access restrictions to their default state.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### updateIPAccessRestrictions()

> **updateIPAccessRestrictions**(`iPAccessRestrictions`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>\>

Updates the IP access restrictions for a specific Tenant.

#### Parameters

##### iPAccessRestrictions

[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>\>

#### Throws

## Export
