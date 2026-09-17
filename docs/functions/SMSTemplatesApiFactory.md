[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SMSTemplatesApiFactory

# Function: SMSTemplatesApiFactory()

> **SMSTemplatesApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

SMSTemplatesApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createSmsTemplate()

> **createSmsTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>

Creates a new SMS template for a specified customer and Tenant.

#### Parameters

##### requestParameters

[`SMSTemplatesApiCreateSmsTemplateRequest`](../interfaces/SMSTemplatesApiCreateSmsTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>

#### Throws

### deleteSmsTemplate()

> **deleteSmsTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes an SMS template by its type for a specified customer and Tenant.

#### Parameters

##### requestParameters

[`SMSTemplatesApiDeleteSmsTemplateRequest`](../interfaces/SMSTemplatesApiDeleteSmsTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getSmsTemplates()

> **getSmsTemplates**(`options?`): `AxiosPromise`\<[`GetSmsTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSmsTemplates200Response.md)\>

Retrieves a list of SMS templates for a specified customer and Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetSmsTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSmsTemplates200Response.md)\>

#### Throws

### updateSmsTemplate()

> **updateSmsTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>

Updates an existing SMS template by its type for a specified customer and Tenant.

#### Parameters

##### requestParameters

[`SMSTemplatesApiUpdateSmsTemplateRequest`](../interfaces/SMSTemplatesApiUpdateSmsTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>

#### Throws

## Export
