[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PushNotificationConfigurationApiFactory

# Function: PushNotificationConfigurationApiFactory()

> **PushNotificationConfigurationApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

PushNotificationConfigurationApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createPushSettings()

> **createPushSettings**(`requestParameters`, `options?`): `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

Creates new Push Notification settings for second factor authentication.

#### Parameters

##### requestParameters

[`PushNotificationConfigurationApiCreatePushSettingsRequest`](../interfaces/PushNotificationConfigurationApiCreatePushSettingsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

#### Throws

### getPushSettings()

> **getPushSettings**(`options?`): `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

Retrieves the current Push Notification settings for second factor authentication.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

#### Throws

### updatePushSettings()

> **updatePushSettings**(`requestParameters`, `options?`): `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

Updates existing Push Notification settings for second factor authentication.

#### Parameters

##### requestParameters

[`PushNotificationConfigurationApiUpdatePushSettingsRequest`](../interfaces/PushNotificationConfigurationApiUpdatePushSettingsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

#### Throws

## Export
