[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordPolicyApiInterface

# Interface: PasswordPolicyApiInterface

PasswordPolicyApi - interface

## Export

PasswordPolicyApi

## Methods

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

#### Memberof

PasswordPolicyApiInterface

***

### updatePasswordPolicy()

> **updatePasswordPolicy**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>

Updates the Password policy settings for a specific Tenant.

#### Parameters

##### requestParameters

[`PasswordPolicyApiUpdatePasswordPolicyRequest`](PasswordPolicyApiUpdatePasswordPolicyRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md)\>

#### Throws

#### Memberof

PasswordPolicyApiInterface
