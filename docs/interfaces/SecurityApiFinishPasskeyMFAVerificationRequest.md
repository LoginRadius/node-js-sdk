[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiFinishPasskeyMFAVerificationRequest

# Interface: SecurityApiFinishPasskeyMFAVerificationRequest

Request parameters for finishPasskeyMFAVerification operation in SecurityApi.

## Export

SecurityApiFinishPasskeyMFAVerificationRequest

## Properties

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### finishPasskeyMFAVerificationRequest

> `readonly` **finishPasskeyMFAVerificationRequest**: [`FinishPasskeyMFAVerificationRequest`](../loginradius-sdk/namespaces/Models/interfaces/FinishPasskeyMFAVerificationRequest.md)

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbabrowseremailtemplate?

> `readonly` `optional` **rbabrowseremailtemplate?**: `string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbabrowsersmstemplate?

> `readonly` `optional` **rbabrowsersmstemplate?**: `string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbacityemailtemplate?

> `readonly` `optional` **rbacityemailtemplate?**: `string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbacitysmstemplate?

> `readonly` `optional` **rbacitysmstemplate?**: `string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbacountryemailtemplate?

> `readonly` `optional` **rbacountryemailtemplate?**: `string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbacountrysmstemplate?

> `readonly` `optional` **rbacountrysmstemplate?**: `string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbadeviceemailtemplate?

> `readonly` `optional` **rbadeviceemailtemplate?**: `string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbadevicesmstemplate?

> `readonly` `optional` **rbadevicesmstemplate?**: `string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbaipemailtemplate?

> `readonly` `optional` **rbaipemailtemplate?**: `string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbaipsmstemplate?

> `readonly` `optional` **rbaipsmstemplate?**: `string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbaoneclickemailtemplate?

> `readonly` `optional` **rbaoneclickemailtemplate?**: `string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### rbaotpsmstemplate?

> `readonly` `optional` **rbaotpsmstemplate?**: `string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### secondfactorauthenticationtoken

> `readonly` **secondfactorauthenticationtoken**: `string`

Second factor token

#### Memberof

SecurityApiFinishPasskeyMFAVerification

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiFinishPasskeyMFAVerification
