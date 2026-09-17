[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApi

# Class: SecurityApi

SecurityApi - object-oriented interface

## Export

SecurityApi

## Extends

- `BaseAPI`

## Implements

- [`SecurityApiInterface`](../interfaces/SecurityApiInterface.md)

## Constructors

### Constructor

> **new SecurityApi**(`configuration?`, `basePath?`, `axios?`): `SecurityApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SecurityApi`

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

### accountRegisterMFAPasskeyBegin()

> **accountRegisterMFAPasskeyBegin**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md), `any`, \{ \}, `any`\>\>

Initiates the MFA Passkey registration flow for an Account.

#### Parameters

##### requestParameters?

[`SecurityApiAccountRegisterMFAPasskeyBeginRequest`](../interfaces/SecurityApiAccountRegisterMFAPasskeyBeginRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`accountRegisterMFAPasskeyBegin`](../interfaces/SecurityApiInterface.md#accountregistermfapasskeybegin)

***

### accountRegisterMFAPasskeyFinish()

> **accountRegisterMFAPasskeyFinish**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasskeyCredentialObject`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyCredentialObject.md), `any`, \{ \}, `any`\>\>

Completes the MFA Passkey registration flow for an Account.

#### Parameters

##### requestParameters

[`SecurityApiAccountRegisterMFAPasskeyFinishRequest`](../interfaces/SecurityApiAccountRegisterMFAPasskeyFinishRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasskeyCredentialObject`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyCredentialObject.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`accountRegisterMFAPasskeyFinish`](../interfaces/SecurityApiInterface.md#accountregistermfapasskeyfinish)

***

### beginMFAPasskeyRegistration()

> **beginMFAPasskeyRegistration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md), `any`, \{ \}, `any`\>\>

Begins the MFA Passkey registration flow.

#### Parameters

##### requestParameters

