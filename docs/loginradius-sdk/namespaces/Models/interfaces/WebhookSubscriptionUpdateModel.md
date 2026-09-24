[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / WebhookSubscriptionUpdateModel

# Interface: WebhookSubscriptionUpdateModel

## Export

WebhookSubscriptionUpdateModel

## Properties

### Authentication?

> `optional` **Authentication?**: [`WebhookAuthentication`](WebhookAuthentication.md)

#### Memberof

WebhookSubscriptionUpdateModel

***

### CustomObjects?

> `optional` **CustomObjects?**: `string`

Custom Objects associated with the webhook

#### Memberof

WebhookSubscriptionUpdateModel

***

### Headers?

> `optional` **Headers?**: `object`

The headers to be included in the webhook request

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

WebhookSubscriptionUpdateModel

***

### Name?

> `optional` **Name?**: `string` \| `null`

The name of the webhook subscription

#### Memberof

WebhookSubscriptionUpdateModel

***

### QueryParams?

> `optional` **QueryParams?**: `object`

The query parameters to be included in the webhook request

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

WebhookSubscriptionUpdateModel

***

### SecretName?

> `optional` **SecretName?**: `string`

The name of the secret used for the webhook

#### Memberof

WebhookSubscriptionUpdateModel

***

### TargetUrl

> **TargetUrl**: `string`

The target URL for the webhook

#### Memberof

WebhookSubscriptionUpdateModel
