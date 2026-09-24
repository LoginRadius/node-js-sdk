[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RolesApiInterface

# Interface: RolesApiInterface

RolesApi - interface

## Export

RolesApi

## Methods

### createTenantRole()

> **createTenantRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`TenantRole`](../loginradius-sdk/namespaces/Models/interfaces/TenantRole.md)\>

Creates a Role within the Tenant.

#### Parameters

##### requestParameters

[`RolesApiCreateTenantRoleRequest`](RolesApiCreateTenantRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`TenantRole`](../loginradius-sdk/namespaces/Models/interfaces/TenantRole.md)\>

#### Throws

#### Memberof

RolesApiInterface

***

### deleteTenantRole()

> **deleteTenantRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a Role by its ID.

#### Parameters

##### requestParameters

[`RolesApiDeleteTenantRoleRequest`](RolesApiDeleteTenantRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

RolesApiInterface

***

### getAllTenantRoles()

> **getAllTenantRoles**(`options?`): `AxiosPromise`\<[`GetAllTenantRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllTenantRoles200Response.md)\>

Lists all Roles within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllTenantRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllTenantRoles200Response.md)\>

#### Throws

#### Memberof

RolesApiInterface

***

### getRoleById()

> **getRoleById**(`requestParameters`, `options?`): `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>

Retrieves details of a Role by its ID.

#### Parameters

##### requestParameters

[`RolesApiGetRoleByIdRequest`](RolesApiGetRoleByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>

#### Throws

#### Memberof

RolesApiInterface

***

### roleByName()

> **roleByName**(`requestParameters`, `options?`): `AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>

Retrieves details of a Role by its name.

#### Parameters

##### requestParameters

[`RolesApiRoleByNameRequest`](RolesApiRoleByNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>

#### Throws

#### Memberof

RolesApiInterface

***

### setDefaultRole()

> **setDefaultRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`DefaultResponse`](../loginradius-sdk/namespaces/Models/interfaces/DefaultResponse.md)\>

Sets a Role as the default for new Users. This API is supported only for B2B tenants.

#### Parameters

##### requestParameters

[`RolesApiSetDefaultRoleRequest`](RolesApiSetDefaultRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DefaultResponse`](../loginradius-sdk/namespaces/Models/interfaces/DefaultResponse.md)\>

#### Throws

#### Memberof

RolesApiInterface

***

### updateRole()

> **updateRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>

Updates a Role by its ID.

#### Parameters

##### requestParameters

[`RolesApiUpdateRoleRequest`](RolesApiUpdateRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>

#### Throws

#### Memberof

RolesApiInterface
