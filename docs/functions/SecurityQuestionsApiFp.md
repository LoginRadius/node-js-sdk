[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityQuestionsApiFp

# Function: SecurityQuestionsApiFp()

> **SecurityQuestionsApiFp**(`configuration?`): `object`

SecurityQuestionsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### addSecurityQuestion()

> **addSecurityQuestion**(`securityQuestionInput`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md)\>\>

Adds a new security question to the Tenant\'s configuration.

#### Parameters

##### securityQuestionInput

[`SecurityQuestionInput`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionInput.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md)\>\>

#### Throws

### deleteSecurityQuestion()

> **deleteSecurityQuestion**(`securityQuestionID`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes a security question by its ID.

#### Parameters

##### securityQuestionID

`string`

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getSecurityQuestionRenderCount()

> **getSecurityQuestionRenderCount**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)\>\>

Retrieves the number of security questions to render for a User.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)\>\>

#### Throws

### getSecurityQuestions()

> **getSecurityQuestions**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetSecurityQuestions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSecurityQuestions200Response.md)\>\>

Retrieves a list of all available security questions for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetSecurityQuestions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSecurityQuestions200Response.md)\>\>

#### Throws

### updateSecurityQuestion()

> **updateSecurityQuestion**(`securityQuestionID`, `securityQuestionInput`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md)\>\>

Updates an existing security question by its ID.

#### Parameters

##### securityQuestionID

`string`

##### securityQuestionInput

[`SecurityQuestionInput`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionInput.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md)\>\>

#### Throws

### updateSecurityQuestionRenderCount()

> **updateSecurityQuestionRenderCount**(`securityQuestionsRender`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)\>\>

Updates the number of security questions to render for a User.

#### Parameters

##### securityQuestionsRender

[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)\>\>

#### Throws

## Export
