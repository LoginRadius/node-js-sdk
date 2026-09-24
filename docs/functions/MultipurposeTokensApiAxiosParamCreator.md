[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / MultipurposeTokensApiAxiosParamCreator

# Function: MultipurposeTokensApiAxiosParamCreator()

> **MultipurposeTokensApiAxiosParamCreator**(`configuration?`): `object`

MultipurposeTokensApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### forgotPasswordTokenAndEmail

> **forgotPasswordTokenAndEmail**: (`forgotPasswordTokenAndEmailRequest`, `sendemail?`, `resetpasswordurl?`, `emailtemplate?`, `xPreventWebhook?`, `preventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Generates a Forgot Password Token for the User and optionally sends an Email with the token.

#### Parameters

##### forgotPasswordTokenAndEmailRequest

[`ForgotPasswordTokenAndEmailRequest`](../loginradius-sdk/namespaces/Models/type-aliases/ForgotPasswordTokenAndEmailRequest.md)

##### sendemail?

[`ForgotPasswordTokenAndEmailSendemailEnum`](../enumerations/ForgotPasswordTokenAndEmailSendemailEnum.md)

Indicates whether to send an Email with the forgot Password token.

##### resetpasswordurl?

`string`

Callback URL for the Password Reset link in the Email.

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getVerificationToken

> **getVerificationToken**: (`vtype`, `email?`, `expiresIn?`, `sendemail?`, `verificationurl?`, `emailtemplate?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves an Email Verification Token for a specified Email. Optionally sends the verification Email to the User when sendemail is set to true.

#### Parameters

##### vtype

[`email`](../enumerations/GetVerificationTokenVtypeEnum.md#email)

The type of verification. Currently, only \&quot;Email\&quot; is supported.

##### email?

`string`

Email address of the associated Account.

##### expiresIn?

`string`

##### sendemail?

[`GetVerificationTokenSendemailEnum`](../enumerations/GetVerificationTokenSendemailEnum.md)

Indicates whether to send an Email with the forgot Password token.

##### verificationurl?

`string`

Verification URL for the User which will be included in the Email template..

##### emailtemplate?

`string`

Name of the Email template to use for this notification.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### multipurposeEmailTokenAPI

> **multipurposeEmailTokenAPI**: (`tokentype`, `multipurposeEmailTokenAPIRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves a multi-purpose Email token for verification, Password reset, and other Email-related actions.

#### Parameters

##### tokentype

[`MultipurposeEmailTokenAPITokentypeEnum`](../enumerations/MultipurposeEmailTokenAPITokentypeEnum.md)

Token purpose: &#x60;emailverification&#x60;, &#x60;forgotpin&#x60;, &#x60;addemail&#x60;, &#x60;deleteuser&#x60;, &#x60;onetouchlogin&#x60;, or &#x60;autologin&#x60;.

##### multipurposeEmailTokenAPIRequest

[`MultipurposeEmailTokenAPIRequest`](../loginradius-sdk/namespaces/Models/type-aliases/MultipurposeEmailTokenAPIRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### multipurposeSmsOtpAPI

> **multipurposeSmsOtpAPI**: (`smsotptype`, `multipurposeSmsOtpAPIRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Generates an OTP for the User, applicable for adding a Phone, Phone ID verification, and other SMS-related actions.

#### Parameters

##### smsotptype

[`MultipurposeSmsOtpAPISmsotptypeEnum`](../enumerations/MultipurposeSmsOtpAPISmsotptypeEnum.md)

OTP purpose: &#x60;addphone&#x60;, &#x60;phoneidverification&#x60;, &#x60;forgotpassword&#x60;, &#x60;forgotpin&#x60;, &#x60;onetouchlogin&#x60;, &#x60;smartlogin&#x60;, &#x60;passwordlesslogin&#x60;, or &#x60;deleteuser&#x60;.

##### multipurposeSmsOtpAPIRequest

[`MultipurposeSmsOtpAPIRequest`](../loginradius-sdk/namespaces/Models/type-aliases/MultipurposeSmsOtpAPIRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
