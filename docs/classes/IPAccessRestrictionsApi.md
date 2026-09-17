[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / IPAccessRestrictionsApi

# Class: IPAccessRestrictionsApi

IPAccessRestrictionsApi - object-oriented interface

## Export

IPAccessRestrictionsApi

## Extends

- `BaseAPI`

## Implements

- [`IPAccessRestrictionsApiInterface`](../interfaces/IPAccessRestrictionsApiInterface.md)

## Constructors

### Constructor

> **new IPAccessRestrictionsApi**(`configuration?`, `basePath?`, `axios?`): `IPAccessRestrictionsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`IPAccessRestrictionsApi`

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

### getIPAccessRestrictions()

> **getIPAccessRestrictions**(`options?`): `Promise`\<`AxiosResponse`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md), `any`, \{ \}, `any`\>\>

Retrieves the IP access restrictions configured for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

IPAccessRestrictionsApi

#### Implementation of

[`IPAccessRestrictionsApiInterface`](../interfaces/IPAccessRestrictionsApiInterface.md).[`getIPAccessRestrictions`](../interfaces/IPAccessRestrictionsApiInterface.md#getipaccessrestrictions)

***

### resetIPAccessRestrictions()

> **resetIPAccessRestrictions**(`options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Resets the IP access restrictions to their default state.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

IPAccessRestrictionsApi

#### Implementation of

[`IPAccessRestrictionsApiInterface`](../interfaces/IPAccessRestrictionsApiInterface.md).[`resetIPAccessRestrictions`](../interfaces/IPAccessRestrictionsApiInterface.md#resetipaccessrestrictions)

***

### updateIPAccessRestrictions()

> **updateIPAccessRestrictions**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md), `any`, \{ \}, `any`\>\>

Updates the IP access restrictions for a specific Tenant.

#### Parameters

##### requestParameters

[`IPAccessRestrictionsApiUpdateIPAccessRestrictionsRequest`](../interfaces/IPAccessRestrictionsApiUpdateIPAccessRestrictionsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

IPAccessRestrictionsApi

#### Implementation of

[`IPAccessRestrictionsApiInterface`](../interfaces/IPAccessRestrictionsApiInterface.md).[`updateIPAccessRestrictions`](../interfaces/IPAccessRestrictionsApiInterface.md#updateipaccessrestrictions)
