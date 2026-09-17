[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PushNotificationConfigurationApiAxiosParamCreator

# Function: PushNotificationConfigurationApiAxiosParamCreator()

> **PushNotificationConfigurationApiAxiosParamCreator**(`configuration?`): `object`

PushNotificationConfigurationApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createPushSettings

> **createPushSettings**: (`pushAuthenticator`, `options?`) => `Promise`\<`RequestArgs`\>

Creates new Push Notification settings for second factor authentication.

#### Parameters

##### pushAuthenticator

[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getPushSettings

> **getPushSettings**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the current Push Notification settings for second factor authentication.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updatePushSettings

> **updatePushSettings**: (`pushAuthenticator`, `options?`) => `Promise`\<`RequestArgs`\>

Updates existing Push Notification settings for second factor authentication.

#### Parameters

##### pushAuthenticator

[`PushAuthenticator`](../loginradius-sdk/namespaces/Models/interfaces/PushAuthenticator.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
