[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiFp

# Function: LoginApiFp()

> **LoginApiFp**(`configuration?`): `object`

LoginApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### accountRegisterPasskeyBegin()

> **accountRegisterPasskeyBegin**(`accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md)\>\>

Initiates the Passkey registration process for an Account using an Access Token.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginMFAPasskeyRegistration200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginMFAPasskeyRegistration200Response.md)\>\>

#### Throws

### accountRegisterPasskeyFinish()

> **accountRegisterPasskeyFinish**(`finishMFAPasskeyRegistrationRequest`, `accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>\>

Completes the Passkey registration process for an Account using an Access Token.

#### Parameters

##### finishMFAPasskeyRegistrationRequest

[`FinishMFAPasskeyRegistrationRequest`](../loginradius-sdk/namespaces/Models/interfaces/FinishMFAPasskeyRegistrationRequest.md)

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasskeyListResponse`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyListResponse.md)\>\>

#### Throws

### beginAutofillPasskeyLogin()

> **beginAutofillPasskeyLogin**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md)\>\>

Begins the login process using an Autofill Passkey.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md)\>\>

#### Throws

### beginPasskeyLogin()

> **beginPasskeyLogin**(`identifier`, `verificationurl?`, `emailtemplate?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md)\>\>

Begins the login process using a Passkey.

#### Parameters

##### identifier

`string`

Email of the User

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginPasskeyLogin200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyLogin200Response.md)\>\>

#### Throws

### beginPasskeyReset()

> **beginPasskeyReset**(`vtoken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginPasskeyReset200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyReset200Response.md)\>\>

Begins the reset Passkey process for a User.

#### Parameters

##### vtoken?

`string`

Verification token received in the Email.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BeginPasskeyReset200Response`](../loginradius-sdk/namespaces/Models/interfaces/BeginPasskeyReset200Response.md)\>\>

#### Throws

### checkUserNameAvailability()

> **checkUserNameAvailability**(`username?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CheckUserNameAvailability200Response`](../loginradius-sdk/namespaces/Models/interfaces/CheckUserNameAvailability200Response.md)\>\>

Checks if a Username is available for registration on the platform.

#### Parameters

##### username?

`string`

Username of the associated Account.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CheckUserNameAvailability200Response`](../loginradius-sdk/namespaces/Models/interfaces/CheckUserNameAvailability200Response.md)\>\>

#### Throws

### emailByLoginUserNamePhone()

> **emailByLoginUserNamePhone**(`emailByLoginUserNamePhoneRequest`, `emailtemplate?`, `loginurl?`, `verificationurl?`, `smstemplate?`, `isvoiceotp?`, `gRecaptchaResponse?`, `breachedpasswordemailtemplate?`, `breachedpasswordsmstemplate?`, `preventWebhook?`, `xPreventWebhook?`, `fields?`, `_options?`, `rbabrowseremailtemplate?`, `rbaoneclickemailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbaotpsmstemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `invitationToken?`, `emailtemplate2fa?`, `duoredirecturi?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`EmailByLoginUserNamePhone200Response`](../loginradius-sdk/namespaces/Models/type-aliases/EmailByLoginUserNamePhone200Response.md)\>\>

Authenticates a User using Email, Username, or Phone, providing an Access Token for further API interactions.

#### Parameters

##### emailByLoginUserNamePhoneRequest

[`EmailByLoginUserNamePhoneRequest`](../loginradius-sdk/namespaces/Models/type-aliases/EmailByLoginUserNamePhoneRequest.md)

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### loginurl?

`string`

Login URL for the User which will come in the login logs from where the User logged in.

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### smstemplate?

`string`

SMS Template

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### breachedpasswordemailtemplate?

`string`

Email template name for breached Password notifications.

##### breachedpasswordsmstemplate?

`string`

SMS template name for breached Password notifications.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### \_options?

`string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbaoneclickemailtemplate?

`string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbaotpsmstemplate?

`string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### invitationToken?

`string`

Invitation token of an organization

##### emailtemplate2fa?

`string`

Name of the 2FA Email template to use for this notification.

##### duoredirecturi?

`string`

Duo auth redirection url.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`EmailByLoginUserNamePhone200Response`](../loginradius-sdk/namespaces/Models/type-aliases/EmailByLoginUserNamePhone200Response.md)\>\>

#### Throws

### finishAutofillPasskeyLogin()

