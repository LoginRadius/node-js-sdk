[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiFinishMFAPasskeyRegistrationRequest

# Interface: SecurityApiFinishMFAPasskeyRegistrationRequest

Request parameters for finishMFAPasskeyRegistration operation in SecurityApi.

## Export

SecurityApiFinishMFAPasskeyRegistrationRequest

## Properties

### fields?

> `readonly` `optional` **fields?**: `string`

Comma-separated list of profile fields to include in the response.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### finishMFAPasskeyRegistrationRequest

> `readonly` **finishMFAPasskeyRegistrationRequest**: [`FinishMFAPasskeyRegistrationRequest`](../loginradius-sdk/namespaces/Models/interfaces/FinishMFAPasskeyRegistrationRequest.md)

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbabrowseremailtemplate?

> `readonly` `optional` **rbabrowseremailtemplate?**: `string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbabrowsersmstemplate?

> `readonly` `optional` **rbabrowsersmstemplate?**: `string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbacityemailtemplate?

> `readonly` `optional` **rbacityemailtemplate?**: `string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbacitysmstemplate?

> `readonly` `optional` **rbacitysmstemplate?**: `string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbacountryemailtemplate?

> `readonly` `optional` **rbacountryemailtemplate?**: `string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbacountrysmstemplate?

> `readonly` `optional` **rbacountrysmstemplate?**: `string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbadeviceemailtemplate?

> `readonly` `optional` **rbadeviceemailtemplate?**: `string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbadevicesmstemplate?

> `readonly` `optional` **rbadevicesmstemplate?**: `string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbaipemailtemplate?

> `readonly` `optional` **rbaipemailtemplate?**: `string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbaipsmstemplate?

> `readonly` `optional` **rbaipsmstemplate?**: `string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbaoneclickemailtemplate?

> `readonly` `optional` **rbaoneclickemailtemplate?**: `string`

RBA one click Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA is enabled for the Tenant with one click sign in as a MFA option.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### rbaotpsmstemplate?

> `readonly` `optional` **rbaotpsmstemplate?**: `string`

RBA OTP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### secondfactorauthenticationtoken

> `readonly` **secondfactorauthenticationtoken**: `string`

Second factor token

#### Memberof

SecurityApiFinishMFAPasskeyRegistration

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiFinishMFAPasskeyRegistration
