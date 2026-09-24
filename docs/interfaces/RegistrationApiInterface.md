[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RegistrationApiInterface

# Interface: RegistrationApiInterface

RegistrationApi - interface

## Export

RegistrationApi

## Methods

### beginPasskeyRegistration()

> **beginPasskeyRegistration**(`requestParameters`, `options?`): `AxiosPromise`\<[`BeginPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyRegistration200Response.md)\>

Begins the registration process using a Passkey.

#### Parameters

##### requestParameters

[`RegistrationApiBeginPasskeyRegistrationRequest`](RegistrationApiBeginPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BeginPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyRegistration200Response.md)\>

#### Throws

#### Memberof

RegistrationApiInterface

***

### finishPasskeyRegistration()

> **finishPasskeyRegistration**(`requestParameters`, `options?`): `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

Completes the registration process using a Passkey.

#### Parameters

##### requestParameters

[`RegistrationApiFinishPasskeyRegistrationRequest`](RegistrationApiFinishPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

#### Throws

#### Memberof

RegistrationApiInterface

***

### userRegistrationByReCaptchaEmailPhoneUserName()

> **userRegistrationByReCaptchaEmailPhoneUserName**(`requestParameters`, `options?`): `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

Registers a new User using Email, Phone, or Username with Captcha verification.

#### Parameters

##### requestParameters

[`RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserNameRequest`](RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

#### Throws

#### Memberof

RegistrationApiInterface

***

### userRegistrationBySottEmailPhoneUserName()

> **userRegistrationBySottEmailPhoneUserName**(`requestParameters`, `options?`): `AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

Registers a new User using Email, Phone, or Username via a Secure One Time Token (SOTT).

#### Parameters

##### requestParameters

[`RegistrationApiUserRegistrationBySottEmailPhoneUserNameRequest`](RegistrationApiUserRegistrationBySottEmailPhoneUserNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md)\>

#### Throws

#### Memberof

RegistrationApiInterface
