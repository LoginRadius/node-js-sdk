[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / generateSOTTWithWindow

# Function: generateSOTTWithWindow()

> **generateSOTTWithWindow**(`apiKey`, `apiSecret`, `start`, `end`): `string`

Mints a SOTT bound to an explicit `[start, end]` validity window. Use when
you have reconciled against a server-time fetch, or need to reproduce a
specific timestamp.

## Parameters

### apiKey

`string`

### apiSecret

`string`

### start

`Date`

### end

`Date`

## Returns

`string`
