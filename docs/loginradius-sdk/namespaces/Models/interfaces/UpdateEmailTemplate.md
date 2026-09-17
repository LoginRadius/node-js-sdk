[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / UpdateEmailTemplate

# Interface: UpdateEmailTemplate

## Export

UpdateEmailTemplate

## Properties

### EmailConfigId?

> `optional` **EmailConfigId?**: `string`

Email configuration ID for sending this template.

#### Memberof

UpdateEmailTemplate

***

### FromEmail?

> `optional` **FromEmail?**: `string`

The Email address of the sender

#### Memberof

UpdateEmailTemplate

***

### FromName?

> `optional` **FromName?**: `string`

The name of the sender

#### Memberof

UpdateEmailTemplate

***

### IsDefault?

> `optional` **IsDefault?**: `boolean`

Set to true to mark this template as the default for its TemplateType.

#### Memberof

UpdateEmailTemplate

***

### Subject

> **Subject**: `string`

The subject of the Email template

#### Memberof

UpdateEmailTemplate

***

### Template

> **Template**: `string`

The content of the Email template

#### Memberof

UpdateEmailTemplate

***

### TemplateName?

> `optional` **TemplateName?**: `string`

The name of the Email template

#### Memberof

UpdateEmailTemplate

***

### TextTemplate?

> `optional` **TextTemplate?**: `string`

The text version of the Email template

#### Memberof

UpdateEmailTemplate

***

### VerificationTokenType?

> `optional` **VerificationTokenType?**: [`UpdateEmailTemplateVerificationTokenTypeEnum`](../enumerations/UpdateEmailTemplateVerificationTokenTypeEnum.md)

The Email Verification token type for the template.  This will be set only for \'registration\',\'forgotpassword\',\'deleteaccount\',\'add_email\',\'oneclicksignin\', \'autologin\',\'noregistrationpasswordlesslogin\',\'forgotpin\',\'breached_password\' and \'forget_passkey\' templates.

#### Memberof

UpdateEmailTemplate
