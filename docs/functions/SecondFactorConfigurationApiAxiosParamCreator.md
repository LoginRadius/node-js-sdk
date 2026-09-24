[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecondFactorConfigurationApiAxiosParamCreator

# Function: SecondFactorConfigurationApiAxiosParamCreator()

> **SecondFactorConfigurationApiAxiosParamCreator**(`configuration?`): `object`

SecondFactorConfigurationApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getDuoAuthenticatorConfiguration

> **getDuoAuthenticatorConfiguration**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Duo Authentication configuration for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getSecondFactorConfiguration

> **getSecondFactorConfiguration**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the second factor authentication configuration for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getTOTPConfiguration

> **getTOTPConfiguration**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Time-based One Time Password (TOTP) configuration for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateDuoAuthenticatorConfiguration

> **updateDuoAuthenticatorConfiguration**: (`duoSecurityAuthenticator`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the Duo Authentication configuration for a specific Tenant.

#### Parameters

##### duoSecurityAuthenticator

[`DuoSecurityAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/DuoSecurityAuthenticator.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateSecondFactorConfiguration

> **updateSecondFactorConfiguration**: (`mFASettings`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the second factor authentication configuration for the Tenant.

#### Parameters

##### mFASettings

[`MFASettings`](../loginradius-sdk/namespaces/Models/interfaces/MFASettings.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateTOTPConfiguration

> **updateTOTPConfiguration**: (`googleAuthenticator`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the Time-based One Time Password (TOTP) configuration for a specific Tenant.

#### Parameters

##### googleAuthenticator

[`GoogleAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/GoogleAuthenticator.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
