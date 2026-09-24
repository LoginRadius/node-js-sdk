[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PushNotificationConfigurationApiFp

# Function: PushNotificationConfigurationApiFp()

> **PushNotificationConfigurationApiFp**(`configuration?`): `object`

PushNotificationConfigurationApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createPushSettings()

> **createPushSettings**(`pushAuthenticator`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>\>

Creates new Push Notification settings for second factor authentication.

#### Parameters

##### pushAuthenticator

[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>\>

#### Throws

### getPushSettings()

> **getPushSettings**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>\>

Retrieves the current Push Notification settings for second factor authentication.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>\>

#### Throws

### updatePushSettings()

> **updatePushSettings**(`pushAuthenticator`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>\>

Updates existing Push Notification settings for second factor authentication.

#### Parameters

##### pushAuthenticator

[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)\>\>

#### Throws

## Export
