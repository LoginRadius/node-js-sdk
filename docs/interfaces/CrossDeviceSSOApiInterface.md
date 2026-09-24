[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CrossDeviceSSOApiInterface

# Interface: CrossDeviceSSOApiInterface

CrossDeviceSSOApi - interface

## Export

CrossDeviceSSOApi

## Methods

### generateQRCode()

> **generateQRCode**(`requestParameters?`, `options?`): `AxiosPromise`\<[`QRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeResponse.md)\>

Retrieves a QR code for Cross Device SSO.

#### Parameters

##### requestParameters?

[`CrossDeviceSSOApiGenerateQRCodeRequest`](CrossDeviceSSOApiGenerateQRCodeRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`QRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeResponse.md)\>

#### Throws

#### Memberof

CrossDeviceSSOApiInterface

***

### getAccessTokenByPing()

> **getAccessTokenByPing**(`requestParameters?`, `options?`): `AxiosPromise`\<[`AccessTokenByPingQRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenByPingQRCodeResponse.md)\>

Retrieves an Access Token by ping after a User scans a QR code during mobile login.

#### Parameters

##### requestParameters?

[`CrossDeviceSSOApiGetAccessTokenByPingRequest`](CrossDeviceSSOApiGetAccessTokenByPingRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenByPingQRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenByPingQRCodeResponse.md)\>

#### Throws

#### Memberof

CrossDeviceSSOApiInterface

***

### mapQRCodeToAccessToken()

> **mapQRCodeToAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`QRCodeMapToTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeMapToTokenResponse.md)\>

Maps a scanned QR code to an Access Token during mobile login.

#### Parameters

##### requestParameters

[`CrossDeviceSSOApiMapQRCodeToAccessTokenRequest`](CrossDeviceSSOApiMapQRCodeToAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`QRCodeMapToTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeMapToTokenResponse.md)\>

#### Throws

#### Memberof

CrossDeviceSSOApiInterface
