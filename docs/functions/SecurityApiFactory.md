[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiFactory

# Function: SecurityApiFactory()

> **SecurityApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

SecurityApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### accountRegisterMFAPasskeyBegin()

> **accountRegisterMFAPasskeyBegin**(`requestParameters?`, `options?`): `AxiosPromise`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md)\>

Initiates the MFA Passkey registration flow for an Account.

#### Parameters

##### requestParameters?

[`SecurityApiAccountRegisterMFAPasskeyBeginRequest`](../interfaces/SecurityApiAccountRegisterMFAPasskeyBeginRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md)\>

#### Throws

### accountRegisterMFAPasskeyFinish()

> **accountRegisterMFAPasskeyFinish**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasskeyCredentialObject`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyCredentialObject.md)\>

Completes the MFA Passkey registration flow for an Account.

#### Parameters

##### requestParameters

[`SecurityApiAccountRegisterMFAPasskeyFinishRequest`](../interfaces/SecurityApiAccountRegisterMFAPasskeyFinishRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasskeyCredentialObject`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyCredentialObject.md)\>

#### Throws

### beginMFAPasskeyRegistration()

> **beginMFAPasskeyRegistration**(`requestParameters`, `options?`): `AxiosPromise`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md)\>

Begins the MFA Passkey registration flow.

#### Parameters

##### requestParameters

[`SecurityApiBeginMFAPasskeyRegistrationRequest`](../interfaces/SecurityApiBeginMFAPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md)\>

#### Throws

### beginPasskeyMFAVerification()

> **beginPasskeyMFAVerification**(`requestParameters`, `options?`): `AxiosPromise`\<[`BeginPasskeyMFAVerification200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyMFAVerification200Response.md)\>

Begins the MFA Passkey verification flow.

#### Parameters

##### requestParameters

[`SecurityApiBeginPasskeyMFAVerificationRequest`](../interfaces/SecurityApiBeginPasskeyMFAVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BeginPasskeyMFAVerification200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyMFAVerification200Response.md)\>

#### Throws

### changePinByAccessToken()

> **changePinByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Updates an existing PIN by providing the current PIN and a valid Access Token for authentication, allowing a User to change their PIN while logged in.

#### Parameters

##### requestParameters

[`SecurityApiChangePinByAccessTokenRequest`](../interfaces/SecurityApiChangePinByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### duoAuthenticationReAuthVerificationByAccessToken()

> **duoAuthenticationReAuthVerificationByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

Verifies Duo authentication for a User using an Access Token, typically used when re-verification is required.

#### Parameters

##### requestParameters

[`SecurityApiDuoAuthenticationReAuthVerificationByAccessTokenRequest`](../interfaces/SecurityApiDuoAuthenticationReAuthVerificationByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

#### Throws

### duoAuthenticationVerificationByAccessToken()

> **duoAuthenticationVerificationByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

Verifies Duo authentication for a User using an Access Token, typically after initial authentication.

#### Parameters

##### requestParameters

[`SecurityApiDuoAuthenticationVerificationByAccessTokenRequest`](../interfaces/SecurityApiDuoAuthenticationVerificationByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

#### Throws

### duoAuthVerificationByMFASecondFactorToken()

> **duoAuthVerificationByMFASecondFactorToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Verifies Duo authentication for a User using a second factor token.

#### Parameters

##### requestParameters

[`SecurityApiDuoAuthVerificationByMFASecondFactorTokenRequest`](../interfaces/SecurityApiDuoAuthVerificationByMFASecondFactorTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### emailOTPAuthVerificationByAccessToken()

> **emailOTPAuthVerificationByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

Verifies Email OTP authentication for a User using an Access Token.

#### Parameters

##### requestParameters

[`SecurityApiEmailOTPAuthVerificationByAccessTokenRequest`](../interfaces/SecurityApiEmailOTPAuthVerificationByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

#### Throws

### finishMFAPasskeyRegistration()

> **finishMFAPasskeyRegistration**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Completes the MFA Passkey registration process using the provided MFA token.

#### Parameters

##### requestParameters

[`SecurityApiFinishMFAPasskeyRegistrationRequest`](../interfaces/SecurityApiFinishMFAPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### finishPasskeyMFAVerification()

> **finishPasskeyMFAVerification**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Completes the MFA Passkey verification flow.

#### Parameters

##### requestParameters

[`SecurityApiFinishPasskeyMFAVerificationRequest`](../interfaces/SecurityApiFinishPasskeyMFAVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### forgotPinByEmail()

> **forgotPinByEmail**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sends a PIN reset Email to the User\'s registered Email, enabling them to reset their PIN if forgotten.

#### Parameters

##### requestParameters

[`SecurityApiForgotPinByEmailRequest`](../interfaces/SecurityApiForgotPinByEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### forgotPinByPhone()

> **forgotPinByPhone**(`requestParameters`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Sends a One-Time Password (OTP) to the User\'s registered Phone number, enabling them to reset their PIN if forgotten.

#### Parameters

##### requestParameters

[`SecurityApiForgotPinByPhoneRequest`](../interfaces/SecurityApiForgotPinByPhoneRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

### forgotPinByUsername()

> **forgotPinByUsername**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sends a PIN reset Email to the User IDentified by their Username, enabling them to reset their PIN if forgotten.

#### Parameters

##### requestParameters

[`SecurityApiForgotPinByUsernameRequest`](../interfaces/SecurityApiForgotPinByUsernameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### getMfaPushDeviceStatus()

> **getMfaPushDeviceStatus**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsRegistered`](../loginradius-sdk/namespaces/Models/interfaces/IsRegistered.md)\>

