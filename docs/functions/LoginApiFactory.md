[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiFactory

# Function: LoginApiFactory()

> **LoginApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

LoginApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### accountRegisterPasskeyBegin()

> **accountRegisterPasskeyBegin**(`requestParameters?`, `options?`): `AxiosPromise`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md)\>

Initiates the Passkey registration process for an Account using an Access Token.

#### Parameters

##### requestParameters?

[`LoginApiAccountRegisterPasskeyBeginRequest`](../interfaces/LoginApiAccountRegisterPasskeyBeginRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md)\>

#### Throws

### accountRegisterPasskeyFinish()

> **accountRegisterPasskeyFinish**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

Completes the Passkey registration process for an Account using an Access Token.

#### Parameters

##### requestParameters

[`LoginApiAccountRegisterPasskeyFinishRequest`](../interfaces/LoginApiAccountRegisterPasskeyFinishRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>

#### Throws

### beginAutofillPasskeyLogin()

> **beginAutofillPasskeyLogin**(`options?`): `AxiosPromise`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md)\>

Begins the login process using an Autofill Passkey.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md)\>

#### Throws

### beginPasskeyLogin()

> **beginPasskeyLogin**(`requestParameters`, `options?`): `AxiosPromise`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md)\>

Begins the login process using a Passkey.

#### Parameters

##### requestParameters

[`LoginApiBeginPasskeyLoginRequest`](../interfaces/LoginApiBeginPasskeyLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md)\>

#### Throws

### beginPasskeyReset()

> **beginPasskeyReset**(`requestParameters?`, `options?`): `AxiosPromise`\<[`BeginPasskeyReset200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyReset200Response.md)\>

Begins the reset Passkey process for a User.

#### Parameters

##### requestParameters?

[`LoginApiBeginPasskeyResetRequest`](../interfaces/LoginApiBeginPasskeyResetRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BeginPasskeyReset200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyReset200Response.md)\>

#### Throws

### checkUserNameAvailability()

> **checkUserNameAvailability**(`requestParameters?`, `options?`): `AxiosPromise`\<[`CheckUserNameAvailability200Response`](../loginradius-sdk/namespaces/Models/interfaces/CheckUserNameAvailability200Response.md)\>

Checks if a Username is available for registration on the platform.

#### Parameters

##### requestParameters?

[`LoginApiCheckUserNameAvailabilityRequest`](../interfaces/LoginApiCheckUserNameAvailabilityRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CheckUserNameAvailability200Response`](../loginradius-sdk/namespaces/Models/interfaces/CheckUserNameAvailability200Response.md)\>

#### Throws

### emailByLoginUserNamePhone()

> **emailByLoginUserNamePhone**(`requestParameters`, `options?`): `AxiosPromise`\<[`EmailByLoginUserNamePhone200Response`](../loginradius-sdk/namespaces/Models/type-aliases/EmailByLoginUserNamePhone200Response.md)\>

Authenticates a User using Email, Username, or Phone, providing an Access Token for further API interactions.

#### Parameters

##### requestParameters

[`LoginApiEmailByLoginUserNamePhoneRequest`](../interfaces/LoginApiEmailByLoginUserNamePhoneRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`EmailByLoginUserNamePhone200Response`](../loginradius-sdk/namespaces/Models/type-aliases/EmailByLoginUserNamePhone200Response.md)\>

#### Throws

### finishAutofillPasskeyLogin()

> **finishAutofillPasskeyLogin**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Completes the login process using an Autofill Passkey.

#### Parameters

##### requestParameters

