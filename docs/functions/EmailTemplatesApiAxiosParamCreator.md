[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / EmailTemplatesApiAxiosParamCreator

# Function: EmailTemplatesApiAxiosParamCreator()

> **EmailTemplatesApiAxiosParamCreator**(`configuration?`): `object`

EmailTemplatesApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### addEmailTemplate

> **addEmailTemplate**: (`emailTemplateModel`, `options?`) => `Promise`\<`RequestArgs`\>

Adds a new Email template to the Tenant\'s configuration.

#### Parameters

##### emailTemplateModel

[`EmailTemplateModel`](../loginradius-sdk/namespaces/Models/interfaces/EmailTemplateModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteEmailTemplate

> **deleteEmailTemplate**: (`templateType`, `deleteEmailTemplate?`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### templateType

[`DeleteEmailTemplateTemplateTypeEnum`](../enumerations/DeleteEmailTemplateTemplateTypeEnum.md)

The type of Email template to delete.

##### deleteEmailTemplate?

[`DeleteEmailTemplate`](../loginradius-sdk/namespaces/Models/interfaces/DeleteEmailTemplate.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getEmailTemplates

> **getEmailTemplates**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves all Email templates configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateEmailTemplate

> **updateEmailTemplate**: (`templateType`, `updateEmailTemplate`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the Email template for a specified Email template type within a specific Tenant.

#### Parameters

##### templateType

[`UpdateEmailTemplateTemplateTypeEnum`](../enumerations/UpdateEmailTemplateTemplateTypeEnum.md)

The type of Email template to delete.

##### updateEmailTemplate

[`UpdateEmailTemplate`](../loginradius-sdk/namespaces/Models/interfaces/UpdateEmailTemplate.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
