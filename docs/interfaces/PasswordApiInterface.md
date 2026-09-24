[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PasswordApiInterface

# Interface: PasswordApiInterface

PasswordApi - interface

## Export

PasswordApi

## Methods

### changePassword()

> **changePassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Updates the Account Password using the current Password for verification.

#### Parameters

##### requestParameters

[`PasswordApiChangePasswordRequest`](PasswordApiChangePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

PasswordApiInterface

***

### forgotPassword()

> **forgotPassword**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Initiates the Password recovery process using Username or Email.

#### Parameters

##### requestParameters?

[`PasswordApiForgotPasswordRequest`](PasswordApiForgotPasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

PasswordApiInterface

***

### requestOTPForPasswordReset()

> **requestOTPForPasswordReset**(`requestParameters`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Requests an OTP for resetting the Password using the User\'s Phone number.

#### Parameters

##### requestParameters

[`PasswordApiRequestOTPForPasswordResetRequest`](PasswordApiRequestOTPForPasswordResetRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

#### Memberof

PasswordApiInterface

***

### resetPassword()

> **resetPassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

Sets a new Password for the specified Account using a reset token and OTP.

#### Parameters

##### requestParameters

[`PasswordApiResetPasswordRequest`](PasswordApiResetPasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

#### Throws

#### Memberof

PasswordApiInterface

***

### resetPasswordByResetToken()

> **resetPasswordByResetToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

Sets a new Password for the specified Account using a reset token and OTP.

#### Parameters

##### requestParameters

[`PasswordApiResetPasswordByResetTokenRequest`](PasswordApiResetPasswordByResetTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

#### Throws

#### Memberof

PasswordApiInterface

***

### resetPasswordSecurityAnswer()

> **resetPasswordSecurityAnswer**(`requestParameters?`, `options?`): `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

Resets the Password using a security question and Email, Username, or Phone.

#### Parameters

##### requestParameters?

[`PasswordApiResetPasswordSecurityAnswerRequest`](PasswordApiResetPasswordSecurityAnswerRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

#### Throws

#### Memberof

PasswordApiInterface

***

### resetPasswordWithOTP()

> **resetPasswordWithOTP**(`requestParameters`, `options?`): `AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

Resets the Password using OTP and Phone number verification.

#### Parameters

##### requestParameters

[`PasswordApiResetPasswordWithOTPRequest`](PasswordApiResetPasswordWithOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ResetPasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/ResetPasswordResponse.md)\>

#### Throws

#### Memberof

PasswordApiInterface
