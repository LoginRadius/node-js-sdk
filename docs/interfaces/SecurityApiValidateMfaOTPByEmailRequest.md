[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiValidateMfaOTPByEmailRequest

# Interface: SecurityApiValidateMfaOTPByEmailRequest

Request parameters for validateMfaOTPByEmail operation in SecurityApi.

## Export

SecurityApiValidateMfaOTPByEmailRequest

## Properties

### rbabrowseremailtemplate?

> `readonly` `optional` **rbabrowseremailtemplate?**: `string`

RBA browser Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with browser option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### rbabrowsersmstemplate?

> `readonly` `optional` **rbabrowsersmstemplate?**: `string`

RBA browser SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### rbacityemailtemplate?

> `readonly` `optional` **rbacityemailtemplate?**: `string`

RBA city Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with city option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### rbacitysmstemplate?

> `readonly` `optional` **rbacitysmstemplate?**: `string`

RBA city SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### rbacountryemailtemplate?

> `readonly` `optional` **rbacountryemailtemplate?**: `string`

RBA country Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with country option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### rbacountrysmstemplate?

> `readonly` `optional` **rbacountrysmstemplate?**: `string`

RBA country SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### rbadeviceemailtemplate?

> `readonly` `optional` **rbadeviceemailtemplate?**: `string`

RBA device Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with device option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### rbadevicesmstemplate?

> `readonly` `optional` **rbadevicesmstemplate?**: `string`

RBA device SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### rbaipemailtemplate?

> `readonly` `optional` **rbaipemailtemplate?**: `string`

RBA IP Email template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when RBA with IP option is enabled for the Tenant.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### rbaipsmstemplate?

> `readonly` `optional` **rbaipsmstemplate?**: `string`

RBA IP SMS template name which will be sent to the User when any risk is detected while logging in to the Tenant. It will only be used when a User has logged in via Phone.

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### reAuthModelByEmailOtp

> `readonly` **reAuthModelByEmailOtp**: [`ReAuthModelByEmailOtp`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthModelByEmailOtp.md)

#### Memberof

SecurityApiValidateMfaOTPByEmail

***

### secondfactorauthenticationtoken

> `readonly` **secondfactorauthenticationtoken**: `string`

Second factor token

#### Memberof

SecurityApiValidateMfaOTPByEmail