[`SecurityApiBeginMFAPasskeyRegistrationRequest`](../interfaces/SecurityApiBeginMFAPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`beginMFAPasskeyRegistration`](../interfaces/SecurityApiInterface.md#beginmfapasskeyregistration)

***

### beginPasskeyMFAVerification()

> **beginPasskeyMFAVerification**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`BeginPasskeyMFAVerification200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyMFAVerification200Response.md), `any`, \{ \}, `any`\>\>

Begins the MFA Passkey verification flow.

#### Parameters

##### requestParameters

[`SecurityApiBeginPasskeyMFAVerificationRequest`](../interfaces/SecurityApiBeginPasskeyMFAVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BeginPasskeyMFAVerification200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyMFAVerification200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`beginPasskeyMFAVerification`](../interfaces/SecurityApiInterface.md#beginpasskeymfaverification)

***

### changePinByAccessToken()

> **changePinByAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Updates an existing PIN by providing the current PIN and a valid Access Token for authentication, allowing a User to change their PIN while logged in.

#### Parameters

##### requestParameters

[`SecurityApiChangePinByAccessTokenRequest`](../interfaces/SecurityApiChangePinByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`changePinByAccessToken`](../interfaces/SecurityApiInterface.md#changepinbyaccesstoken)

***

### duoAuthenticationReAuthVerificationByAccessToken()

> **duoAuthenticationReAuthVerificationByAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

Verifies Duo authentication for a User using an Access Token, typically used when re-verification is required.

#### Parameters

##### requestParameters

[`SecurityApiDuoAuthenticationReAuthVerificationByAccessTokenRequest`](../interfaces/SecurityApiDuoAuthenticationReAuthVerificationByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`duoAuthenticationReAuthVerificationByAccessToken`](../interfaces/SecurityApiInterface.md#duoauthenticationreauthverificationbyaccesstoken)

***

### duoAuthenticationVerificationByAccessToken()

> **duoAuthenticationVerificationByAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md), `any`, \{ \}, `any`\>\>

Verifies Duo authentication for a User using an Access Token, typically after initial authentication.

#### Parameters

##### requestParameters

[`SecurityApiDuoAuthenticationVerificationByAccessTokenRequest`](../interfaces/SecurityApiDuoAuthenticationVerificationByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`duoAuthenticationVerificationByAccessToken`](../interfaces/SecurityApiInterface.md#duoauthenticationverificationbyaccesstoken)

***

### duoAuthVerificationByMFASecondFactorToken()

> **duoAuthVerificationByMFASecondFactorToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Verifies Duo authentication for a User using a second factor token.

#### Parameters

##### requestParameters

[`SecurityApiDuoAuthVerificationByMFASecondFactorTokenRequest`](../interfaces/SecurityApiDuoAuthVerificationByMFASecondFactorTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`duoAuthVerificationByMFASecondFactorToken`](../interfaces/SecurityApiInterface.md#duoauthverificationbymfasecondfactortoken)

***

### emailOTPAuthVerificationByAccessToken()

> **emailOTPAuthVerificationByAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md), `any`, \{ \}, `any`\>\>

Verifies Email OTP authentication for a User using an Access Token.

#### Parameters

##### requestParameters

[`SecurityApiEmailOTPAuthVerificationByAccessTokenRequest`](../interfaces/SecurityApiEmailOTPAuthVerificationByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`emailOTPAuthVerificationByAccessToken`](../interfaces/SecurityApiInterface.md#emailotpauthverificationbyaccesstoken)

***

### finishMFAPasskeyRegistration()

> **finishMFAPasskeyRegistration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Completes the MFA Passkey registration process using the provided MFA token.

#### Parameters

##### requestParameters

[`SecurityApiFinishMFAPasskeyRegistrationRequest`](../interfaces/SecurityApiFinishMFAPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`finishMFAPasskeyRegistration`](../interfaces/SecurityApiInterface.md#finishmfapasskeyregistration)

***

### finishPasskeyMFAVerification()

> **finishPasskeyMFAVerification**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Completes the MFA Passkey verification flow.

#### Parameters

##### requestParameters

[`SecurityApiFinishPasskeyMFAVerificationRequest`](../interfaces/SecurityApiFinishPasskeyMFAVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`finishPasskeyMFAVerification`](../interfaces/SecurityApiInterface.md#finishpasskeymfaverification)

***

### forgotPinByEmail()

> **forgotPinByEmail**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Sends a PIN reset Email to the User\'s registered Email, enabling them to reset their PIN if forgotten.

#### Parameters

##### requestParameters

[`SecurityApiForgotPinByEmailRequest`](../interfaces/SecurityApiForgotPinByEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`forgotPinByEmail`](../interfaces/SecurityApiInterface.md#forgotpinbyemail)

***

### forgotPinByPhone()

> **forgotPinByPhone**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

Sends a One-Time Password (OTP) to the User\'s registered Phone number, enabling them to reset their PIN if forgotten.

#### Parameters

##### requestParameters

[`SecurityApiForgotPinByPhoneRequest`](../interfaces/SecurityApiForgotPinByPhoneRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`forgotPinByPhone`](../interfaces/SecurityApiInterface.md#forgotpinbyphone)

***

### forgotPinByUsername()

> **forgotPinByUsername**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Sends a PIN reset Email to the User IDentified by their Username, enabling them to reset their PIN if forgotten.

#### Parameters

##### requestParameters

[`SecurityApiForgotPinByUsernameRequest`](../interfaces/SecurityApiForgotPinByUsernameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`forgotPinByUsername`](../interfaces/SecurityApiInterface.md#forgotpinbyusername)

***

### getMfaPushDeviceStatus()

> **getMfaPushDeviceStatus**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsRegistered`](../loginradius-sdk/namespaces/Models/interfaces/IsRegistered.md), `any`, \{ \}, `any`\>\>

Checks whether a Push Notification device is registered on the User\'s profile for MFA, using an Access Token.

#### Parameters

##### requestParameters?

