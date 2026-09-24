[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CrossDeviceSSOApi

# Class: CrossDeviceSSOApi

CrossDeviceSSOApi - object-oriented interface

## Export

CrossDeviceSSOApi

## Extends

- `BaseAPI`

## Implements

- [`CrossDeviceSSOApiInterface`](../interfaces/CrossDeviceSSOApiInterface.md)

## Constructors

### Constructor

> **new CrossDeviceSSOApi**(`configuration?`, `basePath?`, `axios?`): `CrossDeviceSSOApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`CrossDeviceSSOApi`

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

### generateQRCode()

> **generateQRCode**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`QRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeResponse.md), `any`, \{ \}, `any`\>\>

Retrieves a QR code for Cross Device SSO.

#### Parameters

##### requestParameters?

[`CrossDeviceSSOApiGenerateQRCodeRequest`](../interfaces/CrossDeviceSSOApiGenerateQRCodeRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`QRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CrossDeviceSSOApi

#### Implementation of

[`CrossDeviceSSOApiInterface`](../interfaces/CrossDeviceSSOApiInterface.md).[`generateQRCode`](../interfaces/CrossDeviceSSOApiInterface.md#generateqrcode)

***

### getAccessTokenByPing()

> **getAccessTokenByPing**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`AccessTokenByPingQRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenByPingQRCodeResponse.md), `any`, \{ \}, `any`\>\>

Retrieves an Access Token by ping after a User scans a QR code during mobile login.

#### Parameters

##### requestParameters?

[`CrossDeviceSSOApiGetAccessTokenByPingRequest`](../interfaces/CrossDeviceSSOApiGetAccessTokenByPingRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AccessTokenByPingQRCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenByPingQRCodeResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CrossDeviceSSOApi

#### Implementation of

[`CrossDeviceSSOApiInterface`](../interfaces/CrossDeviceSSOApiInterface.md).[`getAccessTokenByPing`](../interfaces/CrossDeviceSSOApiInterface.md#getaccesstokenbyping)

***

### mapQRCodeToAccessToken()

> **mapQRCodeToAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`QRCodeMapToTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeMapToTokenResponse.md), `any`, \{ \}, `any`\>\>

Maps a scanned QR code to an Access Token during mobile login.

#### Parameters

##### requestParameters

[`CrossDeviceSSOApiMapQRCodeToAccessTokenRequest`](../interfaces/CrossDeviceSSOApiMapQRCodeToAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`QRCodeMapToTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/QRCodeMapToTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CrossDeviceSSOApi

#### Implementation of

[`CrossDeviceSSOApiInterface`](../interfaces/CrossDeviceSSOApiInterface.md).[`mapQRCodeToAccessToken`](../interfaces/CrossDeviceSSOApiInterface.md#mapqrcodetoaccesstoken)
