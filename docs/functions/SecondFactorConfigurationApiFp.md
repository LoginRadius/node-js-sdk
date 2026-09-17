[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecondFactorConfigurationApiFp

# Function: SecondFactorConfigurationApiFp()

> **SecondFactorConfigurationApiFp**(`configuration?`): `object`

SecondFactorConfigurationApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getDuoAuthenticatorConfiguration()

> **getDuoAuthenticatorConfiguration**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>\>

Retrieves the Duo Authentication configuration for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>\>

#### Throws

### getSecondFactorConfiguration()

> **getSecondFactorConfiguration**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>\>

Retrieves the second factor authentication configuration for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>\>

#### Throws

### getTOTPConfiguration()

> **getTOTPConfiguration**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>\>

Retrieves the Time-based One Time Password (TOTP) configuration for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>\>

#### Throws

### updateDuoAuthenticatorConfiguration()

> **updateDuoAuthenticatorConfiguration**(`duoSecurityAuthenticator`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>\>

Updates the Duo Authentication configuration for a specific Tenant.

#### Parameters

##### duoSecurityAuthenticator

[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)\>\>

#### Throws

### updateSecondFactorConfiguration()

> **updateSecondFactorConfiguration**(`mFASettings`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>\>

Updates the second factor authentication configuration for the Tenant.

#### Parameters

##### mFASettings

[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)\>\>

#### Throws

### updateTOTPConfiguration()

> **updateTOTPConfiguration**(`googleAuthenticator`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>\>

Updates the Time-based One Time Password (TOTP) configuration for a specific Tenant.

#### Parameters

##### googleAuthenticator

[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)\>\>

#### Throws

## Export
