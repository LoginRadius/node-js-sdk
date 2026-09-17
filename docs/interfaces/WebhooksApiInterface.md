[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / WebhooksApiInterface

# Interface: WebhooksApiInterface

WebhooksApi - interface

## Export

WebhooksApi

## Methods

### createWebhookConfiguration()

> **createWebhookConfiguration**(`requestParameters?`, `options?`): `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

Creates a new webhook configuration for the Tenant, allowing registration of a webhook with details such as the Target URL and subscribed events.

#### Parameters

##### requestParameters?

[`WebhooksApiCreateWebhookConfigurationRequest`](WebhooksApiCreateWebhookConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

#### Throws

#### Memberof

WebhooksApiInterface

***

### deleteWebhookConfigurationById()

> **deleteWebhookConfigurationById**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a specific webhook configuration for the Tenant using its unique ID, permanently removing the webhook from receiving further event notifications.

#### Parameters

##### requestParameters

[`WebhooksApiDeleteWebhookConfigurationByIdRequest`](WebhooksApiDeleteWebhookConfigurationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

WebhooksApiInterface

***

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

#### Memberof

WebhooksApiInterface

***

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

#### Memberof

WebhooksApiInterface

***

### getWebhookConfigurationById()

> **getWebhookConfigurationById**(`requestParameters`, `options?`): `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

Retrieves the details of a specific webhook configuration for the Tenant by its unique ID, including the Target URL, subscribed events, and other settings.

#### Parameters

##### requestParameters

[`WebhooksApiGetWebhookConfigurationByIdRequest`](WebhooksApiGetWebhookConfigurationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

#### Throws

#### Memberof

WebhooksApiInterface

***

### updateWebhookConfigurationById()

> **updateWebhookConfigurationById**(`requestParameters`, `options?`): `AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

Updates an existing webhook configuration for the Tenant by its unique ID, modifying details such as the Target URL, subscribed events, or other settings.

#### Parameters

##### requestParameters

[`WebhooksApiUpdateWebhookConfigurationByIdRequest`](WebhooksApiUpdateWebhookConfigurationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md)\>

#### Throws

#### Memberof

WebhooksApiInterface
