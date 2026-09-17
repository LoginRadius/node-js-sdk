[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / EmailTemplatesApi

# Class: EmailTemplatesApi

EmailTemplatesApi - object-oriented interface

## Export

EmailTemplatesApi

## Extends

- `BaseAPI`

## Implements

- [`EmailTemplatesApiInterface`](../interfaces/EmailTemplatesApiInterface.md)

## Constructors

### Constructor

> **new EmailTemplatesApi**(`configuration?`, `basePath?`, `axios?`): `EmailTemplatesApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`EmailTemplatesApi`

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

### addEmailTemplate()

> **addEmailTemplate**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md), `any`, \{ \}, `any`\>\>

Adds a new Email template to the Tenant\'s configuration.

#### Parameters

##### requestParameters

[`EmailTemplatesApiAddEmailTemplateRequest`](../interfaces/EmailTemplatesApiAddEmailTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

EmailTemplatesApi

#### Implementation of

[`EmailTemplatesApiInterface`](../interfaces/EmailTemplatesApiInterface.md).[`addEmailTemplate`](../interfaces/EmailTemplatesApiInterface.md#addemailtemplate)

***

### deleteEmailTemplate()

> **deleteEmailTemplate**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### requestParameters

[`EmailTemplatesApiDeleteEmailTemplateRequest`](../interfaces/EmailTemplatesApiDeleteEmailTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

EmailTemplatesApi

#### Implementation of

[`EmailTemplatesApiInterface`](../interfaces/EmailTemplatesApiInterface.md).[`deleteEmailTemplate`](../interfaces/EmailTemplatesApiInterface.md#deleteemailtemplate)

***

### getEmailTemplates()

> **getEmailTemplates**(`options?`): `Promise`\<`AxiosResponse`\<[`GetEmailTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetEmailTemplates200Response.md), `any`, \{ \}, `any`\>\>

Retrieves all Email templates configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetEmailTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetEmailTemplates200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

EmailTemplatesApi

#### Implementation of

[`EmailTemplatesApiInterface`](../interfaces/EmailTemplatesApiInterface.md).[`getEmailTemplates`](../interfaces/EmailTemplatesApiInterface.md#getemailtemplates)

***

### updateEmailTemplate()

> **updateEmailTemplate**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md), `any`, \{ \}, `any`\>\>

Updates the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### requestParameters

[`EmailTemplatesApiUpdateEmailTemplateRequest`](../interfaces/EmailTemplatesApiUpdateEmailTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

EmailTemplatesApi

#### Implementation of

[`EmailTemplatesApiInterface`](../interfaces/EmailTemplatesApiInterface.md).[`updateEmailTemplate`](../interfaces/EmailTemplatesApiInterface.md#updateemailtemplate)
