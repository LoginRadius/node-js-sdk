[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / RegistrationApi

# Class: RegistrationApi

RegistrationApi - object-oriented interface

## Export

RegistrationApi

## Extends

- `BaseAPI`

## Implements

- [`RegistrationApiInterface`](../interfaces/RegistrationApiInterface.md)

## Constructors

### Constructor

> **new RegistrationApi**(`configuration?`, `basePath?`, `axios?`): `RegistrationApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`RegistrationApi`

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

### beginPasskeyRegistration()

> **beginPasskeyRegistration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`BeginPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyRegistration200Response.md), `any`, \{ \}, `any`\>\>

Begins the registration process using a Passkey.

#### Parameters

##### requestParameters

[`RegistrationApiBeginPasskeyRegistrationRequest`](../interfaces/RegistrationApiBeginPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BeginPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyRegistration200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RegistrationApi

#### Implementation of

[`RegistrationApiInterface`](../interfaces/RegistrationApiInterface.md).[`beginPasskeyRegistration`](../interfaces/RegistrationApiInterface.md#beginpasskeyregistration)

***

### finishPasskeyRegistration()

> **finishPasskeyRegistration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md), `any`, \{ \}, `any`\>\>

Completes the registration process using a Passkey.

#### Parameters

##### requestParameters

[`RegistrationApiFinishPasskeyRegistrationRequest`](../interfaces/RegistrationApiFinishPasskeyRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RegistrationApi

#### Implementation of

[`RegistrationApiInterface`](../interfaces/RegistrationApiInterface.md).[`finishPasskeyRegistration`](../interfaces/RegistrationApiInterface.md#finishpasskeyregistration)

***

### userRegistrationByReCaptchaEmailPhoneUserName()

> **userRegistrationByReCaptchaEmailPhoneUserName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md), `any`, \{ \}, `any`\>\>

Registers a new User using Email, Phone, or Username with Captcha verification.

#### Parameters

##### requestParameters

[`RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserNameRequest`](../interfaces/RegistrationApiUserRegistrationByReCaptchaEmailPhoneUserNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RegistrationApi

#### Implementation of

[`RegistrationApiInterface`](../interfaces/RegistrationApiInterface.md).[`userRegistrationByReCaptchaEmailPhoneUserName`](../interfaces/RegistrationApiInterface.md#userregistrationbyrecaptchaemailphoneusername)

***

### userRegistrationBySottEmailPhoneUserName()

> **userRegistrationBySottEmailPhoneUserName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md), `any`, \{ \}, `any`\>\>

Registers a new User using Email, Phone, or Username via a Secure One Time Token (SOTT).

#### Parameters

##### requestParameters

[`RegistrationApiUserRegistrationBySottEmailPhoneUserNameRequest`](../interfaces/RegistrationApiUserRegistrationBySottEmailPhoneUserNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/RegistrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

RegistrationApi

#### Implementation of

[`RegistrationApiInterface`](../interfaces/RegistrationApiInterface.md).[`userRegistrationBySottEmailPhoneUserName`](../interfaces/RegistrationApiInterface.md#userregistrationbysottemailphoneusername)
