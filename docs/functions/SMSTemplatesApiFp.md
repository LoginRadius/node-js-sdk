[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SMSTemplatesApiFp

# Function: SMSTemplatesApiFp()

> **SMSTemplatesApiFp**(`configuration?`): `object`

SMSTemplatesApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createSmsTemplate()

> **createSmsTemplate**(`smsTemplate`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>\>

Creates a new SMS template for a specified customer and Tenant.

#### Parameters

##### smsTemplate

[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>\>

#### Throws

### deleteSmsTemplate()

> **deleteSmsTemplate**(`templateType`, `deleteSmsTemplateModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes an SMS template by its type for a specified customer and Tenant.

#### Parameters

##### templateType

[`DeleteSmsTemplateTemplateTypeEnum`](../enumerations/DeleteSmsTemplateTemplateTypeEnum.md)

The type of SMS template to delete.

##### deleteSmsTemplateModel

[`DeleteSmsTemplateModel`](../loginradius-sdk/namespaces/Models/interfaces/DeleteSmsTemplateModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getSmsTemplates()

> **getSmsTemplates**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetSmsTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSmsTemplates200Response.md)\>\>

Retrieves a list of SMS templates for a specified customer and Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetSmsTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSmsTemplates200Response.md)\>\>

#### Throws

### updateSmsTemplate()

> **updateSmsTemplate**(`templateType`, `updateSmsTemplateModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>\>

Updates an existing SMS template by its type for a specified customer and Tenant.

#### Parameters

##### templateType

[`UpdateSmsTemplateTemplateTypeEnum`](../enumerations/UpdateSmsTemplateTemplateTypeEnum.md)

The type of SMS template to delete.

##### updateSmsTemplateModel

[`UpdateSmsTemplateModel`](../loginradius-sdk/namespaces/Models/interfaces/UpdateSmsTemplateModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>\>

#### Throws

## Export
