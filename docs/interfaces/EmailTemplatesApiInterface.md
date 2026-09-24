[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / EmailTemplatesApiInterface

# Interface: EmailTemplatesApiInterface

EmailTemplatesApi - interface

## Export

EmailTemplatesApi

## Methods

### addEmailTemplate()

> **addEmailTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>

Adds a new Email template to the Tenant\'s configuration.

#### Parameters

##### requestParameters

[`EmailTemplatesApiAddEmailTemplateRequest`](EmailTemplatesApiAddEmailTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>

#### Throws

#### Memberof

EmailTemplatesApiInterface

***

### deleteEmailTemplate()

> **deleteEmailTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### requestParameters

[`EmailTemplatesApiDeleteEmailTemplateRequest`](EmailTemplatesApiDeleteEmailTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

EmailTemplatesApiInterface

***

### getEmailTemplates()

> **getEmailTemplates**(`options?`): `AxiosPromise`\<[`GetEmailTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetEmailTemplates200Response.md)\>

Retrieves all Email templates configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetEmailTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetEmailTemplates200Response.md)\>

#### Throws

#### Memberof

EmailTemplatesApiInterface

***

### updateEmailTemplate()

> **updateEmailTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>

Updates the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### requestParameters

[`EmailTemplatesApiUpdateEmailTemplateRequest`](EmailTemplatesApiUpdateEmailTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>

#### Throws

#### Memberof

EmailTemplatesApiInterface
