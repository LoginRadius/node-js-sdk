[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApi

# Class: UserApi

UserApi - object-oriented interface

## Export

UserApi

## Extends

- `BaseAPI`

## Implements

- [`UserApiInterface`](../interfaces/UserApiInterface.md)

## Constructors

### Constructor

> **new UserApi**(`configuration?`, `basePath?`, `axios?`): `UserApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`UserApi`

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

### accountListPasskey()

> **accountListPasskey**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md), `any`, \{ \}, `any`\>\>

Lists all registered Passkeys for a User with a valid Access Token.

#### Parameters

##### requestParameters?

[`UserApiAccountListPasskeyRequest`](../interfaces/UserApiAccountListPasskeyRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`accountListPasskey`](../interfaces/UserApiInterface.md#accountlistpasskey)

***

### accountRemovePasskey()

> **accountRemovePasskey**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Removes a specific Passkey from the User\'s Account.

#### Parameters

##### requestParameters

[`UserApiAccountRemovePasskeyRequest`](../interfaces/UserApiAccountRemovePasskeyRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`accountRemovePasskey`](../interfaces/UserApiInterface.md#accountremovepasskey)

***

### addEmail()

> **addEmail**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Adds an Email to a User\'s account, either as a primary or additional Email.

#### Parameters

##### requestParameters

[`UserApiAddEmailRequest`](../interfaces/UserApiAddEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`addEmail`](../interfaces/UserApiInterface.md#addemail)

***

### changePhoneNumber()

> **changePhoneNumber**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

Updates the User\'s Phone number using the Access Token.

#### Parameters

##### requestParameters?

[`UserApiChangePhoneNumberRequest`](../interfaces/UserApiChangePhoneNumberRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`changePhoneNumber`](../interfaces/UserApiInterface.md#changephonenumber)

***

### checkEmailAvailability()

> **checkEmailAvailability**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`CheckEmailAvailability200Response`](../loginradius-sdk/namespaces/Models/type-aliases/CheckEmailAvailability200Response.md), `any`, \{ \}, `any`\>\>

Verifies Email availability or checks Email using a Verification Token or OTP.

#### Parameters

##### requestParameters?

[`UserApiCheckEmailAvailabilityRequest`](../interfaces/UserApiCheckEmailAvailabilityRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CheckEmailAvailability200Response`](../loginradius-sdk/namespaces/Models/type-aliases/CheckEmailAvailability200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`checkEmailAvailability`](../interfaces/UserApiInterface.md#checkemailavailability)

***

### deleteAccByPhoneOTP()

> **deleteAccByPhoneOTP**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Deletes an Account using a Phone OTP.

#### Parameters

##### requestParameters?

[`UserApiDeleteAccByPhoneOTPRequest`](../interfaces/UserApiDeleteAccByPhoneOTPRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`deleteAccByPhoneOTP`](../interfaces/UserApiInterface.md#deleteaccbyphoneotp)

***

### deleteAccount()

> **deleteAccount**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Deletes an Account using a delete token or OTP.

#### Parameters

##### requestParameters?

[`UserApiDeleteAccountRequest`](../interfaces/UserApiDeleteAccountRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`deleteAccount`](../interfaces/UserApiInterface.md#deleteaccount)

***

### deleteAccountByAccessToken()

> **deleteAccountByAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleteRequestAccepted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleteRequestAccepted.md), `any`, \{ \}, `any`\>\>

Sends a confirmation Email for User deletion to the User\'s Email using their Access Token.

#### Parameters

##### requestParameters?

[`UserApiDeleteAccountByAccessTokenRequest`](../interfaces/UserApiDeleteAccountByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleteRequestAccepted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleteRequestAccepted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`deleteAccountByAccessToken`](../interfaces/UserApiInterface.md#deleteaccountbyaccesstoken)

***

### deleteemailbyaccesstoken()

> **deleteemailbyaccesstoken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Removes additional Emails from a User\'s account.

#### Parameters

##### requestParameters

[`UserApiDeleteemailbyaccesstokenRequest`](../interfaces/UserApiDeleteemailbyaccesstokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`deleteemailbyaccesstoken`](../interfaces/UserApiInterface.md#deleteemailbyaccesstoken)

***

### getAccountDetails()

> **getAccountDetails**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

Retrieves User details based on the Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetAccountDetailsRequest`](../interfaces/UserApiGetAccountDetailsRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`getAccountDetails`](../interfaces/UserApiInterface.md#getaccountdetails)

***

### getConsentLogs()

> **getConsentLogs**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md), `any`, \{ \}, `any`\>\>

Retrieves consent logs for a User based on the provided Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetConsentLogsRequest`](../interfaces/UserApiGetConsentLogsRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`getConsentLogs`](../interfaces/UserApiInterface.md#getconsentlogs)

***

### getInvitation()

> **getInvitation**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`InvitationToken`](../loginradius-sdk/namespaces/Models/interfaces/InvitationToken.md), `any`, \{ \}, `any`\>\>

Retrieves details about a specific invitation using the invitation token.

#### Parameters

##### requestParameters

[`UserApiGetInvitationRequest`](../interfaces/UserApiGetInvitationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`InvitationToken`](../loginradius-sdk/namespaces/Models/interfaces/InvitationToken.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`getInvitation`](../interfaces/UserApiInterface.md#getinvitation)

***

### getInvitationByInvitationId()

> **getInvitationByInvitationId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md), `any`, \{ \}, `any`\>\>

Retrieves invitation details by invitation ID.

#### Parameters

##### requestParameters

[`UserApiGetInvitationByInvitationIdRequest`](../interfaces/UserApiGetInvitationByInvitationIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`getInvitationByInvitationId`](../interfaces/UserApiInterface.md#getinvitationbyinvitationid)

***

### getPrivacyPolicyAcceptance()

> **getPrivacyPolicyAcceptance**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

Updates the Privacy Policy stored in a User\'s profile using their Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetPrivacyPolicyAcceptanceRequest`](../interfaces/UserApiGetPrivacyPolicyAcceptanceRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`getPrivacyPolicyAcceptance`](../interfaces/UserApiInterface.md#getprivacypolicyacceptance)

***

### getPrivacyPolicyHistory()

> **getPrivacyPolicyHistory**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md), `any`, \{ \}, `any`\>\>

Returns all accepted Privacy Policies for a User using their Access Token.

#### Parameters

##### requestParameters?

[`UserApiGetPrivacyPolicyHistoryRequest`](../interfaces/UserApiGetPrivacyPolicyHistoryRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`getPrivacyPolicyHistory`](../interfaces/UserApiInterface.md#getprivacypolicyhistory)

***

### getVerifiedConsentWithAccessToken()

> **getVerifiedConsentWithAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`VerifyConsent`](../loginradius-sdk/namespaces/Models/interfaces/VerifyConsent.md), `any`, \{ \}, `any`\>\>

Retrieves the consent verification status for a User based on the provided Access Token and event.

#### Parameters

##### requestParameters

[`UserApiGetVerifiedConsentWithAccessTokenRequest`](../interfaces/UserApiGetVerifiedConsentWithAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`VerifyConsent`](../loginradius-sdk/namespaces/Models/interfaces/VerifyConsent.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`getVerifiedConsentWithAccessToken`](../interfaces/UserApiInterface.md#getverifiedconsentwithaccesstoken)

***

### linkSocialIdentitiesByAccessToken()

> **linkSocialIdentitiesByAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Links a social provider account to an existing Account using Access Tokens.

#### Parameters

##### requestParameters?

[`UserApiLinkSocialIdentitiesByAccessTokenRequest`](../interfaces/UserApiLinkSocialIdentitiesByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`linkSocialIdentitiesByAccessToken`](../interfaces/UserApiInterface.md#linksocialidentitiesbyaccesstoken)

***

### linkSocialIdentitiesByPing()

> **linkSocialIdentitiesByPing**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Links a social provider account with an existing Account using the Access Token and the social provider\'s User Access Token.

#### Parameters

##### requestParameters?

[`UserApiLinkSocialIdentitiesByPingRequest`](../interfaces/UserApiLinkSocialIdentitiesByPingRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`linkSocialIdentitiesByPing`](../interfaces/UserApiInterface.md#linksocialidentitiesbyping)

***

### removePhoneIdByToken()

> **removePhoneIdByToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Removes the User\'s Phone number using the Access Token.

#### Parameters

##### requestParameters?

[`UserApiRemovePhoneIdByTokenRequest`](../interfaces/UserApiRemovePhoneIdByTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`removePhoneIdByToken`](../interfaces/UserApiInterface.md#removephoneidbytoken)

***

### resendEmailVerification()

> **resendEmailVerification**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Resends the verification Email to the User to confirm their Email address.

#### Parameters

##### requestParameters

[`UserApiResendEmailVerificationRequest`](../interfaces/UserApiResendEmailVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`resendEmailVerification`](../interfaces/UserApiInterface.md#resendemailverification)

***

### resendPhoneOtp()

> **resendPhoneOtp**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

Resends the Phone OTP using either the Access Token or Phone number.

#### Parameters

##### requestParameters?

[`UserApiResendPhoneOtpRequest`](../interfaces/UserApiResendPhoneOtpRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`resendPhoneOtp`](../interfaces/UserApiInterface.md#resendphoneotp)

***

### sendDeleteOtp()

> **sendDeleteOtp**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the OTP for the specified Account to facilitate account deletion.

#### Parameters

##### requestParameters?

[`UserApiSendDeleteOtpRequest`](../interfaces/UserApiSendDeleteOtpRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`sendDeleteOtp`](../interfaces/UserApiInterface.md#senddeleteotp)

***

### sendEmailVerification()

> **sendEmailVerification**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`SendEmailVerificationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SendEmailVerificationResponse.md), `any`, \{ \}, `any`\>\>

Sends a verification Email to the unverified Email of the social profile. This is applicable only in optional verification workflows.

#### Parameters

##### requestParameters?

[`UserApiSendEmailVerificationRequest`](../interfaces/UserApiSendEmailVerificationRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SendEmailVerificationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SendEmailVerificationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`sendEmailVerification`](../interfaces/UserApiInterface.md#sendemailverification)

***

### sendWelcomeEmail()

> **sendWelcomeEmail**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Sends a welcome Email to the User.

#### Parameters

##### requestParameters?

[`UserApiSendWelcomeEmailRequest`](../interfaces/UserApiSendWelcomeEmailRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`sendWelcomeEmail`](../interfaces/UserApiInterface.md#sendwelcomeemail)

***

### setorchangeusernamebyaccesstoken()

> **setorchangeusernamebyaccesstoken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Sets or changes the User\'s Username using the Access Token.

#### Parameters

##### requestParameters?

[`UserApiSetorchangeusernamebyaccesstokenRequest`](../interfaces/UserApiSetorchangeusernamebyaccesstokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`setorchangeusernamebyaccesstoken`](../interfaces/UserApiInterface.md#setorchangeusernamebyaccesstoken)

***

### submitConsentByAccessToken()

> **submitConsentByAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md), `any`, \{ \}, `any`\>\>

Submits User consent information using an Access Token.

#### Parameters

##### requestParameters

[`UserApiSubmitConsentByAccessTokenRequest`](../interfaces/UserApiSubmitConsentByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`submitConsentByAccessToken`](../interfaces/UserApiInterface.md#submitconsentbyaccesstoken)

***

### submitConsentByConsentToken()

> **submitConsentByConsentToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConsentResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentResponse.md), `any`, \{ \}, `any`\>\>

Submits User consent information using a consent token.

#### Parameters

##### requestParameters

[`UserApiSubmitConsentByConsentTokenRequest`](../interfaces/UserApiSubmitConsentByConsentTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConsentResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`submitConsentByConsentToken`](../interfaces/UserApiInterface.md#submitconsentbyconsenttoken)

***

### unlinkSocialIdentitiesByAccessToken()

> **unlinkSocialIdentitiesByAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Unlinks a social provider account from the specified Account using Access Tokens, removing it from the database.

#### Parameters

##### requestParameters?

[`UserApiUnlinkSocialIdentitiesByAccessTokenRequest`](../interfaces/UserApiUnlinkSocialIdentitiesByAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`unlinkSocialIdentitiesByAccessToken`](../interfaces/UserApiInterface.md#unlinksocialidentitiesbyaccesstoken)

***

### unlockaccountbyaccesstoken()

> **unlockaccountbyaccesstoken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Unlocks a User\'s Account with a valid Access Token after successfully passing Bot Protection challenges.

#### Parameters

##### requestParameters

[`UserApiUnlockaccountbyaccesstokenRequest`](../interfaces/UserApiUnlockaccountbyaccesstokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`unlockaccountbyaccesstoken`](../interfaces/UserApiInterface.md#unlockaccountbyaccesstoken)

***

### updateAccountByAccessToken()

> **updateAccountByAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`UpdateByTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/UpdateByTokenResponse.md), `any`, \{ \}, `any`\>\>

Updates the User\'s account information using a valid Access Token.

#### Parameters

##### requestParameters

[`UserApiUpdateAccountByAccessTokenRequest`](../interfaces/UserApiUpdateAccountByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UpdateByTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/UpdateByTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`updateAccountByAccessToken`](../interfaces/UserApiInterface.md#updateaccountbyaccesstoken)

***

### updateConsentByAccessToken()

> **updateConsentByAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConsentProfile`](../loginradius-sdk/namespaces/Models/interfaces/ConsentProfile.md), `any`, \{ \}, `any`\>\>

Updates the consent profile using an Access Token.

#### Parameters

##### requestParameters

[`UserApiUpdateConsentByAccessTokenRequest`](../interfaces/UserApiUpdateConsentByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConsentProfile`](../loginradius-sdk/namespaces/Models/interfaces/ConsentProfile.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`updateConsentByAccessToken`](../interfaces/UserApiInterface.md#updateconsentbyaccesstoken)

***

### updateEmail()

> **updateEmail**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`UpdateEmail200Response`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateEmail200Response.md), `any`, \{ \}, `any`\>\>

Verifies the User\'s Email when OTP Email Verification is enabled, requiring LoginRadius activation.

#### Parameters

##### requestParameters?

[`UserApiUpdateEmailRequest`](../interfaces/UserApiUpdateEmailRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UpdateEmail200Response`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateEmail200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`updateEmail`](../interfaces/UserApiInterface.md#updateemail)

***

### verifyPhoneOtp()

> **verifyPhoneOtp**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`VerifyPhoneOtp200Response`](../loginradius-sdk/namespaces/Models/type-aliases/VerifyPhoneOtp200Response.md), `any`, \{ \}, `any`\>\>

Validates the verification code sent to confirm a User\'s Phone number when the User is logged in and provides an Access Token.

#### Parameters

##### requestParameters

[`UserApiVerifyPhoneOtpRequest`](../interfaces/UserApiVerifyPhoneOtpRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`VerifyPhoneOtp200Response`](../loginradius-sdk/namespaces/Models/type-aliases/VerifyPhoneOtp200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserApi

#### Implementation of

[`UserApiInterface`](../interfaces/UserApiInterface.md).[`verifyPhoneOtp`](../interfaces/UserApiInterface.md#verifyphoneotp)
