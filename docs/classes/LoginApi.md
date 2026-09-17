[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApi

# Class: LoginApi

LoginApi - object-oriented interface

## Export

LoginApi

## Extends

- `BaseAPI`

## Implements

- [`LoginApiInterface`](../interfaces/LoginApiInterface.md)

## Constructors

### Constructor

> **new LoginApi**(`configuration?`, `basePath?`, `axios?`): `LoginApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`LoginApi`

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

### accountRegisterPasskeyBegin()

> **accountRegisterPasskeyBegin**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md), `any`, \{ \}, `any`\>\>

Initiates the Passkey registration process for an Account using an Access Token.

#### Parameters

##### requestParameters?

[`LoginApiAccountRegisterPasskeyBeginRequest`](../interfaces/LoginApiAccountRegisterPasskeyBeginRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`accountRegisterPasskeyBegin`](../interfaces/LoginApiInterface.md#accountregisterpasskeybegin)

***

### accountRegisterPasskeyFinish()

> **accountRegisterPasskeyFinish**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md), `any`, \{ \}, `any`\>\>

Completes the Passkey registration process for an Account using an Access Token.

#### Parameters

##### requestParameters

[`LoginApiAccountRegisterPasskeyFinishRequest`](../interfaces/LoginApiAccountRegisterPasskeyFinishRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`accountRegisterPasskeyFinish`](../interfaces/LoginApiInterface.md#accountregisterpasskeyfinish)

***

### beginAutofillPasskeyLogin()

> **beginAutofillPasskeyLogin**(`options?`): `Promise`\<`AxiosResponse`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md), `any`, \{ \}, `any`\>\>

Begins the login process using an Autofill Passkey.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`beginAutofillPasskeyLogin`](../interfaces/LoginApiInterface.md#beginautofillpasskeylogin)

***

### beginPasskeyLogin()

> **beginPasskeyLogin**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md), `any`, \{ \}, `any`\>\>

Begins the login process using a Passkey.

#### Parameters

##### requestParameters

[`LoginApiBeginPasskeyLoginRequest`](../interfaces/LoginApiBeginPasskeyLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`beginPasskeyLogin`](../interfaces/LoginApiInterface.md#beginpasskeylogin)

***

### beginPasskeyReset()

> **beginPasskeyReset**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`BeginPasskeyReset200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyReset200Response.md), `any`, \{ \}, `any`\>\>

Begins the reset Passkey process for a User.

#### Parameters

##### requestParameters?

[`LoginApiBeginPasskeyResetRequest`](../interfaces/LoginApiBeginPasskeyResetRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BeginPasskeyReset200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyReset200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`beginPasskeyReset`](../interfaces/LoginApiInterface.md#beginpasskeyreset)

***

### checkUserNameAvailability()

> **checkUserNameAvailability**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`CheckUserNameAvailability200Response`](../loginradius-sdk/namespaces/Models/interfaces/CheckUserNameAvailability200Response.md), `any`, \{ \}, `any`\>\>

Checks if a Username is available for registration on the platform.

#### Parameters

##### requestParameters?

[`LoginApiCheckUserNameAvailabilityRequest`](../interfaces/LoginApiCheckUserNameAvailabilityRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CheckUserNameAvailability200Response`](../loginradius-sdk/namespaces/Models/interfaces/CheckUserNameAvailability200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`checkUserNameAvailability`](../interfaces/LoginApiInterface.md#checkusernameavailability)

***

### emailByLoginUserNamePhone()

> **emailByLoginUserNamePhone**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`EmailByLoginUserNamePhone200Response`](../loginradius-sdk/namespaces/Models/type-aliases/EmailByLoginUserNamePhone200Response.md), `any`, \{ \}, `any`\>\>

Authenticates a User using Email, Username, or Phone, providing an Access Token for further API interactions.

#### Parameters

##### requestParameters

[`LoginApiEmailByLoginUserNamePhoneRequest`](../interfaces/LoginApiEmailByLoginUserNamePhoneRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`EmailByLoginUserNamePhone200Response`](../loginradius-sdk/namespaces/Models/type-aliases/EmailByLoginUserNamePhone200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`emailByLoginUserNamePhone`](../interfaces/LoginApiInterface.md#emailbyloginusernamephone)

***

### finishAutofillPasskeyLogin()

> **finishAutofillPasskeyLogin**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Completes the login process using an Autofill Passkey.

#### Parameters

##### requestParameters

[`LoginApiFinishAutofillPasskeyLoginRequest`](../interfaces/LoginApiFinishAutofillPasskeyLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`finishAutofillPasskeyLogin`](../interfaces/LoginApiInterface.md#finishautofillpasskeylogin)

***

### finishPasskeyLogin()

> **finishPasskeyLogin**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Completes the login process using a Passkey.

#### Parameters

##### requestParameters

[`LoginApiFinishPasskeyLoginRequest`](../interfaces/LoginApiFinishPasskeyLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`finishPasskeyLogin`](../interfaces/LoginApiInterface.md#finishpasskeylogin)

***

### finishPasskeyReset()

> **finishPasskeyReset**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Completes the reset Passkey process for a User.

#### Parameters

##### requestParameters

[`LoginApiFinishPasskeyResetRequest`](../interfaces/LoginApiFinishPasskeyResetRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`finishPasskeyReset`](../interfaces/LoginApiInterface.md#finishpasskeyreset)

***

### getPhoneNumberAvailability()

> **getPhoneNumberAvailability**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsExist`](../loginradius-sdk/namespaces/Models/interfaces/IsExist.md), `any`, \{ \}, `any`\>\>

