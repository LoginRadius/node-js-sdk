[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / stripSigningParam

# Function: stripSigningParam()

> **stripSigningParam**(`uri`): `string`

Removes the secret query parameter from a URL, returning the result.
Returns the input unchanged when the parameter is absent.

Accepts absolute or relative URLs; a relative one is resolved against a
throwaway base so `URL` can parse it, then rendered back relative.

## Parameters

### uri

`string`

## Returns

`string`
