[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RegistrationApiFactory

# Function: RegistrationApiFactory()

> **RegistrationApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

RegistrationApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### beginPasskeyRegistration()

> **beginPasskeyRegistration**(`requestParameters`, `options?`): `AxiosPromise`\<[`BeginPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyRegistration200Response.md)\>

Begins the registration process using a Passkey.

#### Parameters

##### requestParameters

[`RegistrationApiBeginPasskeyRegistrationRequest`](../interfaces/RegistrationApiBeginPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BeginPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyRegistration200Response.md)\>

#### Throws

### finishPasskeyRegistration()

> **finishPasskeyRegistration**(`requestParameters`, `options?`): `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

Completes the registration process using a Passkey.

#### Parameters

##### requestParameters

[`RegistrationApiFinishPasskeyRegistrationRequest`](../interfaces/RegistrationApiFinishPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

#### Throws

### userRegistrationByReCaptchaEmailPhoneUserName()

> **userRegistrationByReCaptchaEmailPhoneUserName**(`requestParameters`, `options?`): `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

Registers a new User using Email, Phone, or Username with Captcha verification.

#### Parameters

##### requestParameters

[`RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserNameRequest`](../interfaces/RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

#### Throws

### userRegistrationBySottEmailPhoneUserName()

> **userRegistrationBySottEmailPhoneUserName**(`requestParameters`, `options?`): `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

Registers a new User using Email, Phone, or Username via a Secure One Time Token (SOTT).

#### Parameters

##### requestParameters

[`RegistrationApiUserRegistrationBySottEmailPhoneUserNameRequest`](../interfaces/RegistrationApiUserRegistrationBySottEmailPhoneUserNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

#### Throws

## Export
