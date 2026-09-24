[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / EmailTemplateModel

# Interface: EmailTemplateModel

## Export

EmailTemplateModel

## Properties

### EmailConfigId?

> `optional` **EmailConfigId?**: `string`

Email configuration ID for sending this template.

#### Memberof

EmailTemplateModel

***

### FromEmail?

> `optional` **FromEmail?**: `string`

The Email address of the sender

#### Memberof

EmailTemplateModel

***

### FromName?

> `optional` **FromName?**: `string`

The name of the sender

#### Memberof

EmailTemplateModel

***

### IsDefault?

> `optional` **IsDefault?**: `boolean`

Set to true to mark this template as the default for its TemplateType.

#### Memberof

EmailTemplateModel

***

### Subject

> **Subject**: `string`

The subject of the Email template

#### Memberof

EmailTemplateModel

***

### Template

> **Template**: `string`

The content of the Email template

#### Memberof

EmailTemplateModel

***

### TemplateName?

> `optional` **TemplateName?**: `string`

The name of the Email template

#### Memberof

EmailTemplateModel

***

### TemplateType

> **TemplateType**: [`EmailTemplateModelTemplateTypeEnum`](../enumerations/EmailTemplateModelTemplateTypeEnum.md)

The type of the Email template

#### Memberof

EmailTemplateModel

***

### TextTemplate?

> `optional` **TextTemplate?**: `string`

The text version of the Email template

#### Memberof

EmailTemplateModel

***

### VerificationTokenType?

> `optional` **VerificationTokenType?**: [`EmailTemplateModelVerificationTokenTypeEnum`](../enumerations/EmailTemplateModelVerificationTokenTypeEnum.md)

The Email Verification token type for the template.  This will be set only for \'registration\',\'forgotpassword\',\'deleteaccount\',\'add_email\',\'oneclicksignin\', \'autologin\',\'noregistrationpasswordlesslogin\',\'forgotpin\',\'breached_password\' and \'forget_passkey\' templates.

#### Memberof

EmailTemplateModel
