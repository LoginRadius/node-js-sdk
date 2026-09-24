[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordPolicyApiFp

# Function: PasswordPolicyApiFp()

> **PasswordPolicyApiFp**(`configuration?`): `object`

PasswordPolicyApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getPasswordPolicy()

> **getPasswordPolicy**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>\>

Retrieves the Password policy settings for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>\>

#### Throws

### updatePasswordPolicy()

> **updatePasswordPolicy**(`passwordPolicy`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>\>

Updates the Password policy settings for a specific Tenant.

#### Parameters

##### passwordPolicy

[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>\>

#### Throws

## Export
