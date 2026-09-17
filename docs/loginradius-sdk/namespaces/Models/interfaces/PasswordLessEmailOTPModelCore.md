[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PasswordLessEmailOTPModelCore

# Interface: PasswordLessEmailOTPModelCore

## Export

PasswordLessEmailOTPModelCore

## Properties

### Email

> **Email**: `string`

The Email associated with the Account.

#### Memberof

PasswordLessEmailOTPModelCore

***

### Otp

> **Otp**: `string`

The one-time Password (OTP) for verification.

#### Memberof

PasswordLessEmailOTPModelCore

***

### SecurityAnswer?

> `optional` **SecurityAnswer?**: \{\[`key`: `string`\]: `string`; \} \| `null`

The security answers which is set for the User, this will be used when the User is blocked for the security question.

#### Memberof

PasswordLessEmailOTPModelCore

***

### WelcomeEmailTemplate?

> `optional` **WelcomeEmailTemplate?**: `string`

The template for the welcome Email.

#### Memberof

PasswordLessEmailOTPModelCore
