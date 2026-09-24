[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CrossDeviceSSOApiAxiosParamCreator

# Function: CrossDeviceSSOApiAxiosParamCreator()

> **CrossDeviceSSOApiAxiosParamCreator**(`configuration?`): `object`

CrossDeviceSSOApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### generateQRCode

> **generateQRCode**: (`expiry?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves a QR code for Cross Device SSO.

#### Parameters

##### expiry?

`string`

Code Expiry time (in second) in second, Min:0, Max:300

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAccessTokenByPing

> **getAccessTokenByPing**: (`code?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves an Access Token by ping after a User scans a QR code during mobile login.

#### Parameters

##### code?

`string`

QR Code By Generate QR Code API

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### mapQRCodeToAccessToken

> **mapQRCodeToAccessToken**: (`qRCodeMapToToken`, `options?`) => `Promise`\<`RequestArgs`\>

Maps a scanned QR code to an Access Token during mobile login.

#### Parameters

##### qRCodeMapToToken

[`QRCodeMapToToken`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeMapToToken.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export
