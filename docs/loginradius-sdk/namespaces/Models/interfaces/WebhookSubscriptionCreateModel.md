[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / WebhookSubscriptionCreateModel

# Interface: WebhookSubscriptionCreateModel

## Export

WebhookSubscriptionCreateModel

## Properties

### Authentication?

> `optional` **Authentication?**: [`WebhookAuthentication`](WebhookAuthentication.md)

#### Memberof

WebhookSubscriptionCreateModel

***

### CustomObjects?

> `optional` **CustomObjects?**: `string`

Custom Objects associated with the webhook

#### Memberof

WebhookSubscriptionCreateModel

***

### Event

> **Event**: [`WebhookSubscriptionCreateModelEventEnum`](../enumerations/WebhookSubscriptionCreateModelEventEnum.md)

The event that triggers the webhook

#### Memberof

WebhookSubscriptionCreateModel

***

### Headers?

> `optional` **Headers?**: `object`

The headers to be included in the webhook request

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

WebhookSubscriptionCreateModel

***

### Name?

> `optional` **Name?**: `string`

The name of the webhook subscription

#### Memberof

WebhookSubscriptionCreateModel

***

### QueryParams?

> `optional` **QueryParams?**: `object`

The query parameters to be included in the webhook request

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

WebhookSubscriptionCreateModel

***

### SecretName?

> `optional` **SecretName?**: `string`

The name of the secret used for the webhook

#### Memberof

WebhookSubscriptionCreateModel

***

### TargetUrl

> **TargetUrl**: `string`

The target URL for the webhook

#### Memberof

WebhookSubscriptionCreateModel
