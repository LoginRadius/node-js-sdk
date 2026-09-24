[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSecurityApiFp

# Function: AccountSecurityApiFp()

> **AccountSecurityApiFp**(`configuration?`): `object`

AccountSecurityApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### mfaGenerateBackupCodesByUid()

> **mfaGenerateBackupCodesByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>\>

Generates a set of backup codes for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>\>

#### Throws

### mfaResetBackupCodesByUid()

> **mfaResetBackupCodesByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>\>

Resets and generates a new set of backup codes for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>\>

#### Throws

### mFAResetSMSAuthByUid()

> **mFAResetSMSAuthByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Resets MFA settings for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### mFAResetTotpByUid()

> **mFAResetTotpByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Resets MFA settings for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### resetDuoAuthByUid()

> **resetDuoAuthByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Resets the Duo Authenticator for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### resetEmailAuthenticatorByUid()

> **resetEmailAuthenticatorByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Resets the Email OTP Authenticator for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### resetMfaPasskeyByUid()

> **resetMfaPasskeyByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Resets the MFA Passkey for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### resetMfaPushByUid()

> **resetMfaPushByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Resets the Push Notification Authenticator for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### validateSecondFactorTokenForPassword()

> **validateSecondFactorTokenForPassword**(`uid`, `eventBasedSecondFactorToken`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>\>

Validates and verifies the \'SecondFactorValidationToken\' generated by the Step-Up Authenticate By Password API.

#### Parameters

##### uid

`string`

The UID associated with the User

##### eventBasedSecondFactorToken

[`EventBasedSecondFactorToken`](../loginradius-sdk/namespaces/Models/interfaces/EventBasedSecondFactorToken.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>\>

#### Throws

### validateSecondFactorTokenForPin()

> **validateSecondFactorTokenForPin**(`uid`, `eventBasedSecondFactorToken`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>\>

Validates and verifies the \'SecondFactorValidationToken\' generated by the Step-Up Authenticate By PIN API.

#### Parameters

##### uid

`string`

The UID associated with the User

##### eventBasedSecondFactorToken

[`EventBasedSecondFactorToken`](../loginradius-sdk/namespaces/Models/interfaces/EventBasedSecondFactorToken.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>\>

#### Throws

## Export
