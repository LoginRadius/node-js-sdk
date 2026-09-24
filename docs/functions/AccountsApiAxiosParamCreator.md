[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountsApiAxiosParamCreator

# Function: AccountsApiAxiosParamCreator()

> **AccountsApiAxiosParamCreator**(`configuration?`): `object`

AccountsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createUser

> **createUser**: (`manageRegisterModel`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteAccountByEmail

> **deleteAccountByEmail**: (`email?`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteAccountByUID

> **deleteAccountByUID**: (`uid`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteEmailFromAccount

> **deleteEmailFromAccount**: (`uid`, `emailModelManage`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deletePasskeyByUid

> **deletePasskeyByUid**: (`uid`, `passkeyId`, `options?`) => `Promise`\<`RequestArgs`\>

Removes configured Passkey for specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### passkeyId

`string`

Id asscociated with the Passkey

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### generateSott

> **generateSott**: (`timedifference?`, `options?`) => `Promise`\<`RequestArgs`\>

Generates a Secure One Time Token (SOTT) with a given expiration time.

#### Parameters

##### timedifference?

`string`

The time difference you would like to pass. If no value is passed, the default value is 10 minutes.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAccountIdentity

> **getAccountIdentity**: (`email?`, `username?`, `phone?`, `q?`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAccountIdentityByUID

> **getAccountIdentityByUID**: (`uid`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getConsentLogsByUid

> **getConsentLogsByUid**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves Consent Management logs for the specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getIdentities

> **getIdentities**: (`email?`, `fields?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves Account associated with a specified Email.

#### Parameters

##### email?

`string`

Email address of the associated Account.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getImpersonationToken

> **getImpersonationToken**: (`uid`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getPrivacyPolicyHistoryByUid

> **getPrivacyPolicyHistoryByUid**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Privacy Policy acceptance history for an Account by UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getProfilePassword

> **getProfilePassword**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Password details for an Account using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### invalidateEmailVerification

> **invalidateEmailVerification**: (`uid`, `xPreventWebhook?`, `preventWebhook?`, `emailtemplate?`, `verificationurl?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### listPasskeyUser

> **listPasskeyUser**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of Passkeys configured for a specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resetPhoneVerification

> **resetPhoneVerification**: (`uid`, `xPreventWebhook?`, `preventWebhook?`, `smstemplate?`, `isvoiceotp?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### setProfilePassword

> **setProfilePassword**: (`uid`, `passwordModel`, `options?`) => `Promise`\<`RequestArgs`\>

Sets or updates the Password for an Account using the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### passwordModel

[`PasswordModel`](../loginradius-sdk/namespaces/Models/interfaces/PasswordModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateAccountProfileByUID

> **updateAccountProfileByUID**: (`uid`, `manageRegisterModel`, `xPreventWebhook?`, `preventWebhook?`, `nullsupport?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updatePhoneNumber

> **updatePhoneNumber**: (`uid`, `phoneModel`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### upsertEmailForAccount

> **upsertEmailForAccount**: (`uid`, `upsertEmailModel`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
