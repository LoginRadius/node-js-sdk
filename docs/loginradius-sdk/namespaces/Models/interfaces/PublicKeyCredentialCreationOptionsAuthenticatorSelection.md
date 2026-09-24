[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PublicKeyCredentialCreationOptionsAuthenticatorSelection

# Interface: PublicKeyCredentialCreationOptionsAuthenticatorSelection

Optional. Specifies requirements for the authenticator to be used for credential creation.

## Export

PublicKeyCredentialCreationOptionsAuthenticatorSelection

## Properties

### authenticatorAttachment?

> `optional` **authenticatorAttachment?**: [`PublicKeyCredentialCreationOptionsAuthenticatorSelectionAuthenticatorAttachmentEnum`](../enumerations/PublicKeyCredentialCreationOptionsAuthenticatorSelectionAuthenticatorAttachmentEnum.md)

Optional. Specifies whether the authenticator should be a platform authenticator (like TouchID, Windows Hello) or a cross-platform authenticator (like a security key).

#### Memberof

PublicKeyCredentialCreationOptionsAuthenticatorSelection

***

### requireResidentKey?

> `optional` **requireResidentKey?**: `boolean`

Optional. Indicates whether the authenticator must be capable of storing the credential on the device (resident key / discoverable credential).

#### Memberof

PublicKeyCredentialCreationOptionsAuthenticatorSelection

***

### residentKey?

> `optional` **residentKey?**: [`PublicKeyCredentialCreationOptionsAuthenticatorSelectionResidentKeyEnum`](../enumerations/PublicKeyCredentialCreationOptionsAuthenticatorSelectionResidentKeyEnum.md)

Optional. Specifies the Relying Party\'s requirements for client-side discoverable credentials (resident keys).

#### Memberof

PublicKeyCredentialCreationOptionsAuthenticatorSelection

***

### userVerification?

> `optional` **userVerification?**: [`PublicKeyCredentialCreationOptionsAuthenticatorSelectionUserVerificationEnum`](../enumerations/PublicKeyCredentialCreationOptionsAuthenticatorSelectionUserVerificationEnum.md)

Optional. Specifies whether User verification is required, preferred, or discouraged for credential creation.

#### Memberof

PublicKeyCredentialCreationOptionsAuthenticatorSelection
