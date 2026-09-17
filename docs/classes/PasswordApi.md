[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApi

# Class: PasswordApi

PasswordApi - object-oriented interface

## Export

PasswordApi

## Extends

- `BaseAPI`

## Implements

- [`PasswordApiInterface`](../interfaces/PasswordApiInterface.md)

## Constructors

### Constructor

> **new PasswordApi**(`configuration?`, `basePath?`, `axios?`): `PasswordApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`PasswordApi`

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

### changePassword()

> **changePassword**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Updates the Account Password using the current Password for verification.

#### Parameters

##### requestParameters

[`PasswordApiChangePasswordRequest`](../interfaces/PasswordApiChangePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasswordApi

#### Implementation of

[`PasswordApiInterface`](../interfaces/PasswordApiInterface.md).[`changePassword`](../interfaces/PasswordApiInterface.md#changepassword)

***

### forgotPassword()

> **forgotPassword**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Initiates the Password recovery process using Username or Email.

#### Parameters

##### requestParameters?

[`PasswordApiForgotPasswordRequest`](../interfaces/PasswordApiForgotPasswordRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasswordApi

#### Implementation of

[`PasswordApiInterface`](../interfaces/PasswordApiInterface.md).[`forgotPassword`](../interfaces/PasswordApiInterface.md#forgotpassword)

***

### requestOTPForPasswordReset()

> **requestOTPForPasswordReset**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

Requests an OTP for resetting the Password using the User\'s Phone number.

#### Parameters

##### requestParameters

[`PasswordApiRequestOTPForPasswordResetRequest`](../interfaces/PasswordApiRequestOTPForPasswordResetRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasswordApi

#### Implementation of

[`PasswordApiInterface`](../interfaces/PasswordApiInterface.md).[`requestOTPForPasswordReset`](../interfaces/PasswordApiInterface.md#requestotpforpasswordreset)

***

### resetPassword()

> **resetPassword**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md), `any`, \{ \}, `any`\>\>

Sets a new Password for the specified Account using a reset token and OTP.

#### Parameters

##### requestParameters

[`PasswordApiResetPasswordRequest`](../interfaces/PasswordApiResetPasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasswordApi

#### Implementation of

[`PasswordApiInterface`](../interfaces/PasswordApiInterface.md).[`resetPassword`](../interfaces/PasswordApiInterface.md#resetpassword)

***

### resetPasswordByResetToken()

> **resetPasswordByResetToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md), `any`, \{ \}, `any`\>\>

Sets a new Password for the specified Account using a reset token and OTP.

#### Parameters

##### requestParameters

[`PasswordApiResetPasswordByResetTokenRequest`](../interfaces/PasswordApiResetPasswordByResetTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasswordApi

#### Implementation of

[`PasswordApiInterface`](../interfaces/PasswordApiInterface.md).[`resetPasswordByResetToken`](../interfaces/PasswordApiInterface.md#resetpasswordbyresettoken)

***

### resetPasswordSecurityAnswer()

> **resetPasswordSecurityAnswer**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md), `any`, \{ \}, `any`\>\>

Resets the Password using a security question and Email, Username, or Phone.

#### Parameters

##### requestParameters?

[`PasswordApiResetPasswordSecurityAnswerRequest`](../interfaces/PasswordApiResetPasswordSecurityAnswerRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasswordApi

#### Implementation of

[`PasswordApiInterface`](../interfaces/PasswordApiInterface.md).[`resetPasswordSecurityAnswer`](../interfaces/PasswordApiInterface.md#resetpasswordsecurityanswer)

***

### resetPasswordWithOTP()

> **resetPasswordWithOTP**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md), `any`, \{ \}, `any`\>\>

Resets the Password using OTP and Phone number verification.

#### Parameters

##### requestParameters

[`PasswordApiResetPasswordWithOTPRequest`](../interfaces/PasswordApiResetPasswordWithOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PasswordApi

#### Implementation of

[`PasswordApiInterface`](../interfaces/PasswordApiInterface.md).[`resetPasswordWithOTP`](../interfaces/PasswordApiInterface.md#resetpasswordwithotp)
