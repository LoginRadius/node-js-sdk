[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OAuthIntegrationCredentialsResponse

# Interface: OAuthIntegrationCredentialsResponse

Client credentials returned after rotating an OAuth integration\'s secret. The plaintext ClientSecret is returned only once, in this response; only the hash is persisted server-side.

## Export

OAuthIntegrationCredentialsResponse

## Properties

### ClientId?

> `optional` **ClientId?**: `string`

The integration\'s immutable client identifier (unchanged by rotation).

#### Memberof

OAuthIntegrationCredentialsResponse

***

### ClientSecret?

> `optional` **ClientSecret?**: `string`

The newly generated plaintext client secret. Shown only once.

#### Memberof

OAuthIntegrationCredentialsResponse
