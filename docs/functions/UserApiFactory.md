[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiFactory

# Function: UserApiFactory()

> **UserApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

UserApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### accountListPasskey()

> **accountListPasskey**(`requestParameters?`, `options?`): `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

Lists all registered Passkeys for a User with a valid Access Token.

#### Parameters

##### requestParameters?

[`UserApiAccountListPasskeyRequest`](../interfaces/UserApiAccountListPasskeyRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

#### Throws

### accountRemovePasskey()

> **accountRemovePasskey**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Removes a specific Passkey from the User\'s Account.

#### Parameters

##### requestParameters

[`UserApiAccountRemovePasskeyRequest`](../interfaces/UserApiAccountRemovePasskeyRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### addEmail()

> **addEmail**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Adds an Email to a User\'s account, either as a primary or additional Email.

#### Parameters

##### requestParameters

[`UserApiAddEmailRequest`](../interfaces/UserApiAddEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### changePhoneNumber()

> **changePhoneNumber**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Updates the User\'s Phone number using the Access Token.

#### Parameters

##### requestParameters?

[`UserApiChangePhoneNumberRequest`](../interfaces/UserApiChangePhoneNumberRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

### checkEmailAvailability()

> **checkEmailAvailability**(`requestParameters?`, `options?`): `AxiosPromise`\<[`CheckEmailAvailability200Response`](../loginradius-sdk/namespaces/Models/type-aliases/CheckEmailAvailability200Response.md)\>

Verifies Email availability or checks Email using a Verification Token or OTP.

#### Parameters

##### requestParameters?

[`UserApiCheckEmailAvailabilityRequest`](../interfaces/UserApiCheckEmailAvailabilityRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CheckEmailAvailability200Response`](../loginradius-sdk/namespaces/Models/type-aliases/CheckEmailAvailability200Response.md)\>

#### Throws

### deleteAccByPhoneOTP()

> **deleteAccByPhoneOTP**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes an Account using a Phone OTP.

#### Parameters

##### requestParameters?

