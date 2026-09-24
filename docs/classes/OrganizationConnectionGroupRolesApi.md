[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionGroupRolesApi

# Class: OrganizationConnectionGroupRolesApi

OrganizationConnectionGroupRolesApi - object-oriented interface

## Export

OrganizationConnectionGroupRolesApi

## Extends

- `BaseAPI`

## Implements

- [`OrganizationConnectionGroupRolesApiInterface`](../interfaces/OrganizationConnectionGroupRolesApiInterface.md)

## Constructors

### Constructor

> **new OrganizationConnectionGroupRolesApi**(`configuration?`, `basePath?`, `axios?`): `OrganizationConnectionGroupRolesApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OrganizationConnectionGroupRolesApi`

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

### createConnectionGroupRole()

> **createConnectionGroupRole**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md), `any`, \{ \}, `any`\>\>

Creates a new group-to-role mapping for an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiCreateConnectionGroupRoleRequest`](../interfaces/OrganizationConnectionGroupRolesApiCreateConnectionGroupRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionGroupRolesApi

#### Implementation of

[`OrganizationConnectionGroupRolesApiInterface`](../interfaces/OrganizationConnectionGroupRolesApiInterface.md).[`createConnectionGroupRole`](../interfaces/OrganizationConnectionGroupRolesApiInterface.md#createconnectiongrouprole)

***

### deleteConnectionGroupRole()

> **deleteConnectionGroupRole**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes a specific group-to-role mapping.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiDeleteConnectionGroupRoleRequest`](../interfaces/OrganizationConnectionGroupRolesApiDeleteConnectionGroupRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionGroupRolesApi

#### Implementation of

[`OrganizationConnectionGroupRolesApiInterface`](../interfaces/OrganizationConnectionGroupRolesApiInterface.md).[`deleteConnectionGroupRole`](../interfaces/OrganizationConnectionGroupRolesApiInterface.md#deleteconnectiongrouprole)

***

### getAllConnectionGroupRoles()

> **getAllConnectionGroupRoles**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetAllConnectionGroupRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllConnectionGroupRoles200Response.md), `any`, \{ \}, `any`\>\>

Lists all group-to-role mappings for an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiGetAllConnectionGroupRolesRequest`](../interfaces/OrganizationConnectionGroupRolesApiGetAllConnectionGroupRolesRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllConnectionGroupRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllConnectionGroupRoles200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionGroupRolesApi

#### Implementation of

[`OrganizationConnectionGroupRolesApiInterface`](../interfaces/OrganizationConnectionGroupRolesApiInterface.md).[`getAllConnectionGroupRoles`](../interfaces/OrganizationConnectionGroupRolesApiInterface.md#getallconnectiongrouproles)

***

### updateConnectionGroupRole()

> **updateConnectionGroupRole**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md), `any`, \{ \}, `any`\>\>

Updates a specific group-to-role mapping.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiUpdateConnectionGroupRoleRequest`](../interfaces/OrganizationConnectionGroupRolesApiUpdateConnectionGroupRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OrganizationConnectionGroupRolesApi

#### Implementation of

[`OrganizationConnectionGroupRolesApiInterface`](../interfaces/OrganizationConnectionGroupRolesApiInterface.md).[`updateConnectionGroupRole`](../interfaces/OrganizationConnectionGroupRolesApiInterface.md#updateconnectiongrouprole)
