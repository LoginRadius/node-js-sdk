[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RegistrationApiUserRegistrationBySottEmailPhoneUserNameRequest

# Interface: RegistrationApiUserRegistrationBySottEmailPhoneUserNameRequest

Request parameters for userRegistrationBySottEmailPhoneUserName operation in RegistrationApi.

## Export

RegistrationApiUserRegistrationBySottEmailPhoneUserNameRequest

## Properties

### \_options?

> `readonly` `optional` **\_options?**: `string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### invitationToken?

> `readonly` `optional` **invitationToken?**: `string`

Invitation token of an organization

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### profileRequestModel

> `readonly` **profileRequestModel**: [`ProfileRequestModel`](../loginradius-sdk/namespaces/Models/interfaces/ProfileRequestModel.md)

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### sott?

> `readonly` `optional` **sott?**: `string`

SOTT should be generated from the server side and passed here or in the X-LoginRadius-Sott header.

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### welcomeemailtemplate?

> `readonly` `optional` **welcomeemailtemplate?**: `string`

Welcome Email Template

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### xLoginRadiusSott?

> `readonly` `optional` **xLoginRadiusSott?**: `string`

SOTT should be generated from the server side and passed here or in sott query parameter.

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

RegistrationApiUserRegistrationBySottEmailPhoneUserName
