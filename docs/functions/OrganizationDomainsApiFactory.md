[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationDomainsApiFactory

# Function: OrganizationDomainsApiFactory()

> **OrganizationDomainsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

OrganizationDomainsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### addOrganizationDomain()

> **addOrganizationDomain**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

Adds a new domain to an Organization.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiAddOrganizationDomainRequest`](../interfaces/OrganizationDomainsApiAddOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

#### Throws

### deleteOrganizationDomain()

> **deleteOrganizationDomain**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a domain from an Organization.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiDeleteOrganizationDomainRequest`](../interfaces/OrganizationDomainsApiDeleteOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getAllOrganizationDomains()

> **getAllOrganizationDomains**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetAllOrganizationDomains200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationDomains200Response.md)\>

Lists all domains associated with an Organization.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiGetAllOrganizationDomainsRequest`](../interfaces/OrganizationDomainsApiGetAllOrganizationDomainsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllOrganizationDomains200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationDomains200Response.md)\>

#### Throws

### getOrganizationDomain()

> **getOrganizationDomain**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

Retrieves details of a specific Organization domain.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiGetOrganizationDomainRequest`](../interfaces/OrganizationDomainsApiGetOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

#### Throws

### verifyOrganizationDomain()

> **verifyOrganizationDomain**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

Verifies the ownership of an Organization domain.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiVerifyOrganizationDomainRequest`](../interfaces/OrganizationDomainsApiVerifyOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

#### Throws

## Export