[`SecurityApiGetMfaPushDeviceStatusRequest`](../interfaces/SecurityApiGetMfaPushDeviceStatusRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsRegistered`](../loginradius-sdk/namespaces/Models/interfaces/IsRegistered.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`getMfaPushDeviceStatus`](../interfaces/SecurityApiInterface.md#getmfapushdevicestatus)

***

### getMFASettings()

> **getMFASettings**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`TwoFactorAuthenticationSettings`](../loginradius-sdk/namespaces/Models/interfaces/TwoFactorAuthenticationSettings.md), `any`, \{ \}, `any`\>\>

Retrieves all MFA settings configured for the User, including the status of each authenticator type and available configuration details.

#### Parameters

##### requestParameters?

[`SecurityApiGetMFASettingsRequest`](../interfaces/SecurityApiGetMFASettingsRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`TwoFactorAuthenticationSettings`](../loginradius-sdk/namespaces/Models/interfaces/TwoFactorAuthenticationSettings.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`getMFASettings`](../interfaces/SecurityApiInterface.md#getmfasettings)

***

### mfaGenerateBackupCodes()

> **mfaGenerateBackupCodes**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md), `any`, \{ \}, `any`\>\>

Generates a set of backup codes for a User with MFA enabled. Returns an error if backup codes already exist.

#### Parameters

##### requestParameters?

[`SecurityApiMfaGenerateBackupCodesRequest`](../interfaces/SecurityApiMfaGenerateBackupCodesRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`mfaGenerateBackupCodes`](../interfaces/SecurityApiInterface.md#mfageneratebackupcodes)

***

### mfaResendPushNotification()

> **mfaResendPushNotification**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Resends a Push Notification for Multi-Factor Authentication.

#### Parameters

##### requestParameters

[`SecurityApiMfaResendPushNotificationRequest`](../interfaces/SecurityApiMfaResendPushNotificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`mfaResendPushNotification`](../interfaces/SecurityApiInterface.md#mfaresendpushnotification)

***

### mfaResetBackupCodes()

> **mfaResetBackupCodes**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md), `any`, \{ \}, `any`\>\>

Resets backup codes for a User with MFA enabled, allowing regeneration of backup codes.

#### Parameters

##### requestParameters?

[`SecurityApiMfaResetBackupCodesRequest`](../interfaces/SecurityApiMfaResetBackupCodesRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`mfaResetBackupCodes`](../interfaces/SecurityApiInterface.md#mfaresetbackupcodes)

***

### mFAResetSMSAuthByToken()

> **mFAResetSMSAuthByToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets SMS Authenticator configurations for an Account using an Access Token.

#### Parameters

##### requestParameters?

[`SecurityApiMFAResetSMSAuthByTokenRequest`](../interfaces/SecurityApiMFAResetSMSAuthByTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`mFAResetSMSAuthByToken`](../interfaces/SecurityApiInterface.md#mfaresetsmsauthbytoken)

***

### mFAResetTotpByToken()

> **mFAResetTotpByToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets TOTP Authenticator configurations for an Account using an Access Token.

#### Parameters

##### requestParameters?

[`SecurityApiMFAResetTotpByTokenRequest`](../interfaces/SecurityApiMFAResetTotpByTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`mFAResetTotpByToken`](../interfaces/SecurityApiInterface.md#mfaresettotpbytoken)

***

### mFAUpdatePhoneNumberByMfaToken()

> **mFAUpdatePhoneNumberByMfaToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md), `any`, \{ \}, `any`\>\>

Sends a verification OTP to the provided Phone number as part of the process to update the Phone number used for Multi-Factor Authentication.

#### Parameters

##### requestParameters

[`SecurityApiMFAUpdatePhoneNumberByMfaTokenRequest`](../interfaces/SecurityApiMFAUpdatePhoneNumberByMfaTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`mFAUpdatePhoneNumberByMfaToken`](../interfaces/SecurityApiInterface.md#mfaupdatephonenumberbymfatoken)

***

### mFAUpdatePhoneNumberByToken()

> **mFAUpdatePhoneNumberByToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md), `any`, \{ \}, `any`\>\>

Sends a verification OTP to the provided Phone number as part of the process to update the Phone number used for MFA.

#### Parameters

##### requestParameters

[`SecurityApiMFAUpdatePhoneNumberByTokenRequest`](../interfaces/SecurityApiMFAUpdatePhoneNumberByTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`mFAUpdatePhoneNumberByToken`](../interfaces/SecurityApiInterface.md#mfaupdatephonenumberbytoken)

***

### mFAVerifyPhoneNumberByAccessToken()

> **mFAVerifyPhoneNumberByAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md), `any`, \{ \}, `any`\>\>

Updates Phone-based MFA settings after a successful login, managing or verifying Phone MFA configurations for secure operations.

#### Parameters

##### requestParameters

[`SecurityApiMFAVerifyPhoneNumberByAccessTokenRequest`](../interfaces/SecurityApiMFAVerifyPhoneNumberByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`mFAVerifyPhoneNumberByAccessToken`](../interfaces/SecurityApiInterface.md#mfaverifyphonenumberbyaccesstoken)

***

### pingPushVerificationStatus()

> **pingPushVerificationStatus**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Checks the status of Push Notification verification and returns the login response when verified.

#### Parameters

##### requestParameters

[`SecurityApiPingPushVerificationStatusRequest`](../interfaces/SecurityApiPingPushVerificationStatusRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`pingPushVerificationStatus`](../interfaces/SecurityApiInterface.md#pingpushverificationstatus)

***

### pINLogin()

> **pINLogin**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Allows Users to log in using their previously set PIN along with a valid session token.

#### Parameters

##### requestParameters

[`SecurityApiPINLoginRequest`](../interfaces/SecurityApiPINLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`pINLogin`](../interfaces/SecurityApiInterface.md#pinlogin)

***

### reauthPassword()

> **reauthPassword**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

Verifies the Password for a User using an Access Token, typically used when re-verification is required.

#### Parameters

##### requestParameters

[`SecurityApiReauthPasswordRequest`](../interfaces/SecurityApiReauthPasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`reauthPassword`](../interfaces/SecurityApiInterface.md#reauthpassword)

***

### reauthPin()

> **reauthPin**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

Verifies the PIN for a User using an Access Token, typically used when re-verification is required.

#### Parameters

##### requestParameters

[`SecurityApiReauthPinRequest`](../interfaces/SecurityApiReauthPinRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`reauthPin`](../interfaces/SecurityApiInterface.md#reauthpin)

***

### reauthTrigger()

> **reauthTrigger**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`TwoFactorAuthenticationSettings`](../loginradius-sdk/namespaces/Models/interfaces/TwoFactorAuthenticationSettings.md), `any`, \{ \}, `any`\>\>

Triggers Step-Up Authentication for Multi-Factor Authentication (MFA) settings, allowing Users to verify their MFA methods.

#### Parameters

##### requestParameters?

[`SecurityApiReauthTriggerRequest`](../interfaces/SecurityApiReauthTriggerRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`TwoFactorAuthenticationSettings`](../loginradius-sdk/namespaces/Models/interfaces/TwoFactorAuthenticationSettings.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`reauthTrigger`](../interfaces/SecurityApiInterface.md#reauthtrigger)

***

### resend2FAOTP()

> **resend2FAOTP**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md), `any`, \{ \}, `any`\>\>

Resends the Multi-Factor Authentication OTP via SMS for login.

#### Parameters

##### requestParameters

[`SecurityApiResend2FAOTPRequest`](../interfaces/SecurityApiResend2FAOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resend2FAOTP`](../interfaces/SecurityApiInterface.md#resend2faotp)

***

### resend2faSMSOtp()

> **resend2faSMSOtp**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md), `any`, \{ \}, `any`\>\>