Verifies if a Phone number is available for registration.

#### Parameters

##### requestParameters?

[`LoginApiGetPhoneNumberAvailabilityRequest`](../interfaces/LoginApiGetPhoneNumberAvailabilityRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsExist`](../loginradius-sdk/namespaces/Models/interfaces/IsExist.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`getPhoneNumberAvailability`](../interfaces/LoginApiInterface.md#getphonenumberavailability)

***

### getSmartLogin()

> **getSmartLogin**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Initiates a smart login process using Email, Username, or Phone, allowing flexibility based on the User\'s input.

#### Parameters

##### requestParameters?

[`LoginApiGetSmartLoginRequest`](../interfaces/LoginApiGetSmartLoginRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`getSmartLogin`](../interfaces/LoginApiInterface.md#getsmartlogin)

***

### loginByNoRegistrationPassCode()

> **loginByNoRegistrationPassCode**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Verifies a one-time passcode (OTP) for login without requiring User registration, including captcha validation and optional security answers.

#### Parameters

##### requestParameters

[`LoginApiLoginByNoRegistrationPassCodeRequest`](../interfaces/LoginApiLoginByNoRegistrationPassCodeRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`loginByNoRegistrationPassCode`](../interfaces/LoginApiInterface.md#loginbynoregistrationpasscode)

***

### nativeProviderAccessToken()

> **nativeProviderAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

Retrieves an Access Token for authentication through a native social provider.

#### Parameters

##### requestParameters

[`LoginApiNativeProviderAccessTokenRequest`](../interfaces/LoginApiNativeProviderAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`nativeProviderAccessToken`](../interfaces/LoginApiInterface.md#nativeprovideraccesstoken)

***

### oneTouchLoginByEmail()

> **oneTouchLoginByEmail**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Initiates a one-touch login process using an Email.

#### Parameters

##### requestParameters

[`LoginApiOneTouchLoginByEmailRequest`](../interfaces/LoginApiOneTouchLoginByEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`oneTouchLoginByEmail`](../interfaces/LoginApiInterface.md#onetouchloginbyemail)

***

### oneTouchLoginByPhone()

> **oneTouchLoginByPhone**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Initiates a one-touch login process using a Phone number.

#### Parameters

##### requestParameters

[`LoginApiOneTouchLoginByPhoneRequest`](../interfaces/LoginApiOneTouchLoginByPhoneRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`oneTouchLoginByPhone`](../interfaces/LoginApiInterface.md#onetouchloginbyphone)

***

### passkeyForgot()

> **passkeyForgot**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasskeyForgot200Response`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyForgot200Response.md), `any`, \{ \}, `any`\>\>

Initiates the forgot Passkey process for a User.

#### Parameters

##### requestParameters

