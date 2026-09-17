[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / SamlConnectionResponseCore

# Interface: SamlConnectionResponseCore

## Export

SamlConnectionResponseCore

## Properties

### ACSEndpoint?

> `optional` **ACSEndpoint?**: `string`

The Assertion Consumer Service (ACS) endpoint URL for SAML responses.

#### Memberof

SamlConnectionResponseCore

***

### ConnectionType?

> `optional` **ConnectionType?**: [`SamlConnectionResponseCoreConnectionTypeEnum`](../enumerations/SamlConnectionResponseCoreConnectionTypeEnum.md)

The type of SAML connection.

#### Memberof

SamlConnectionResponseCore

***

### EntityId?

> `optional` **EntityId?**: `string`

The unique identifier for the SAML service provider.

#### Memberof

SamlConnectionResponseCore

***

### IDPLoginBinding?

> `optional` **IDPLoginBinding?**: `string`

SAML binding for the IdP login URL, derived from the IdP metadata.

#### Memberof

SamlConnectionResponseCore

***

### IDPLogoutBinding?

> `optional` **IDPLogoutBinding?**: `string`

SAML binding for the IdP logout URL, derived from the IdP metadata.

#### Memberof

SamlConnectionResponseCore

***

### MetadataUrl?

> `optional` **MetadataUrl?**: `string`

The URL to the SAML metadata XML file.

#### Memberof

SamlConnectionResponseCore

***

### SPCertificate?

> `optional` **SPCertificate?**: [`SamlConnectionResponseCoreSPCertificate`](SamlConnectionResponseCoreSPCertificate.md) \| `null`

#### Memberof

SamlConnectionResponseCore
