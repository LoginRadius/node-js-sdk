[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiValidateEmailOtpForReauthMFARequest

# Interface: SecurityApiValidateEmailOtpForReauthMFARequest

Request parameters for validateEmailOtpForReauthMFA operation in SecurityApi.

## Export

SecurityApiValidateEmailOtpForReauthMFARequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

SecurityApiValidateEmailOtpForReauthMFA

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiValidateEmailOtpForReauthMFA

***

### reAuthModelByEmailOtp

> `readonly` **reAuthModelByEmailOtp**: [`ReAuthModelByEmailOtp`](../loginradius-sdk/namespaces/Models/interfaces/ReAuthModelByEmailOtp.md)

#### Memberof

SecurityApiValidateEmailOtpForReauthMFA

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiValidateEmailOtpForReauthMFA
