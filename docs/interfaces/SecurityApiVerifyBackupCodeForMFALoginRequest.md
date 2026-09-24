[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiVerifyBackupCodeForMFALoginRequest

# Interface: SecurityApiVerifyBackupCodeForMFALoginRequest

Request parameters for verifyBackupCodeForMFALogin operation in SecurityApi.

## Export

SecurityApiVerifyBackupCodeForMFALoginRequest

## Properties

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbabrowseremailtemplate?

> `readonly` `optional` **rbabrowseremailtemplate?**: `string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbabrowsersmstemplate?

> `readonly` `optional` **rbabrowsersmstemplate?**: `string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbacityemailtemplate?

> `readonly` `optional` **rbacityemailtemplate?**: `string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbacitysmstemplate?

> `readonly` `optional` **rbacitysmstemplate?**: `string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbacountryemailtemplate?

> `readonly` `optional` **rbacountryemailtemplate?**: `string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbacountrysmstemplate?

> `readonly` `optional` **rbacountrysmstemplate?**: `string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbadeviceemailtemplate?

> `readonly` `optional` **rbadeviceemailtemplate?**: `string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbadevicesmstemplate?

> `readonly` `optional` **rbadevicesmstemplate?**: `string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbaipemailtemplate?

> `readonly` `optional` **rbaipemailtemplate?**: `string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### rbaipsmstemplate?

> `readonly` `optional` **rbaipsmstemplate?**: `string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### secondfactorauthenticationtoken

> `readonly` **secondfactorauthenticationtoken**: `string`

Second factor token

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### twoFAAuthByBackupCode

> `readonly` **twoFAAuthByBackupCode**: [`TwoFAAuthByBackupCode`](../loginradius-sdk/namespaces/Models/interfaces/TwoFAAuthByBackupCode.md)

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiVerifyBackupCodeForMFALogin
