[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiValidateMfaOTPByPhoneRequest

# Interface: SecurityApiValidateMfaOTPByPhoneRequest

Request parameters for validateMfaOTPByPhone operation in SecurityApi.

## Export

SecurityApiValidateMfaOTPByPhoneRequest

## Properties

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### isvoiceotp?

> `readonly` `optional` **isvoiceotp?**: `boolean`

Boolean flag to enforce sending SMS content via Voice.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### mFAVerifyPhoneOtpModel

> `readonly` **mFAVerifyPhoneOtpModel**: [`MFAVerifyPhoneOtpModel`](../loginradius-sdk/namespaces/Models/type-aliases/MFAVerifyPhoneOtpModel.md)

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbabrowseremailtemplate?

> `readonly` `optional` **rbabrowseremailtemplate?**: `string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbabrowsersmstemplate?

> `readonly` `optional` **rbabrowsersmstemplate?**: `string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbacityemailtemplate?

> `readonly` `optional` **rbacityemailtemplate?**: `string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbacitysmstemplate?

> `readonly` `optional` **rbacitysmstemplate?**: `string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbacountryemailtemplate?

> `readonly` `optional` **rbacountryemailtemplate?**: `string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbacountrysmstemplate?

> `readonly` `optional` **rbacountrysmstemplate?**: `string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbadeviceemailtemplate?

> `readonly` `optional` **rbadeviceemailtemplate?**: `string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbadevicesmstemplate?

> `readonly` `optional` **rbadevicesmstemplate?**: `string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbaipemailtemplate?

> `readonly` `optional` **rbaipemailtemplate?**: `string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbaipsmstemplate?

> `readonly` `optional` **rbaipsmstemplate?**: `string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### rbaotpsmstemplate?

> `readonly` `optional` **rbaotpsmstemplate?**: `string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### secondfactorauthenticationtoken

> `readonly` **secondfactorauthenticationtoken**: `string`

Second factor token

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### smstemplate2fa?

> `readonly` `optional` **smstemplate2fa?**: `string`

SMS template name to be used for sending the 2FA code to the User.

#### Memberof

SecurityApiValidateMfaOTPByPhone

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiValidateMfaOTPByPhone
