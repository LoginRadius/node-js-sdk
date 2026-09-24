[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / validateJWT

# Function: validateJWT()

> **validateJWT**(`token`, `params`): [`JwtClaims`](../type-aliases/JwtClaims.md)

Verification is entirely local: no network call, no credentials, no client.
Signature, `exp` and `nbf` are always checked; issuer and audience are
checked when supplied. Clock drift of up to 60s is tolerated.

Throws [JwtValidationError](../classes/JwtValidationError.md) on any failure.

```ts
const claims = validateJWT(token, {
  algorithm: 'HS256',
  key: process.env.LR_JWT_SECRET!,
  issuer: 'LoginRadius',
});
```

## Parameters

### token

`string`

### params

[`JwtValidationParams`](../interfaces/JwtValidationParams.md)

## Returns

[`JwtClaims`](../type-aliases/JwtClaims.md)
