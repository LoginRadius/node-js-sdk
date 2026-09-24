[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OAuthIntegrationBaseModelConnections

# Interface: OAuthIntegrationBaseModelConnections

Scopes which login methods this integration offers. A provider may only be listed here if it is already enabled on the app, otherwise the request is rejected as an invalid integration configuration. Omit to leave the stored value unchanged; send an empty array to clear a provider list. Setting Enabled to true without also sending a PasswordLessLogin block disables passwordless email and SMS login for this integration.

## Export

OAuthIntegrationBaseModelConnections

## Properties

### CustomIdp?

> `optional` **CustomIdp?**: [`OAuthIntegrationBaseModelConnectionsCustomIdpInner`](OAuthIntegrationBaseModelConnectionsCustomIdpInner.md)[]

#### Memberof

OAuthIntegrationBaseModelConnections

***

### Enabled?

> `optional` **Enabled?**: `boolean`

#### Memberof

OAuthIntegrationBaseModelConnections

***

### Enterprise?

> `optional` **Enterprise?**: [`OAuthIntegrationBaseModelConnectionsEnterpriseInner`](OAuthIntegrationBaseModelConnectionsEnterpriseInner.md)[]

#### Memberof

OAuthIntegrationBaseModelConnections

***

### PasswordLessLogin?

> `optional` **PasswordLessLogin?**: [`OAuthIntegrationBaseModelConnectionsPasswordLessLogin`](OAuthIntegrationBaseModelConnectionsPasswordLessLogin.md)

#### Memberof

OAuthIntegrationBaseModelConnections

***

### SocialLogins?

> `optional` **SocialLogins?**: [`OAuthIntegrationBaseModelConnectionsSocialLoginsInner`](OAuthIntegrationBaseModelConnectionsSocialLoginsInner.md)[]

#### Memberof

OAuthIntegrationBaseModelConnections

***

### TraditionalLogin?

> `optional` **TraditionalLogin?**: `boolean`

#### Memberof

OAuthIntegrationBaseModelConnections