[`LoginApiFinishAutofillPasskeyLoginRequest`](../interfaces/LoginApiFinishAutofillPasskeyLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### finishPasskeyLogin()

> **finishPasskeyLogin**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Completes the login process using a Passkey.

#### Parameters

##### requestParameters

[`LoginApiFinishPasskeyLoginRequest`](../interfaces/LoginApiFinishPasskeyLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### finishPasskeyReset()

> **finishPasskeyReset**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Completes the reset Passkey process for a User.

#### Parameters

##### requestParameters

[`LoginApiFinishPasskeyResetRequest`](../interfaces/LoginApiFinishPasskeyResetRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### getPhoneNumberAvailability()

> **getPhoneNumberAvailability**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsExist`](../loginradius-sdk/namespaces/Models/interfaces/IsExist.md)\>

Verifies if a Phone number is available for registration.

#### Parameters

##### requestParameters?

[`LoginApiGetPhoneNumberAvailabilityRequest`](../interfaces/LoginApiGetPhoneNumberAvailabilityRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsExist`](../loginradius-sdk/namespaces/Models/interfaces/IsExist.md)\>

#### Throws

### getSmartLogin()

> **getSmartLogin**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Initiates a smart login process using Email, Username, or Phone, allowing flexibility based on the User\'s input.

#### Parameters

##### requestParameters?

[`LoginApiGetSmartLoginRequest`](../interfaces/LoginApiGetSmartLoginRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### loginByNoRegistrationPassCode()

> **loginByNoRegistrationPassCode**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Verifies a one-time passcode (OTP) for login without requiring User registration, including captcha validation and optional security answers.

#### Parameters

##### requestParameters

[`LoginApiLoginByNoRegistrationPassCodeRequest`](../interfaces/LoginApiLoginByNoRegistrationPassCodeRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### nativeProviderAccessToken()

> **nativeProviderAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Retrieves an Access Token for authentication through a native social provider.

#### Parameters

##### requestParameters

[`LoginApiNativeProviderAccessTokenRequest`](../interfaces/LoginApiNativeProviderAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

### oneTouchLoginByEmail()

> **oneTouchLoginByEmail**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Initiates a one-touch login process using an Email.

#### Parameters

##### requestParameters

[`LoginApiOneTouchLoginByEmailRequest`](../interfaces/LoginApiOneTouchLoginByEmailRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### oneTouchLoginByPhone()

> **oneTouchLoginByPhone**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Initiates a one-touch login process using a Phone number.

#### Parameters

##### requestParameters

[`LoginApiOneTouchLoginByPhoneRequest`](../interfaces/LoginApiOneTouchLoginByPhoneRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### passkeyForgot()

> **passkeyForgot**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasskeyForgot200Response`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyForgot200Response.md)\>

Initiates the forgot Passkey process for a User.

#### Parameters

##### requestParameters

[`LoginApiPasskeyForgotRequest`](../interfaces/LoginApiPasskeyForgotRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasskeyForgot200Response`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyForgot200Response.md)\>

#### Throws

### passwordlessEmailVerification()

> **passwordlessEmailVerification**(`requestParameters?`, `options?`): `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>

Verifies the Email using the provided Verification Token for passwordless login.

#### Parameters

##### requestParameters?

[`LoginApiPasswordlessEmailVerificationRequest`](../interfaces/LoginApiPasswordlessEmailVerificationRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>

#### Throws

### passwordlessLoginByEmail()

> **passwordlessLoginByEmail**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Initiates a Passwordless login process using an Email or Username. This variant is login-only — the identifier must already belong to an existing User, and CAPTCHA is only required when the App configures optional CAPTCHA for this endpoint. Use the POST variant to auto-register an unknown Email with a registration profile.

#### Parameters

##### requestParameters?

[`LoginApiPasswordlessLoginByEmailRequest`](../interfaces/LoginApiPasswordlessLoginByEmailRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### passwordlessLoginByEmailAndOTP()

> **passwordlessLoginByEmailAndOTP**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>

Verifies the OTP sent to the Email for passwordless login.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginByEmailAndOTPRequest`](../interfaces/LoginApiPasswordlessLoginByEmailAndOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>

#### Throws

### passwordlessLoginByEmailWithProfile()

> **passwordlessLoginByEmailWithProfile**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

POST variant of passwordless login by Email. The email identifier and the full registration profile are supplied in the JSON body (same schema as /auth/register). When passwordless email auto-registration is enabled, a previously-unknown email is auto-registered with the supplied profile fields, and the request must carry a valid SOTT or CAPTCHA. This endpoint registers by email only — any PhoneId or UserName supplied in the body is ignored (not validated and not stored), and Password is not required. Sending the profile in the body (instead of query parameters) keeps PII out of URLs and logs.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginByEmailWithProfileRequest`](../interfaces/LoginApiPasswordlessLoginByEmailWithProfileRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### passwordlessLoginByPhone()

> **passwordlessLoginByPhone**(`requestParameters?`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

Initiates a Passwordless login process using a Phone number — an OTP is sent to the supplied Phone number. This variant is login-only: the Phone number must already belong to an existing User, and CAPTCHA is only required when the App configures optional CAPTCHA for this endpoint. Use the POST variant to auto-register an unknown Phone number with a registration profile.

#### Parameters

##### requestParameters?

[`LoginApiPasswordlessLoginByPhoneRequest`](../interfaces/LoginApiPasswordlessLoginByPhoneRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

### passwordlessLoginByPhoneWithProfile()

> **passwordlessLoginByPhoneWithProfile**(`requestParameters`, `options?`): `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

POST variant of passwordless login by Phone. The phone identifier (PhoneId) and the full registration profile are supplied in the JSON body (same schema as /auth/register). When passwordless phone auto-registration is enabled, a previously-unknown phone number is auto-registered with the supplied profile fields, and the request must carry a valid SOTT or CAPTCHA. This endpoint registers by phone only — any Email or UserName supplied in the body is ignored (not validated and not stored), and Password is not required. Sending the profile in the body (instead of query parameters) keeps PII out of URLs and logs.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginByPhoneWithProfileRequest`](../interfaces/LoginApiPasswordlessLoginByPhoneWithProfileRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>

#### Throws

### passwordlessLoginByUsernameAndOTP()

> **passwordlessLoginByUsernameAndOTP**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>

Verifies the OTP sent to the Username for passwordless login.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginByUsernameAndOTPRequest`](../interfaces/LoginApiPasswordlessLoginByUsernameAndOTPRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>

#### Throws

### passwordlessLoginPhoneVerification()

> **passwordlessLoginPhoneVerification**(`requestParameters`, `options?`): `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>

Verifies the OTP sent to the Phone number for passwordless login.

#### Parameters

##### requestParameters

[`LoginApiPasswordlessLoginPhoneVerificationRequest`](../interfaces/LoginApiPasswordlessLoginPhoneVerificationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>

#### Throws

### pingSmartLogin()

> **pingSmartLogin**(`requestParameters`, `options?`): `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

Checks in the background if the smart login is verified successfully.

#### Parameters

##### requestParameters

[`LoginApiPingSmartLoginRequest`](../interfaces/LoginApiPingSmartLoginRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>

#### Throws

### verifyAutoLoginEmailOneTouch()

> **verifyAutoLoginEmailOneTouch**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md)\>

Verifies the auto-login Email using a Verification Token.

#### Parameters

##### requestParameters?

[`LoginApiVerifyAutoLoginEmailOneTouchRequest`](../interfaces/LoginApiVerifyAutoLoginEmailOneTouchRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md)\>

#### Throws

### verifyAutoLoginEmailSmartLogin()

> **verifyAutoLoginEmailSmartLogin**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md)\>

Verifies the auto-login Email using a Verification Token.

#### Parameters

##### requestParameters?

[`LoginApiVerifyAutoLoginEmailSmartLoginRequest`](../interfaces/LoginApiVerifyAutoLoginEmailSmartLoginRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md)\>

#### Throws

## Export
