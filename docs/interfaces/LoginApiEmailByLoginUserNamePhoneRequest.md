[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiEmailByLoginUserNamePhoneRequest

# Interface: LoginApiEmailByLoginUserNamePhoneRequest

Request parameters for emailByLoginUserNamePhone operation in LoginApi.

## Export

LoginApiEmailByLoginUserNamePhoneRequest

## Properties

### \_options?

> `readonly` `optional` **\_options?**: `string`

Options value will be passed when don\&#39;t want to send the Email to the User for the verification, i.e. preventverificationemail

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### breachedpasswordemailtemplate?

> `readonly` `optional` **breachedpasswordemailtemplate?**: `string`

Email template name for breached Password notifications.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### breachedpasswordsmstemplate?

> `readonly` `optional` **breachedpasswordsmstemplate?**: `string`

SMS template name for breached Password notifications.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### duoredirecturi?

> `readonly` `optional` **duoredirecturi?**: `string`

Duo auth redirection url.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### emailByLoginUserNamePhoneRequest

> `readonly` **emailByLoginUserNamePhoneRequest**: [`EmailByLoginUserNamePhoneRequest`](../loginradius-sdk/namespaces/Models/type-aliases/EmailByLoginUserNamePhoneRequest.md)

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### emailtemplate2fa?

> `readonly` `optional` **emailtemplate2fa?**: `string`

Name of the 2FA Email template to use for this notification.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### gRecaptchaResponse?

> `readonly` `optional` **gRecaptchaResponse?**: `string`

Google reCAPTCHA response parameter which will be sent to the server for verification.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### invitationToken?

> `readonly` `optional` **invitationToken?**: `string`

Invitation token of an organization

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### loginurl?

> `readonly` `optional` **loginurl?**: `string`

Login URL for the User which will come in the login logs from where the User logged in.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbabrowseremailtemplate?

> `readonly` `optional` **rbabrowseremailtemplate?**: `string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbabrowsersmstemplate?

> `readonly` `optional` **rbabrowsersmstemplate?**: `string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbacityemailtemplate?

> `readonly` `optional` **rbacityemailtemplate?**: `string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbacitysmstemplate?

> `readonly` `optional` **rbacitysmstemplate?**: `string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbacountryemailtemplate?

> `readonly` `optional` **rbacountryemailtemplate?**: `string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbacountrysmstemplate?

> `readonly` `optional` **rbacountrysmstemplate?**: `string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbadeviceemailtemplate?

> `readonly` `optional` **rbadeviceemailtemplate?**: `string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbadevicesmstemplate?

> `readonly` `optional` **rbadevicesmstemplate?**: `string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbaipemailtemplate?

> `readonly` `optional` **rbaipemailtemplate?**: `string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbaipsmstemplate?

> `readonly` `optional` **rbaipsmstemplate?**: `string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbaoneclickemailtemplate?

> `readonly` `optional` **rbaoneclickemailtemplate?**: `string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### rbaotpsmstemplate?

> `readonly` `optional` **rbaotpsmstemplate?**: `string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### verificationurl?

> `readonly` `optional` **verificationurl?**: `string`

Verification URL for the User which will be included in the Email template..

#### Memberof

LoginApiEmailByLoginUserNamePhone

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

LoginApiEmailByLoginUserNamePhone