Checks whether a Push Notification device is registered on the User\'s profile for MFA, using an Access Token.

#### Parameters

##### requestParameters?

[`SecurityApiGetMfaPushDeviceStatusRequest`](../interfaces/SecurityApiGetMfaPushDeviceStatusRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsRegistered`](../loginradius-sdk/namespaces/Models/interfaces/IsRegistered.md)\>

#### Throws

### getMFASettings()

> **getMFASettings**(`requestParameters?`, `options?`): `AxiosPromise`\<[`TwoFactorAuthenticationSettings`](../loginradius-sdk/namespaces/Models/interfaces/TwoFactorAuthenticationSettings.md)\>

Retrieves all MFA settings configured for the User, including the status of each authenticator type and available configuration details.

#### Parameters

##### requestParameters?

[`SecurityApiGetMFASettingsRequest`](../interfaces/SecurityApiGetMFASettingsRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`TwoFactorAuthenticationSettings`](../loginradius-sdk/namespaces/Models/interfaces/TwoFactorAuthenticationSettings.md)\>

#### Throws

### mfaGenerateBackupCodes()

> **mfaGenerateBackupCodes**(`requestParameters?`, `options?`): `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

Generates a set of backup codes for a User with MFA enabled. Returns an error if backup codes already exist.

#### Parameters

##### requestParameters?

[`SecurityApiMfaGenerateBackupCodesRequest`](../interfaces/SecurityApiMfaGenerateBackupCodesRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

#### Throws

### mfaResendPushNotification()

> **mfaResendPushNotification**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Resends a Push Notification for Multi-Factor Authentication.

#### Parameters

##### requestParameters

[`SecurityApiMfaResendPushNotificationRequest`](../interfaces/SecurityApiMfaResendPushNotificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### mfaResetBackupCodes()

> **mfaResetBackupCodes**(`requestParameters?`, `options?`): `AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

Resets backup codes for a User with MFA enabled, allowing regeneration of backup codes.

#### Parameters

##### requestParameters?

[`SecurityApiMfaResetBackupCodesRequest`](../interfaces/SecurityApiMfaResetBackupCodesRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`MFABackUpCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/MFABackUpCodeResponse.md)\>

#### Throws

### mFAResetSMSAuthByToken()

> **mFAResetSMSAuthByToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets SMS Authenticator configurations for an Account using an Access Token.

#### Parameters

##### requestParameters?

[`SecurityApiMFAResetSMSAuthByTokenRequest`](../interfaces/SecurityApiMFAResetSMSAuthByTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### mFAResetTotpByToken()

> **mFAResetTotpByToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets TOTP Authenticator configurations for an Account using an Access Token.

#### Parameters

##### requestParameters?

[`SecurityApiMFAResetTotpByTokenRequest`](../interfaces/SecurityApiMFAResetTotpByTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### mFAUpdatePhoneNumberByMfaToken()

> **mFAUpdatePhoneNumberByMfaToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md)\>

Sends a verification OTP to the provided Phone number as part of the process to update the Phone number used for Multi-Factor Authentication.

#### Parameters

##### requestParameters

[`SecurityApiMFAUpdatePhoneNumberByMfaTokenRequest`](../interfaces/SecurityApiMFAUpdatePhoneNumberByMfaTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md)\>

#### Throws

### mFAUpdatePhoneNumberByToken()

> **mFAUpdatePhoneNumberByToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md)\>

Sends a verification OTP to the provided Phone number as part of the process to update the Phone number used for MFA.

#### Parameters

##### requestParameters

[`SecurityApiMFAUpdatePhoneNumberByTokenRequest`](../interfaces/SecurityApiMFAUpdatePhoneNumberByTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md)\>

#### Throws

### mFAVerifyPhoneNumberByAccessToken()

> **mFAVerifyPhoneNumberByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

Updates Phone-based MFA settings after a successful login, managing or verifying Phone MFA configurations for secure operations.

#### Parameters

##### requestParameters

[`SecurityApiMFAVerifyPhoneNumberByAccessTokenRequest`](../interfaces/SecurityApiMFAVerifyPhoneNumberByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

#### Throws

### pingPushVerificationStatus()

> **pingPushVerificationStatus**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Checks the status of Push Notification verification and returns the login response when verified.

#### Parameters

##### requestParameters

[`SecurityApiPingPushVerificationStatusRequest`](../interfaces/SecurityApiPingPushVerificationStatusRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### pINLogin()

> **pINLogin**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Allows Users to log in using their previously set PIN along with a valid session token.

#### Parameters

##### requestParameters

[`SecurityApiPINLoginRequest`](../interfaces/SecurityApiPINLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### reauthPassword()

> **reauthPassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

Verifies the Password for a User using an Access Token, typically used when re-verification is required.

#### Parameters

##### requestParameters

[`SecurityApiReauthPasswordRequest`](../interfaces/SecurityApiReauthPasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

#### Throws

### reauthPin()

> **reauthPin**(`requestParameters`, `options?`): `AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

Verifies the PIN for a User using an Access Token, typically used when re-verification is required.

#### Parameters

##### requestParameters

[`SecurityApiReauthPinRequest`](../interfaces/SecurityApiReauthPinRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

#### Throws

### reauthTrigger()

> **reauthTrigger**(`requestParameters?`, `options?`): `AxiosPromise`\<[`TwoFactorAuthenticationSettings`](../loginradius-sdk/namespaces/Models/interfaces/TwoFactorAuthenticationSettings.md)\>

Triggers Step-Up Authentication for Multi-Factor Authentication (MFA) settings, allowing Users to verify their MFA methods.

#### Parameters

##### requestParameters?

[`SecurityApiReauthTriggerRequest`](../interfaces/SecurityApiReauthTriggerRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`TwoFactorAuthenticationSettings`](../loginradius-sdk/namespaces/Models/interfaces/TwoFactorAuthenticationSettings.md)\>

#### Throws

### resend2FAOTP()

> **resend2FAOTP**(`requestParameters`, `options?`): `AxiosPromise`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md)\>

Resends the Multi-Factor Authentication OTP via SMS for login.

#### Parameters

##### requestParameters

[`SecurityApiResend2FAOTPRequest`](../interfaces/SecurityApiResend2FAOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md)\>

#### Throws

### resend2faSMSOtp()

> **resend2faSMSOtp**(`requestParameters`, `options?`): `AxiosPromise`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md)\>

Resends the Multi-Factor Authentication OTP via SMS for login.

#### Parameters

##### requestParameters

[`SecurityApiResend2faSMSOtpRequest`](../interfaces/SecurityApiResend2faSMSOtpRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponseData`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponseData.md)\>

#### Throws

### resendEmailOTPMFAToken()

> **resendEmailOTPMFAToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sends the OTP to the Email if the Email OTP authenticator is enabled in the Tenant\'s MFA configuration.

#### Parameters

##### requestParameters

[`SecurityApiResendEmailOTPMFATokenRequest`](../interfaces/SecurityApiResendEmailOTPMFATokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### resendTwoFactorEmailOtp()

> **resendTwoFactorEmailOtp**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sends the OTP to the Email if the Email OTP Authenticator is enabled in the Tenant\'s MFA configuration.

#### Parameters

##### requestParameters?

[`SecurityApiResendTwoFactorEmailOtpRequest`](../interfaces/SecurityApiResendTwoFactorEmailOtpRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### resetDuoAuthViaAccessToken()

> **resetDuoAuthViaAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the Duo Authenticator settings for a User with MFA enabled, allowing reconfiguration or recovery of Duo access.

#### Parameters

##### requestParameters?

[`SecurityApiResetDuoAuthViaAccessTokenRequest`](../interfaces/SecurityApiResetDuoAuthViaAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### resetMFAEmailAuthByAccessToken()

> **resetMFAEmailAuthByAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the Email OTP Authenticator settings for a User with MFA enabled, allowing reconfiguration.

#### Parameters

##### requestParameters?

[`SecurityApiResetMFAEmailAuthByAccessTokenRequest`](../interfaces/SecurityApiResetMFAEmailAuthByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### resetMFAPasskeyByAccessToken()

> **resetMFAPasskeyByAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the Passkey Authenticator settings for the specified User.

#### Parameters

##### requestParameters?

[`SecurityApiResetMFAPasskeyByAccessTokenRequest`](../interfaces/SecurityApiResetMFAPasskeyByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### resetMfaPushAuthSettings()

> **resetMfaPushAuthSettings**(`options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Resets the MFA Push Authenticator settings for a User.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### resetPinByOTP()

> **resetPinByOTP**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Allows a User to reset their PIN by verifying a One-Time Password (OTP). The User must provide the OTP, a new PIN, and one identifier (Phone, Email, or Username), enabling secure PIN recovery when the User forgets their PIN.

#### Parameters

##### requestParameters

[`SecurityApiResetPinByOTPRequest`](../interfaces/SecurityApiResetPinByOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### resetPinByResetToken()

> **resetPinByResetToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Allows a User to reset their PIN by providing a reset token received via Email and a new PIN, enabling secure PIN recovery when the User forgets their PIN.

#### Parameters

##### requestParameters

[`SecurityApiResetPinByResetTokenRequest`](../interfaces/SecurityApiResetPinByResetTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### sendEmailOtpForReauthMFA()

> **sendEmailOtpForReauthMFA**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sends a One-Time Password (OTP) to the User\'s Email for re-authentication.

#### Parameters

##### requestParameters?

[`SecurityApiSendEmailOtpForReauthMFARequest`](../interfaces/SecurityApiSendEmailOtpForReauthMFARequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### sendReAuthEmailOtp()

> **sendReAuthEmailOtp**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sends a One-Time Password (OTP) to the User\'s Email for re-authentication.

#### Parameters

##### requestParameters?

[`SecurityApiSendReAuthEmailOtpRequest`](../interfaces/SecurityApiSendReAuthEmailOtpRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### setPinByPinAuthToken()

> **setPinByPinAuthToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Sets a PIN for Users logging in or registering for the first time. Requires a valid PIN authentication token and is typically part of the onboarding or initial setup process.

#### Parameters

##### requestParameters

[`SecurityApiSetPinByPinAuthTokenRequest`](../interfaces/SecurityApiSetPinByPinAuthTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### validateEmailOtpForReauth()

> **validateEmailOtpForReauth**(`requestParameters`, `options?`): `AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

Validates the One-Time Password (OTP) sent to the User\'s Email during re-authentication.

#### Parameters

##### requestParameters

[`SecurityApiValidateEmailOtpForReauthRequest`](../interfaces/SecurityApiValidateEmailOtpForReauthRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

#### Throws

### validateEmailOtpForReauthMFA()

> **validateEmailOtpForReauthMFA**(`requestParameters`, `options?`): `AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

Verifies the User with Email OTP and Access Token, typically used when re-authentication via Email OTP is required.

#### Parameters

##### requestParameters

[`SecurityApiValidateEmailOtpForReauthMFARequest`](../interfaces/SecurityApiValidateEmailOtpForReauthMFARequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

#### Throws

### validateMfaOTPByEmail()

> **validateMfaOTPByEmail**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Logs in to a User\'s account during the second MFA step with an OTP sent to the Email.

#### Parameters

##### requestParameters

[`SecurityApiValidateMfaOTPByEmailRequest`](../interfaces/SecurityApiValidateMfaOTPByEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### validateMfaOTPByPhone()

> **validateMfaOTPByPhone**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Allows Users to log in with Multi-Factor Authentication using the OTP sent via SMS or Voice OTP.

#### Parameters

##### requestParameters

[`SecurityApiValidateMfaOTPByPhoneRequest`](../interfaces/SecurityApiValidateMfaOTPByPhoneRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### validateReauthMFA()

> **validateReauthMFA**(`requestParameters`, `options?`): `AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

Validates the triggered MFA authentication flow using a backup code, OTP, or authenticator code.

#### Parameters

##### requestParameters

[`SecurityApiValidateReauthMFARequest`](../interfaces/SecurityApiValidateReauthMFARequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

#### Throws

### validateSecurityQuestionReauthMFA()

> **validateSecurityQuestionReauthMFA**(`requestParameters`, `options?`): `AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

Validates the triggered MFA authentication flow using a security question answer.

#### Parameters

##### requestParameters

[`SecurityApiValidateSecurityQuestionReauthMFARequest`](../interfaces/SecurityApiValidateSecurityQuestionReauthMFARequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ReAuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthResponse.md)\>

#### Throws

### verify2faTOTPAuth()

> **verify2faTOTPAuth**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Validates an Authenticator Code as part of the MFA process.

#### Parameters

##### requestParameters

[`SecurityApiVerify2faTOTPAuthRequest`](../interfaces/SecurityApiVerify2faTOTPAuthRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

### verifyBackupCodeForMFALogin()

> **verifyBackupCodeForMFALogin**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Verifies a User\'s MFA backup code as a second factor during the login process, typically used when the primary MFA method is unavailable.

#### Parameters

##### requestParameters

[`SecurityApiVerifyBackupCodeForMFALoginRequest`](../interfaces/SecurityApiVerifyBackupCodeForMFALoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### verifyTotpByMfaToken()

> **verifyTotpByMfaToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Validates the TOTP Authenticator code provided by the User as part of the Multi-Factor Authentication login process.

#### Parameters

##### requestParameters

[`SecurityApiVerifyTotpByMfaTokenRequest`](../interfaces/SecurityApiVerifyTotpByMfaTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

## Export
