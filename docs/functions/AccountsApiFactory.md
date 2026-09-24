[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountsApiFactory

# Function: AccountsApiFactory()

> **AccountsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

AccountsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createUser()

> **createUser**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Creates a new Account with the provided details.

#### Parameters

##### requestParameters

[`AccountsApiCreateUserRequest`](../interfaces/AccountsApiCreateUserRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

### deleteAccountByEmail()

> **deleteAccountByEmail**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>

Deletes an Account based on the specified Email.

#### Parameters

##### requestParameters?

[`AccountsApiDeleteAccountByEmailRequest`](../interfaces/AccountsApiDeleteAccountByEmailRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>

#### Throws

### deleteAccountByUID()

> **deleteAccountByUID**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>

Deletes an Account based on the specified UID.

#### Parameters

##### requestParameters

[`AccountsApiDeleteAccountByUIDRequest`](../interfaces/AccountsApiDeleteAccountByUIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>

#### Throws

### deleteEmailFromAccount()

> **deleteEmailFromAccount**(`requestParameters`, `options?`): `AxiosPromise`\<[`Identity`](../loginradius-sdk/namespaces/Models/interfaces/Identity.md)\>

Removes an Email from an Account.

#### Parameters

##### requestParameters

[`AccountsApiDeleteEmailFromAccountRequest`](../interfaces/AccountsApiDeleteEmailFromAccountRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Identity`](../loginradius-sdk/namespaces/Models/interfaces/Identity.md)\>

#### Throws

### deletePasskeyByUid()

> **deletePasskeyByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Removes configured Passkey for specified User.

#### Parameters

##### requestParameters

[`AccountsApiDeletePasskeyByUidRequest`](../interfaces/AccountsApiDeletePasskeyByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### generateSott()

> **generateSott**(`requestParameters?`, `options?`): `AxiosPromise`\<[`GenerateSottResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateSottResponse.md)\>

Generates a Secure One Time Token (SOTT) with a given expiration time.

#### Parameters

##### requestParameters?

[`AccountsApiGenerateSottRequest`](../interfaces/AccountsApiGenerateSottRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GenerateSottResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateSottResponse.md)\>

#### Throws

### getAccountIdentity()

> **getAccountIdentity**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Retrieves Account Identity details using Email, Username, Phone, or Query parameter.

#### Parameters

##### requestParameters?

[`AccountsApiGetAccountIdentityRequest`](../interfaces/AccountsApiGetAccountIdentityRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

### getAccountIdentityByUID()

> **getAccountIdentityByUID**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Retrieves Account Identity details using the UID.

#### Parameters

##### requestParameters

[`AccountsApiGetAccountIdentityByUIDRequest`](../interfaces/AccountsApiGetAccountIdentityByUIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

### getConsentLogsByUid()

> **getConsentLogsByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>

Retrieves Consent Management logs for the specified User.

#### Parameters

##### requestParameters

[`AccountsApiGetConsentLogsByUidRequest`](../interfaces/AccountsApiGetConsentLogsByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>

#### Throws

### getIdentities()

> **getIdentities**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IdentitiesResponse`](../loginradius-sdk/namespaces/Models/interfaces/IdentitiesResponse.md)\>

Retrieves Account associated with a specified Email.

#### Parameters

##### requestParameters?

[`AccountsApiGetIdentitiesRequest`](../interfaces/AccountsApiGetIdentitiesRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentitiesResponse`](../loginradius-sdk/namespaces/Models/interfaces/IdentitiesResponse.md)\>

#### Throws

### getImpersonationToken()

> **getImpersonationToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AccessToken`](../loginradius-sdk/namespaces/Models/interfaces/AccessToken.md)\>

Retrieves an Impersonation Token for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiGetImpersonationTokenRequest`](../interfaces/AccountsApiGetImpersonationTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessToken`](../loginradius-sdk/namespaces/Models/interfaces/AccessToken.md)\>

#### Throws

### getPrivacyPolicyHistoryByUid()

> **getPrivacyPolicyHistoryByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>

Retrieves the Privacy Policy acceptance history for an Account by UID.

#### Parameters

##### requestParameters

[`AccountsApiGetPrivacyPolicyHistoryByUidRequest`](../interfaces/AccountsApiGetPrivacyPolicyHistoryByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>

#### Throws

### getProfilePassword()

> **getProfilePassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>

Retrieves the Password details for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiGetProfilePasswordRequest`](../interfaces/AccountsApiGetProfilePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>

#### Throws

### invalidateEmailVerification()

> **invalidateEmailVerification**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Invalidates the Email Verification status for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiInvalidateEmailVerificationRequest`](../interfaces/AccountsApiInvalidateEmailVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### listPasskeyUser()

> **listPasskeyUser**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

Retrieves a list of Passkeys configured for a specified User.

#### Parameters

##### requestParameters

[`AccountsApiListPasskeyUserRequest`](../interfaces/AccountsApiListPasskeyUserRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

#### Throws

### resetPhoneVerification()

> **resetPhoneVerification**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Resets the Phone verification status for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiResetPhoneVerificationRequest`](../interfaces/AccountsApiResetPhoneVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### setProfilePassword()

> **setProfilePassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>

Sets or updates the Password for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiSetProfilePasswordRequest`](../interfaces/AccountsApiSetProfilePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>

#### Throws

### updateAccountProfileByUID()

> **updateAccountProfileByUID**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Updates Account details using the UID.

#### Parameters

##### requestParameters

[`AccountsApiUpdateAccountProfileByUIDRequest`](../interfaces/AccountsApiUpdateAccountProfileByUIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

### updatePhoneNumber()

> **updatePhoneNumber**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Updates the PhoneID associated with an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiUpdatePhoneNumberRequest`](../interfaces/AccountsApiUpdatePhoneNumberRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

### upsertEmailForAccount()

> **upsertEmailForAccount**(`requestParameters`, `options?`): `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

Adds or updates an Email associated with an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiUpsertEmailForAccountRequest`](../interfaces/AccountsApiUpsertEmailForAccountRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>

#### Throws

## Export
