[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiPasswordlessEmailVerificationRequest

# Interface: LoginApiPasswordlessEmailVerificationRequest

Request parameters for passwordlessEmailVerification operation in LoginApi.

## Export

LoginApiPasswordlessEmailVerificationRequest

## Properties

### duoredirecturi?

> `readonly` `optional` **duoredirecturi?**: `string`

Duo auth redirection url.

#### Memberof

LoginApiPasswordlessEmailVerification

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessEmailVerification

***

### smstemplate2fa?

> `readonly` `optional` **smstemplate2fa?**: `string`

SMS template name to be used for sending the 2FA code to the User.

#### Memberof

LoginApiPasswordlessEmailVerification

***

### verificationtoken?

> `readonly` `optional` **verificationtoken?**: `string`

Verification token received in the Email.

#### Memberof

LoginApiPasswordlessEmailVerification

***

### welcomeemailtemplate?

> `readonly` `optional` **welcomeemailtemplate?**: `string`

Welcome Email Template

#### Memberof

LoginApiPasswordlessEmailVerification

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiPasswordlessEmailVerification
