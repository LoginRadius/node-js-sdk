[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / WebhooksApi

# Class: WebhooksApi

WebhooksApi - object-oriented interface

## Export

WebhooksApi

## Extends

- `BaseAPI`

## Implements

- [`WebhooksApiInterface`](../interfaces/WebhooksApiInterface.md)

## Constructors

### Constructor

> **new WebhooksApi**(`configuration?`, `basePath?`, `axios?`): `WebhooksApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`WebhooksApi`

#### Inherited from

`BaseAPI.constructor`

## Properties

### axios

> `protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

`BaseAPI.axios`

***

### basePath

> `protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

`BaseAPI.basePath`

***

### configuration

> `protected` **configuration**: `Configuration` \| `undefined`

#### Inherited from

`BaseAPI.configuration`

## Methods

### createWebhookConfiguration()

> **createWebhookConfiguration**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md), `any`, \{ \}, `any`\>\>

Creates a new webhook configuration for the Tenant, allowing registration of a webhook with details such as the Target URL and subscribed events.

#### Parameters

##### requestParameters?

[`WebhooksApiCreateWebhookConfigurationRequest`](../interfaces/WebhooksApiCreateWebhookConfigurationRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WebhooksApi

#### Implementation of

[`WebhooksApiInterface`](../interfaces/WebhooksApiInterface.md).[`createWebhookConfiguration`](../interfaces/WebhooksApiInterface.md#createwebhookconfiguration)

***

### deleteWebhookConfigurationById()

> **deleteWebhookConfigurationById**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes a specific webhook configuration for the Tenant using its unique ID, permanently removing the webhook from receiving further event notifications.

#### Parameters

##### requestParameters

[`WebhooksApiDeleteWebhookConfigurationByIdRequest`](../interfaces/WebhooksApiDeleteWebhookConfigurationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WebhooksApi

#### Implementation of

[`WebhooksApiInterface`](../interfaces/WebhooksApiInterface.md).[`deleteWebhookConfigurationById`](../interfaces/WebhooksApiInterface.md#deletewebhookconfigurationbyid)

***

### getAllEvents()

> **getAllEvents**(`options?`): `Promise`\<`AxiosResponse`\<[`WebhookEvents`](../loginradius-sdk/namespaces/Models/enumerations/WebhookEvents.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all available webhook events that can be subscribed to by the Tenant for configuring webhooks to receive notifications for specific activities.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`WebhookEvents`](../loginradius-sdk/namespaces/Models/enumerations/WebhookEvents.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WebhooksApi

#### Implementation of

[`WebhooksApiInterface`](../interfaces/WebhooksApiInterface.md).[`getAllEvents`](../interfaces/WebhooksApiInterface.md#getallevents)

***

### getAllWebhooksConfigurations()

> **getAllWebhooksConfigurations**(`options?`): `Promise`\<`AxiosResponse`\<[`WebhookSubscriptionResponse`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionResponse.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all configured webhooks for the Tenant, including detailed information about each webhook and its subscribed events.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`WebhookSubscriptionResponse`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscriptionResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WebhooksApi

#### Implementation of

[`WebhooksApiInterface`](../interfaces/WebhooksApiInterface.md).[`getAllWebhooksConfigurations`](../interfaces/WebhooksApiInterface.md#getallwebhooksconfigurations)

***

### getWebhookConfigurationById()

> **getWebhookConfigurationById**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md), `any`, \{ \}, `any`\>\>

Retrieves the details of a specific webhook configuration for the Tenant by its unique ID, including the Target URL, subscribed events, and other settings.

#### Parameters

##### requestParameters

[`WebhooksApiGetWebhookConfigurationByIdRequest`](../interfaces/WebhooksApiGetWebhookConfigurationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WebhooksApi

#### Implementation of

[`WebhooksApiInterface`](../interfaces/WebhooksApiInterface.md).[`getWebhookConfigurationById`](../interfaces/WebhooksApiInterface.md#getwebhookconfigurationbyid)

***

### updateWebhookConfigurationById()

> **updateWebhookConfigurationById**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md), `any`, \{ \}, `any`\>\>

Updates an existing webhook configuration for the Tenant by its unique ID, modifying details such as the Target URL, subscribed events, or other settings.

#### Parameters

##### requestParameters

[`WebhooksApiUpdateWebhookConfigurationByIdRequest`](../interfaces/WebhooksApiUpdateWebhookConfigurationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`WebhookSubscription`](../loginradius-sdk/namespaces/Models/interfaces/WebhookSubscription.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

WebhooksApi

#### Implementation of

[`WebhooksApiInterface`](../interfaces/WebhooksApiInterface.md).[`updateWebhookConfigurationById`](../interfaces/WebhooksApiInterface.md#updatewebhookconfigurationbyid)
