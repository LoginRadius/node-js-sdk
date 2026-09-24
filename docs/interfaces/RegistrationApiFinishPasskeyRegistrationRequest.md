[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RegistrationApiFinishPasskeyRegistrationRequest

# Interface: RegistrationApiFinishPasskeyRegistrationRequest

Request parameters for finishPasskeyRegistration operation in RegistrationApi.

## Export

RegistrationApiFinishPasskeyRegistrationRequest

## Properties

### \_options?

> `readonly` `optional` **\_options?**: `string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

#### Memberof

RegistrationApiFinishPasskeyRegistration

***

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

RegistrationApiFinishPasskeyRegistration

***

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

RegistrationApiFinishPasskeyRegistration

***

### invitationToken?

> `readonly` `optional` **invitationToken?**: `string`

Invitation token of an organization

#### Memberof

RegistrationApiFinishPasskeyRegistration

***

### passkeyRegisterFinish

> `readonly` **passkeyRegisterFinish**: [`PasskeyRegisterFinish`](../loginradius-sdk/namespaces/Models/type-aliases/PasskeyRegisterFinish.md)

#### Memberof

RegistrationApiFinishPasskeyRegistration

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

RegistrationApiFinishPasskeyRegistration

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

RegistrationApiFinishPasskeyRegistration

***

### welcomeemailtemplate?

> `readonly` `optional` **welcomeemailtemplate?**: `string`

Welcome Email Template

#### Memberof

RegistrationApiFinishPasskeyRegistration

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

RegistrationApiFinishPasskeyRegistration
