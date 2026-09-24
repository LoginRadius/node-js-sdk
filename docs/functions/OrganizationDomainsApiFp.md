[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationDomainsApiFp

# Function: OrganizationDomainsApiFp()

> **OrganizationDomainsApiFp**(`configuration?`): `object`

OrganizationDomainsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### addOrganizationDomain()

> **addOrganizationDomain**(`orgId`, `addOrganizationDomainRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>\>

Adds a new domain to an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### addOrganizationDomainRequest

[`AddOrganizationDomainRequest`](../loginradius-sdk/namespaces/Models/interfaces/AddOrganizationDomainRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>\>

#### Throws

### deleteOrganizationDomain()

> **deleteOrganizationDomain**(`orgId`, `domainId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes a domain from an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### domainId

`string`

Organization Domain ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllOrganizationDomains()

> **getAllOrganizationDomains**(`orgId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOrganizationDomains200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationDomains200Response.md)\>\>

Lists all domains associated with an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOrganizationDomains200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationDomains200Response.md)\>\>

#### Throws

### getOrganizationDomain()

> **getOrganizationDomain**(`orgId`, `domainId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>\>

Retrieves details of a specific Organization domain.

#### Parameters

##### orgId

`string`

Organization ID

##### domainId

`string`

Organization Domain ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>\>

#### Throws

### verifyOrganizationDomain()

> **verifyOrganizationDomain**(`domainId`, `orgId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>\>

Verifies the ownership of an Organization domain.

#### Parameters

##### domainId

`string`

Organization Domain ID

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>\>

#### Throws

## Export
