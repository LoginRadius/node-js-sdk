[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSecurityApiInterface

# Interface: AccountSecurityApiInterface

AccountSecurityApi - interface

## Export

AccountSecurityApi

## Methods

### mfaGenerateBackupCodesByUid()

> **mfaGenerateBackupCodesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

Generates a set of backup codes for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMfaGenerateBackupCodesByUidRequest`](AccountSecurityApiMfaGenerateBackupCodesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface

***

### mfaResetBackupCodesByUid()

> **mfaResetBackupCodesByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

Resets and generates a new set of backup codes for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMfaResetBackupCodesByUidRequest`](AccountSecurityApiMfaResetBackupCodesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface

***

### mFAResetSMSAuthByUid()

> **mFAResetSMSAuthByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets MFA settings for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMFAResetSMSAuthByUidRequest`](AccountSecurityApiMFAResetSMSAuthByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface

***

### mFAResetTotpByUid()

> **mFAResetTotpByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets MFA settings for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMFAResetTotpByUidRequest`](AccountSecurityApiMFAResetTotpByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface

***

### resetDuoAuthByUid()

> **resetDuoAuthByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the Duo Authenticator for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetDuoAuthByUidRequest`](AccountSecurityApiResetDuoAuthByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface

***

### resetEmailAuthenticatorByUid()

> **resetEmailAuthenticatorByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the Email OTP Authenticator for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetEmailAuthenticatorByUidRequest`](AccountSecurityApiResetEmailAuthenticatorByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface

***

### resetMfaPasskeyByUid()

> **resetMfaPasskeyByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the MFA Passkey for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetMfaPasskeyByUidRequest`](AccountSecurityApiResetMfaPasskeyByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface

***

### resetMfaPushByUid()

> **resetMfaPushByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the Push Notification Authenticator for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetMfaPushByUidRequest`](AccountSecurityApiResetMfaPushByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface

***

### validateSecondFactorTokenForPassword()

> **validateSecondFactorTokenForPassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>

Validates and verifies the \'SecondFactorValidationToken\' generated by the Step-Up Authenticate By Password API.

#### Parameters

##### requestParameters

[`AccountSecurityApiValidateSecondFactorTokenForPasswordRequest`](AccountSecurityApiValidateSecondFactorTokenForPasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface

***

### validateSecondFactorTokenForPin()

> **validateSecondFactorTokenForPin**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>

Validates and verifies the \'SecondFactorValidationToken\' generated by the Step-Up Authenticate By PIN API.

#### Parameters

##### requestParameters

[`AccountSecurityApiValidateSecondFactorTokenForPinRequest`](AccountSecurityApiValidateSecondFactorTokenForPinRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md)\>

#### Throws

#### Memberof

AccountSecurityApiInterface
