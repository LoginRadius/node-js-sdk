[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityQuestionsApiInterface

# Interface: SecurityQuestionsApiInterface

SecurityQuestionsApi - interface

## Export

SecurityQuestionsApi

## Methods

### addSecurityQuestion()

> **addSecurityQuestion**(`requestParameters`, `options?`): `AxiosPromise`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md)\>

Adds a new security question to the Tenant\'s configuration.

#### Parameters

##### requestParameters

[`SecurityQuestionsApiAddSecurityQuestionRequest`](SecurityQuestionsApiAddSecurityQuestionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md)\>

#### Throws

#### Memberof

SecurityQuestionsApiInterface

***

### deleteSecurityQuestion()

> **deleteSecurityQuestion**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a security question by its ID.

#### Parameters

##### requestParameters

[`SecurityQuestionsApiDeleteSecurityQuestionRequest`](SecurityQuestionsApiDeleteSecurityQuestionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

SecurityQuestionsApiInterface

***

### getSecurityQuestionRenderCount()

> **getSecurityQuestionRenderCount**(`options?`): `AxiosPromise`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)\>

Retrieves the number of security questions to render for a User.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)\>

#### Throws

#### Memberof

SecurityQuestionsApiInterface

***

### getSecurityQuestions()

> **getSecurityQuestions**(`options?`): `AxiosPromise`\<[`GetSecurityQuestions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSecurityQuestions200Response.md)\>

Retrieves a list of all available security questions for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetSecurityQuestions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSecurityQuestions200Response.md)\>

#### Throws

#### Memberof

SecurityQuestionsApiInterface

***

### updateSecurityQuestion()

> **updateSecurityQuestion**(`requestParameters`, `options?`): `AxiosPromise`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md)\>

Updates an existing security question by its ID.

#### Parameters

##### requestParameters

[`SecurityQuestionsApiUpdateSecurityQuestionRequest`](SecurityQuestionsApiUpdateSecurityQuestionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md)\>

#### Throws

#### Memberof

SecurityQuestionsApiInterface

***

### updateSecurityQuestionRenderCount()

> **updateSecurityQuestionRenderCount**(`requestParameters`, `options?`): `AxiosPromise`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)\>

Updates the number of security questions to render for a User.

#### Parameters

##### requestParameters

[`SecurityQuestionsApiUpdateSecurityQuestionRenderCountRequest`](SecurityQuestionsApiUpdateSecurityQuestionRenderCountRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md)\>

#### Throws

#### Memberof

SecurityQuestionsApiInterface
