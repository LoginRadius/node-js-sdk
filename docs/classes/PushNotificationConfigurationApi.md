[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PushNotificationConfigurationApi

# Class: PushNotificationConfigurationApi

PushNotificationConfigurationApi - object-oriented interface

## Export

PushNotificationConfigurationApi

## Extends

- `BaseAPI`

## Implements

- [`PushNotificationConfigurationApiInterface`](../interfaces/PushNotificationConfigurationApiInterface.md)

## Constructors

### Constructor

> **new PushNotificationConfigurationApi**(`configuration?`, `basePath?`, `axios?`): `PushNotificationConfigurationApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`PushNotificationConfigurationApi`

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

### createPushSettings()

> **createPushSettings**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md), `any`, \{ \}, `any`\>\>

Creates new Push Notification settings for second factor authentication.

#### Parameters

##### requestParameters

[`PushNotificationConfigurationApiCreatePushSettingsRequest`](../interfaces/PushNotificationConfigurationApiCreatePushSettingsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PushNotificationConfigurationApi

#### Implementation of

[`PushNotificationConfigurationApiInterface`](../interfaces/PushNotificationConfigurationApiInterface.md).[`createPushSettings`](../interfaces/PushNotificationConfigurationApiInterface.md#createpushsettings)

***

### getPushSettings()

> **getPushSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md), `any`, \{ \}, `any`\>\>

Retrieves the current Push Notification settings for second factor authentication.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PushNotificationConfigurationApi

#### Implementation of

[`PushNotificationConfigurationApiInterface`](../interfaces/PushNotificationConfigurationApiInterface.md).[`getPushSettings`](../interfaces/PushNotificationConfigurationApiInterface.md#getpushsettings)

***

### updatePushSettings()

> **updatePushSettings**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md), `any`, \{ \}, `any`\>\>

Updates existing Push Notification settings for second factor authentication.

#### Parameters

##### requestParameters

[`PushNotificationConfigurationApiUpdatePushSettingsRequest`](../interfaces/PushNotificationConfigurationApiUpdatePushSettingsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

PushNotificationConfigurationApi

#### Implementation of

[`PushNotificationConfigurationApiInterface`](../interfaces/PushNotificationConfigurationApiInterface.md).[`updatePushSettings`](../interfaces/PushNotificationConfigurationApiInterface.md#updatepushsettings)
