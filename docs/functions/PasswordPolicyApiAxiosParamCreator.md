[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordPolicyApiAxiosParamCreator

# Function: PasswordPolicyApiAxiosParamCreator()

> **PasswordPolicyApiAxiosParamCreator**(`configuration?`): `object`

PasswordPolicyApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getPasswordPolicy

> **getPasswordPolicy**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Password policy settings for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updatePasswordPolicy

> **updatePasswordPolicy**: (`passwordPolicy`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the Password policy settings for a specific Tenant.

#### Parameters

##### passwordPolicy

[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
