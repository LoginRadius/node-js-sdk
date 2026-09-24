[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JwtValidationParams

# Interface: JwtValidationParams

Describes the token to verify and what to verify it against.

## Properties

### algorithm

> **algorithm**: [`JwtAlgorithm`](../type-aliases/JwtAlgorithm.md)

The algorithm your LoginRadius JWT app is configured for. REQUIRED.

Pinned deliberately. A validator that takes the algorithm from the token's
own header can be attacked: against an RS256 app, an attacker signs a
token with HS256 using the PUBLIC key as the HMAC secret, and a trusting
validator accepts it. `alg: none` is the same class of attack. A token
whose header disagrees with this field is rejected before any signature
work happens.

***

### audience?

> `optional` **audience?**: `string`

When set, must appear in the token's `aud`.

***

### issuer?

> `optional` **issuer?**: `string`

When set, must equal the token's `iss`.

***

### key

> **key**: `string` \| `Buffer`\<`ArrayBufferLike`\>

Key material. For `HS*` the shared secret. For `RS*`/`ES*` the
PEM-encoded PUBLIC key — never a private key.
