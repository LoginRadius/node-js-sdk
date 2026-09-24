[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityQuestionsApi

# Class: SecurityQuestionsApi

SecurityQuestionsApi - object-oriented interface

## Export

SecurityQuestionsApi

## Extends

- `BaseAPI`

## Implements

- [`SecurityQuestionsApiInterface`](../interfaces/SecurityQuestionsApiInterface.md)

## Constructors

### Constructor

> **new SecurityQuestionsApi**(`configuration?`, `basePath?`, `axios?`): `SecurityQuestionsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SecurityQuestionsApi`

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

### addSecurityQuestion()

> **addSecurityQuestion**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md), `any`, \{ \}, `any`\>\>

Adds a new security question to the Tenant\'s configuration.

#### Parameters

##### requestParameters

[`SecurityQuestionsApiAddSecurityQuestionRequest`](../interfaces/SecurityQuestionsApiAddSecurityQuestionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityQuestionsApi

#### Implementation of

[`SecurityQuestionsApiInterface`](../interfaces/SecurityQuestionsApiInterface.md).[`addSecurityQuestion`](../interfaces/SecurityQuestionsApiInterface.md#addsecurityquestion)

***

### deleteSecurityQuestion()

> **deleteSecurityQuestion**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes a security question by its ID.

#### Parameters

##### requestParameters

[`SecurityQuestionsApiDeleteSecurityQuestionRequest`](../interfaces/SecurityQuestionsApiDeleteSecurityQuestionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityQuestionsApi

#### Implementation of

[`SecurityQuestionsApiInterface`](../interfaces/SecurityQuestionsApiInterface.md).[`deleteSecurityQuestion`](../interfaces/SecurityQuestionsApiInterface.md#deletesecurityquestion)

***

### getSecurityQuestionRenderCount()

> **getSecurityQuestionRenderCount**(`options?`): `Promise`\<`AxiosResponse`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md), `any`, \{ \}, `any`\>\>

Retrieves the number of security questions to render for a User.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityQuestionsApi

#### Implementation of

[`SecurityQuestionsApiInterface`](../interfaces/SecurityQuestionsApiInterface.md).[`getSecurityQuestionRenderCount`](../interfaces/SecurityQuestionsApiInterface.md#getsecurityquestionrendercount)

***

### getSecurityQuestions()

> **getSecurityQuestions**(`options?`): `Promise`\<`AxiosResponse`\<[`GetSecurityQuestions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSecurityQuestions200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all available security questions for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetSecurityQuestions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSecurityQuestions200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityQuestionsApi

#### Implementation of

[`SecurityQuestionsApiInterface`](../interfaces/SecurityQuestionsApiInterface.md).[`getSecurityQuestions`](../interfaces/SecurityQuestionsApiInterface.md#getsecurityquestions)

***

### updateSecurityQuestion()

> **updateSecurityQuestion**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md), `any`, \{ \}, `any`\>\>

Updates an existing security question by its ID.

#### Parameters

##### requestParameters

[`SecurityQuestionsApiUpdateSecurityQuestionRequest`](../interfaces/SecurityQuestionsApiUpdateSecurityQuestionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SecurityQuestion`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestion.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityQuestionsApi

#### Implementation of

[`SecurityQuestionsApiInterface`](../interfaces/SecurityQuestionsApiInterface.md).[`updateSecurityQuestion`](../interfaces/SecurityQuestionsApiInterface.md#updatesecurityquestion)

***

### updateSecurityQuestionRenderCount()

> **updateSecurityQuestionRenderCount**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md), `any`, \{ \}, `any`\>\>

Updates the number of security questions to render for a User.

#### Parameters

##### requestParameters

[`SecurityQuestionsApiUpdateSecurityQuestionRenderCountRequest`](../interfaces/SecurityQuestionsApiUpdateSecurityQuestionRenderCountRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SecurityQuestionsRender`](../loginradius-sdk/namespaces/Models/interfaces/SecurityQuestionsRender.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SecurityQuestionsApi

#### Implementation of

[`SecurityQuestionsApiInterface`](../interfaces/SecurityQuestionsApiInterface.md).[`updateSecurityQuestionRenderCount`](../interfaces/SecurityQuestionsApiInterface.md#updatesecurityquestionrendercount)