Resends the Multi-Factor Authentication OTP via SMS for login.

#### Parameters

##### requestParameters

[`SecurityApiResend2faSMSOtpRequest`](../interfaces/SecurityApiResend2faSMSOtpRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resend2faSMSOtp`](../interfaces/SecurityApiInterface.md#resend2fasmsotp)

***

### resendEmailOTPMFAToken()

> **resendEmailOTPMFAToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Sends the OTP to the Email if the Email OTP authenticator is enabled in the Tenant\'s MFA configuration.

#### Parameters

##### requestParameters

[`SecurityApiResendEmailOTPMFATokenRequest`](../interfaces/SecurityApiResendEmailOTPMFATokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resendEmailOTPMFAToken`](../interfaces/SecurityApiInterface.md#resendemailotpmfatoken)

***

### resendTwoFactorEmailOtp()

> **resendTwoFactorEmailOtp**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Sends the OTP to the Email if the Email OTP Authenticator is enabled in the Tenant\'s MFA configuration.

#### Parameters

##### requestParameters?

[`SecurityApiResendTwoFactorEmailOtpRequest`](../interfaces/SecurityApiResendTwoFactorEmailOtpRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resendTwoFactorEmailOtp`](../interfaces/SecurityApiInterface.md#resendtwofactoremailotp)

***

### resetDuoAuthViaAccessToken()

> **resetDuoAuthViaAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets the Duo Authenticator settings for a User with MFA enabled, allowing reconfiguration or recovery of Duo access.

#### Parameters

##### requestParameters?

[`SecurityApiResetDuoAuthViaAccessTokenRequest`](../interfaces/SecurityApiResetDuoAuthViaAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resetDuoAuthViaAccessToken`](../interfaces/SecurityApiInterface.md#resetduoauthviaaccesstoken)

***

### resetMFAEmailAuthByAccessToken()

> **resetMFAEmailAuthByAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets the Email OTP Authenticator settings for a User with MFA enabled, allowing reconfiguration.

#### Parameters

##### requestParameters?

[`SecurityApiResetMFAEmailAuthByAccessTokenRequest`](../interfaces/SecurityApiResetMFAEmailAuthByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resetMFAEmailAuthByAccessToken`](../interfaces/SecurityApiInterface.md#resetmfaemailauthbyaccesstoken)

***

### resetMFAPasskeyByAccessToken()

> **resetMFAPasskeyByAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets the Passkey Authenticator settings for the specified User.

#### Parameters

##### requestParameters?

[`SecurityApiResetMFAPasskeyByAccessTokenRequest`](../interfaces/SecurityApiResetMFAPasskeyByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resetMFAPasskeyByAccessToken`](../interfaces/SecurityApiInterface.md#resetmfapasskeybyaccesstoken)

***

### resetMfaPushAuthSettings()

> **resetMfaPushAuthSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Resets the MFA Push Authenticator settings for a User.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resetMfaPushAuthSettings`](../interfaces/SecurityApiInterface.md#resetmfapushauthsettings)

***

### resetPinByOTP()

> **resetPinByOTP**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Allows a User to reset their PIN by verifying a One-Time Password (OTP). The User must provide the OTP, a new PIN, and one identifier (Phone, Email, or Username), enabling secure PIN recovery when the User forgets their PIN.

#### Parameters

##### requestParameters

[`SecurityApiResetPinByOTPRequest`](../interfaces/SecurityApiResetPinByOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resetPinByOTP`](../interfaces/SecurityApiInterface.md#resetpinbyotp)

***

### resetPinByResetToken()

> **resetPinByResetToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Allows a User to reset their PIN by providing a reset token received via Email and a new PIN, enabling secure PIN recovery when the User forgets their PIN.

#### Parameters

##### requestParameters

[`SecurityApiResetPinByResetTokenRequest`](../interfaces/SecurityApiResetPinByResetTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`resetPinByResetToken`](../interfaces/SecurityApiInterface.md#resetpinbyresettoken)

***

### sendEmailOtpForReauthMFA()

> **sendEmailOtpForReauthMFA**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Sends a One-Time Password (OTP) to the User\'s Email for re-authentication.

#### Parameters

##### requestParameters?

[`SecurityApiSendEmailOtpForReauthMFARequest`](../interfaces/SecurityApiSendEmailOtpForReauthMFARequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`sendEmailOtpForReauthMFA`](../interfaces/SecurityApiInterface.md#sendemailotpforreauthmfa)

***

### sendReAuthEmailOtp()

> **sendReAuthEmailOtp**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Sends a One-Time Password (OTP) to the User\'s Email for re-authentication.

#### Parameters

##### requestParameters?

[`SecurityApiSendReAuthEmailOtpRequest`](../interfaces/SecurityApiSendReAuthEmailOtpRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`sendReAuthEmailOtp`](../interfaces/SecurityApiInterface.md#sendreauthemailotp)

***

### setPinByPinAuthToken()

> **setPinByPinAuthToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Sets a PIN for Users logging in or registering for the first time. Requires a valid PIN authentication token and is typically part of the onboarding or initial setup process.

#### Parameters

##### requestParameters

[`SecurityApiSetPinByPinAuthTokenRequest`](../interfaces/SecurityApiSetPinByPinAuthTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`setPinByPinAuthToken`](../interfaces/SecurityApiInterface.md#setpinbypinauthtoken)

***

### validateEmailOtpForReauth()

> **validateEmailOtpForReauth**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

Validates the One-Time Password (OTP) sent to the User\'s Email during re-authentication.

#### Parameters

##### requestParameters

[`SecurityApiValidateEmailOtpForReauthRequest`](../interfaces/SecurityApiValidateEmailOtpForReauthRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`validateEmailOtpForReauth`](../interfaces/SecurityApiInterface.md#validateemailotpforreauth)

***

### validateEmailOtpForReauthMFA()

> **validateEmailOtpForReauthMFA**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

Verifies the User with Email OTP and Access Token, typically used when re-authentication via Email OTP is required.

#### Parameters

##### requestParameters

[`SecurityApiValidateEmailOtpForReauthMFARequest`](../interfaces/SecurityApiValidateEmailOtpForReauthMFARequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`validateEmailOtpForReauthMFA`](../interfaces/SecurityApiInterface.md#validateemailotpforreauthmfa)

***

### validateMfaOTPByEmail()

> **validateMfaOTPByEmail**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Logs in to a User\'s account during the second MFA step with an OTP sent to the Email.

#### Parameters

##### requestParameters

[`SecurityApiValidateMfaOTPByEmailRequest`](../interfaces/SecurityApiValidateMfaOTPByEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`validateMfaOTPByEmail`](../interfaces/SecurityApiInterface.md#validatemfaotpbyemail)

***

### validateMfaOTPByPhone()

> **validateMfaOTPByPhone**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Allows Users to log in with Multi-Factor Authentication using the OTP sent via SMS or Voice OTP.

#### Parameters

##### requestParameters

[`SecurityApiValidateMfaOTPByPhoneRequest`](../interfaces/SecurityApiValidateMfaOTPByPhoneRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`validateMfaOTPByPhone`](../interfaces/SecurityApiInterface.md#validatemfaotpbyphone)

***

### validateReauthMFA()

> **validateReauthMFA**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

Validates the triggered MFA authentication flow using a backup code, OTP, or authenticator code.

#### Parameters

##### requestParameters

[`SecurityApiValidateReauthMFARequest`](../interfaces/SecurityApiValidateReauthMFARequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`validateReauthMFA`](../interfaces/SecurityApiInterface.md#validatereauthmfa)

***

### validateSecurityQuestionReauthMFA()

> **validateSecurityQuestionReauthMFA**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

Validates the triggered MFA authentication flow using a security question answer.

#### Parameters

##### requestParameters

[`SecurityApiValidateSecurityQuestionReauthMFARequest`](../interfaces/SecurityApiValidateSecurityQuestionReauthMFARequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`validateSecurityQuestionReauthMFA`](../interfaces/SecurityApiInterface.md#validatesecurityquestionreauthmfa)

***

### verify2faTOTPAuth()

> **verify2faTOTPAuth**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

Validates an Authenticator Code as part of the MFA process.

#### Parameters

##### requestParameters

[`SecurityApiVerify2faTOTPAuthRequest`](../interfaces/SecurityApiVerify2faTOTPAuthRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`verify2faTOTPAuth`](../interfaces/SecurityApiInterface.md#verify2fatotpauth)

***

### verifyBackupCodeForMFALogin()

> **verifyBackupCodeForMFALogin**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Verifies a User\'s MFA backup code as a second factor during the login process, typically used when the primary MFA method is unavailable.

#### Parameters

##### requestParameters

[`SecurityApiVerifyBackupCodeForMFALoginRequest`](../interfaces/SecurityApiVerifyBackupCodeForMFALoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`verifyBackupCodeForMFALogin`](../interfaces/SecurityApiInterface.md#verifybackupcodeformfalogin)

***

### verifyTotpByMfaToken()

> **verifyTotpByMfaToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Validates the TOTP Authenticator code provided by the User as part of the Multi-Factor Authentication login process.

#### Parameters

##### requestParameters

[`SecurityApiVerifyTotpByMfaTokenRequest`](../interfaces/SecurityApiVerifyTotpByMfaTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityApi

#### Implementation of

[`SecurityApiInterface`](../interfaces/SecurityApiInterface.md).[`verifyTotpByMfaToken`](../interfaces/SecurityApiInterface.md#verifytotpbymfatoken)
