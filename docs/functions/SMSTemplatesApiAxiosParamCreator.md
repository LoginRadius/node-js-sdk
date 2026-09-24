[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SMSTemplatesApiAxiosParamCreator

# Function: SMSTemplatesApiAxiosParamCreator()

> **SMSTemplatesApiAxiosParamCreator**(`configuration?`): `object`

SMSTemplatesApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createSmsTemplate

> **createSmsTemplate**: (`smsTemplate`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new SMS template for a specified customer and Tenant.

#### Parameters

##### smsTemplate

[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteSmsTemplate

> **deleteSmsTemplate**: (`templateType`, `deleteSmsTemplateModel`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes an SMS template by its type for a specified customer and Tenant.

#### Parameters

##### templateType

[`DeleteSmsTemplateTemplateTypeEnum`](../enumerations/DeleteSmsTemplateTemplateTypeEnum.md)

The type of SMS template to delete.

##### deleteSmsTemplateModel

[`DeleteSmsTemplateModel`](../loginradius-sdk/namespaces/Models/interfaces/DeleteSmsTemplateModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getSmsTemplates

> **getSmsTemplates**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of SMS templates for a specified customer and Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateSmsTemplate

> **updateSmsTemplate**: (`templateType`, `updateSmsTemplateModel`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an existing SMS template by its type for a specified customer and Tenant.

#### Parameters

##### templateType

[`UpdateSmsTemplateTemplateTypeEnum`](../enumerations/UpdateSmsTemplateTemplateTypeEnum.md)

The type of SMS template to delete.

##### updateSmsTemplateModel

[`UpdateSmsTemplateModel`](../loginradius-sdk/namespaces/Models/interfaces/UpdateSmsTemplateModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
