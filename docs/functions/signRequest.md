[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / signRequest

# Function: signRequest()

> **signRequest**(`apiSecret`, `uri`, `body`, `now?`): `object`

Computes the digest and expiry stamp for one request.

The signed string is:

  expiry + ':' + encodeURIComponent(decodeURIComponent(uri)).toLowerCase()
         + optionally ':' + body

`uri` must already have the strip parameter removed — see
[stripSigningParam](stripSigningParam.md).

SERVER-SIDE ONLY: signing requires the tenant API secret.

## Parameters

### apiSecret

`string`

### uri

`string`

### body

`string` \| `undefined`

### now?

`Date` = `...`

## Returns

`object`

### digest

> **digest**: `string`

### expires

> **expires**: `string`
