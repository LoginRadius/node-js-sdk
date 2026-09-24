[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / CustomOAuth2Model

# Interface: CustomOAuth2Model

## Export

CustomOAuth2Model

## Properties

### AccessTokenEndpoint

> **AccessTokenEndpoint**: `string`

The Access Token endpoint for the OAuth2 provider.

#### Memberof

CustomOAuth2Model

***

### AccessTokenParameterNameForApiAccess?

> `optional` **AccessTokenParameterNameForApiAccess?**: `string`

The Access Token parameter name for API access.

#### Memberof

CustomOAuth2Model

***

### ApplicationID?

> `optional` **ApplicationID?**: `string`

The application ID for the OAuth2 provider.

#### Memberof

CustomOAuth2Model

***

### ApplicationKey

> **ApplicationKey**: `string`

The application key for the OAuth2 provider.

#### Memberof

CustomOAuth2Model

***

### ApplicationSecret

> **ApplicationSecret**: `string`

The application secret for the OAuth2 provider.

#### Memberof

CustomOAuth2Model

***

### DataMap

> **DataMap**: `object`

The data map for the OAuth2 provider.

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

CustomOAuth2Model

***

### Domain?

> `optional` **Domain?**: `string`

The domain for the OAuth2 provider.

#### Memberof

CustomOAuth2Model

***

### EnableAutoLookUp?

> `optional` **EnableAutoLookUp?**: `boolean` \| `null`

Indicates if auto lookup is enabled.

#### Memberof

CustomOAuth2Model

***

### ExtraParameterInRedirectToProvider?

> `optional` **ExtraParameterInRedirectToProvider?**: `string`

Extra parameters in redirect to provider.

#### Memberof

CustomOAuth2Model

***

### Headers?

> `optional` **Headers?**: `object`

The headers for the OAuth2 provider.

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

CustomOAuth2Model

***

### JWKSEndpoint?

> `optional` **JWKSEndpoint?**: `string`

The JWKS endpoint for verifying the ID token.

#### Memberof

CustomOAuth2Model

***

### ListInInterface?

> `optional` **ListInInterface?**: `boolean`

Indicates if the provider should be listed in the interface.

#### Memberof

CustomOAuth2Model

***

### ProviderName

> **ProviderName**: `string`

The name of the OAuth2 provider.

#### Memberof

CustomOAuth2Model

***

### QueryParam?

> `optional` **QueryParam?**: `object`

The query parameters for the OAuth2 provider.

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

CustomOAuth2Model

***

### RequestTokenHttpMethod

> **RequestTokenHttpMethod**: [`CustomOAuth2ModelRequestTokenHttpMethodEnum`](../enumerations/CustomOAuth2ModelRequestTokenHttpMethodEnum.md)

The HTTP method for requesting tokens.

#### Memberof

CustomOAuth2Model

***

### ResponseType

> **ResponseType**: `string`

The response type for the OAuth2 provider.

#### Memberof

CustomOAuth2Model

***

### Scope

> **Scope**: `string`

The scope for the OAuth2 provider.

#### Memberof

CustomOAuth2Model

***

### TrasnsportType?

> `optional` **TrasnsportType?**: `string`

The transport type.

#### Memberof

CustomOAuth2Model

***

### UserInfoExtractByIdToken?

> `optional` **UserInfoExtractByIdToken?**: `boolean` \| `null`

Indicates if user info should be extracted by ID token.

#### Memberof

CustomOAuth2Model

***

### UserLoginEndpoint

> **UserLoginEndpoint**: `string`

The User login endpoint for the OAuth2 provider.

#### Memberof

CustomOAuth2Model

***

### UserprofileEndpoint?

> `optional` **UserprofileEndpoint?**: `string`

The User profile endpoint for the OAuth2 provider.

#### Memberof

CustomOAuth2Model
