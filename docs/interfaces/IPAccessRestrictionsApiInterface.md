[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / IPAccessRestrictionsApiInterface

# Interface: IPAccessRestrictionsApiInterface

IPAccessRestrictionsApi - interface

## Export

IPAccessRestrictionsApi

## Methods

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

#### Memberof

IPAccessRestrictionsApiInterface

***

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

#### Memberof

IPAccessRestrictionsApiInterface

***

### updateIPAccessRestrictions()

> **updateIPAccessRestrictions**(`requestParameters`, `options?`): `AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>

Updates the IP access restrictions for a specific Tenant.

#### Parameters

##### requestParameters

[`IPAccessRestrictionsApiUpdateIPAccessRestrictionsRequest`](IPAccessRestrictionsApiUpdateIPAccessRestrictionsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)\>

#### Throws

#### Memberof

IPAccessRestrictionsApiInterface
