[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / WebhooksApiFactory

# Function: WebhooksApiFactory()

> **WebhooksApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

WebhooksApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createWebhookConfiguration()

> **createWebhookConfiguration**(`requestParameters?`, `options?`): `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

Creates a new webhook configuration for the Tenant, allowing registration of a webhook with details such as the Target URL and subscribed events.

#### Parameters

##### requestParameters?

[`WebhooksApiCreateWebhookConfigurationRequest`](../interfaces/WebhooksApiCreateWebhookConfigurationRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

#### Throws

### deleteWebhookConfigurationById()

> **deleteWebhookConfigurationById**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a specific webhook configuration for the Tenant using its unique ID, permanently removing the webhook from receiving further event notifications.

#### Parameters

##### requestParameters

[`WebhooksApiDeleteWebhookConfigurationByIdRequest`](../interfaces/WebhooksApiDeleteWebhookConfigurationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getAllEvents()

> **getAllEvents**(`options?`): `AxiosPromise`\<[`WebhookEvents`](../loginradius-sdk/namespaces/Models/enumerations/WebhookEvents.md)\>

Retrieves a list of all available webhook events that can be subscribed to by the Tenant for configuring webhooks to receive notifications for specific activities.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WebhookEvents`](../loginradius-sdk/namespaces/Models/enumerations/WebhookEvents.md)\>

#### Throws

### getAllWebhooksConfigurations()

> **getAllWebhooksConfigurations**(`options?`): `AxiosPromise`\<[`WebhookSubscriptionResponse`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionResponse.md)\>

Retrieves a list of all configured webhooks for the Tenant, including detailed information about each webhook and its subscribed events.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WebhookSubscriptionResponse`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionResponse.md)\>

#### Throws

### getWebhookConfigurationById()

> **getWebhookConfigurationById**(`requestParameters`, `options?`): `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

Retrieves the details of a specific webhook configuration for the Tenant by its unique ID, including the Target URL, subscribed events, and other settings.

#### Parameters

##### requestParameters

[`WebhooksApiGetWebhookConfigurationByIdRequest`](../interfaces/WebhooksApiGetWebhookConfigurationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

#### Throws

### updateWebhookConfigurationById()

> **updateWebhookConfigurationById**(`requestParameters`, `options?`): `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

Updates an existing webhook configuration for the Tenant by its unique ID, modifying details such as the Target URL, subscribed events, or other settings.

#### Parameters

##### requestParameters

[`WebhooksApiUpdateWebhookConfigurationByIdRequest`](../interfaces/WebhooksApiUpdateWebhookConfigurationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

#### Throws

## Export
