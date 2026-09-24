[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OAuthIntegrationResponseCore

# Interface: OAuthIntegrationResponseCore

## Export

OAuthIntegrationResponseCore

## Properties

### ClientId?

> `optional` **ClientId?**: `string`

System-generated, immutable client identifier.

#### Memberof

OAuthIntegrationResponseCore

***

### ClientSecret?

> `optional` **ClientSecret?**: `string`

Plaintext client secret. Returned only once, in the create response (and the rotate-credentials response). It is never returned on read operations — only the hash is stored server-side.

#### Memberof

OAuthIntegrationResponseCore

***

### DisplayName?

> `optional` **DisplayName?**: `string`

Customer-provided display label. Identification/display only.

#### Memberof

OAuthIntegrationResponseCore

***

### Id?

> `optional` **Id?**: `string`

The integration identifier. It is also the {oAuthApp} path segment of the runtime OAuth/OIDC endpoints, e.g. /api/oidc/{Id}/token.

#### Memberof

OAuthIntegrationResponseCore
