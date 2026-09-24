[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / IPAccessRestrictionsApiFactory

# Function: IPAccessRestrictionsApiFactory()

> **IPAccessRestrictionsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

IPAccessRestrictionsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getIPAccessRestrictions()

> **getIPAccessRestrictions**(`options?`): `AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>

Retrieves the IP access restrictions configured for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>

#### Throws

### resetIPAccessRestrictions()

> **resetIPAccessRestrictions**(`options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Resets the IP access restrictions to their default state.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### updateIPAccessRestrictions()

> **updateIPAccessRestrictions**(`requestParameters`, `options?`): `AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>

Updates the IP access restrictions for a specific Tenant.

#### Parameters

##### requestParameters

[`IPAccessRestrictionsApiUpdateIPAccessRestrictionsRequest`](../interfaces/IPAccessRestrictionsApiUpdateIPAccessRestrictionsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>

#### Throws

## Export
