[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiInterface

# Interface: UserApiInterface

UserApi - interface

## Export

UserApi

## Methods

### accountListPasskey()

> **accountListPasskey**(`requestParameters?`, `options?`): `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

Lists all registered Passkeys for a User with a valid Access Token.

#### Parameters

##### requestParameters?

[`UserApiAccountListPasskeyRequest`](UserApiAccountListPasskeyRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### accountRemovePasskey()

> **accountRemovePasskey**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Removes a specific Passkey from the User\'s Account.

#### Parameters

##### requestParameters

[`UserApiAccountRemovePasskeyRequest`](UserApiAccountRemovePasskeyRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### addEmail()

> **addEmail**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Adds an Email to a User\'s account, either as a primary or additional Email.

#### Parameters

##### requestParameters

[`UserApiAddEmailRequest`](UserApiAddEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### changePhoneNumber()

> **changePhoneNumber**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Updates the User\'s Phone number using the Access Token.

#### Parameters

##### requestParameters?

[`UserApiChangePhoneNumberRequest`](UserApiChangePhoneNumberRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### checkEmailAvailability()

> **checkEmailAvailability**(`requestParameters?`, `options?`): `AxiosPromise`\<[`CheckEmailAvailability200Response`](../loginradius-sdk/namespaces/Models/type-aliases/CheckEmailAvailability200Response.md)\>

Verifies Email availability or checks Email using a Verification Token or OTP.

#### Parameters

##### requestParameters?

[`UserApiCheckEmailAvailabilityRequest`](UserApiCheckEmailAvailabilityRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CheckEmailAvailability200Response`](../loginradius-sdk/namespaces/Models/type-aliases/CheckEmailAvailability200Response.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### deleteAccByPhoneOTP()

> **deleteAccByPhoneOTP**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes an Account using a Phone OTP.

#### Parameters

##### requestParameters?

[`UserApiDeleteAccByPhoneOTPRequest`](UserApiDeleteAccByPhoneOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### deleteAccount()

> **deleteAccount**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Deletes an Account using a delete token or OTP.

#### Parameters

##### requestParameters?

[`UserApiDeleteAccountRequest`](UserApiDeleteAccountRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### deleteAccountByAccessToken()

> **deleteAccountByAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleteRequestAccepted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleteRequestAccepted.md)\>

Sends a confirmation Email for User deletion to the User\'s Email using their Access Token.

#### Parameters

##### requestParameters?

[`UserApiDeleteAccountByAccessTokenRequest`](UserApiDeleteAccountByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleteRequestAccepted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleteRequestAccepted.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### deleteemailbyaccesstoken()

> **deleteemailbyaccesstoken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Removes additional Emails from a User\'s account.

#### Parameters

##### requestParameters

[`UserApiDeleteemailbyaccesstokenRequest`](UserApiDeleteemailbyaccesstokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### getAccountDetails()

> **getAccountDetails**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Retrieves User details based on the Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetAccountDetailsRequest`](UserApiGetAccountDetailsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### getConsentLogs()

> **getConsentLogs**(`requestParameters?`, `options?`): `AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>

Retrieves consent logs for a User based on the provided Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetConsentLogsRequest`](UserApiGetConsentLogsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### getInvitation()

> **getInvitation**(`requestParameters`, `options?`): `AxiosPromise`\<[`InvitationToken`](../loginradius-sdk/namespaces/Models/interfaces/InvitationToken.md)\>

Retrieves details about a specific invitation using the invitation token.

#### Parameters

##### requestParameters

[`UserApiGetInvitationRequest`](UserApiGetInvitationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`InvitationToken`](../loginradius-sdk/namespaces/Models/interfaces/InvitationToken.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### getInvitationByInvitationId()

> **getInvitationByInvitationId**(`requestParameters`, `options?`): `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

Retrieves invitation details by invitation ID.

#### Parameters

##### requestParameters

[`UserApiGetInvitationByInvitationIdRequest`](UserApiGetInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### getPrivacyPolicyAcceptance()

> **getPrivacyPolicyAcceptance**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Updates the Privacy Policy stored in a User\'s profile using their Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetPrivacyPolicyAcceptanceRequest`](UserApiGetPrivacyPolicyAcceptanceRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### getPrivacyPolicyHistory()

> **getPrivacyPolicyHistory**(`requestParameters?`, `options?`): `AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>

Returns all accepted Privacy Policies for a User using their Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetPrivacyPolicyHistoryRequest`](UserApiGetPrivacyPolicyHistoryRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### getVerifiedConsentWithAccessToken()

> **getVerifiedConsentWithAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`VerifyConsent`](../loginradius-sdk/namespaces/Models/interfaces/VerifyConsent.md)\>

Retrieves the consent verification status for a User based on the provided Access Token and event.

#### Parameters

##### requestParameters

[`UserApiGetVerifiedConsentWithAccessTokenRequest`](UserApiGetVerifiedConsentWithAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`VerifyConsent`](../loginradius-sdk/namespaces/Models/interfaces/VerifyConsent.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### linkSocialIdentitiesByAccessToken()

> **linkSocialIdentitiesByAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Links a social provider account to an existing Account using Access Tokens.

#### Parameters

##### requestParameters?

[`UserApiLinkSocialIdentitiesByAccessTokenRequest`](UserApiLinkSocialIdentitiesByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### linkSocialIdentitiesByPing()

> **linkSocialIdentitiesByPing**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Links a social provider account with an existing Account using the Access Token and the social provider\'s User Access Token.

#### Parameters

##### requestParameters?

[`UserApiLinkSocialIdentitiesByPingRequest`](UserApiLinkSocialIdentitiesByPingRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### removePhoneIdByToken()

> **removePhoneIdByToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Removes the User\'s Phone number using the Access Token.

#### Parameters

##### requestParameters?

[`UserApiRemovePhoneIdByTokenRequest`](UserApiRemovePhoneIdByTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### resendEmailVerification()

> **resendEmailVerification**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Resends the verification Email to the User to confirm their Email address.

#### Parameters

##### requestParameters

[`UserApiResendEmailVerificationRequest`](UserApiResendEmailVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### resendPhoneOtp()

> **resendPhoneOtp**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Resends the Phone OTP using either the Access Token or Phone number.

#### Parameters

##### requestParameters?

[`UserApiResendPhoneOtpRequest`](UserApiResendPhoneOtpRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### sendDeleteOtp()

> **sendDeleteOtp**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Retrieves the OTP for the specified Account to facilitate account deletion.

#### Parameters

##### requestParameters?

[`UserApiSendDeleteOtpRequest`](UserApiSendDeleteOtpRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### sendEmailVerification()

> **sendEmailVerification**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SendEmailVerificationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SendEmailVerificationResponse.md)\>

Sends a verification Email to the unverified Email of the social profile. This is applicable only in optional verification workflows.

#### Parameters

##### requestParameters?

[`UserApiSendEmailVerificationRequest`](UserApiSendEmailVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SendEmailVerificationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SendEmailVerificationResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### sendWelcomeEmail()

> **sendWelcomeEmail**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sends a welcome Email to the User.

#### Parameters

##### requestParameters?

[`UserApiSendWelcomeEmailRequest`](UserApiSendWelcomeEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### setorchangeusernamebyaccesstoken()

> **setorchangeusernamebyaccesstoken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Sets or changes the User\'s Username using the Access Token.

#### Parameters

##### requestParameters?

[`UserApiSetorchangeusernamebyaccesstokenRequest`](UserApiSetorchangeusernamebyaccesstokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### submitConsentByAccessToken()

> **submitConsentByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

Submits User consent information using an Access Token.

#### Parameters

##### requestParameters

[`UserApiSubmitConsentByAccessTokenRequest`](UserApiSubmitConsentByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### submitConsentByConsentToken()

> **submitConsentByConsentToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentResponse.md)\>

Submits User consent information using a consent token.

#### Parameters

##### requestParameters

[`UserApiSubmitConsentByConsentTokenRequest`](UserApiSubmitConsentByConsentTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### unlinkSocialIdentitiesByAccessToken()

> **unlinkSocialIdentitiesByAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Unlinks a social provider account from the specified Account using Access Tokens, removing it from the database.

#### Parameters

##### requestParameters?

[`UserApiUnlinkSocialIdentitiesByAccessTokenRequest`](UserApiUnlinkSocialIdentitiesByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### unlockaccountbyaccesstoken()

> **unlockaccountbyaccesstoken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Unlocks a User\'s Account with a valid Access Token after successfully passing Bot Protection challenges.

#### Parameters

##### requestParameters

[`UserApiUnlockaccountbyaccesstokenRequest`](UserApiUnlockaccountbyaccesstokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### updateAccountByAccessToken()

> **updateAccountByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`UpdateByTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/UpdateByTokenResponse.md)\>

Updates the User\'s account information using a valid Access Token.

#### Parameters

##### requestParameters

[`UserApiUpdateAccountByAccessTokenRequest`](UserApiUpdateAccountByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UpdateByTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/UpdateByTokenResponse.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### updateConsentByAccessToken()

> **updateConsentByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentProfile`](../loginradius-sdk/namespaces/Models/interfaces/ConsentProfile.md)\>

Updates the consent profile using an Access Token.

#### Parameters

##### requestParameters

[`UserApiUpdateConsentByAccessTokenRequest`](UserApiUpdateConsentByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentProfile`](../loginradius-sdk/namespaces/Models/interfaces/ConsentProfile.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### updateEmail()

> **updateEmail**(`requestParameters?`, `options?`): `AxiosPromise`\<[`UpdateEmail200Response`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateEmail200Response.md)\>

Verifies the User\'s Email when OTP Email Verification is enabled, requiring LoginRadius activation.

#### Parameters

##### requestParameters?

[`UserApiUpdateEmailRequest`](UserApiUpdateEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UpdateEmail200Response`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateEmail200Response.md)\>

#### Throws

#### Memberof

UserApiInterface

***

### verifyPhoneOtp()

> **verifyPhoneOtp**(`requestParameters`, `options?`): `AxiosPromise`\<[`VerifyPhoneOtp200Response`](../loginradius-sdk/namespaces/Models/type-aliases/VerifyPhoneOtp200Response.md)\>

Validates the verification code sent to confirm a User\'s Phone number when the User is logged in and provides an Access Token.

#### Parameters

##### requestParameters

[`UserApiVerifyPhoneOtpRequest`](UserApiVerifyPhoneOtpRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`VerifyPhoneOtp200Response`](../loginradius-sdk/namespaces/Models/type-aliases/VerifyPhoneOtp200Response.md)\>

#### Throws

#### Memberof

UserApiInterface
