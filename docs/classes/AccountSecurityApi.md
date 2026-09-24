[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSecurityApi

# Class: AccountSecurityApi

AccountSecurityApi - object-oriented interface

## Export

AccountSecurityApi

## Extends

- `BaseAPI`

## Implements

- [`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md)

## Constructors

### Constructor

> **new AccountSecurityApi**(`configuration?`, `basePath?`, `axios?`): `AccountSecurityApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`AccountSecurityApi`

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

### mfaGenerateBackupCodesByUid()

> **mfaGenerateBackupCodesByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md), `any`, \{ \}, `any`\>\>

Generates a set of backup codes for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMfaGenerateBackupCodesByUidRequest`](../interfaces/AccountSecurityApiMfaGenerateBackupCodesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`mfaGenerateBackupCodesByUid`](../interfaces/AccountSecurityApiInterface.md#mfageneratebackupcodesbyuid)

***

### mfaResetBackupCodesByUid()

> **mfaResetBackupCodesByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md), `any`, \{ \}, `any`\>\>

Resets and generates a new set of backup codes for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMfaResetBackupCodesByUidRequest`](../interfaces/AccountSecurityApiMfaResetBackupCodesByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`mfaResetBackupCodesByUid`](../interfaces/AccountSecurityApiInterface.md#mfaresetbackupcodesbyuid)

***

### mFAResetSMSAuthByUid()

> **mFAResetSMSAuthByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets MFA settings for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMFAResetSMSAuthByUidRequest`](../interfaces/AccountSecurityApiMFAResetSMSAuthByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`mFAResetSMSAuthByUid`](../interfaces/AccountSecurityApiInterface.md#mfaresetsmsauthbyuid)

***

### mFAResetTotpByUid()

> **mFAResetTotpByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets MFA settings for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiMFAResetTotpByUidRequest`](../interfaces/AccountSecurityApiMFAResetTotpByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`mFAResetTotpByUid`](../interfaces/AccountSecurityApiInterface.md#mfaresettotpbyuid)

***

### resetDuoAuthByUid()

> **resetDuoAuthByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets the Duo Authenticator for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetDuoAuthByUidRequest`](../interfaces/AccountSecurityApiResetDuoAuthByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`resetDuoAuthByUid`](../interfaces/AccountSecurityApiInterface.md#resetduoauthbyuid)

***

### resetEmailAuthenticatorByUid()

> **resetEmailAuthenticatorByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets the Email OTP Authenticator for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetEmailAuthenticatorByUidRequest`](../interfaces/AccountSecurityApiResetEmailAuthenticatorByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`resetEmailAuthenticatorByUid`](../interfaces/AccountSecurityApiInterface.md#resetemailauthenticatorbyuid)

***

### resetMfaPasskeyByUid()

> **resetMfaPasskeyByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets the MFA Passkey for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetMfaPasskeyByUidRequest`](../interfaces/AccountSecurityApiResetMfaPasskeyByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`resetMfaPasskeyByUid`](../interfaces/AccountSecurityApiInterface.md#resetmfapasskeybyuid)

***

### resetMfaPushByUid()

> **resetMfaPushByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets the Push Notification Authenticator for the specified User.

#### Parameters

##### requestParameters

[`AccountSecurityApiResetMfaPushByUidRequest`](../interfaces/AccountSecurityApiResetMfaPushByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`resetMfaPushByUid`](../interfaces/AccountSecurityApiInterface.md#resetmfapushbyuid)

***

### validateSecondFactorTokenForPassword()

> **validateSecondFactorTokenForPassword**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md), `any`, \{ \}, `any`\>\>

Validates and verifies the \'SecondFactorValidationToken\' generated by the Step-Up Authenticate By Password API.

#### Parameters

##### requestParameters

[`AccountSecurityApiValidateSecondFactorTokenForPasswordRequest`](../interfaces/AccountSecurityApiValidateSecondFactorTokenForPasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`validateSecondFactorTokenForPassword`](../interfaces/AccountSecurityApiInterface.md#validatesecondfactortokenforpassword)

***

### validateSecondFactorTokenForPin()

> **validateSecondFactorTokenForPin**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md), `any`, \{ \}, `any`\>\>

Validates and verifies the \'SecondFactorValidationToken\' generated by the Step-Up Authenticate By PIN API.

#### Parameters

##### requestParameters

[`AccountSecurityApiValidateSecondFactorTokenForPinRequest`](../interfaces/AccountSecurityApiValidateSecondFactorTokenForPinRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsValid`](../loginradius-sdk/namespaces/Models/interfaces/IsValid.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSecurityApi

#### Implementation of

[`AccountSecurityApiInterface`](../interfaces/AccountSecurityApiInterface.md).[`validateSecondFactorTokenForPin`](../interfaces/AccountSecurityApiInterface.md#validatesecondfactortokenforpin)