> **finishAutofillPasskeyLogin**(`passkeyLoginAutofillRequest`, `loginurl?`, `verificationurl?`, `emailtemplate?`, `invitationToken?`, `preventWebhook?`, `xPreventWebhook?`, `fields?`, `_options?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `rbabrowseremailtemplate?`, `rbaoneclickemailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbaotpsmstemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>\>

Completes the login process using an Autofill Passkey.

#### Parameters

##### passkeyLoginAutofillRequest

[`PasskeyLoginAutofillRequest`](../loginradius-sdk/namespaces/Models/type-aliases/PasskeyLoginAutofillRequest.md)

##### loginurl?

`string`

Login URL for the User which will come in the login logs from where the User logged in.

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### invitationToken?

`string`

Invitation token of an organization

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### \_options?

`string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbaoneclickemailtemplate?

`string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbaotpsmstemplate?

`string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>\>

#### Throws

### finishPasskeyLogin()

> **finishPasskeyLogin**(`passkeyLoginFinish`, `loginurl?`, `verificationurl?`, `emailtemplate?`, `preventWebhook?`, `xPreventWebhook?`, `fields?`, `_options?`, `invitationToken?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `rbabrowseremailtemplate?`, `rbaoneclickemailtemplate?`, `rbacityemailtemplate?`, `rbacountryemailtemplate?`, `rbaipemailtemplate?`, `rbadeviceemailtemplate?`, `rbaotpsmstemplate?`, `rbabrowsersmstemplate?`, `rbacitysmstemplate?`, `rbacountrysmstemplate?`, `rbaipsmstemplate?`, `rbadevicesmstemplate?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>\>

Completes the login process using a Passkey.

#### Parameters

##### passkeyLoginFinish

[`PasskeyLoginFinish`](../loginradius-sdk/namespaces/Models/type-aliases/PasskeyLoginFinish.md)

##### loginurl?

`string`

Login URL for the User which will come in the login logs from where the User logged in.

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### fields?

`string`

Comma-separated list of profile fields to include in the response.

##### \_options?

`string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

##### invitationToken?

`string`

Invitation token of an organization

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### rbabrowseremailtemplate?

`string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

##### rbaoneclickemailtemplate?

`string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

##### rbacityemailtemplate?

`string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

##### rbacountryemailtemplate?

`string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

##### rbaipemailtemplate?

`string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

##### rbadeviceemailtemplate?

`string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

##### rbaotpsmstemplate?

`string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbabrowsersmstemplate?

`string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacitysmstemplate?

`string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbacountrysmstemplate?

`string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbaipsmstemplate?

`string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### rbadevicesmstemplate?

`string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>\>

#### Throws

### finishPasskeyReset()

> **finishPasskeyReset**(`finishMFAPasskeyRegistrationRequest`, `vtoken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Completes the reset Passkey process for a User.

#### Parameters

##### finishMFAPasskeyRegistrationRequest

[`FinishMFAPasskeyRegistrationRequest`](../loginradius-sdk/namespaces/Models/interfaces/FinishMFAPasskeyRegistrationRequest.md)

##### vtoken?

`string`

Verification token received in the Email.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### getPhoneNumberAvailability()

> **getPhoneNumberAvailability**(`phone?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsExist`](../loginradius-sdk/namespaces/Models/interfaces/IsExist.md)\>\>

Verifies if a Phone number is available for registration.

#### Parameters

##### phone?

`string`

Phone ID of the associated Account.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsExist`](../loginradius-sdk/namespaces/Models/interfaces/IsExist.md)\>\>

#### Throws

### getSmartLogin()

> **getSmartLogin**(`email?`, `username?`, `phone?`, `clientguid?`, `welcomeemailtemplate?`, `redirecturl?`, `smstemplate?`, `isvoiceotp?`, `smartloginemailtemplate?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Initiates a smart login process using Email, Username, or Phone, allowing flexibility based on the User\'s input.

#### Parameters

##### email?

`string`

Email address of the associated Account.

##### username?

`string`

Username of the associated Account.

##### phone?

`string`

Phone ID of the associated Account.

##### clientguid?

`string`

Client GUID for the request.

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### redirecturl?

`string`

The URL to which the User will be redirected after completing the operation, such as login or verification.

##### smstemplate?

`string`

SMS Template

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### smartloginemailtemplate?

`string`

The template name for the smart login Email.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### loginByNoRegistrationPassCode()

> **loginByNoRegistrationPassCode**(`verifyOtpPhoneModel`, `xPreventWebhook?`, `preventWebhook?`, `otp?`, `smstemplate?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Verifies a one-time passcode (OTP) for login without requiring User registration, including captcha validation and optional security answers.

#### Parameters

##### verifyOtpPhoneModel

[`VerifyOtpPhoneModel`](../loginradius-sdk/namespaces/Models/interfaces/VerifyOtpPhoneModel.md)

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### otp?

`string`

One-time passcode sent to the User\&#39;s Email.

##### smstemplate?

`string`

SMS Template

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### nativeProviderAccessToken()

> **nativeProviderAccessToken**(`nativeProvider`, `refreshToken`, `socialappname?`, `redirectUri?`, `providername?`, `code?`, `twAccessToken?`, `twTokenSecret?`, `googleAuthcode?`, `clientId?`, `googleAccessToken?`, `idToken?`, `fsAccessToken?`, `lnAccessToken?`, `fbAccessToken?`, `invitationToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

Retrieves an Access Token for authentication through a native social provider.

#### Parameters

##### nativeProvider

[`NativeProviderAccessTokenNativeProviderEnum`](../enumerations/NativeProviderAccessTokenNativeProviderEnum.md)

Indicates the provider for the native application. This parameter is used to specify the authentication provider for the native app.

##### refreshToken

`string`

Refresh Token

##### socialappname?

`string`

Indicates the name of the social application. This parameter is used to specify the social app for which the Access Token is being requested.

##### redirectUri?

`string`

Redirect URI for the OAuth/OIDC callback

##### providername?

`string`

The name of the provider. This parameter is used to specify the provider for authentication.

##### code?

`string`

The authorization code received from the apple, wechat, qq provider. The parameter is used to exchange the authorization code for an Access Token.

##### twAccessToken?

`string`

The Access Token used for Twitter authentication. The parameter is used to authenticate the User with Twitter.

##### twTokenSecret?

`string`

The secret token used for Twitter authentication. The parameter is used to authenticate the User with Twitter.

##### googleAuthcode?

`string`

The authorization code received from Google. This parameter is used to exchange the authorization code for an Access Token.

##### clientId?

`string`

OIDC application Client ID for request authentication.

##### googleAccessToken?

`string`

The Access Token received from Google. The parameter is used to authenticate the User with Google services.

##### idToken?

`string`

The ID token used for googlejwt, facebookjwt, applejwt authentication. The parameter is used to verify the User\&#39;s identity.

##### fsAccessToken?

`string`

The Access Token used for Foursquare authentication. The parameter is used to authenticate the User with Foursquare.

##### lnAccessToken?

`string`

The Access Token used for LinkedIn authentication. The parameter is used to authenticate the User with LinkedIn.

##### fbAccessToken?

`string`

The Access Token used for Facebook authentication. The parameter is used to authenticate the User with Facebook.

##### invitationToken?

`string`

Invitation token of an organization

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

#### Throws

### oneTouchLoginByEmail()

> **oneTouchLoginByEmail**(`oneTouchLoginByEmail`, `redirecturl?`, `onetouchloginemailtemplate?`, `welcomeemailtemplate?`, `xPreventWebhook?`, `preventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Initiates a one-touch login process using an Email.

#### Parameters

##### oneTouchLoginByEmail

[`OneTouchLoginByEmail`](../loginradius-sdk/namespaces/Models/interfaces/OneTouchLoginByEmail.md)

##### redirecturl?

`string`

The URL to which the User will be redirected after completing the operation, such as login or verification.

##### onetouchloginemailtemplate?

`string`

One Touch Login Email Template

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### oneTouchLoginByPhone()

> **oneTouchLoginByPhone**(`oneTouchLoginByPhone`, `smstemplate?`, `preventWebhook?`, `xPreventWebhook?`, `isvoiceotp?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Initiates a one-touch login process using a Phone number.

#### Parameters

##### oneTouchLoginByPhone

[`OneTouchLoginByPhone`](../loginradius-sdk/namespaces/Models/interfaces/OneTouchLoginByPhone.md)

##### smstemplate?

`string`

SMS Template

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### passkeyForgot()

> **passkeyForgot**(`passkeyForgot`, `resetpasskeyurl?`, `emailtemplate?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasskeyForgot200Response`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyForgot200Response.md)\>\>

Initiates the forgot Passkey process for a User.

#### Parameters

##### passkeyForgot

[`PasskeyForgot`](../loginradius-sdk/namespaces/Models/type-aliases/PasskeyForgot.md)

##### resetpasskeyurl?

`string`

Reset Passkey URL

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasskeyForgot200Response`](../loginradius-sdk/namespaces/Models/interfaces/PasskeyForgot200Response.md)\>\>

#### Throws

### passwordlessEmailVerification()

> **passwordlessEmailVerification**(`verificationtoken?`, `welcomeemailtemplate?`, `xPreventWebhook?`, `preventWebhook?`, `smstemplate2fa?`, `duoredirecturi?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>\>

Verifies the Email using the provided Verification Token for passwordless login.

#### Parameters

##### verificationtoken?

`string`

Verification token received in the Email.

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### smstemplate2fa?

`string`

SMS template name to be used for sending the 2FA code to the User.

##### duoredirecturi?

`string`

Duo auth redirection url.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>\>

#### Throws

### passwordlessLoginByEmail()

> **passwordlessLoginByEmail**(`email?`, `username?`, `passwordlesslogintemplate?`, `verificationurl?`, `invitationToken?`, `xPreventWebhook?`, `preventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Initiates a Passwordless login process using an Email or Username. This variant is login-only — the identifier must already belong to an existing User, and CAPTCHA is only required when the App configures optional CAPTCHA for this endpoint. Use the POST variant to auto-register an unknown Email with a registration profile.

#### Parameters

##### email?

`string`

Email address of the associated Account.

##### username?

`string`

Username of the associated Account.

##### passwordlesslogintemplate?

`string`

Passwordless Login Template

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### invitationToken?

`string`

Invitation token of an organization

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### passwordlessLoginByEmailAndOTP()

> **passwordlessLoginByEmailAndOTP**(`passwordLessEmailOTPModel`, `xPreventWebhook?`, `preventWebhook?`, `smstemplate2fa?`, `duoredirecturi?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>\>

Verifies the OTP sent to the Email for passwordless login.

#### Parameters

##### passwordLessEmailOTPModel

[`PasswordLessEmailOTPModel`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordLessEmailOTPModel.md)

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### smstemplate2fa?

`string`

SMS template name to be used for sending the 2FA code to the User.

##### duoredirecturi?

`string`

Duo auth redirection url.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>\>

#### Throws

### passwordlessLoginByEmailWithProfile()

> **passwordlessLoginByEmailWithProfile**(`profileRequestModel`, `emailtemplate?`, `verificationurl?`, `invitationToken?`, `xPreventWebhook?`, `preventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `xLoginRadiusSott?`, `sott?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

POST variant of passwordless login by Email. The email identifier and the full registration profile are supplied in the JSON body (same schema as /auth/register). When passwordless email auto-registration is enabled, a previously-unknown email is auto-registered with the supplied profile fields, and the request must carry a valid SOTT or CAPTCHA. This endpoint registers by email only — any PhoneId or UserName supplied in the body is ignored (not validated and not stored), and Password is not required. Sending the profile in the body (instead of query parameters) keeps PII out of URLs and logs.

#### Parameters

##### profileRequestModel

[`ProfileRequestModel`](../loginradius-sdk/namespaces/Models/interfaces/ProfileRequestModel.md)

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### invitationToken?

`string`

Invitation token of an organization

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### xLoginRadiusSott?

`string`

SOTT should be generated from the server side and passed here or in sott query parameter.

##### sott?

`string`

SOTT should be generated from the server side and passed here or in the X-LoginRadius-Sott header.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### passwordlessLoginByPhone()

> **passwordlessLoginByPhone**(`phone?`, `smstemplate?`, `isvoiceotp?`, `_options?`, `xPreventWebhook?`, `preventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

Initiates a Passwordless login process using a Phone number — an OTP is sent to the supplied Phone number. This variant is login-only: the Phone number must already belong to an existing User, and CAPTCHA is only required when the App configures optional CAPTCHA for this endpoint. Use the POST variant to auto-register an unknown Phone number with a registration profile.

#### Parameters

##### phone?

`string`

Phone ID of the associated Account.

##### smstemplate?

`string`

SMS Template

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### \_options?

`string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

#### Throws

### passwordlessLoginByPhoneWithProfile()

> **passwordlessLoginByPhoneWithProfile**(`profileRequestModel`, `smstemplate?`, `isvoiceotp?`, `_options?`, `xPreventWebhook?`, `preventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `xLoginRadiusSott?`, `sott?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

POST variant of passwordless login by Phone. The phone identifier (PhoneId) and the full registration profile are supplied in the JSON body (same schema as /auth/register). When passwordless phone auto-registration is enabled, a previously-unknown phone number is auto-registered with the supplied profile fields, and the request must carry a valid SOTT or CAPTCHA. This endpoint registers by phone only — any Email or UserName supplied in the body is ignored (not validated and not stored), and Password is not required. Sending the profile in the body (instead of query parameters) keeps PII out of URLs and logs.

#### Parameters

##### profileRequestModel

[`ProfileRequestModel`](../loginradius-sdk/namespaces/Models/interfaces/ProfileRequestModel.md)

##### smstemplate?

`string`

SMS Template

##### isvoiceotp?

`boolean`

Boolean flag to enforce sending SMS content via Voice.

##### \_options?

`string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### xLoginRadiusSott?

`string`

SOTT should be generated from the server side and passed here or in sott query parameter.

##### sott?

`string`

SOTT should be generated from the server side and passed here or in the X-LoginRadius-Sott header.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SMSResponse`](../loginradius-sdk/namespaces/Models/interfaces/SMSResponse.md)\>\>

#### Throws

### passwordlessLoginByUsernameAndOTP()

> **passwordlessLoginByUsernameAndOTP**(`passwordLessUserNameOTPModel`, `xPreventWebhook?`, `preventWebhook?`, `smstemplate2fa?`, `duoredirecturi?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>\>

Verifies the OTP sent to the Username for passwordless login.

#### Parameters

##### passwordLessUserNameOTPModel

[`PasswordLessUserNameOTPModel`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordLessUserNameOTPModel.md)

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### smstemplate2fa?

`string`

SMS template name to be used for sending the 2FA code to the User.

##### duoredirecturi?

`string`

Duo auth redirection url.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>\>

#### Throws

### passwordlessLoginPhoneVerification()

> **passwordlessLoginPhoneVerification**(`phoneOTPModel`, `smstemplate?`, `xPreventWebhook?`, `preventWebhook?`, `gRecaptchaResponse?`, `gRecaptchaResponse2?`, `qqCaptchaTicket?`, `qqCaptchaRandstr?`, `hCaptchaResponse?`, `emailtemplate2fa?`, `duoredirecturi?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>\>

Verifies the OTP sent to the Phone number for passwordless login.

#### Parameters

##### phoneOTPModel

[`PhoneOTPModel`](../loginradius-sdk/namespaces/Models/type-aliases/PhoneOTPModel.md)

##### smstemplate?

`string`

SMS Template

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### gRecaptchaResponse?

`string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

##### gRecaptchaResponse2?

`string`

Google reCAPTCHA Response

##### qqCaptchaTicket?

`string`

QQ reCAPTCHA Response

##### qqCaptchaRandstr?

`string`

QQ reCAPTCHA Response

##### hCaptchaResponse?

`string`

hCaptcha Response

##### emailtemplate2fa?

`string`

Name of the 2FA Email template to use for this notification.

##### duoredirecturi?

`string`

Duo auth redirection url.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PasswordlessEmailVerification200Response`](../loginradius-sdk/namespaces/Models/type-aliases/PasswordlessEmailVerification200Response.md)\>\>

#### Throws

### pingSmartLogin()

> **pingSmartLogin**(`clientguid`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>\>

Checks in the background if the smart login is verified successfully.

#### Parameters

##### clientguid

`string`

Client GUID for the request.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AuthResponse`](../loginradius-sdk/namespaces/Models/interfaces/AuthResponse.md)\>\>

#### Throws

### verifyAutoLoginEmailOneTouch()

> **verifyAutoLoginEmailOneTouch**(`email?`, `welcomeemailtemplate?`, `verificationtoken?`, `vtoken?`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md)\>\>

Verifies the auto-login Email using a Verification Token.

#### Parameters

##### email?

`string`

Email address of the associated Account.

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### verificationtoken?

`string`

Verification token received in the Email.

##### vtoken?

`string`

Verification token received in the Email.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md)\>\>

#### Throws

### verifyAutoLoginEmailSmartLogin()

> **verifyAutoLoginEmailSmartLogin**(`verificationtoken?`, `vtoken?`, `welcomeemailtemplate?`, `email?`, `xPreventWebhook?`, `preventWebhook?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md)\>\>

Verifies the auto-login Email using a Verification Token.

#### Parameters

##### verificationtoken?

`string`

Verification token received in the Email.

##### vtoken?

`string`

Verification token received in the Email.

##### welcomeemailtemplate?

`string`

Welcome Email Template

##### email?

`string`

Email address of the associated Account.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedVerified`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedVerified.md)\>\>

#### Throws

## Export
