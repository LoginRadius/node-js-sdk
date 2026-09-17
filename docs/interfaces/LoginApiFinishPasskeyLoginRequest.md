[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiFinishPasskeyLoginRequest

# Interface: LoginApiFinishPasskeyLoginRequest

Request parameters for finishPasskeyLogin operation in LoginApi.

## Export

LoginApiFinishPasskeyLoginRequest

## Properties

### \_options?

> `readonly` `optional` **\_options?**: `string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

#### Memberof

LoginApiFinishPasskeyLogin

***

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

LoginApiFinishPasskeyLogin

***

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

LoginApiFinishPasskeyLogin

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiFinishPasskeyLogin

***

### gRecaptchaResponse2?

> `readonly` `optional` **gRecaptchaResponse2?**: `string`

Google reCAPTCHA Response

#### Memberof

LoginApiFinishPasskeyLogin

***

### hCaptchaResponse?

> `readonly` `optional` **hCaptchaResponse?**: `string`

hCaptcha Response

#### Memberof

LoginApiFinishPasskeyLogin

***

### invitationToken?

> `readonly` `optional` **invitationToken?**: `string`

Invitation token of an organization

#### Memberof

LoginApiFinishPasskeyLogin

***

### loginurl?

> `readonly` `optional` **loginurl?**: `string`

Login URL for the User which will come in the login logs from where the User logged in.

#### Memberof

LoginApiFinishPasskeyLogin

***

### passkeyLoginFinish

> `readonly` **passkeyLoginFinish**: [`PasskeyLoginFinish`](../loginradius-sdk/namespaces/Models/type-aliases/PasskeyLoginFinish.md)

#### Memberof

LoginApiFinishPasskeyLogin

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiFinishPasskeyLogin

***

### qqCaptchaRandstr?

> `readonly` `optional` **qqCaptchaRandstr?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiFinishPasskeyLogin

***

### qqCaptchaTicket?

> `readonly` `optional` **qqCaptchaTicket?**: `string`

QQ reCAPTCHA Response

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbabrowseremailtemplate?

> `readonly` `optional` **rbabrowseremailtemplate?**: `string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbabrowsersmstemplate?

> `readonly` `optional` **rbabrowsersmstemplate?**: `string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbacityemailtemplate?

> `readonly` `optional` **rbacityemailtemplate?**: `string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbacitysmstemplate?

> `readonly` `optional` **rbacitysmstemplate?**: `string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbacountryemailtemplate?

> `readonly` `optional` **rbacountryemailtemplate?**: `string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbacountrysmstemplate?

> `readonly` `optional` **rbacountrysmstemplate?**: `string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbadeviceemailtemplate?

> `readonly` `optional` **rbadeviceemailtemplate?**: `string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbadevicesmstemplate?

> `readonly` `optional` **rbadevicesmstemplate?**: `string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbaipemailtemplate?

> `readonly` `optional` **rbaipemailtemplate?**: `string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbaipsmstemplate?

> `readonly` `optional` **rbaipsmstemplate?**: `string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbaoneclickemailtemplate?

> `readonly` `optional` **rbaoneclickemailtemplate?**: `string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

#### Memberof

LoginApiFinishPasskeyLogin

***

### rbaotpsmstemplate?

> `readonly` `optional` **rbaotpsmstemplate?**: `string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiFinishPasskeyLogin

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

LoginApiFinishPasskeyLogin

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiFinishPasskeyLogin
