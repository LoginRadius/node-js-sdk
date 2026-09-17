[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SMSTemplatesApi

# Class: SMSTemplatesApi

SMSTemplatesApi - object-oriented interface

## Export

SMSTemplatesApi

## Extends

- `BaseAPI`

## Implements

- [`SMSTemplatesApiInterface`](../interfaces/SMSTemplatesApiInterface.md)

## Constructors

### Constructor

> **new SMSTemplatesApi**(`configuration?`, `basePath?`, `axios?`): `SMSTemplatesApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SMSTemplatesApi`

#### Inherited from

`BaseAPI.constructor`

## Properties

### axios

> `protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

`BaseAPI.axios`

***

### basePath

> `protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

`BaseAPI.basePath`

***

### configuration

> `protected` **configuration**: `Configuration` \| `undefined`

#### Inherited from

`BaseAPI.configuration`

## Methods

### createSmsTemplate()

> **createSmsTemplate**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md), `any`, \{ \}, `any`\>\>

Creates a new SMS template for a specified customer and Tenant.

#### Parameters

##### requestParameters

[`SMSTemplatesApiCreateSmsTemplateRequest`](../interfaces/SMSTemplatesApiCreateSmsTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SMSTemplatesApi

#### Implementation of

[`SMSTemplatesApiInterface`](../interfaces/SMSTemplatesApiInterface.md).[`createSmsTemplate`](../interfaces/SMSTemplatesApiInterface.md#createsmstemplate)

***

### deleteSmsTemplate()

> **deleteSmsTemplate**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes an SMS template by its type for a specified customer and Tenant.

#### Parameters

##### requestParameters

[`SMSTemplatesApiDeleteSmsTemplateRequest`](../interfaces/SMSTemplatesApiDeleteSmsTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SMSTemplatesApi

#### Implementation of

[`SMSTemplatesApiInterface`](../interfaces/SMSTemplatesApiInterface.md).[`deleteSmsTemplate`](../interfaces/SMSTemplatesApiInterface.md#deletesmstemplate)

***

### getSmsTemplates()

> **getSmsTemplates**(`options?`): `Promise`\<`AxiosResponse`\<[`GetSmsTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSmsTemplates200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of SMS templates for a specified customer and Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetSmsTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSmsTemplates200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SMSTemplatesApi

#### Implementation of

[`SMSTemplatesApiInterface`](../interfaces/SMSTemplatesApiInterface.md).[`getSmsTemplates`](../interfaces/SMSTemplatesApiInterface.md#getsmstemplates)

***

### updateSmsTemplate()

> **updateSmsTemplate**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md), `any`, \{ \}, `any`\>\>

Updates an existing SMS template by its type for a specified customer and Tenant.

#### Parameters

##### requestParameters

[`SMSTemplatesApiUpdateSmsTemplateRequest`](../interfaces/SMSTemplatesApiUpdateSmsTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SmsTemplate`](../loginradius-sdk/namespaces/Models/interfaces/SmsTemplate.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SMSTemplatesApi

#### Implementation of

[`SMSTemplatesApiInterface`](../interfaces/SMSTemplatesApiInterface.md).[`updateSmsTemplate`](../interfaces/SMSTemplatesApiInterface.md#updatesmstemplate)
