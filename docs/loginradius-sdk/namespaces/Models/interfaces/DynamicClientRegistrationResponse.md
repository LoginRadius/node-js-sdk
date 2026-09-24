[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / DynamicClientRegistrationResponse

# Interface: DynamicClientRegistrationResponse

Response from OIDC Dynamic Client Registration (RFC 7591).

## Export

DynamicClientRegistrationResponse

## Properties

### client\_id?

> `optional` **client\_id?**: `string`

The registered client identifier.

#### Memberof

DynamicClientRegistrationResponse

***

### client\_id\_issued\_at?

> `optional` **client\_id\_issued\_at?**: `number`

Time at which the client ID was issued (Unix timestamp).

#### Memberof

DynamicClientRegistrationResponse

***

### client\_name?

> `optional` **client\_name?**: `string`

#### Memberof

DynamicClientRegistrationResponse

***

### client\_secret?

> `optional` **client\_secret?**: `string`

The client secret (if applicable).

#### Memberof

DynamicClientRegistrationResponse

***

### client\_secret\_expires\_at?

> `optional` **client\_secret\_expires\_at?**: `number`

Time at which the client secret expires (0 means it does not expire).

#### Memberof

DynamicClientRegistrationResponse

***

### grant\_types?

> `optional` **grant\_types?**: `string`[]

#### Memberof

DynamicClientRegistrationResponse

***

### redirect\_uris?

> `optional` **redirect\_uris?**: `string`[]

#### Memberof

DynamicClientRegistrationResponse

***

### response\_types?

> `optional` **response\_types?**: `string`[]

#### Memberof

DynamicClientRegistrationResponse

***

### token\_endpoint\_auth\_method?

> `optional` **token\_endpoint\_auth\_method?**: `string`

#### Memberof

DynamicClientRegistrationResponse
