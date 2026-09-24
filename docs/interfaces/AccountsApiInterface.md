[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountsApiInterface

# Interface: AccountsApiInterface

AccountsApi - interface

## Export

AccountsApi

## Methods

### createUser()

> **createUser**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Creates a new Account with the provided details.

#### Parameters

##### requestParameters

[`AccountsApiCreateUserRequest`](AccountsApiCreateUserRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### deleteAccountByEmail()

> **deleteAccountByEmail**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>

Deletes an Account based on the specified Email.

#### Parameters

##### requestParameters?

[`AccountsApiDeleteAccountByEmailRequest`](AccountsApiDeleteAccountByEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### deleteAccountByUID()

> **deleteAccountByUID**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>

Deletes an Account based on the specified UID.

#### Parameters

##### requestParameters

[`AccountsApiDeleteAccountByUIDRequest`](AccountsApiDeleteAccountByUIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### deleteEmailFromAccount()

> **deleteEmailFromAccount**(`requestParameters`, `options?`): `AxiosPromise`\<[`Identity`](../loginradius-sdk/namespaces/Models/interfaces/Identity.md)\>

Removes an Email from an Account.

#### Parameters

##### requestParameters

[`AccountsApiDeleteEmailFromAccountRequest`](AccountsApiDeleteEmailFromAccountRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Identity`](../loginradius-sdk/namespaces/Models/interfaces/Identity.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### deletePasskeyByUid()

> **deletePasskeyByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Removes configured Passkey for specified User.

#### Parameters

##### requestParameters

[`AccountsApiDeletePasskeyByUidRequest`](AccountsApiDeletePasskeyByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### generateSott()

> **generateSott**(`requestParameters?`, `options?`): `AxiosPromise`\<[`GenerateSottResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateSottResponse.md)\>

Generates a Secure One Time Token (SOTT) with a given expiration time.

#### Parameters

##### requestParameters?

[`AccountsApiGenerateSottRequest`](AccountsApiGenerateSottRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GenerateSottResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateSottResponse.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### getAccountIdentity()

> **getAccountIdentity**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Retrieves Account Identity details using Email, Username, Phone, or Query parameter.

#### Parameters

##### requestParameters?

[`AccountsApiGetAccountIdentityRequest`](AccountsApiGetAccountIdentityRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### getAccountIdentityByUID()

> **getAccountIdentityByUID**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Retrieves Account Identity details using the UID.

#### Parameters

##### requestParameters

[`AccountsApiGetAccountIdentityByUIDRequest`](AccountsApiGetAccountIdentityByUIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### getConsentLogsByUid()

> **getConsentLogsByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>

Retrieves Consent Management logs for the specified User.

#### Parameters

##### requestParameters

[`AccountsApiGetConsentLogsByUidRequest`](AccountsApiGetConsentLogsByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### getIdentities()

> **getIdentities**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IdentitiesResponse`](../loginradius-sdk/namespaces/Models/interfaces/IdentitiesResponse.md)\>

Retrieves Account associated with a specified Email.

#### Parameters

##### requestParameters?

[`AccountsApiGetIdentitiesRequest`](AccountsApiGetIdentitiesRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentitiesResponse`](../loginradius-sdk/namespaces/Models/interfaces/IdentitiesResponse.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### getImpersonationToken()

> **getImpersonationToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AccessToken`](../loginradius-sdk/namespaces/Models/interfaces/AccessToken.md)\>

Retrieves an Impersonation Token for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiGetImpersonationTokenRequest`](AccountsApiGetImpersonationTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessToken`](../loginradius-sdk/namespaces/Models/interfaces/AccessToken.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### getPrivacyPolicyHistoryByUid()

> **getPrivacyPolicyHistoryByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>

Retrieves the Privacy Policy acceptance history for an Account by UID.

#### Parameters

##### requestParameters

[`AccountsApiGetPrivacyPolicyHistoryByUidRequest`](AccountsApiGetPrivacyPolicyHistoryByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### getProfilePassword()

> **getProfilePassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>

Retrieves the Password details for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiGetProfilePasswordRequest`](AccountsApiGetProfilePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### invalidateEmailVerification()

> **invalidateEmailVerification**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Invalidates the Email Verification status for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiInvalidateEmailVerificationRequest`](AccountsApiInvalidateEmailVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### listPasskeyUser()

> **listPasskeyUser**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

Retrieves a list of Passkeys configured for a specified User.

#### Parameters

##### requestParameters

[`AccountsApiListPasskeyUserRequest`](AccountsApiListPasskeyUserRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### resetPhoneVerification()

> **resetPhoneVerification**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Resets the Phone verification status for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiResetPhoneVerificationRequest`](AccountsApiResetPhoneVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### setProfilePassword()

> **setProfilePassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>

Sets or updates the Password for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiSetProfilePasswordRequest`](AccountsApiSetProfilePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### updateAccountProfileByUID()

> **updateAccountProfileByUID**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Updates Account details using the UID.

#### Parameters

##### requestParameters

[`AccountsApiUpdateAccountProfileByUIDRequest`](AccountsApiUpdateAccountProfileByUIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### updatePhoneNumber()

> **updatePhoneNumber**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Updates the PhoneID associated with an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiUpdatePhoneNumberRequest`](AccountsApiUpdatePhoneNumberRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

#### Memberof

AccountsApiInterface

***

### upsertEmailForAccount()

> **upsertEmailForAccount**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Adds or updates an Email associated with an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiUpsertEmailForAccountRequest`](AccountsApiUpsertEmailForAccountRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

#### Memberof

AccountsApiInterface
