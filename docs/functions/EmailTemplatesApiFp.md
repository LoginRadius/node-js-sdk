[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / EmailTemplatesApiFp

# Function: EmailTemplatesApiFp()

> **EmailTemplatesApiFp**(`configuration?`): `object`

EmailTemplatesApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### addEmailTemplate()

> **addEmailTemplate**(`emailTemplateModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>\>

Adds a new Email template to the Tenant\'s configuration.

#### Parameters

##### emailTemplateModel

[`EmailTemplateModel`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>\>

#### Throws

### deleteEmailTemplate()

> **deleteEmailTemplate**(`templateType`, `deleteEmailTemplate?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### templateType

[`DeleteEmailTemplateTemplateTypeEnum`](../enumerations/DeleteEmailTemplateTemplateTypeEnum.md)

The type of Email template to delete.

##### deleteEmailTemplate?

[`DeleteEmailTemplate`](../loginradius-sdk/namespaces/Models/interfaces/DeleteEmailTemplate.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getEmailTemplates()

> **getEmailTemplates**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetEmailTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetEmailTemplates200Response.md)\>\>

Retrieves all Email templates configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetEmailTemplates200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetEmailTemplates200Response.md)\>\>

#### Throws

### updateEmailTemplate()

> **updateEmailTemplate**(`templateType`, `updateEmailTemplate`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>\>

Updates the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### templateType

[`UpdateEmailTemplateTemplateTypeEnum`](../enumerations/UpdateEmailTemplateTemplateTypeEnum.md)

The type of Email template to delete.

##### updateEmailTemplate

[`UpdateEmailTemplate`](../loginradius-sdk/namespaces/Models/interfaces/UpdateEmailTemplate.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`EmailTemplateResponse`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateResponse.md)\>\>

#### Throws

## Export
