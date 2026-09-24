[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / DomainAccessRestrictionsApiAxiosParamCreator

# Function: DomainAccessRestrictionsApiAxiosParamCreator()

> **DomainAccessRestrictionsApiAxiosParamCreator**(`configuration?`): `object`

DomainAccessRestrictionsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getDomainAccessRestrictionsByAppID

> **getDomainAccessRestrictionsByAppID**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the domain access restrictions configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateDomainAccessRestrictionsByAppID

> **updateDomainAccessRestrictionsByAppID**: (`domainAccessRestrictions?`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the domain access restrictions for the Tenant.

#### Parameters

##### domainAccessRestrictions?

[`DomainAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/DomainAccessRestrictions.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
