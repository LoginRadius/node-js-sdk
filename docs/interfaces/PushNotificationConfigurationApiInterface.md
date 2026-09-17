[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PushNotificationConfigurationApiInterface

# Interface: PushNotificationConfigurationApiInterface

PushNotificationConfigurationApi - interface

## Export

PushNotificationConfigurationApi

## Methods

### createPushSettings()

> **createPushSettings**(`requestParameters`, `options?`): `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

Creates new Push Notification settings for second factor authentication.

#### Parameters

##### requestParameters

[`PushNotificationConfigurationApiCreatePushSettingsRequest`](PushNotificationConfigurationApiCreatePushSettingsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

#### Throws

#### Memberof

PushNotificationConfigurationApiInterface

***

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

#### Memberof

PushNotificationConfigurationApiInterface

***

### updatePushSettings()

> **updatePushSettings**(`requestParameters`, `options?`): `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

Updates existing Push Notification settings for second factor authentication.

#### Parameters

##### requestParameters

[`PushNotificationConfigurationApiUpdatePushSettingsRequest`](PushNotificationConfigurationApiUpdatePushSettingsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>

#### Throws

#### Memberof

PushNotificationConfigurationApiInterface
