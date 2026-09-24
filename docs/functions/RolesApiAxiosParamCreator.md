[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RolesApiAxiosParamCreator

# Function: RolesApiAxiosParamCreator()

> **RolesApiAxiosParamCreator**(`configuration?`): `object`

RolesApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createTenantRole

> **createTenantRole**: (`rolePostRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a Role within the Tenant.

#### Parameters

##### rolePostRequest

[`RolePostRequest`](../loginradius-sdk/namespaces/Models/interfaces/RolePostRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteTenantRole

> **deleteTenantRole**: (`id`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes a Role by its ID.

#### Parameters

##### id

`string`

Role ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllTenantRoles

> **getAllTenantRoles**: (`options?`) => `Promise`\<`RequestArgs`\>

Lists all Roles within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getRoleById

> **getRoleById**: (`id`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves details of a Role by its ID.

#### Parameters

##### id

`string`

Role ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### roleByName

> **roleByName**: (`name`, `orgid?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves details of a Role by its name.

#### Parameters

##### name

`string`

Role Name

##### orgid?

`string`

Organization ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### setDefaultRole

> **setDefaultRole**: (`id`, `options?`) => `Promise`\<`RequestArgs`\>

Sets a Role as the default for new Users. This API is supported only for B2B tenants.

#### Parameters

##### id

`string`

Role ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateRole

> **updateRole**: (`id`, `rolesPutRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Updates a Role by its ID.

#### Parameters

##### id

`string`

Role ID

##### rolesPutRequest

[`RolesPutRequest`](../loginradius-sdk/namespaces/Models/interfaces/RolesPutRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
