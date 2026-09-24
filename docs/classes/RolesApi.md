[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RolesApi

# Class: RolesApi

RolesApi - object-oriented interface

## Export

RolesApi

## Extends

- `BaseAPI`

## Implements

- [`RolesApiInterface`](../interfaces/RolesApiInterface.md)

## Constructors

### Constructor

> **new RolesApi**(`configuration?`, `basePath?`, `axios?`): `RolesApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`RolesApi`

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

### createTenantRole()

> **createTenantRole**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`TenantRole`](../loginradius-sdk/namespaces/Models/interfaces/TenantRole.md), `any`, \{ \}, `any`\>\>

Creates a Role within the Tenant.

#### Parameters

##### requestParameters

[`RolesApiCreateTenantRoleRequest`](../interfaces/RolesApiCreateTenantRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`TenantRole`](../loginradius-sdk/namespaces/Models/interfaces/TenantRole.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesApi

#### Implementation of

[`RolesApiInterface`](../interfaces/RolesApiInterface.md).[`createTenantRole`](../interfaces/RolesApiInterface.md#createtenantrole)

***

### deleteTenantRole()

> **deleteTenantRole**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes a Role by its ID.

#### Parameters

##### requestParameters

[`RolesApiDeleteTenantRoleRequest`](../interfaces/RolesApiDeleteTenantRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesApi

#### Implementation of

[`RolesApiInterface`](../interfaces/RolesApiInterface.md).[`deleteTenantRole`](../interfaces/RolesApiInterface.md#deletetenantrole)

***

### getAllTenantRoles()

> **getAllTenantRoles**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllTenantRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllTenantRoles200Response.md), `any`, \{ \}, `any`\>\>

Lists all Roles within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllTenantRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllTenantRoles200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesApi

#### Implementation of

[`RolesApiInterface`](../interfaces/RolesApiInterface.md).[`getAllTenantRoles`](../interfaces/RolesApiInterface.md#getalltenantroles)

***

### getRoleById()

> **getRoleById**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md), `any`, \{ \}, `any`\>\>

Retrieves details of a Role by its ID.

#### Parameters

##### requestParameters

[`RolesApiGetRoleByIdRequest`](../interfaces/RolesApiGetRoleByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesApi

#### Implementation of

[`RolesApiInterface`](../interfaces/RolesApiInterface.md).[`getRoleById`](../interfaces/RolesApiInterface.md#getrolebyid)

***

### roleByName()

> **roleByName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md), `any`, \{ \}, `any`\>\>

Retrieves details of a Role by its name.

#### Parameters

##### requestParameters

[`RolesApiRoleByNameRequest`](../interfaces/RolesApiRoleByNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesApi

#### Implementation of

[`RolesApiInterface`](../interfaces/RolesApiInterface.md).[`roleByName`](../interfaces/RolesApiInterface.md#rolebyname)

***

### setDefaultRole()

> **setDefaultRole**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DefaultResponse`](../loginradius-sdk/namespaces/Models/interfaces/DefaultResponse.md), `any`, \{ \}, `any`\>\>

Sets a Role as the default for new Users. This API is supported only for B2B tenants.

#### Parameters

##### requestParameters

[`RolesApiSetDefaultRoleRequest`](../interfaces/RolesApiSetDefaultRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DefaultResponse`](../loginradius-sdk/namespaces/Models/interfaces/DefaultResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesApi

#### Implementation of

[`RolesApiInterface`](../interfaces/RolesApiInterface.md).[`setDefaultRole`](../interfaces/RolesApiInterface.md#setdefaultrole)

***

### updateRole()

> **updateRole**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md), `any`, \{ \}, `any`\>\>

Updates a Role by its ID.

#### Parameters

##### requestParameters

[`RolesApiUpdateRoleRequest`](../interfaces/RolesApiUpdateRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RolesApi

#### Implementation of

[`RolesApiInterface`](../interfaces/RolesApiInterface.md).[`updateRole`](../interfaces/RolesApiInterface.md#updaterole)
