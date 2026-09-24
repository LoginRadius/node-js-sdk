[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / DomainAccessRestrictionsApiInterface

# Interface: DomainAccessRestrictionsApiInterface

DomainAccessRestrictionsApi - interface

## Export

DomainAccessRestrictionsApi

## Methods

### getDomainAccessRestrictionsByAppID()

> **getDomainAccessRestrictionsByAppID**(`options?`): `AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>

Retrieves the domain access restrictions configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>

#### Throws

#### Memberof

DomainAccessRestrictionsApiInterface

***

### updateDomainAccessRestrictionsByAppID()

> **updateDomainAccessRestrictionsByAppID**(`requestParameters?`, `options?`): `AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>

Updates the domain access restrictions for the Tenant.

#### Parameters

##### requestParameters?

[`DomainAccessRestrictionsApiUpdateDomainAccessRestrictionsByAppIDRequest`](DomainAccessRestrictionsApiUpdateDomainAccessRestrictionsByAppIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>

#### Throws

#### Memberof

DomainAccessRestrictionsApiInterface
