[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationDomainsApi

# Class: OrganizationDomainsApi

OrganizationDomainsApi - object-oriented interface

## Export

OrganizationDomainsApi

## Extends

- `BaseAPI`

## Implements

- [`OrganizationDomainsApiInterface`](../interfaces/OrganizationDomainsApiInterface.md)

## Constructors

### Constructor

> **new OrganizationDomainsApi**(`configuration?`, `basePath?`, `axios?`): `OrganizationDomainsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OrganizationDomainsApi`

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

### addOrganizationDomain()

> **addOrganizationDomain**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md), `any`, \{ \}, `any`\>\>

Adds a new domain to an Organization.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiAddOrganizationDomainRequest`](../interfaces/OrganizationDomainsApiAddOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationDomainsApi

#### Implementation of

[`OrganizationDomainsApiInterface`](../interfaces/OrganizationDomainsApiInterface.md).[`addOrganizationDomain`](../interfaces/OrganizationDomainsApiInterface.md#addorganizationdomain)

***

### deleteOrganizationDomain()

> **deleteOrganizationDomain**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes a domain from an Organization.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiDeleteOrganizationDomainRequest`](../interfaces/OrganizationDomainsApiDeleteOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationDomainsApi

#### Implementation of

[`OrganizationDomainsApiInterface`](../interfaces/OrganizationDomainsApiInterface.md).[`deleteOrganizationDomain`](../interfaces/OrganizationDomainsApiInterface.md#deleteorganizationdomain)

***

### getAllOrganizationDomains()

> **getAllOrganizationDomains**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetAllOrganizationDomains200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationDomains200Response.md), `any`, \{ \}, `any`\>\>

Lists all domains associated with an Organization.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiGetAllOrganizationDomainsRequest`](../interfaces/OrganizationDomainsApiGetAllOrganizationDomainsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllOrganizationDomains200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizationDomains200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationDomainsApi

#### Implementation of

[`OrganizationDomainsApiInterface`](../interfaces/OrganizationDomainsApiInterface.md).[`getAllOrganizationDomains`](../interfaces/OrganizationDomainsApiInterface.md#getallorganizationdomains)

***

### getOrganizationDomain()

> **getOrganizationDomain**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md), `any`, \{ \}, `any`\>\>

Retrieves details of a specific Organization domain.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiGetOrganizationDomainRequest`](../interfaces/OrganizationDomainsApiGetOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationDomainsApi

#### Implementation of

[`OrganizationDomainsApiInterface`](../interfaces/OrganizationDomainsApiInterface.md).[`getOrganizationDomain`](../interfaces/OrganizationDomainsApiInterface.md#getorganizationdomain)

***

### verifyOrganizationDomain()

> **verifyOrganizationDomain**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md), `any`, \{ \}, `any`\>\>

Verifies the ownership of an Organization domain.

#### Parameters

##### requestParameters

[`OrganizationDomainsApiVerifyOrganizationDomainRequest`](../interfaces/OrganizationDomainsApiVerifyOrganizationDomainRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OrganizationsDomainsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsDomainsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationDomainsApi

#### Implementation of

[`OrganizationDomainsApiInterface`](../interfaces/OrganizationDomainsApiInterface.md).[`verifyOrganizationDomain`](../interfaces/OrganizationDomainsApiInterface.md#verifyorganizationdomain)
