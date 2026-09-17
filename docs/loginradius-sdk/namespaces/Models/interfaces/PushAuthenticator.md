[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PushAuthenticator

# Interface: PushAuthenticator

## Export

PushAuthenticator

## Properties

### AndroidSettings?

> `optional` **AndroidSettings?**: [`AndroidPushConfig`](AndroidPushConfig.md)

#### Memberof

PushAuthenticator

***

### AWSsettings?

> `optional` **AWSsettings?**: [`AWSPushConfig`](AWSPushConfig.md)

#### Memberof

PushAuthenticator

***

### CustomAppName?

> `optional` **CustomAppName?**: `string`

Custom application name if applicable.

#### Memberof

PushAuthenticator

***

### IOSsettings?

> `optional` **IOSsettings?**: [`IOSPushConfig`](IOSPushConfig.md)

#### Memberof

PushAuthenticator

***

### IsEnabled?

> `optional` **IsEnabled?**: `boolean`

Indicates if push authentication is enabled.

#### Memberof

PushAuthenticator

***

### Message?

> `optional` **Message?**: `string`

Custom message for Push Notifications.

#### Memberof

PushAuthenticator

***

### NotificationService?

> `optional` **NotificationService?**: [`PushAuthenticatorNotificationServiceEnum`](../enumerations/PushAuthenticatorNotificationServiceEnum.md)

The type of notification service (e.g., AWS, Native).

#### Memberof

PushAuthenticator

***

### QRCodeWidth?

> `optional` **QRCodeWidth?**: `number`

The width of the QR code for push authentication.

#### Memberof

PushAuthenticator
