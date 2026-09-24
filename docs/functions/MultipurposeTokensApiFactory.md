[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / MultipurposeTokensApiFactory

# Function: MultipurposeTokensApiFactory()

> **MultipurposeTokensApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

MultipurposeTokensApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### forgotPasswordTokenAndEmail()

> **forgotPasswordTokenAndEmail**(`requestParameters`, `options?`): `AxiosPromise`\<[`ForgotPasswordTokenModel`](../loginradius-sdk/namespaces/Models/interfaces/ForgotPasswordTokenModel.md)\>

Generates a Forgot Password Token for the User and optionally sends an Email with the token.

#### Parameters

##### requestParameters

[`MultipurposeTokensApiForgotPasswordTokenAndEmailRequest`](../interfaces/MultipurposeTokensApiForgotPasswordTokenAndEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ForgotPasswordTokenModel`](../loginradius-sdk/namespaces/Models/interfaces/ForgotPasswordTokenModel.md)\>

#### Throws

### getVerificationToken()

> **getVerificationToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`VerificationLinkResponse`](../loginradius-sdk/namespaces/Models/interfaces/VerificationLinkResponse.md)\>

Retrieves an Email Verification Token for a specified Email. Optionally sends the verification Email to the User when sendemail is set to true.

#### Parameters

##### requestParameters

[`MultipurposeTokensApiGetVerificationTokenRequest`](../interfaces/MultipurposeTokensApiGetVerificationTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`VerificationLinkResponse`](../loginradius-sdk/namespaces/Models/interfaces/VerificationLinkResponse.md)\>

#### Throws

### multipurposeEmailTokenAPI()

> **multipurposeEmailTokenAPI**(`requestParameters`, `options?`): `AxiosPromise`\<[`GenerateTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateTokenResponse.md)\>

Retrieves a multi-purpose Email token for verification, Password reset, and other Email-related actions.

#### Parameters

##### requestParameters

[`MultipurposeTokensApiMultipurposeEmailTokenAPIRequest`](../interfaces/MultipurposeTokensApiMultipurposeEmailTokenAPIRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GenerateTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateTokenResponse.md)\>

#### Throws

### multipurposeSmsOtpAPI()

> **multipurposeSmsOtpAPI**(`requestParameters`, `options?`): `AxiosPromise`\<[`GenerateTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateTokenResponse.md)\>

Generates an OTP for the User, applicable for adding a Phone, Phone ID verification, and other SMS-related actions.

#### Parameters

##### requestParameters

[`MultipurposeTokensApiMultipurposeSmsOtpAPIRequest`](../interfaces/MultipurposeTokensApiMultipurposeSmsOtpAPIRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GenerateTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/GenerateTokenResponse.md)\>

#### Throws

## Export
