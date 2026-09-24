[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / VerifyEmailModel

# Interface: VerifyEmailModel

## Export

VerifyEmailModel

## Properties

### email?

> `optional` **email?**: `string`

User\'s Email address (required if `uuid` or `username` is not passed).

#### Memberof

VerifyEmailModel

***

### otp

> **otp**: `string`

One-time passcode sent to the User\'s Email. [required if \'email\' or \'uuid\' is passed]

#### Memberof

VerifyEmailModel

***

### securityanswer?

> `optional` **securityanswer?**: `object`

JSON object with unique security question IDs and answers.

#### Memberof

VerifyEmailModel

***

### username?

> `optional` **username?**: `string`

Username of the associated Account (required if `email` or `uuid` is not passed). Cannot be combined with `email`.

#### Memberof

VerifyEmailModel

***

### UUID?

> `optional` **UUID?**: `string`

UUID received in the response of the Auth send verification Email API (required if `email` or `username` is not passed).

#### Memberof

VerifyEmailModel

***

### verificationtoken?

> `optional` **verificationtoken?**: `string`

Verification token received in Email (required if `email` is not passed).

#### Memberof

VerifyEmailModel
