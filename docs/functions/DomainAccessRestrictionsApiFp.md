[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / DomainAccessRestrictionsApiFp

# Function: DomainAccessRestrictionsApiFp()

> **DomainAccessRestrictionsApiFp**(`configuration?`): `object`

DomainAccessRestrictionsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getDomainAccessRestrictionsByAppID()

> **getDomainAccessRestrictionsByAppID**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>\>

Retrieves the domain access restrictions configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>\>

#### Throws

### updateDomainAccessRestrictionsByAppID()

> **updateDomainAccessRestrictionsByAppID**(`domainAccessRestrictions?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>\>

Updates the domain access restrictions for the Tenant.

#### Parameters

##### domainAccessRestrictions?

[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>\>

#### Throws

## Export
