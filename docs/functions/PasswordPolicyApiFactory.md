[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordPolicyApiFactory

# Function: PasswordPolicyApiFactory()

> **PasswordPolicyApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

PasswordPolicyApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getPasswordPolicy()

> **getPasswordPolicy**(`options?`): `AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>

Retrieves the Password policy settings for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>

#### Throws

### updatePasswordPolicy()

> **updatePasswordPolicy**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>

Updates the Password policy settings for a specific Tenant.

#### Parameters

##### requestParameters

[`PasswordPolicyApiUpdatePasswordPolicyRequest`](../interfaces/PasswordPolicyApiUpdatePasswordPolicyRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>

#### Throws

## Export
