[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthIntegrationsApiUpdateOAuthIntegrationByIdRequest

# Interface: OAuthIntegrationsApiUpdateOAuthIntegrationByIdRequest

Request parameters for updateOAuthIntegrationById operation in OAuthIntegrationsApi.

## Export

OAuthIntegrationsApiUpdateOAuthIntegrationByIdRequest

## Properties

### integrationId

> `readonly` **integrationId**: `string`

The OAuth integration identifier. It is the integration\&#39;s OAuth application name, so the same value is the {oAuthApp} path segment of the runtime OAuth/OIDC endpoints (e.g. /api/oidc/{integrationId}/token).

#### Memberof

OAuthIntegrationsApiUpdateOAuthIntegrationById

***

### oAuthIntegrationBaseModel

> `readonly` **oAuthIntegrationBaseModel**: [`OAuthIntegrationBaseModel`](../loginradius-sdk/namespaces/Models/interfaces/OAuthIntegrationBaseModel.md)

#### Memberof

OAuthIntegrationsApiUpdateOAuthIntegrationById
