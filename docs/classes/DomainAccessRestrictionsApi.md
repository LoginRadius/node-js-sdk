[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / DomainAccessRestrictionsApi

# Class: DomainAccessRestrictionsApi

DomainAccessRestrictionsApi - object-oriented interface

## Export

DomainAccessRestrictionsApi

## Extends

- `BaseAPI`

## Implements

- [`DomainAccessRestrictionsApiInterface`](../interfaces/DomainAccessRestrictionsApiInterface.md)

## Constructors

### Constructor

> **new DomainAccessRestrictionsApi**(`configuration?`, `basePath?`, `axios?`): `DomainAccessRestrictionsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`DomainAccessRestrictionsApi`

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

### getDomainAccessRestrictionsByAppID()

> **getDomainAccessRestrictionsByAppID**(`options?`): `Promise`\<`AxiosResponse`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md), `any`, \{ \}, `any`\>\>

Retrieves the domain access restrictions configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

DomainAccessRestrictionsApi

#### Implementation of

[`DomainAccessRestrictionsApiInterface`](../interfaces/DomainAccessRestrictionsApiInterface.md).[`getDomainAccessRestrictionsByAppID`](../interfaces/DomainAccessRestrictionsApiInterface.md#getdomainaccessrestrictionsbyappid)

***

### updateDomainAccessRestrictionsByAppID()

> **updateDomainAccessRestrictionsByAppID**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md), `any`, \{ \}, `any`\>\>

Updates the domain access restrictions for the Tenant.

#### Parameters

##### requestParameters?

[`DomainAccessRestrictionsApiUpdateDomainAccessRestrictionsByAppIDRequest`](../interfaces/DomainAccessRestrictionsApiUpdateDomainAccessRestrictionsByAppIDRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

DomainAccessRestrictionsApi

#### Implementation of

[`DomainAccessRestrictionsApiInterface`](../interfaces/DomainAccessRestrictionsApiInterface.md).[`updateDomainAccessRestrictionsByAppID`](../interfaces/DomainAccessRestrictionsApiInterface.md#updatedomainaccessrestrictionsbyappid)
