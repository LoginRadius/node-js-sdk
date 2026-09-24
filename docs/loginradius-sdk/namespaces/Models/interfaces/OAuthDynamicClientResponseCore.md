[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OAuthDynamicClientResponseCore

# Interface: OAuthDynamicClientResponseCore

## Export

OAuthDynamicClientResponseCore

## Properties

### client\_id?

> `optional` **client\_id?**: `string`

Unique client identifier issued by the authorization server.

#### Memberof

OAuthDynamicClientResponseCore

***

### client\_id\_issued\_at?

> `optional` **client\_id\_issued\_at?**: `number`

Unix timestamp when the client_id was issued.

#### Memberof

OAuthDynamicClientResponseCore

***

### client\_secret?

> `optional` **client\_secret?**: `string`

Client secret. Only returned for confidential clients.

#### Memberof

OAuthDynamicClientResponseCore

***

### client\_secret\_expires\_at?

> `optional` **client\_secret\_expires\_at?**: `number`

Unix timestamp when the client_secret expires. 0 means it does not expire.

#### Memberof

OAuthDynamicClientResponseCore

***

### registration\_access\_token?

> `optional` **registration\_access\_token?**: `string`

Bearer token to access the client configuration endpoint. Only returned on initial registration.

#### Memberof

OAuthDynamicClientResponseCore

***

### registration\_client\_uri?

> `optional` **registration\_client\_uri?**: `string`

URL of the client configuration endpoint for this client.

#### Memberof

OAuthDynamicClientResponseCore
