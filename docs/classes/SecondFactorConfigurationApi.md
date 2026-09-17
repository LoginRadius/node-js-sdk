[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecondFactorConfigurationApi

# Class: SecondFactorConfigurationApi

SecondFactorConfigurationApi - object-oriented interface

## Export

SecondFactorConfigurationApi

## Extends

- `BaseAPI`

## Implements

- [`SecondFactorConfigurationApiInterface`](../interfaces/SecondFactorConfigurationApiInterface.md)

## Constructors

### Constructor

> **new SecondFactorConfigurationApi**(`configuration?`, `basePath?`, `axios?`): `SecondFactorConfigurationApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SecondFactorConfigurationApi`

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

### getDuoAuthenticatorConfiguration()

> **getDuoAuthenticatorConfiguration**(`options?`): `Promise`\<`AxiosResponse`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md), `any`, \{ \}, `any`\>\>

Retrieves the Duo Authentication configuration for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecondFactorConfigurationApi

#### Implementation of

[`SecondFactorConfigurationApiInterface`](../interfaces/SecondFactorConfigurationApiInterface.md).[`getDuoAuthenticatorConfiguration`](../interfaces/SecondFactorConfigurationApiInterface.md#getduoauthenticatorconfiguration)

***

### getSecondFactorConfiguration()

> **getSecondFactorConfiguration**(`options?`): `Promise`\<`AxiosResponse`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md), `any`, \{ \}, `any`\>\>

Retrieves the second factor authentication configuration for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecondFactorConfigurationApi

#### Implementation of

[`SecondFactorConfigurationApiInterface`](../interfaces/SecondFactorConfigurationApiInterface.md).[`getSecondFactorConfiguration`](../interfaces/SecondFactorConfigurationApiInterface.md#getsecondfactorconfiguration)

***

### getTOTPConfiguration()

> **getTOTPConfiguration**(`options?`): `Promise`\<`AxiosResponse`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md), `any`, \{ \}, `any`\>\>

Retrieves the Time-based One Time Password (TOTP) configuration for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecondFactorConfigurationApi

#### Implementation of

[`SecondFactorConfigurationApiInterface`](../interfaces/SecondFactorConfigurationApiInterface.md).[`getTOTPConfiguration`](../interfaces/SecondFactorConfigurationApiInterface.md#gettotpconfiguration)

***

### updateDuoAuthenticatorConfiguration()

> **updateDuoAuthenticatorConfiguration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md), `any`, \{ \}, `any`\>\>

Updates the Duo Authentication configuration for a specific Tenant.

#### Parameters

##### requestParameters

[`SecondFactorConfigurationApiUpdateDuoAuthenticatorConfigurationRequest`](../interfaces/SecondFactorConfigurationApiUpdateDuoAuthenticatorConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecondFactorConfigurationApi

#### Implementation of

[`SecondFactorConfigurationApiInterface`](../interfaces/SecondFactorConfigurationApiInterface.md).[`updateDuoAuthenticatorConfiguration`](../interfaces/SecondFactorConfigurationApiInterface.md#updateduoauthenticatorconfiguration)

***

### updateSecondFactorConfiguration()

> **updateSecondFactorConfiguration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md), `any`, \{ \}, `any`\>\>

Updates the second factor authentication configuration for the Tenant.

#### Parameters

##### requestParameters

[`SecondFactorConfigurationApiUpdateSecondFactorConfigurationRequest`](../interfaces/SecondFactorConfigurationApiUpdateSecondFactorConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecondFactorConfigurationApi

#### Implementation of

[`SecondFactorConfigurationApiInterface`](../interfaces/SecondFactorConfigurationApiInterface.md).[`updateSecondFactorConfiguration`](../interfaces/SecondFactorConfigurationApiInterface.md#updatesecondfactorconfiguration)

***

### updateTOTPConfiguration()

> **updateTOTPConfiguration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md), `any`, \{ \}, `any`\>\>

Updates the Time-based One Time Password (TOTP) configuration for a specific Tenant.

#### Parameters

##### requestParameters

[`SecondFactorConfigurationApiUpdateTOTPConfigurationRequest`](../interfaces/SecondFactorConfigurationApiUpdateTOTPConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecondFactorConfigurationApi

#### Implementation of

[`SecondFactorConfigurationApiInterface`](../interfaces/SecondFactorConfigurationApiInterface.md).[`updateTOTPConfiguration`](../interfaces/SecondFactorConfigurationApiInterface.md#updatetotpconfiguration)
