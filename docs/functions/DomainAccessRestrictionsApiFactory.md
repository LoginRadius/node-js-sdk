[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / DomainAccessRestrictionsApiFactory

# Function: DomainAccessRestrictionsApiFactory()

> **DomainAccessRestrictionsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

DomainAccessRestrictionsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

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

### updateDomainAccessRestrictionsByAppID()

> **updateDomainAccessRestrictionsByAppID**(`requestParameters?`, `options?`): `AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>

Updates the domain access restrictions for the Tenant.

#### Parameters

##### requestParameters?

[`DomainAccessRestrictionsApiUpdateDomainAccessRestrictionsByAppIDRequest`](../interfaces/DomainAccessRestrictionsApiUpdateDomainAccessRestrictionsByAppIDRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)\>

#### Throws

## Export
