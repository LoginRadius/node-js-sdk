[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSecurityApiFactory

# Function: AccountSecurityApiFactory()

> **AccountSecurityApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

AccountSecurityApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### mfaGenerateBackupCodesByUid()

> **mfaGenerateBackupCodesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

Generates a set of backup codes for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMfaGenerateBackupCodesByUidRequest`](../interfaces/AccountSecurityApiMfaGenerateBackupCodesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

#### Throws

### mfaResetBackupCodesByUid()

> **mfaResetBackupCodesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

Resets and generates a new set of backup codes for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMfaResetBackupCodesByUidRequest`](../interfaces/AccountSecurityApiMfaResetBackupCodesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

#### Throws

### mFAResetSMSAuthByUid()

> **mFAResetSMSAuthByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets MFA settings for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMFAResetSMSAuthByUidRequest`](../interfaces/AccountSecurityApiMFAResetSMSAuthByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### mFAResetTotpByUid()

> **mFAResetTotpByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets MFA settings for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMFAResetTotpByUidRequest`](../interfaces/AccountSecurityApiMFAResetTotpByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### resetDuoAuthByUid()

> **resetDuoAuthByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the Duo Authenticator for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetDuoAuthByUidRequest`](../interfaces/AccountSecurityApiResetDuoAuthByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### resetEmailAuthenticatorByUid()

> **resetEmailAuthenticatorByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the Email OTP Authenticator for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetEmailAuthenticatorByUidRequest`](../interfaces/AccountSecurityApiResetEmailAuthenticatorByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### resetMfaPasskeyByUid()

> **resetMfaPasskeyByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the MFA Passkey for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetMfaPasskeyByUidRequest`](../interfaces/AccountSecurityApiResetMfaPasskeyByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### resetMfaPushByUid()

> **resetMfaPushByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the Push Notification Authenticator for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetMfaPushByUidRequest`](../interfaces/AccountSecurityApiResetMfaPushByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### validateSecondFactorTokenForPassword()

> **validateSecondFactorTokenForPassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>

Validates and verifies the \'SecondFactorValidationToken\' generated by the Step-Up Authenticate By Password API.

#### Parameters

##### requestParameters

[`AccountSecurityApiValidateSecondFactorTokenForPasswordRequest`](../interfaces/AccountSecurityApiValidateSecondFactorTokenForPasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>

#### Throws

### validateSecondFactorTokenForPin()

> **validateSecondFactorTokenForPin**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>

Validates and verifies the \'SecondFactorValidationToken\' generated by the Step-Up Authenticate By PIN API.

#### Parameters

##### requestParameters

[`AccountSecurityApiValidateSecondFactorTokenForPinRequest`](../interfaces/AccountSecurityApiValidateSecondFactorTokenForPinRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>

#### Throws

## Export
