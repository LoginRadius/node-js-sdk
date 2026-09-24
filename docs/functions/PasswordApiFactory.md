[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApiFactory

# Function: PasswordApiFactory()

> **PasswordApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

PasswordApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### changePassword()

> **changePassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Updates the Account Password using the current Password for verification.

#### Parameters

##### requestParameters

[`PasswordApiChangePasswordRequest`](../interfaces/PasswordApiChangePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### forgotPassword()

> **forgotPassword**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Initiates the Password recovery process using Username or Email.

#### Parameters

##### requestParameters?

[`PasswordApiForgotPasswordRequest`](../interfaces/PasswordApiForgotPasswordRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### requestOTPForPasswordReset()

> **requestOTPForPasswordReset**(`requestParameters`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Requests an OTP for resetting the Password using the User\'s Phone number.

#### Parameters

##### requestParameters

[`PasswordApiRequestOTPForPasswordResetRequest`](../interfaces/PasswordApiRequestOTPForPasswordResetRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

### resetPassword()

> **resetPassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

Sets a new Password for the specified Account using a reset token and OTP.

#### Parameters

##### requestParameters

[`PasswordApiResetPasswordRequest`](../interfaces/PasswordApiResetPasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

#### Throws

### resetPasswordByResetToken()

> **resetPasswordByResetToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

Sets a new Password for the specified Account using a reset token and OTP.

#### Parameters

##### requestParameters

[`PasswordApiResetPasswordByResetTokenRequest`](../interfaces/PasswordApiResetPasswordByResetTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

#### Throws

### resetPasswordSecurityAnswer()

> **resetPasswordSecurityAnswer**(`requestParameters?`, `options?`): `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

Resets the Password using a security question and Email, Username, or Phone.

#### Parameters

##### requestParameters?

[`PasswordApiResetPasswordSecurityAnswerRequest`](../interfaces/PasswordApiResetPasswordSecurityAnswerRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

#### Throws

### resetPasswordWithOTP()

> **resetPasswordWithOTP**(`requestParameters`, `options?`): `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

Resets the Password using OTP and Phone number verification.

#### Parameters

##### requestParameters

[`PasswordApiResetPasswordWithOTPRequest`](../interfaces/PasswordApiResetPasswordWithOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

#### Throws

## Export
