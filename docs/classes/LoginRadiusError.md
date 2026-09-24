[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginRadiusError

# Class: LoginRadiusError

Typed error thrown by every SDK call on a non-2xx response or transport
failure. Branch on the helper predicates for the common cases, or inspect
[code](#code), [description](#description), and [rawBody](#rawbody) for diagnostics.

## Extends

- `Error`

## Constructors

### Constructor

> **new LoginRadiusError**(`init`): `LoginRadiusError`

#### Parameters

##### init

###### cause?

`unknown`

###### code?

`string`

###### description?

`string`

###### message

`string`

###### rawBody?

`string`

###### statusCode?

`number`

#### Returns

`LoginRadiusError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `readonly` `optional` **cause?**: `unknown`

Underlying transport or decode error, if any.

***

### code

> `readonly` **code**: `string`

LoginRadius error code from the response envelope. Empty for transport errors and non-standard error bodies.

***

### description

> `readonly` **description**: `string`

Optional long-form description from the response envelope.

***

### rawBody

> `readonly` **rawBody**: `string`

Response body verbatim. Useful when the envelope is unfamiliar.

***

### statusCode

> `readonly` **statusCode**: `number`

HTTP status code from the LoginRadius API. `0` when the request never reached the server (DNS, TLS, timeout).

## Methods

### isAuth()

> **isAuth**(): `boolean`

Authentication failed — missing or invalid credentials. Distinct from
isForbidden: a 403 means the request authenticated but the principal
isn't allowed to perform the operation.

#### Returns

`boolean`

***

### isForbidden()

> **isForbidden**(): `boolean`

Authenticated but not allowed. In LoginRadius this commonly indicates
IP/domain access restrictions or a feature that isn't enabled on the
tenant's plan, rather than a credential problem.

#### Returns

`boolean`

***

### isRateLimit()

> **isRateLimit**(): `boolean`

Rate limited by the API.

#### Returns

`boolean`

***

### isServer()

> **isServer**(): `boolean`

A 5xx from the API.

#### Returns

`boolean`
