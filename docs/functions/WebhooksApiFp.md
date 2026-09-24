[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / WebhooksApiFp

# Function: WebhooksApiFp()

> **WebhooksApiFp**(`configuration?`): `object`

WebhooksApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createWebhookConfiguration()

> **createWebhookConfiguration**(`webhookSubscriptionCreateModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>\>

Creates a new webhook configuration for the Tenant, allowing registration of a webhook with details such as the Target URL and subscribed events.

#### Parameters

##### webhookSubscriptionCreateModel?

[`WebhookSubscriptionCreateModel`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionCreateModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>\>

#### Throws

### deleteWebhookConfigurationById()

> **deleteWebhookConfigurationById**(`hookId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes a specific webhook configuration for the Tenant using its unique ID, permanently removing the webhook from receiving further event notifications.

#### Parameters

##### hookId

`string`

Webhook ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllEvents()

> **getAllEvents**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookEvents`](../loginradius-sdk/namespaces/Models/enumerations/WebhookEvents.md)\>\>

Retrieves a list of all available webhook events that can be subscribed to by the Tenant for configuring webhooks to receive notifications for specific activities.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookEvents`](../loginradius-sdk/namespaces/Models/enumerations/WebhookEvents.md)\>\>

#### Throws

### getAllWebhooksConfigurations()

> **getAllWebhooksConfigurations**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookSubscriptionResponse`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionResponse.md)\>\>

Retrieves a list of all configured webhooks for the Tenant, including detailed information about each webhook and its subscribed events.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookSubscriptionResponse`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionResponse.md)\>\>

#### Throws

### getWebhookConfigurationById()

> **getWebhookConfigurationById**(`hookId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>\>

Retrieves the details of a specific webhook configuration for the Tenant by its unique ID, including the Target URL, subscribed events, and other settings.

#### Parameters

##### hookId

`string`

Webhook ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>\>

#### Throws

### updateWebhookConfigurationById()

> **updateWebhookConfigurationById**(`hookId`, `webhookSubscriptionUpdateModel?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>\>

Updates an existing webhook configuration for the Tenant by its unique ID, modifying details such as the Target URL, subscribed events, or other settings.

#### Parameters

##### hookId

`string`

Webhook ID

##### webhookSubscriptionUpdateModel?

[`WebhookSubscriptionUpdateModel`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionUpdateModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>\>

#### Throws

## Export
