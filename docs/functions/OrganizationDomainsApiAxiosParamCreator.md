[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationDomainsApiAxiosParamCreator

# Function: OrganizationDomainsApiAxiosParamCreator()

> **OrganizationDomainsApiAxiosParamCreator**(`configuration?`): `object`

OrganizationDomainsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### addOrganizationDomain

> **addOrganizationDomain**: (`orgId`, `addOrganizationDomainRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Adds a new domain to an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### addOrganizationDomainRequest

[`AddOrganizationDomainRequest`](../loginradius-sdk/namespaces/Models/interfaces/AddOrganizationDomainRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteOrganizationDomain

> **deleteOrganizationDomain**: (`orgId`, `domainId`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes a domain from an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### domainId

`string`

Organization Domain ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllOrganizationDomains

> **getAllOrganizationDomains**: (`orgId`, `options?`) => `Promise`\<`RequestArgs`\>

Lists all domains associated with an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOrganizationDomain

> **getOrganizationDomain**: (`orgId`, `domainId`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves details of a specific Organization domain.

#### Parameters

##### orgId

`string`

Organization ID

##### domainId

`string`

Organization Domain ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### verifyOrganizationDomain

> **verifyOrganizationDomain**: (`domainId`, `orgId`, `options?`) => `Promise`\<`RequestArgs`\>

Verifies the ownership of an Organization domain.

#### Parameters

##### domainId

`string`

Organization Domain ID

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
