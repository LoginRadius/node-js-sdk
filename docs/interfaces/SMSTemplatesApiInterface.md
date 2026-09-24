[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SMSTemplatesApiInterface

# Interface: SMSTemplatesApiInterface

SMSTemplatesApi - interface

## Export

SMSTemplatesApi

## Methods

### createSmsTemplate()

> **createSmsTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>

Creates a new SMS template for a specified customer and Tenant.

#### Parameters

##### requestParameters

[`SMSTemplatesApiCreateSmsTemplateRequest`](SMSTemplatesApiCreateSmsTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>

#### Throws

#### Memberof

SMSTemplatesApiInterface

***

### deleteSmsTemplate()

> **deleteSmsTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes an SMS template by its type for a specified customer and Tenant.

#### Parameters

##### requestParameters

[`SMSTemplatesApiDeleteSmsTemplateRequest`](SMSTemplatesApiDeleteSmsTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

SMSTemplatesApiInterface

***

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

#### Memberof

SMSTemplatesApiInterface

***

### updateSmsTemplate()

> **updateSmsTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>

Updates an existing SMS template by its type for a specified customer and Tenant.

#### Parameters

##### requestParameters

[`SMSTemplatesApiUpdateSmsTemplateRequest`](SMSTemplatesApiUpdateSmsTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md)\>

#### Throws

#### Memberof

SMSTemplatesApiInterface
