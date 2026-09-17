[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OAuthAuthorizationServerMetadata

# Interface: OAuthAuthorizationServerMetadata

OAuth 2.0 Authorization Server Metadata (RFC 8414). Standard discovery document for OAuth 2.0 authorization servers; does not include OpenID Connect-specific fields (e.g. userinfo_endpoint, claims_supported).

## Export

OAuthAuthorizationServerMetadata

## Properties

### authorization\_endpoint?

> `optional` **authorization\_endpoint?**: `string`

URL of the authorization endpoint.

#### Memberof

OAuthAuthorizationServerMetadata

***

### ClientIdMetadataDocumentSupported?

> `optional` **ClientIdMetadataDocumentSupported?**: `boolean`

Indicates if the client metadata document is supported.

#### Memberof

OAuthAuthorizationServerMetadata

***

### code\_challenge\_methods\_supported?

> `optional` **code\_challenge\_methods\_supported?**: `string`[]

PKCE code challenge methods supported.

#### Memberof

OAuthAuthorizationServerMetadata

***

### device\_authorization\_endpoint?

> `optional` **device\_authorization\_endpoint?**: `string`

URL of the device authorization endpoint.

#### Memberof

OAuthAuthorizationServerMetadata

***

### grant\_types\_supported

> **grant\_types\_supported**: `string`[]

List of OAuth 2.0 grant type values supported.

#### Memberof

OAuthAuthorizationServerMetadata

***

### issuer

> **issuer**: `string`

The authorization server\'s issuer identifier (MUST match the requested issuer).

#### Memberof

OAuthAuthorizationServerMetadata

***

### jwks\_uri

> **jwks\_uri**: `string`

URL of the JSON Web Key Set document.

#### Memberof

OAuthAuthorizationServerMetadata

***

### registration\_endpoint?

> `optional` **registration\_endpoint?**: `string`

URL of the dynamic client registration endpoint (optional).

#### Memberof

OAuthAuthorizationServerMetadata

***

### response\_modes\_supported?

> `optional` **response\_modes\_supported?**: `string`[]

#### Memberof

OAuthAuthorizationServerMetadata

***

### response\_types\_supported

> **response\_types\_supported**: `string`[]

List of OAuth 2.0 response_type values supported.

#### Memberof

OAuthAuthorizationServerMetadata

***

### revocation\_endpoint?

> `optional` **revocation\_endpoint?**: `string`

URL of the token revocation endpoint.

#### Memberof

OAuthAuthorizationServerMetadata

***

### revocation\_endpoint\_auth\_methods\_supported?

> `optional` **revocation\_endpoint\_auth\_methods\_supported?**: `string`[]

#### Memberof

OAuthAuthorizationServerMetadata

***

### scopes\_supported?

> `optional` **scopes\_supported?**: `string`[]

List of OAuth 2.0 scope values supported.

#### Memberof

OAuthAuthorizationServerMetadata

***

### subject\_types\_supported?

> `optional` **subject\_types\_supported?**: `string`[]

List of subject identifier types supported.

#### Memberof

OAuthAuthorizationServerMetadata

***

### token\_endpoint

> **token\_endpoint**: `string`

URL of the token endpoint.

#### Memberof

OAuthAuthorizationServerMetadata

***

### token\_endpoint\_auth\_methods\_supported?

> `optional` **token\_endpoint\_auth\_methods\_supported?**: `string`[]

List of client authentication methods supported at the token endpoint.

#### Memberof

OAuthAuthorizationServerMetadata

***

### token\_endpoint\_auth\_signing\_alg\_values\_supported?

> `optional` **token\_endpoint\_auth\_signing\_alg\_values\_supported?**: `string`[]

#### Memberof

OAuthAuthorizationServerMetadata
