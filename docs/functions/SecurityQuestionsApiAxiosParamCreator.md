[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityQuestionsApiAxiosParamCreator

# Function: SecurityQuestionsApiAxiosParamCreator()

> **SecurityQuestionsApiAxiosParamCreator**(`configuration?`): `object`

SecurityQuestionsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### addSecurityQuestion

> **addSecurityQuestion**: (`securityQuestionInput`, `options?`) => `Promise`\<`RequestArgs`\>

Adds a new security question to the Tenant\'s configuration.

#### Parameters

##### securityQuestionInput

[`SecurityQuestionInput`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionInput.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteSecurityQuestion

> **deleteSecurityQuestion**: (`securityQuestionID`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes a security question by its ID.

#### Parameters

##### securityQuestionID

`string`

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getSecurityQuestionRenderCount

> **getSecurityQuestionRenderCount**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the number of security questions to render for a User.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getSecurityQuestions

> **getSecurityQuestions**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all available security questions for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateSecurityQuestion

> **updateSecurityQuestion**: (`securityQuestionID`, `securityQuestionInput`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an existing security question by its ID.

#### Parameters

##### securityQuestionID

`string`

##### securityQuestionInput

[`SecurityQuestionInput`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionInput.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateSecurityQuestionRenderCount

> **updateSecurityQuestionRenderCount**: (`securityQuestionsRender`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the number of security questions to render for a User.

#### Parameters

##### securityQuestionsRender

[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
