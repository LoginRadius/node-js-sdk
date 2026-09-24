[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationApi

# Class: OrganizationApi

OrganizationApi - object-oriented interface

## Export

OrganizationApi

## Extends

- `BaseAPI`

## Implements

- [`OrganizationApiInterface`](../interfaces/OrganizationApiInterface.md)

## Constructors

### Constructor

> **new OrganizationApi**(`configuration?`, `basePath?`, `axios?`): `OrganizationApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OrganizationApi`

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

### createOrganization()

> **createOrganization**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md), `any`, \{ \}, `any`\>\>

Creates a new Organization in the Tenant.

#### Parameters

##### requestParameters

[`OrganizationApiCreateOrganizationRequest`](../interfaces/OrganizationApiCreateOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationApi

#### Implementation of

[`OrganizationApiInterface`](../interfaces/OrganizationApiInterface.md).[`createOrganization`](../interfaces/OrganizationApiInterface.md#createorganization)

***

### createOrgTenantRole()

> **createOrgTenantRole**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md), `any`, \{ \}, `any`\>\>

Creates a Role within an Organization.

#### Parameters

##### requestParameters

[`OrganizationApiCreateOrgTenantRoleRequest`](../interfaces/OrganizationApiCreateOrgTenantRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationApi

#### Implementation of

[`OrganizationApiInterface`](../interfaces/OrganizationApiInterface.md).[`createOrgTenantRole`](../interfaces/OrganizationApiInterface.md#createorgtenantrole)

***

### deleteOrganization()

> **deleteOrganization**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes an Organization by its ID.

#### Parameters

##### requestParameters

[`OrganizationApiDeleteOrganizationRequest`](../interfaces/OrganizationApiDeleteOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationApi

#### Implementation of

[`OrganizationApiInterface`](../interfaces/OrganizationApiInterface.md).[`deleteOrganization`](../interfaces/OrganizationApiInterface.md#deleteorganization)

***

### getAllOrganizations()

> **getAllOrganizations**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllOrganizations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizations200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all Organizations in the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllOrganizations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizations200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationApi

#### Implementation of

[`OrganizationApiInterface`](../interfaces/OrganizationApiInterface.md).[`getAllOrganizations`](../interfaces/OrganizationApiInterface.md#getallorganizations)

***

### getOrganization()

> **getOrganization**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md), `any`, \{ \}, `any`\>\>

Retrieves details of a specific Organization by its ID.

#### Parameters

##### requestParameters

[`OrganizationApiGetOrganizationRequest`](../interfaces/OrganizationApiGetOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationApi

#### Implementation of

[`OrganizationApiInterface`](../interfaces/OrganizationApiInterface.md).[`getOrganization`](../interfaces/OrganizationApiInterface.md#getorganization)

***

### getOrgContextByOrgId()

> **getOrgContextByOrgId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

Retrieves User Roles for all Organizations by OrgID.

#### Parameters

##### requestParameters

[`OrganizationApiGetOrgContextByOrgIdRequest`](../interfaces/OrganizationApiGetOrgContextByOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationApi

#### Implementation of

[`OrganizationApiInterface`](../interfaces/OrganizationApiInterface.md).[`getOrgContextByOrgId`](../interfaces/OrganizationApiInterface.md#getorgcontextbyorgid)

***

### getOrgRolesByOrgId()

> **getOrgRolesByOrgId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md), `any`, \{ \}, `any`\>\>

Lists all Roles defined within an Organization.

#### Parameters

##### requestParameters

[`OrganizationApiGetOrgRolesByOrgIdRequest`](../interfaces/OrganizationApiGetOrgRolesByOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationApi

#### Implementation of

[`OrganizationApiInterface`](../interfaces/OrganizationApiInterface.md).[`getOrgRolesByOrgId`](../interfaces/OrganizationApiInterface.md#getorgrolesbyorgid)

***

### updateOrganization()

> **updateOrganization**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md), `any`, \{ \}, `any`\>\>

Updates an Organization by its ID. Supports updating org fields, policies, and status in a single request.

#### Parameters

##### requestParameters

[`OrganizationApiUpdateOrganizationRequest`](../interfaces/OrganizationApiUpdateOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationApi

#### Implementation of

[`OrganizationApiInterface`](../interfaces/OrganizationApiInterface.md).[`updateOrganization`](../interfaces/OrganizationApiInterface.md#updateorganization)
