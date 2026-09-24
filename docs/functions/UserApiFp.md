[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiFp

# Function: UserApiFp()

> **UserApiFp**(`configuration?`): `object`

UserApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### accountListPasskey()

> **accountListPasskey**(`accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>\>

Lists all registered Passkeys for a User with a valid Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>\>

#### Throws

### accountRemovePasskey()

> **accountRemovePasskey**(`passkeyId`, `accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Removes a specific Passkey from the User\'s Account.

#### Parameters

##### passkeyId

`string`

Id asscociated with the Passkey

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### addEmail()

> **addEmail**(`addEmailModel`, `accessToken?`, `emailtemplate?`, `verificationurl?`, `preventWebhook?`, `xPreventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Adds an Email to a User\'s account, either as a primary or additional Email.

#### Parameters

##### addEmailModel

[`AddEmailModel`](../loginradius-sdk/namespaces/Models/interfaces/AddEmailModel.md)

##### accessToken?

`string`

Access Token of the User

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### changePhoneNumber()

> **changePhoneNumber**(`smstemplate?`, `preventWebhook?`, `xPreventWebhook?`, `accessToken?`, `isvoiceotp?`, `phoneIdModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

Updates the User\'s Phone number using the Access Token.

#### Parameters

##### smstemplate?

`string`

SMS Template

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### accessToken?

`string`

Access Token of the User

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### phoneIdModel?

[`PhoneIdModel`](../loginradius-sdk/namespaces/Models/interfaces/PhoneIdModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

#### Throws

### checkEmailAvailability()

> **checkEmailAvailability**(`email?`, `username?`, `preventWebhook?`, `xPreventWebhook?`, `verificationtoken?`, `otp?`, `uuid?`, `url?`, `welcomeemailtemplate?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CheckEmailAvailability200Response`](../loginradius-sdk/namespaces/Models/type-aliases/CheckEmailAvailability200Response.md)\>\>

Verifies Email availability or checks Email using a Verification Token or OTP.

#### Parameters

##### email?

`string`

Email address of the associated Account.

##### username?

`string`

Username of the associated Account.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### verificationtoken?

`string`

Verification token received in the Email.

##### otp?

`string`

One-time passcode sent to the User\&#39;s Email.

##### uuid?

`string`

Email template for the welcome Email.

##### url?

`string`

URL to log the main domain in the database.

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CheckEmailAvailability200Response`](../loginradius-sdk/namespaces/Models/type-aliases/CheckEmailAvailability200Response.md)\>\>

#### Throws

### deleteAccByPhoneOTP()

> **deleteAccByPhoneOTP**(`accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `hCaptchaResponse?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `verifyDeleteAccountOtp?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Deletes an Account using a Phone OTP.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### qqCaptchaTicket?

`string`

QQ Captcha ticket (required if Bot Protection is enabled)

##### qqCaptchaRandstr?

`string`

QQ Captcha rand string (required if Bot Protection is enabled)

##### verifyDeleteAccountOtp?

[`VerifyDeleteAccountOtp`](../loginradius-sdk/namespaces/Models/interfaces/VerifyDeleteAccountOtp.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### deleteAccount()

> **deleteAccount**(`preventWebhook?`, `deletetoken?`, `xPreventWebhook?`, `email?`, `otp?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Deletes an Account using a delete token or OTP.

#### Parameters

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### deletetoken?

`string`

This is required if the OTP is not passed in the query parameter.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### email?

`string`

Email address of the associated Account.

##### otp?

`string`

One-time passcode sent to the User\&#39;s Email.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### deleteAccountByAccessToken()

> **deleteAccountByAccessToken**(`emailtemplate?`, `deleteurl?`, `accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleteRequestAccepted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleteRequestAccepted.md)\>\>

Sends a confirmation Email for User deletion to the User\'s Email using their Access Token.

#### Parameters

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### deleteurl?

`string`

DeleteUrl URL which is being sent in the Email

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleteRequestAccepted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleteRequestAccepted.md)\>\>

#### Throws

### deleteemailbyaccesstoken()

> **deleteemailbyaccesstoken**(`deleteemailbyaccesstokenRequest`, `preventWebhook?`, `xPreventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Removes additional Emails from a User\'s account.

#### Parameters

##### deleteemailbyaccesstokenRequest

[`DeleteemailbyaccesstokenRequest`](../loginradius-sdk/namespaces/Models/type-aliases/DeleteemailbyaccesstokenRequest.md)

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### getAccountDetails()

> **getAccountDetails**(`welcomeemailtemplate?`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

Retrieves User details based on the Access Token.

#### Parameters

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

#### Throws

### getConsentLogs()

> **getConsentLogs**(`accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>\>

Retrieves consent logs for a User based on the provided Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>\>

#### Throws

### getInvitation()

> **getInvitation**(`invitationToken`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`InvitationToken`](../loginradius-sdk/namespaces/Models/interfaces/InvitationToken.md)\>\>

Retrieves details about a specific invitation using the invitation token.

#### Parameters

##### invitationToken

`string`

The token of the invitation to retrieve.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`InvitationToken`](../loginradius-sdk/namespaces/Models/interfaces/InvitationToken.md)\>\>

#### Throws

### getInvitationByInvitationId()

> **getInvitationByInvitationId**(`invitationid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>\>

Retrieves invitation details by invitation ID.

#### Parameters

##### invitationid

`string`

The ID of the invitation. The ID is typically in the format *inv_&lt;unique_id&gt;*, where *&lt;unique_id&gt;* is a string of alphanumeric characters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Invitation`](../loginradius-sdk/namespaces/Models/interfaces/Invitation.md)\>\>

#### Throws

### getPrivacyPolicyAcceptance()

> **getPrivacyPolicyAcceptance**(`accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

Updates the Privacy Policy stored in a User\'s profile using their Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

#### Throws

### getPrivacyPolicyHistory()

> **getPrivacyPolicyHistory**(`accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>\>

Returns all accepted Privacy Policies for a User using their Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>\>

#### Throws

### getVerifiedConsentWithAccessToken()

> **getVerifiedConsentWithAccessToken**(`event`, `iscustom`, `accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`VerifyConsent`](../loginradius-sdk/namespaces/Models/interfaces/VerifyConsent.md)\>\>

Retrieves the consent verification status for a User based on the provided Access Token and event.

#### Parameters

##### event

`string`

Event type to filter consent verification (e.g., &#x60;login&#x60;).

##### iscustom

`boolean`

This field value is used to filter the consent verification by custom events. The iscustom value should be a boolean. If true, it filters for custom events; if false, it filters for standard events.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`VerifyConsent`](../loginradius-sdk/namespaces/Models/interfaces/VerifyConsent.md)\>\>

#### Throws

### linkSocialIdentitiesByAccessToken()

> **linkSocialIdentitiesByAccessToken**(`accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `candidateTokenModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Links a social provider account to an existing Account using Access Tokens.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### candidateTokenModel?

[`CandidateTokenModel`](../loginradius-sdk/namespaces/Models/interfaces/CandidateTokenModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### linkSocialIdentitiesByPing()

> **linkSocialIdentitiesByPing**(`accessToken?`, `clientGuidBodyModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Links a social provider account with an existing Account using the Access Token and the social provider\'s User Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### clientGuidBodyModel?

[`ClientGuidBodyModel`](../loginradius-sdk/namespaces/Models/interfaces/ClientGuidBodyModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### removePhoneIdByToken()

> **removePhoneIdByToken**(`accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Removes the User\'s Phone number using the Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### resendEmailVerification()

> **resendEmailVerification**(`emailModel`, `verificationurl?`, `emailtemplate?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Resends the verification Email to the User to confirm their Email address.

#### Parameters

##### emailModel

[`EmailModel`](../loginradius-sdk/namespaces/Models/interfaces/EmailModel.md)

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### resendPhoneOtp()

> **resendPhoneOtp**(`smstemplate?`, `accessToken?`, `isvoiceotp?`, `phoneIdModelOptional?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

Resends the Phone OTP using either the Access Token or Phone number.

#### Parameters

##### smstemplate?

`string`

SMS Template

##### accessToken?

`string`

Access Token of the User

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### phoneIdModelOptional?

[`PhoneIdModelOptional`](../loginradius-sdk/namespaces/Models/interfaces/PhoneIdModelOptional.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

#### Throws

### sendDeleteOtp()

> **sendDeleteOtp**(`accessToken?`, `smstemplate?`, `isvoiceotp?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

Retrieves the OTP for the specified Account to facilitate account deletion.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### smstemplate?

`string`

SMS Template

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

#### Throws

### sendEmailVerification()

> **sendEmailVerification**(`emailtemplate?`, `verificationurl?`, `clientguid?`, `accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SendEmailVerificationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SendEmailVerificationResponse.md)\>\>

Sends a verification Email to the unverified Email of the social profile. This is applicable only in optional verification workflows.

#### Parameters

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### clientguid?

`string`

Client GUID for the request.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SendEmailVerificationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SendEmailVerificationResponse.md)\>\>

#### Throws

### sendWelcomeEmail()

> **sendWelcomeEmail**(`welcomeemailtemplate?`, `accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Sends a welcome Email to the User.

#### Parameters

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### setorchangeusernamebyaccesstoken()

> **setorchangeusernamebyaccesstoken**(`accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `setUserNameRequest?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Sets or changes the User\'s Username using the Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### setUserNameRequest?

[`SetUserNameRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetUserNameRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### submitConsentByAccessToken()

> **submitConsentByAccessToken**(`consentSubmit`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>\>

Submits User consent information using an Access Token.

#### Parameters

##### consentSubmit

[`ConsentSubmit`](../loginradius-sdk/namespaces/Models/interfaces/ConsentSubmit.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Profile`](../loginradius-sdk/namespaces/Models/interfaces/Profile.md)\>\>

#### Throws

### submitConsentByConsentToken()

> **submitConsentByConsentToken**(`consenttoken`, `consentSubmit`, `preventWebhook?`, `xPreventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentResponse.md)\>\>

Submits User consent information using a consent token.

#### Parameters

##### consenttoken

`string`

The consent token for the User.

##### consentSubmit

[`ConsentSubmit`](../loginradius-sdk/namespaces/Models/interfaces/ConsentSubmit.md)

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentResponse.md)\>\>

#### Throws

### unlinkSocialIdentitiesByAccessToken()

> **unlinkSocialIdentitiesByAccessToken**(`accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `unlinkSocialIdentityRequest?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Unlinks a social provider account from the specified Account using Access Tokens, removing it from the database.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### unlinkSocialIdentityRequest?

[`UnlinkSocialIdentityRequest`](../loginradius-sdk/namespaces/Models/interfaces/UnlinkSocialIdentityRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### unlockaccountbyaccesstoken()

> **unlockaccountbyaccesstoken**(`unlockaccountbyaccesstokenRequest`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `gRecaptchaResponse?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Unlocks a User\'s Account with a valid Access Token after successfully passing Bot Protection challenges.

#### Parameters

##### unlockaccountbyaccesstokenRequest

[`UnlockaccountbyaccesstokenRequest`](../loginradius-sdk/namespaces/Models/type-aliases/UnlockaccountbyaccesstokenRequest.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### updateAccountByAccessToken()

> **updateAccountByAccessToken**(`updateAccountByAccessTokenRequest`, `verificationurl?`, `emailtemplate?`, `smstemplate?`, `nullsupport?`, `isvoiceotp?`, `fields?`, `gRecaptchaResponse?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `preventWebhook?`, `xPreventWebhook?`, `accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UpdateByTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/UpdateByTokenResponse.md)\>\>

Updates the User\'s account information using a valid Access Token.

#### Parameters

##### updateAccountByAccessTokenRequest

[`UpdateAccountByAccessTokenRequest`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateAccountByAccessTokenRequest.md)

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### smstemplate?

`string`

SMS Template

##### nullsupport?

`boolean`

Bool flag, if this flag is sent as true then the fields which are send in payload as null then in the profile as well that will be saved as null only

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UpdateByTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/UpdateByTokenResponse.md)\>\>

#### Throws

### updateConsentByAccessToken()

> **updateConsentByAccessToken**(`consentUpdate`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentProfile`](../loginradius-sdk/namespaces/Models/interfaces/ConsentProfile.md)\>\>

Updates the consent profile using an Access Token.

#### Parameters

##### consentUpdate

[`ConsentUpdate`](../loginradius-sdk/namespaces/Models/interfaces/ConsentUpdate.md)

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentProfile`](../loginradius-sdk/namespaces/Models/interfaces/ConsentProfile.md)\>\>

#### Throws

### updateEmail()

> **updateEmail**(`url?`, `welcomeemailtemplate?`, `preventWebhook?`, `xPreventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `updateEmailRequest?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UpdateEmail200Response`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateEmail200Response.md)\>\>

Verifies the User\'s Email when OTP Email Verification is enabled, requiring LoginRadius activation.

#### Parameters

##### url?

`string`

URL to log the main domain in the database.

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### updateEmailRequest?

[`UpdateEmailRequest`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateEmailRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UpdateEmail200Response`](../loginradius-sdk/namespaces/Models/type-aliases/UpdateEmail200Response.md)\>\>

#### Throws

### verifyPhoneOtp()

> **verifyPhoneOtp**(`verifyOtpPhoneModel`, `otp?`, `smstemplate?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `accessToken?`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`VerifyPhoneOtp200Response`](../loginradius-sdk/namespaces/Models/type-aliases/VerifyPhoneOtp200Response.md)\>\>

Validates the verification code sent to confirm a User\'s Phone number when the User is logged in and provides an Access Token.

#### Parameters

##### verifyOtpPhoneModel

[`VerifyOtpPhoneModel`](../loginradius-sdk/namespaces/Models/interfaces/VerifyOtpPhoneModel.md)

##### otp?

`string`

One-time passcode sent to the User\&#39;s Email.

##### smstemplate?

`string`

SMS Template

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### accessToken?

`string`

Access Token of the User

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`VerifyPhoneOtp200Response`](../loginradius-sdk/namespaces/Models/type-aliases/VerifyPhoneOtp200Response.md)\>\>

#### Throws

## Export
