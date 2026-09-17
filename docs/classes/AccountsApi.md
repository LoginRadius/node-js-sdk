[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountsApi

# Class: AccountsApi

AccountsApi - object-oriented interface

## Export

AccountsApi

## Extends

- `BaseAPI`

## Implements

- [`AccountsApiInterface`](../interfaces/AccountsApiInterface.md)

## Constructors

### Constructor

> **new AccountsApi**(`configuration?`, `basePath?`, `axios?`): `AccountsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`AccountsApi`

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

### createUser()

> **createUser**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

Creates a new Account with the provided details.

#### Parameters

##### requestParameters

[`AccountsApiCreateUserRequest`](../interfaces/AccountsApiCreateUserRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`createUser`](../interfaces/AccountsApiInterface.md#createuser)

***

### deleteAccountByEmail()

> **deleteAccountByEmail**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md), `any`, \{ \}, `any`\>\>

Deletes an Account based on the specified Email.

#### Parameters

##### requestParameters?

[`AccountsApiDeleteAccountByEmailRequest`](../interfaces/AccountsApiDeleteAccountByEmailRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`deleteAccountByEmail`](../interfaces/AccountsApiInterface.md#deleteaccountbyemail)

***

### deleteAccountByUID()

> **deleteAccountByUID**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md), `any`, \{ \}, `any`\>\>

Deletes an Account based on the specified UID.

#### Parameters

##### requestParameters

[`AccountsApiDeleteAccountByUIDRequest`](../interfaces/AccountsApiDeleteAccountByUIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`deleteAccountByUID`](../interfaces/AccountsApiInterface.md#deleteaccountbyuid)

***

### deleteEmailFromAccount()

> **deleteEmailFromAccount**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`Identity`](../loginradius-sdk/namespaces/Models/interfaces/Identity.md), `any`, \{ \}, `any`\>\>

Removes an Email from an Account.

#### Parameters

##### requestParameters

[`AccountsApiDeleteEmailFromAccountRequest`](../interfaces/AccountsApiDeleteEmailFromAccountRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Identity`](../loginradius-sdk/namespaces/Models/interfaces/Identity.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`deleteEmailFromAccount`](../interfaces/AccountsApiInterface.md#deleteemailfromaccount)

***

### deletePasskeyByUid()

> **deletePasskeyByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Removes configured Passkey for specified User.

#### Parameters

##### requestParameters

[`AccountsApiDeletePasskeyByUidRequest`](../interfaces/AccountsApiDeletePasskeyByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`deletePasskeyByUid`](../interfaces/AccountsApiInterface.md#deletepasskeybyuid)

***

### generateSott()

> **generateSott**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`GenerateSottResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateSottResponse.md), `any`, \{ \}, `any`\>\>

Generates a Secure One Time Token (SOTT) with a given expiration time.

#### Parameters

##### requestParameters?

[`AccountsApiGenerateSottRequest`](../interfaces/AccountsApiGenerateSottRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GenerateSottResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateSottResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`generateSott`](../interfaces/AccountsApiInterface.md#generatesott)

***

### getAccountIdentity()

> **getAccountIdentity**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

Retrieves Account Identity details using Email, Username, Phone, or Query parameter.

#### Parameters

##### requestParameters?

[`AccountsApiGetAccountIdentityRequest`](../interfaces/AccountsApiGetAccountIdentityRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`getAccountIdentity`](../interfaces/AccountsApiInterface.md#getaccountidentity)

***

### getAccountIdentityByUID()

> **getAccountIdentityByUID**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

Retrieves Account Identity details using the UID.

#### Parameters

##### requestParameters

[`AccountsApiGetAccountIdentityByUIDRequest`](../interfaces/AccountsApiGetAccountIdentityByUIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`getAccountIdentityByUID`](../interfaces/AccountsApiInterface.md#getaccountidentitybyuid)

***

### getConsentLogsByUid()

> **getConsentLogsByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md), `any`, \{ \}, `any`\>\>

Retrieves Consent Management logs for the specified User.

#### Parameters

##### requestParameters

[`AccountsApiGetConsentLogsByUidRequest`](../interfaces/AccountsApiGetConsentLogsByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`getConsentLogsByUid`](../interfaces/AccountsApiInterface.md#getconsentlogsbyuid)

***

### getIdentities()

> **getIdentities**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentitiesResponse`](../loginradius-sdk/namespaces/Models/interfaces/IdentitiesResponse.md), `any`, \{ \}, `any`\>\>

Retrieves Account associated with a specified Email.

#### Parameters

##### requestParameters?

[`AccountsApiGetIdentitiesRequest`](../interfaces/AccountsApiGetIdentitiesRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentitiesResponse`](../loginradius-sdk/namespaces/Models/interfaces/IdentitiesResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`getIdentities`](../interfaces/AccountsApiInterface.md#getidentities)

***

### getImpersonationToken()

> **getImpersonationToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AccessToken`](../loginradius-sdk/namespaces/Models/interfaces/AccessToken.md), `any`, \{ \}, `any`\>\>

Retrieves an Impersonation Token for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiGetImpersonationTokenRequest`](../interfaces/AccountsApiGetImpersonationTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AccessToken`](../loginradius-sdk/namespaces/Models/interfaces/AccessToken.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`getImpersonationToken`](../interfaces/AccountsApiInterface.md#getimpersonationtoken)

***

### getPrivacyPolicyHistoryByUid()

> **getPrivacyPolicyHistoryByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the Privacy Policy acceptance history for an Account by UID.

#### Parameters

##### requestParameters

[`AccountsApiGetPrivacyPolicyHistoryByUidRequest`](../interfaces/AccountsApiGetPrivacyPolicyHistoryByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`getPrivacyPolicyHistoryByUid`](../interfaces/AccountsApiInterface.md#getprivacypolicyhistorybyuid)

***

### getProfilePassword()

> **getProfilePassword**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the Password details for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiGetProfilePasswordRequest`](../interfaces/AccountsApiGetProfilePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`getProfilePassword`](../interfaces/AccountsApiInterface.md#getprofilepassword)

***

### invalidateEmailVerification()

> **invalidateEmailVerification**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Invalidates the Email Verification status for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiInvalidateEmailVerificationRequest`](../interfaces/AccountsApiInvalidateEmailVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`invalidateEmailVerification`](../interfaces/AccountsApiInterface.md#invalidateemailverification)

***

### listPasskeyUser()

> **listPasskeyUser**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md), `any`, \{ \}, `any`\>\>

Retrieves a list of Passkeys configured for a specified User.

#### Parameters

##### requestParameters

[`AccountsApiListPasskeyUserRequest`](../interfaces/AccountsApiListPasskeyUserRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`listPasskeyUser`](../interfaces/AccountsApiInterface.md#listpasskeyuser)

***

### resetPhoneVerification()

> **resetPhoneVerification**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Resets the Phone verification status for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiResetPhoneVerificationRequest`](../interfaces/AccountsApiResetPhoneVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`resetPhoneVerification`](../interfaces/AccountsApiInterface.md#resetphoneverification)

***

### setProfilePassword()

> **setProfilePassword**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md), `any`, \{ \}, `any`\>\>

Sets or updates the Password for an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiSetProfilePasswordRequest`](../interfaces/AccountsApiSetProfilePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`setProfilePassword`](../interfaces/AccountsApiInterface.md#setprofilepassword)

***

### updateAccountProfileByUID()

> **updateAccountProfileByUID**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

Updates Account details using the UID.

#### Parameters

##### requestParameters

[`AccountsApiUpdateAccountProfileByUIDRequest`](../interfaces/AccountsApiUpdateAccountProfileByUIDRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`updateAccountProfileByUID`](../interfaces/AccountsApiInterface.md#updateaccountprofilebyuid)

***

### updatePhoneNumber()

> **updatePhoneNumber**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

Updates the PhoneID associated with an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiUpdatePhoneNumberRequest`](../interfaces/AccountsApiUpdatePhoneNumberRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`updatePhoneNumber`](../interfaces/AccountsApiInterface.md#updatephonenumber)

***

### upsertEmailForAccount()

> **upsertEmailForAccount**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

Adds or updates an Email associated with an Account using the UID.

#### Parameters

##### requestParameters

[`AccountsApiUpsertEmailForAccountRequest`](../interfaces/AccountsApiUpsertEmailForAccountRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountsApi

#### Implementation of

[`AccountsApiInterface`](../interfaces/AccountsApiInterface.md).[`upsertEmailForAccount`](../interfaces/AccountsApiInterface.md#upsertemailforaccount)
