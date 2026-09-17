[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecondFactorConfigurationApiFactory

# Function: SecondFactorConfigurationApiFactory()

> **SecondFactorConfigurationApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

SecondFactorConfigurationApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

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

### updateDuoAuthenticatorConfiguration()

> **updateDuoAuthenticatorConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>

Updates the Duo Authentication configuration for a specific Tenant.

#### Parameters

##### requestParameters

[`SecondFactorConfigurationApiUpdateDuoAuthenticatorConfigurationRequest`](../interfaces/SecondFactorConfigurationApiUpdateDuoAuthenticatorConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>

#### Throws

### updateSecondFactorConfiguration()

> **updateSecondFactorConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>

Updates the second factor authentication configuration for the Tenant.

#### Parameters

##### requestParameters

[`SecondFactorConfigurationApiUpdateSecondFactorConfigurationRequest`](../interfaces/SecondFactorConfigurationApiUpdateSecondFactorConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>

#### Throws

### updateTOTPConfiguration()

> **updateTOTPConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>

Updates the Time-based One Time Password (TOTP) configuration for a specific Tenant.

#### Parameters

##### requestParameters

[`SecondFactorConfigurationApiUpdateTOTPConfigurationRequest`](../interfaces/SecondFactorConfigurationApiUpdateTOTPConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>

#### Throws

## Export
