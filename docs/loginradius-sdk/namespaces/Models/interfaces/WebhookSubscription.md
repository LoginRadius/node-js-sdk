[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / WebhookSubscription

# Interface: WebhookSubscription

## Export

WebhookSubscription

## Properties

### Authentication?

> `optional` **Authentication?**: [`WebhookAuthentication`](WebhookAuthentication.md)

#### Memberof

WebhookSubscription

***

### CreatedDate?

> `optional` **CreatedDate?**: `string`

The date when the webhook subscription was created

#### Memberof

WebhookSubscription

***

### Event?

> `optional` **Event?**: `string`

The event that triggers the webhook

#### Memberof

WebhookSubscription

***

### Headers?

> `optional` **Headers?**: `object`

The headers to be included in the webhook request

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

WebhookSubscription

***

### Id?

> `optional` **Id?**: `string`

The unique identifier for the webhook subscription

#### Memberof

WebhookSubscription

***

### IsIntegrationWebhook?

> `optional` **IsIntegrationWebhook?**: `boolean`

Indicates if the webhook is an integration webhook

#### Memberof

WebhookSubscription

***

### LastModifiedDate?

> `optional` **LastModifiedDate?**: `string`

The date when the webhook subscription was last modified

#### Memberof

WebhookSubscription

***

### Name?

> `optional` **Name?**: `string`

The name of the webhook subscription

#### Memberof

WebhookSubscription

***

### QueryParams?

> `optional` **QueryParams?**: `object`

The query parameters to be included in the webhook request

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

WebhookSubscription

***

### SecretName?

> `optional` **SecretName?**: `string`

The name of the secret used for the webhook

#### Memberof

WebhookSubscription

***

### TargetUrl?

> `optional` **TargetUrl?**: `string`

The target URL for the webhook

#### Memberof

WebhookSubscription
