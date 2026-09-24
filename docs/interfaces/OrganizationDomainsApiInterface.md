[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationDomainsApiInterface

# Interface: OrganizationDomainsApiInterface

OrganizationDomainsApi - interface

## Export

OrganizationDomainsApi

## Methods

### addOrganizationDomain()

> **addOrganizationDomain**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

Adds a new domain to an Organization.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiAddOrganizationDomainRequest`](OrganizationDomainsApiAddOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

#### Throws

#### Memberof

OrganizationDomainsApiInterface

***

### deleteOrganizationDomain()

> **deleteOrganizationDomain**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a domain from an Organization.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiDeleteOrganizationDomainRequest`](OrganizationDomainsApiDeleteOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

OrganizationDomainsApiInterface

***

### getAllOrganizationDomains()

> **getAllOrganizationDomains**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetAllOrganizationDomains200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationDomains200Response.md)\>

Lists all domains associated with an Organization.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiGetAllOrganizationDomainsRequest`](OrganizationDomainsApiGetAllOrganizationDomainsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllOrganizationDomains200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationDomains200Response.md)\>

#### Throws

#### Memberof

OrganizationDomainsApiInterface

***

### getOrganizationDomain()

> **getOrganizationDomain**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

Retrieves details of a specific Organization domain.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiGetOrganizationDomainRequest`](OrganizationDomainsApiGetOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

#### Throws

#### Memberof

OrganizationDomainsApiInterface

***

### verifyOrganizationDomain()

> **verifyOrganizationDomain**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

Verifies the ownership of an Organization domain.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiVerifyOrganizationDomainRequest`](OrganizationDomainsApiVerifyOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md)\>

#### Throws

#### Memberof

OrganizationDomainsApiInterface