[`UserApiDeleteAccByPhoneOTPRequest`](../interfaces/UserApiDeleteAccByPhoneOTPRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### deleteAccount()

> **deleteAccount**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Deletes an Account using a delete token or OTP.

#### Parameters

##### requestParameters?

[`UserApiDeleteAccountRequest`](../interfaces/UserApiDeleteAccountRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### deleteAccountByAccessToken()

> **deleteAccountByAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleteRequestAccepted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleteRequestAccepted.md)\>

Sends a confirmation Email for User deletion to the User\'s Email using their Access Token.

#### Parameters

##### requestParameters?

[`UserApiDeleteAccountByAccessTokenRequest`](../interfaces/UserApiDeleteAccountByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleteRequestAccepted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleteRequestAccepted.md)\>

#### Throws

### deleteemailbyaccesstoken()

> **deleteemailbyaccesstoken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Removes additional Emails from a User\'s account.

#### Parameters

##### requestParameters

[`UserApiDeleteemailbyaccesstokenRequest`](../interfaces/UserApiDeleteemailbyaccesstokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### getAccountDetails()

> **getAccountDetails**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Retrieves User details based on the Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetAccountDetailsRequest`](../interfaces/UserApiGetAccountDetailsRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

### getConsentLogs()

> **getConsentLogs**(`requestParameters?`, `options?`): `AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>

Retrieves consent logs for a User based on the provided Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetConsentLogsRequest`](../interfaces/UserApiGetConsentLogsRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>

#### Throws

### getInvitation()

> **getInvitation**(`requestParameters`, `options?`): `AxiosPromise`\<[`InvitationToken`](../loginradius-sdk/namespaces/Models/interfaces/InvitationToken.md)\>

Retrieves details about a specific invitation using the invitation token.

#### Parameters

##### requestParameters

[`UserApiGetInvitationRequest`](../interfaces/UserApiGetInvitationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`InvitationToken`](../loginradius-sdk/namespaces/Models/interfaces/InvitationToken.md)\>

#### Throws

### getInvitationByInvitationId()

> **getInvitationByInvitationId**(`requestParameters`, `options?`): `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

Retrieves invitation details by invitation ID.

#### Parameters

##### requestParameters

[`UserApiGetInvitationByInvitationIdRequest`](../interfaces/UserApiGetInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

#### Throws

### getPrivacyPolicyAcceptance()

> **getPrivacyPolicyAcceptance**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Updates the Privacy Policy stored in a User\'s profile using their Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetPrivacyPolicyAcceptanceRequest`](../interfaces/UserApiGetPrivacyPolicyAcceptanceRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

### getPrivacyPolicyHistory()

> **getPrivacyPolicyHistory**(`requestParameters?`, `options?`): `AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>

Returns all accepted Privacy Policies for a User using their Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetPrivacyPolicyHistoryRequest`](../interfaces/UserApiGetPrivacyPolicyHistoryRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>

#### Throws

### getVerifiedConsentWithAccessToken()

> **getVerifiedConsentWithAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`VerifyConsent`](../loginradius-sdk/namespaces/Models/interfaces/VerifyConsent.md)\>

Retrieves the consent verification status for a User based on the provided Access Token and event.

#### Parameters

##### requestParameters

[`UserApiGetVerifiedConsentWithAccessTokenRequest`](../interfaces/UserApiGetVerifiedConsentWithAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`VerifyConsent`](../loginradius-sdk/namespaces/Models/interfaces/VerifyConsent.md)\>

#### Throws

### linkSocialIdentitiesByAccessToken()

> **linkSocialIdentitiesByAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Links a social provider account to an existing Account using Access Tokens.

#### Parameters

##### requestParameters?

[`UserApiLinkSocialIdentitiesByAccessTokenRequest`](../interfaces/UserApiLinkSocialIdentitiesByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### linkSocialIdentitiesByPing()

> **linkSocialIdentitiesByPing**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Links a social provider account with an existing Account using the Access Token and the social provider\'s User Access Token.

#### Parameters

##### requestParameters?

[`UserApiLinkSocialIdentitiesByPingRequest`](../interfaces/UserApiLinkSocialIdentitiesByPingRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### removePhoneIdByToken()

> **removePhoneIdByToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Removes the User\'s Phone number using the Access Token.

#### Parameters

##### requestParameters?

[`UserApiRemovePhoneIdByTokenRequest`](../interfaces/UserApiRemovePhoneIdByTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### resendEmailVerification()

> **resendEmailVerification**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Resends the verification Email to the User to confirm their Email address.

#### Parameters

##### requestParameters

[`UserApiResendEmailVerificationRequest`](../interfaces/UserApiResendEmailVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### resendPhoneOtp()

> **resendPhoneOtp**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Resends the Phone OTP using either the Access Token or Phone number.

#### Parameters

##### requestParameters?

[`UserApiResendPhoneOtpRequest`](../interfaces/UserApiResendPhoneOtpRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

### sendDeleteOtp()

> **sendDeleteOtp**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Retrieves the OTP for the specified Account to facilitate account deletion.

#### Parameters

##### requestParameters?

[`UserApiSendDeleteOtpRequest`](../interfaces/UserApiSendDeleteOtpRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

### sendEmailVerification()

> **sendEmailVerification**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SendEmailVerificationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SendEmailVerificationResponse.md)\>

Sends a verification Email to the unverified Email of the social profile. This is applicable only in optional verification workflows.

#### Parameters

##### requestParameters?

[`UserApiSendEmailVerificationRequest`](../interfaces/UserApiSendEmailVerificationRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SendEmailVerificationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SendEmailVerificationResponse.md)\>

#### Throws

### sendWelcomeEmail()

> **sendWelcomeEmail**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sends a welcome Email to the User.

#### Parameters

##### requestParameters?

[`UserApiSendWelcomeEmailRequest`](../interfaces/UserApiSendWelcomeEmailRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### setorchangeusernamebyaccesstoken()

> **setorchangeusernamebyaccesstoken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sets or changes the User\'s Username using the Access Token.

#### Parameters

##### requestParameters?

[`UserApiSetorchangeusernamebyaccesstokenRequest`](../interfaces/UserApiSetorchangeusernamebyaccesstokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### submitConsentByAccessToken()

> **submitConsentByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

Submits User consent information using an Access Token.

#### Parameters

##### requestParameters

[`UserApiSubmitConsentByAccessTokenRequest`](../interfaces/UserApiSubmitConsentByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

#### Throws

### submitConsentByConsentToken()

> **submitConsentByConsentToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentResponse.md)\>

Submits User consent information using a consent token.

#### Parameters

##### requestParameters

[`UserApiSubmitConsentByConsentTokenRequest`](../interfaces/UserApiSubmitConsentByConsentTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentResponse.md)\>

#### Throws

### unlinkSocialIdentitiesByAccessToken()

> **unlinkSocialIdentitiesByAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Unlinks a social provider account from the specified Account using Access Tokens, removing it from the database.

#### Parameters

##### requestParameters?

[`UserApiUnlinkSocialIdentitiesByAccessTokenRequest`](../interfaces/UserApiUnlinkSocialIdentitiesByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### unlockaccountbyaccesstoken()

> **unlockaccountbyaccesstoken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Unlocks a User\'s Account with a valid Access Token after successfully passing Bot Protection challenges.

#### Parameters

##### requestParameters

[`UserApiUnlockaccountbyaccesstokenRequest`](../interfaces/UserApiUnlockaccountbyaccesstokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### updateAccountByAccessToken()

> **updateAccountByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`UpdateByTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/UpdateByTokenResponse.md)\>

Updates the User\'s account information using a valid Access Token.

#### Parameters

##### requestParameters

[`UserApiUpdateAccountByAccessTokenRequest`](../interfaces/UserApiUpdateAccountByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UpdateByTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/UpdateByTokenResponse.md)\>

#### Throws

### updateConsentByAccessToken()

> **updateConsentByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentProfile`](../loginradius-sdk/namespaces/Models/interfaces/ConsentProfile.md)\>

Updates the consent profile using an Access Token.

#### Parameters

##### requestParameters

[`UserApiUpdateConsentByAccessTokenRequest`](../interfaces/UserApiUpdateConsentByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentProfile`](../loginradius-sdk/namespaces/Models/interfaces/ConsentProfile.md)\>

#### Throws

### updateEmail()

> **updateEmail**(`requestParameters?`, `options?`): `AxiosPromise`\<[`UpdateEmail200Response`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateEmail200Response.md)\>

Verifies the User\'s Email when OTP Email Verification is enabled, requiring LoginRadius activation.

#### Parameters

##### requestParameters?

[`UserApiUpdateEmailRequest`](../interfaces/UserApiUpdateEmailRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UpdateEmail200Response`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateEmail200Response.md)\>

#### Throws

### verifyPhoneOtp()

> **verifyPhoneOtp**(`requestParameters`, `options?`): `AxiosPromise`\<[`VerifyPhoneOtp200Response`](../loginradius-sdk/namespaces/Models/type-aliases/VerifyPhoneOtp200Response.md)\>

Validates the verification code sent to confirm a User\'s Phone number when the User is logged in and provides an Access Token.

#### Parameters

##### requestParameters

[`UserApiVerifyPhoneOtpRequest`](../interfaces/UserApiVerifyPhoneOtpRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`VerifyPhoneOtp200Response`](../loginradius-sdk/namespaces/Models/type-aliases/VerifyPhoneOtp200Response.md)\>

#### Throws

## Export
