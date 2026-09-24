[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordPolicyApi

# Class: PasswordPolicyApi

PasswordPolicyApi - object-oriented interface

## Export

PasswordPolicyApi

## Extends

- `BaseAPI`

## Implements

- [`PasswordPolicyApiInterface`](../interfaces/PasswordPolicyApiInterface.md)

## Constructors

### Constructor

> **new PasswordPolicyApi**(`configuration?`, `basePath?`, `axios?`): `PasswordPolicyApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`PasswordPolicyApi`

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

### getPasswordPolicy()

> **getPasswordPolicy**(`options?`): `Promise`\<`AxiosResponse`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md), `any`, \{ \}, `any`\>\>

Retrieves the Password policy settings for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasswordPolicyApi

#### Implementation of

[`PasswordPolicyApiInterface`](../interfaces/PasswordPolicyApiInterface.md).[`getPasswordPolicy`](../interfaces/PasswordPolicyApiInterface.md#getpasswordpolicy)

***

### updatePasswordPolicy()

> **updatePasswordPolicy**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md), `any`, \{ \}, `any`\>\>

Updates the Password policy settings for a specific Tenant.

#### Parameters

##### requestParameters

[`PasswordPolicyApiUpdatePasswordPolicyRequest`](../interfaces/PasswordPolicyApiUpdatePasswordPolicyRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasswordPolicy`](../loginradius-sdk/namespaces/Models/interfaces/PasswordPolicy.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasswordPolicyApi

#### Implementation of

[`PasswordPolicyApiInterface`](../interfaces/PasswordPolicyApiInterface.md).[`updatePasswordPolicy`](../interfaces/PasswordPolicyApiInterface.md#updatepasswordpolicy)