[`LoginApiPasskeyForgotRequest`](../interfaces/LoginApiPasskeyForgotRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasskeyForgot200Response`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyForgot200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`passkeyForgot`](../interfaces/LoginApiInterface.md#passkeyforgot)

***

### passwordlessEmailVerification()

> **passwordlessEmailVerification**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md), `any`, \{ \}, `any`\>\>

Verifies the Email using the provided Verification Token for passwordless login.

#### Parameters

##### requestParameters?

[`LoginApiPasswordlessEmailVerificationRequest`](../interfaces/LoginApiPasswordlessEmailVerificationRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`passwordlessEmailVerification`](../interfaces/LoginApiInterface.md#passwordlessemailverification)

***

### passwordlessLoginByEmail()

> **passwordlessLoginByEmail**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Initiates a Passwordless login process using an Email or Username. This variant is login-only — the identifier must already belong to an existing User, and CAPTCHA is only required when the App configures optional CAPTCHA for this endpoint. Use the POST variant to auto-register an unknown Email with a registration profile.

#### Parameters

##### requestParameters?

[`LoginApiPasswordlessLoginByEmailRequest`](../interfaces/LoginApiPasswordlessLoginByEmailRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`passwordlessLoginByEmail`](../interfaces/LoginApiInterface.md#passwordlessloginbyemail)

***

### passwordlessLoginByEmailAndOTP()

> **passwordlessLoginByEmailAndOTP**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md), `any`, \{ \}, `any`\>\>

Verifies the OTP sent to the Email for passwordless login.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginByEmailAndOTPRequest`](../interfaces/LoginApiPasswordlessLoginByEmailAndOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`passwordlessLoginByEmailAndOTP`](../interfaces/LoginApiInterface.md#passwordlessloginbyemailandotp)

***

### passwordlessLoginByEmailWithProfile()

> **passwordlessLoginByEmailWithProfile**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

POST variant of passwordless login by Email. The email identifier and the full registration profile are supplied in the JSON body (same schema as /auth/register). When passwordless email auto-registration is enabled, a previously-unknown email is auto-registered with the supplied profile fields, and the request must carry a valid SOTT or CAPTCHA. This endpoint registers by email only — any PhoneId or UserName supplied in the body is ignored (not validated and not stored), and Password is not required. Sending the profile in the body (instead of query parameters) keeps PII out of URLs and logs.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginByEmailWithProfileRequest`](../interfaces/LoginApiPasswordlessLoginByEmailWithProfileRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`passwordlessLoginByEmailWithProfile`](../interfaces/LoginApiInterface.md#passwordlessloginbyemailwithprofile)

***

### passwordlessLoginByPhone()

> **passwordlessLoginByPhone**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

Initiates a Passwordless login process using a Phone number — an OTP is sent to the supplied Phone number. This variant is login-only: the Phone number must already belong to an existing User, and CAPTCHA is only required when the App configures optional CAPTCHA for this endpoint. Use the POST variant to auto-register an unknown Phone number with a registration profile.

#### Parameters

##### requestParameters?

[`LoginApiPasswordlessLoginByPhoneRequest`](../interfaces/LoginApiPasswordlessLoginByPhoneRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`passwordlessLoginByPhone`](../interfaces/LoginApiInterface.md#passwordlessloginbyphone)

***

### passwordlessLoginByPhoneWithProfile()

> **passwordlessLoginByPhoneWithProfile**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

POST variant of passwordless login by Phone. The phone identifier (PhoneId) and the full registration profile are supplied in the JSON body (same schema as /auth/register). When passwordless phone auto-registration is enabled, a previously-unknown phone number is auto-registered with the supplied profile fields, and the request must carry a valid SOTT or CAPTCHA. This endpoint registers by phone only — any Email or UserName supplied in the body is ignored (not validated and not stored), and Password is not required. Sending the profile in the body (instead of query parameters) keeps PII out of URLs and logs.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginByPhoneWithProfileRequest`](../interfaces/LoginApiPasswordlessLoginByPhoneWithProfileRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`passwordlessLoginByPhoneWithProfile`](../interfaces/LoginApiInterface.md#passwordlessloginbyphonewithprofile)

***

### passwordlessLoginByUsernameAndOTP()

> **passwordlessLoginByUsernameAndOTP**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md), `any`, \{ \}, `any`\>\>

Verifies the OTP sent to the Username for passwordless login.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginByUsernameAndOTPRequest`](../interfaces/LoginApiPasswordlessLoginByUsernameAndOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`passwordlessLoginByUsernameAndOTP`](../interfaces/LoginApiInterface.md#passwordlessloginbyusernameandotp)

***

### passwordlessLoginPhoneVerification()

> **passwordlessLoginPhoneVerification**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md), `any`, \{ \}, `any`\>\>

Verifies the OTP sent to the Phone number for passwordless login.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginPhoneVerificationRequest`](../interfaces/LoginApiPasswordlessLoginPhoneVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`passwordlessLoginPhoneVerification`](../interfaces/LoginApiInterface.md#passwordlessloginphoneverification)

***

### pingSmartLogin()

> **pingSmartLogin**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

Checks in the background if the smart login is verified successfully.

#### Parameters

##### requestParameters

[`LoginApiPingSmartLoginRequest`](../interfaces/LoginApiPingSmartLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`pingSmartLogin`](../interfaces/LoginApiInterface.md#pingsmartlogin)

***

### verifyAutoLoginEmailOneTouch()

> **verifyAutoLoginEmailOneTouch**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md), `any`, \{ \}, `any`\>\>

Verifies the auto-login Email using a Verification Token.

#### Parameters

##### requestParameters?

[`LoginApiVerifyAutoLoginEmailOneTouchRequest`](../interfaces/LoginApiVerifyAutoLoginEmailOneTouchRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`verifyAutoLoginEmailOneTouch`](../interfaces/LoginApiInterface.md#verifyautologinemailonetouch)

***

### verifyAutoLoginEmailSmartLogin()

> **verifyAutoLoginEmailSmartLogin**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md), `any`, \{ \}, `any`\>\>

Verifies the auto-login Email using a Verification Token.

#### Parameters

##### requestParameters?

[`LoginApiVerifyAutoLoginEmailSmartLoginRequest`](../interfaces/LoginApiVerifyAutoLoginEmailSmartLoginRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

LoginApi

#### Implementation of

[`LoginApiInterface`](../interfaces/LoginApiInterface.md).[`verifyAutoLoginEmailSmartLogin`](../interfaces/LoginApiInterface.md#verifyautologinemailsmartlogin)
