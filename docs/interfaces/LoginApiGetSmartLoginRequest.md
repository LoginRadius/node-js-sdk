[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiGetSmartLoginRequest

# Interface: LoginApiGetSmartLoginRequest

Request parameters for getSmartLogin operation in LoginApi.

## Export

LoginApiGetSmartLoginRequest

## Properties

### clientguid?

> `readonly` `optional` **clientguid?**: `string`

Client GUID for the request.

#### Memberof

LoginApiGetSmartLogin

***

### email?

> `readonly` `optional` **email?**: `string`

Email address of the associated Account.

#### Memberof

LoginApiGetSmartLogin

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

LoginApiGetSmartLogin

***

### phone?

> `readonly` `optional` **phone?**: `string`

Phone ID of the associated Account.

#### Memberof

LoginApiGetSmartLogin

***

### redirecturl?

> `readonly` `optional` **redirecturl?**: `string`

The URL to which the User will be redirected after completing the operation, such as login or verification.

#### Memberof

LoginApiGetSmartLogin

***

### smartloginemailtemplate?

> `readonly` `optional` **smartloginemailtemplate?**: `string`

The template name for the smart login Email.

#### Memberof

LoginApiGetSmartLogin

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

LoginApiGetSmartLogin

***

### username?

> `readonly` `optional` **username?**: `string`

Username of the associated Account.

#### Memberof

LoginApiGetSmartLogin

***

### welcomeemailtemplate?

> `readonly` `optional` **welcomeemailtemplate?**: `string`

Welcome Email Template

#### Memberof

LoginApiGetSmartLogin
