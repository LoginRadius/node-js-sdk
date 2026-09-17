[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / ResetPasswordByEmailOtpCore

# Interface: ResetPasswordByEmailOtpCore

## Export

ResetPasswordByEmailOtpCore

## Properties

### email

> **email**: `string`

User\'s Email address.

#### Memberof

ResetPasswordByEmailOtpCore

***

### otp

> **otp**: `string`

One-time passcode sent to the User\'s Email.

#### Memberof

ResetPasswordByEmailOtpCore

***

### Password

> **Password**: `string`

The new Password for the Account.

#### Memberof

ResetPasswordByEmailOtpCore

***

### ResetPasswordEmailTemplate?

> `optional` **ResetPasswordEmailTemplate?**: `string`

Optional reset Password Email template.

#### Memberof

ResetPasswordByEmailOtpCore

***

### SecurityAnswer?

> `optional` **SecurityAnswer?**: \{\[`key`: `string`\]: `string`; \} \| `null`

A map of security question keys and their corresponding answers.

#### Memberof

ResetPasswordByEmailOtpCore

***

### welcomeemailtemplate?

> `optional` **welcomeemailtemplate?**: `string`

Optional welcome Email template.

#### Memberof

ResetPasswordByEmailOtpCore
