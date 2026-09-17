[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / MultipurposeTokensApi

# Class: MultipurposeTokensApi

MultipurposeTokensApi - object-oriented interface

## Export

MultipurposeTokensApi

## Extends

- `BaseAPI`

## Implements

- [`MultipurposeTokensApiInterface`](../interfaces/MultipurposeTokensApiInterface.md)

## Constructors

### Constructor

> **new MultipurposeTokensApi**(`configuration?`, `basePath?`, `axios?`): `MultipurposeTokensApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`MultipurposeTokensApi`

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

### forgotPasswordTokenAndEmail()

> **forgotPasswordTokenAndEmail**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ForgotPasswordTokenModel`](../loginradius-sdk/namespaces/Models/interfaces/ForgotPasswordTokenModel.md), `any`, \{ \}, `any`\>\>

Generates a Forgot Password Token for the User and optionally sends an Email with the token.

#### Parameters

##### requestParameters

[`MultipurposeTokensApiForgotPasswordTokenAndEmailRequest`](../interfaces/MultipurposeTokensApiForgotPasswordTokenAndEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ForgotPasswordTokenModel`](../loginradius-sdk/namespaces/Models/interfaces/ForgotPasswordTokenModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

MultipurposeTokensApi

#### Implementation of

[`MultipurposeTokensApiInterface`](../interfaces/MultipurposeTokensApiInterface.md).[`forgotPasswordTokenAndEmail`](../interfaces/MultipurposeTokensApiInterface.md#forgotpasswordtokenandemail)

***

### getVerificationToken()

> **getVerificationToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`VerificationLinkResponse`](../loginradius-sdk/namespaces/Models/interfaces/VerificationLinkResponse.md), `any`, \{ \}, `any`\>\>

Retrieves an Email Verification Token for a specified Email. Optionally sends the verification Email to the User when sendemail is set to true.

#### Parameters

##### requestParameters

[`MultipurposeTokensApiGetVerificationTokenRequest`](../interfaces/MultipurposeTokensApiGetVerificationTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`VerificationLinkResponse`](../loginradius-sdk/namespaces/Models/interfaces/VerificationLinkResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

MultipurposeTokensApi

#### Implementation of

[`MultipurposeTokensApiInterface`](../interfaces/MultipurposeTokensApiInterface.md).[`getVerificationToken`](../interfaces/MultipurposeTokensApiInterface.md#getverificationtoken)

***

### multipurposeEmailTokenAPI()

> **multipurposeEmailTokenAPI**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GenerateTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateTokenResponse.md), `any`, \{ \}, `any`\>\>

Retrieves a multi-purpose Email token for verification, Password reset, and other Email-related actions.

#### Parameters

##### requestParameters

[`MultipurposeTokensApiMultipurposeEmailTokenAPIRequest`](../interfaces/MultipurposeTokensApiMultipurposeEmailTokenAPIRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GenerateTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

MultipurposeTokensApi

#### Implementation of

[`MultipurposeTokensApiInterface`](../interfaces/MultipurposeTokensApiInterface.md).[`multipurposeEmailTokenAPI`](../interfaces/MultipurposeTokensApiInterface.md#multipurposeemailtokenapi)

***

### multipurposeSmsOtpAPI()

> **multipurposeSmsOtpAPI**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GenerateTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateTokenResponse.md), `any`, \{ \}, `any`\>\>

Generates an OTP for the User, applicable for adding a Phone, Phone ID verification, and other SMS-related actions.

#### Parameters

##### requestParameters

[`MultipurposeTokensApiMultipurposeSmsOtpAPIRequest`](../interfaces/MultipurposeTokensApiMultipurposeSmsOtpAPIRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GenerateTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

MultipurposeTokensApi

#### Implementation of

[`MultipurposeTokensApiInterface`](../interfaces/MultipurposeTokensApiInterface.md).[`multipurposeSmsOtpAPI`](../interfaces/MultipurposeTokensApiInterface.md#multipurposesmsotpapi)
