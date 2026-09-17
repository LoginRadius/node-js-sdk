[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / EmailTemplatesApiFactory

# Function: EmailTemplatesApiFactory()

> **EmailTemplatesApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

EmailTemplatesApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### addEmailTemplate()

> **addEmailTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>

Adds a new Email template to the Tenant\'s configuration.

#### Parameters

##### requestParameters

[`EmailTemplatesApiAddEmailTemplateRequest`](../interfaces/EmailTemplatesApiAddEmailTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>

#### Throws

### deleteEmailTemplate()

> **deleteEmailTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### requestParameters

[`EmailTemplatesApiDeleteEmailTemplateRequest`](../interfaces/EmailTemplatesApiDeleteEmailTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

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

### updateEmailTemplate()

> **updateEmailTemplate**(`requestParameters`, `options?`): `AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>

Updates the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### requestParameters

[`EmailTemplatesApiUpdateEmailTemplateRequest`](../interfaces/EmailTemplatesApiUpdateEmailTemplateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>

#### Throws

## Export
