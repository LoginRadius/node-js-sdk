[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecondFactorConfigurationApiInterface

# Interface: SecondFactorConfigurationApiInterface

SecondFactorConfigurationApi - interface

## Export

SecondFactorConfigurationApi

## Methods

### getDuoAuthenticatorConfiguration()

> **getDuoAuthenticatorConfiguration**(`options?`): `AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>

Retrieves the Duo Authentication configuration for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>

#### Throws

#### Memberof

SecondFactorConfigurationApiInterface

***

### getSecondFactorConfiguration()

> **getSecondFactorConfiguration**(`options?`): `AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>

Retrieves the second factor authentication configuration for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>

#### Throws

#### Memberof

SecondFactorConfigurationApiInterface

***

### getTOTPConfiguration()

> **getTOTPConfiguration**(`options?`): `AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>

Retrieves the Time-based One Time Password (TOTP) configuration for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>

#### Throws

#### Memberof

SecondFactorConfigurationApiInterface

***

### updateDuoAuthenticatorConfiguration()

> **updateDuoAuthenticatorConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>

Updates the Duo Authentication configuration for a specific Tenant.

#### Parameters

##### requestParameters

[`SecondFactorConfigurationApiUpdateDuoAuthenticatorConfigurationRequest`](SecondFactorConfigurationApiUpdateDuoAuthenticatorConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>

#### Throws

#### Memberof

SecondFactorConfigurationApiInterface

***

### updateSecondFactorConfiguration()

> **updateSecondFactorConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>

Updates the second factor authentication configuration for the Tenant.

#### Parameters

##### requestParameters

[`SecondFactorConfigurationApiUpdateSecondFactorConfigurationRequest`](SecondFactorConfigurationApiUpdateSecondFactorConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>

#### Throws

#### Memberof

SecondFactorConfigurationApiInterface

***

### updateTOTPConfiguration()

> **updateTOTPConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>

Updates the Time-based One Time Password (TOTP) configuration for a specific Tenant.

#### Parameters

##### requestParameters

[`SecondFactorConfigurationApiUpdateTOTPConfigurationRequest`](SecondFactorConfigurationApiUpdateTOTPConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>

#### Throws

#### Memberof

SecondFactorConfigurationApiInterface
