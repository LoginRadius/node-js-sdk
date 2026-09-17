[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / ResetPasswordWithOTPCore

# Interface: ResetPasswordWithOTPCore

Reset Password by Phone and otp

## Export

ResetPasswordWithOTPCore

## Properties

### otp

> **otp**: `string`

One-Time Password received via SMS/email

#### Memberof

ResetPasswordWithOTPCore

***

### Password

> **Password**: `string`

New password

#### Memberof

ResetPasswordWithOTPCore

***

### phone

> **phone**: `string`

Phone number for OTP delivery

#### Memberof

ResetPasswordWithOTPCore

***

### resetpasswordemailtemplate?

> `optional` **resetpasswordemailtemplate?**: `string`

Email template for Password reset (optional)

#### Memberof

ResetPasswordWithOTPCore

***

### resetPasswordSmsTemplate?

> `optional` **resetPasswordSmsTemplate?**: `string`

SMS template for Password reset (optional)

#### Memberof

ResetPasswordWithOTPCore

***

### SecurityAnswer?

> `optional` **SecurityAnswer?**: `object`

Map of security question answers

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

ResetPasswordWithOTPCore

***

### smstemplate?

> `optional` **smstemplate?**: `string`

SMS template (optional)

#### Memberof

ResetPasswordWithOTPCore
