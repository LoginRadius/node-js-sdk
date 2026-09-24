[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CrossDeviceSSOApiFp

# Function: CrossDeviceSSOApiFp()

> **CrossDeviceSSOApiFp**(`configuration?`): `object`

CrossDeviceSSOApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### generateQRCode()

> **generateQRCode**(`expiry?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`QRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeResponse.md)\>\>

Retrieves a QR code for Cross Device SSO.

#### Parameters

##### expiry?

`string`

Code Expiry time (in second) in second, Min:0, Max:300

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`QRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeResponse.md)\>\>

#### Throws

### getAccessTokenByPing()

> **getAccessTokenByPing**(`code?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenByPingQRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenByPingQRCodeResponse.md)\>\>

Retrieves an Access Token by ping after a User scans a QR code during mobile login.

#### Parameters

##### code?

`string`

QR Code By Generate QR Code API

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenByPingQRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenByPingQRCodeResponse.md)\>\>

#### Throws

### mapQRCodeToAccessToken()

> **mapQRCodeToAccessToken**(`qRCodeMapToToken`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`QRCodeMapToTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeMapToTokenResponse.md)\>\>

Maps a scanned QR code to an Access Token during mobile login.

#### Parameters

##### qRCodeMapToToken

[`QRCodeMapToToken`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeMapToToken.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`QRCodeMapToTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeMapToTokenResponse.md)\>\>

#### Throws

## Export
