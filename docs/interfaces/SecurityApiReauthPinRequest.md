[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SecurityApiReauthPinRequest

# Interface: SecurityApiReauthPinRequest

Request parameters for reauthPin operation in SecurityApi.

## Export

SecurityApiReauthPinRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

SecurityApiReauthPin

***

### pinReauthRequest

> `readonly` **pinReauthRequest**: [`PinReauthRequest`](../loginradius-sdk/namespaces/Models/interfaces/PinReauthRequest.md)

#### Memberof

SecurityApiReauthPin

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiReauthPin

***

### smstemplate?

> `readonly` `optional` **smstemplate?**: `string`

SMS Template

#### Memberof

SecurityApiReauthPin

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

SecurityApiReauthPin
