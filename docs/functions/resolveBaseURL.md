[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / resolveBaseURL

# Function: resolveBaseURL()

> **resolveBaseURL**(`opts`): `string`

Resolves the API base URL from options. Precedence, highest first:

  `baseURL` → `<baseURL>`
  `customDomain` → `https://<customDomain>`
  `domain` → `https://<domain>.hub.loginradius.com`
  fallback → `https://api.loginradius.com`

## Parameters

### opts

[`ClientOptions`](../interfaces/ClientOptions.md)

## Returns

`string`
