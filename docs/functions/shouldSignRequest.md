[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / shouldSignRequest

# Function: shouldSignRequest()

> **shouldSignRequest**(`path`): `boolean`

Whether a request path is in scope for signing.

The rule mirrors the reference implementation: management endpoints are
signed, except the access-token exchange. Signing anything else produces a
digest the API does not expect.

## Parameters

### path

`string`

## Returns

`boolean`
