[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiDeleteAccountRequest

# Interface: UserApiDeleteAccountRequest

Request parameters for deleteAccount operation in UserApi.

## Export

UserApiDeleteAccountRequest

## Properties

### deletetoken?

> `readonly` `optional` **deletetoken?**: `string`

This is required if the OTP is not passed in the query parameter.

#### Memberof

UserApiDeleteAccount

***

### email?

> `readonly` `optional` **email?**: `string`

Email address of the associated Account.

#### Memberof

UserApiDeleteAccount

***

### otp?

> `readonly` `optional` **otp?**: `string`

One-time passcode sent to the User\&#39;s Email.

#### Memberof

UserApiDeleteAccount

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiDeleteAccount

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

UserApiDeleteAccount
