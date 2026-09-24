[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / ChangePasswordCore

# Interface: ChangePasswordCore

## Export

ChangePasswordCore

## Properties

### NewPassword

> **NewPassword**: `string`

User\'s new password

#### Memberof

ChangePasswordCore

***

### OldPassword

> **OldPassword**: `string`

User\'s current password

#### Memberof

ChangePasswordCore

***

### SecurityAnswer?

> `optional` **SecurityAnswer?**: `object`

Optional map of security question IDs/keys to answers, used to unlock an account that is locked pending security-question verification.

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

ChangePasswordCore
