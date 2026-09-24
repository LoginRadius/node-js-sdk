[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / WebhooksApiAxiosParamCreator

# Function: WebhooksApiAxiosParamCreator()

> **WebhooksApiAxiosParamCreator**(`configuration?`): `object`

WebhooksApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createWebhookConfiguration

> **createWebhookConfiguration**: (`webhookSubscriptionCreateModel?`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new webhook configuration for the Tenant, allowing registration of a webhook with details such as the Target URL and subscribed events.

#### Parameters

##### webhookSubscriptionCreateModel?

[`WebhookSubscriptionCreateModel`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionCreateModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteWebhookConfigurationById

> **deleteWebhookConfigurationById**: (`hookId`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes a specific webhook configuration for the Tenant using its unique ID, permanently removing the webhook from receiving further event notifications.

#### Parameters

##### hookId

`string`

Webhook ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllEvents

> **getAllEvents**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all available webhook events that can be subscribed to by the Tenant for configuring webhooks to receive notifications for specific activities.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllWebhooksConfigurations

> **getAllWebhooksConfigurations**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all configured webhooks for the Tenant, including detailed information about each webhook and its subscribed events.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getWebhookConfigurationById

> **getWebhookConfigurationById**: (`hookId`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the details of a specific webhook configuration for the Tenant by its unique ID, including the Target URL, subscribed events, and other settings.

#### Parameters

##### hookId

`string`

Webhook ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateWebhookConfigurationById

> **updateWebhookConfigurationById**: (`hookId`, `webhookSubscriptionUpdateModel?`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an existing webhook configuration for the Tenant by its unique ID, modifying details such as the Target URL, subscribed events, or other settings.

#### Parameters

##### hookId

`string`

Webhook ID

##### webhookSubscriptionUpdateModel?

[`WebhookSubscriptionUpdateModel`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionUpdateModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
