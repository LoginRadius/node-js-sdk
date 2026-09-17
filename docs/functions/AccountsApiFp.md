[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountsApiFp

# Function: AccountsApiFp()

> **AccountsApiFp**(`configuration?`): `object`

AccountsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createUser()

> **createUser**(`manageRegisterModel`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

Creates a new Account with the provided details.

#### Parameters

##### manageRegisterModel

[`ManageRegisterModel`](../loginradius-sdk/namespaces/Models/interfaces/ManageRegisterModel.md)

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

#### Throws

### deleteAccountByEmail()

> **deleteAccountByEmail**(`email?`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>\>

Deletes an Account based on the specified Email.

#### Parameters

##### email?

`string`

Email address of the associated Account.

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>\>

#### Throws

### deleteAccountByUID()

> **deleteAccountByUID**(`uid`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>\>

Deletes an Account based on the specified UID.

#### Parameters

##### uid

`string`

The UID associated with the User

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeletedResponseWithCount`](../loginradius-sdk/namespaces/Models/interfaces/IsDeletedResponseWithCount.md)\>\>

#### Throws

### deleteEmailFromAccount()

> **deleteEmailFromAccount**(`uid`, `emailModelManage`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Identity`](../loginradius-sdk/namespaces/Models/interfaces/Identity.md)\>\>

Removes an Email from an Account.

#### Parameters

##### uid

`string`

The UID associated with the User

##### emailModelManage

[`EmailModelManage`](../loginradius-sdk/namespaces/Models/interfaces/EmailModelManage.md)

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Identity`](../loginradius-sdk/namespaces/Models/interfaces/Identity.md)\>\>

#### Throws

### deletePasskeyByUid()

> **deletePasskeyByUid**(`uid`, `passkeyId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Removes configured Passkey for specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### passkeyId

`string`

Id asscociated with the Passkey

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### generateSott()

> **generateSott**(`timedifference?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GenerateSottResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateSottResponse.md)\>\>

Generates a Secure One Time Token (SOTT) with a given expiration time.

#### Parameters

##### timedifference?

`string`

The time difference you would like to pass. If no value is passed, the default value is 10 minutes.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GenerateSottResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateSottResponse.md)\>\>

#### Throws

### getAccountIdentity()

> **getAccountIdentity**(`email?`, `username?`, `phone?`, `q?`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

Retrieves Account Identity details using Email, Username, Phone, or Query parameter.

#### Parameters

##### email?

`string`

Email address of the associated Account.

##### username?

`string`

Username of the associated Account.

##### phone?

`string`

Phone ID of the associated Account.

##### q?

`string`

Query filter in &#x60;key:value&#x60; format. The key must be an indexed profile field.

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

#### Throws

### getAccountIdentityByUID()

> **getAccountIdentityByUID**(`uid`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

Retrieves Account Identity details using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

#### Throws

### getConsentLogsByUid()

> **getConsentLogsByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>\>

Retrieves Consent Management logs for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentLogsResponse`](../loginradius-sdk/namespaces/Models/interfaces/ConsentLogsResponse.md)\>\>

#### Throws

### getIdentities()

> **getIdentities**(`email?`, `fields?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentitiesResponse`](../loginradius-sdk/namespaces/Models/interfaces/IdentitiesResponse.md)\>\>

Retrieves Account associated with a specified Email.

#### Parameters

##### email?

`string`

Email address of the associated Account.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentitiesResponse`](../loginradius-sdk/namespaces/Models/interfaces/IdentitiesResponse.md)\>\>

#### Throws

### getImpersonationToken()

> **getImpersonationToken**(`uid`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessToken`](../loginradius-sdk/namespaces/Models/interfaces/AccessToken.md)\>\>

Retrieves an Impersonation Token for an Account using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessToken`](../loginradius-sdk/namespaces/Models/interfaces/AccessToken.md)\>\>

#### Throws

### getPrivacyPolicyHistoryByUid()

> **getPrivacyPolicyHistoryByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>\>

Retrieves the Privacy Policy acceptance history for an Account by UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PrivacyPolicyHistoryResponse`](../loginradius-sdk/namespaces/Models/interfaces/PrivacyPolicyHistoryResponse.md)\>\>

#### Throws

### getProfilePassword()

> **getProfilePassword**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>\>

Retrieves the Password details for an Account using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>\>

#### Throws

### invalidateEmailVerification()

> **invalidateEmailVerification**(`uid`, `xPreventWebhook?`, `preventWebhook?`, `emailtemplate?`, `verificationurl?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Invalidates the Email Verification status for an Account using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### listPasskeyUser()

> **listPasskeyUser**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>\>

Retrieves a list of Passkeys configured for a specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>\>

#### Throws

### resetPhoneVerification()

> **resetPhoneVerification**(`uid`, `xPreventWebhook?`, `preventWebhook?`, `smstemplate?`, `isvoiceotp?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Resets the Phone verification status for an Account using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### setProfilePassword()

> **setProfilePassword**(`uid`, `passwordModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>\>

Sets or updates the Password for an Account using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### passwordModel

[`PasswordModel`](../loginradius-sdk/namespaces/Models/interfaces/PasswordModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasswordResponse.md)\>\>

#### Throws

### updateAccountProfileByUID()

> **updateAccountProfileByUID**(`uid`, `manageRegisterModel`, `xPreventWebhook?`, `preventWebhook?`, `nullsupport?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

Updates Account details using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### manageRegisterModel

[`ManageRegisterModel`](../loginradius-sdk/namespaces/Models/interfaces/ManageRegisterModel.md)

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### nullsupport?

`boolean`

Bool flag, if this flag is sent as true then the fields which are send in payload as null then in the profile as well that will be saved as null only

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

#### Throws

### updatePhoneNumber()

> **updatePhoneNumber**(`uid`, `phoneModel`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

Updates the PhoneID associated with an Account using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### phoneModel

[`PhoneModel`](../loginradius-sdk/namespaces/Models/interfaces/PhoneModel.md)

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

#### Throws

### upsertEmailForAccount()

> **upsertEmailForAccount**(`uid`, `upsertEmailModel`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

Adds or updates an Email associated with an Account using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### upsertEmailModel

[`UpsertEmailModel`](../loginradius-sdk/namespaces/Models/interfaces/UpsertEmailModel.md)

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

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IdentityResponseWithSocialWithoutLogins`](../loginradius-sdk/namespaces/Models/type-aliases/IdentityResponseWithSocialWithoutLogins.md)\>\>

#### Throws

## Export
