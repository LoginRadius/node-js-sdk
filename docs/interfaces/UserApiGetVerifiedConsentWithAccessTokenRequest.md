[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserApiGetVerifiedConsentWithAccessTokenRequest

# Interface: UserApiGetVerifiedConsentWithAccessTokenRequest

Request parameters for getVerifiedConsentWithAccessToken operation in UserApi.

## Export

UserApiGetVerifiedConsentWithAccessTokenRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

UserApiGetVerifiedConsentWithAccessToken

***

### event

> `readonly` **event**: `string`

Event type to filter consent verification (e.g., &#x60;login&#x60;).

#### Memberof

UserApiGetVerifiedConsentWithAccessToken

***

### iscustom

> `readonly` **iscustom**: `boolean`

This field value is used to filter the consent verification by custom events. The iscustom value should be a boolean. If true, it filters for custom events; if false, it filters for standard events.

#### Memberof

UserApiGetVerifiedConsentWithAccessToken
