[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PublicKeyCredentialCreationOptionsExcludeCredentialsInner

# Interface: PublicKeyCredentialCreationOptionsExcludeCredentialsInner

## Export

PublicKeyCredentialCreationOptionsExcludeCredentialsInner

## Properties

### id

> **id**: `string`

The credential ID of the credential to exclude.

#### Memberof

PublicKeyCredentialCreationOptionsExcludeCredentialsInner

***

### transports?

> `optional` **transports?**: [`PublicKeyCredentialCreationOptionsExcludeCredentialsInnerTransportsEnum`](../enumerations/PublicKeyCredentialCreationOptionsExcludeCredentialsInnerTransportsEnum.md)[]

Optional. Hints as to how the client might communicate with the authenticator of the credential to exclude.

#### Memberof

PublicKeyCredentialCreationOptionsExcludeCredentialsInner

***

### type

> **type**: [`public_key`](../enumerations/PublicKeyCredentialCreationOptionsExcludeCredentialsInnerTypeEnum.md#public_key)

The type of credential to exclude. For WebAuthn this is always \"public-key\".

#### Memberof

PublicKeyCredentialCreationOptionsExcludeCredentialsInner
