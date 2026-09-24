[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PasskeyCredentialCreationResponse

# Interface: PasskeyCredentialCreationResponse

CredentialCreationResponse represents the response from a client when creating new credentials. It is the result of the navigator.credentials.create() call on the client side and is sent to the server for verification during the registration process.

## Export

PasskeyCredentialCreationResponse

## Properties

### authenticatorAttachment?

> `optional` **authenticatorAttachment?**: [`PasskeyCredentialCreationResponseAuthenticatorAttachmentEnum`](../enumerations/PasskeyCredentialCreationResponseAuthenticatorAttachmentEnum.md)

Indicates the authenticator attachment modality used during credential creation. This helps identify the type of authenticator used, either a platform authenticator integrated into the  device or a roaming authenticator that can be connected to different devices.

#### Memberof

PasskeyCredentialCreationResponse

***

### clientExtensionResults?

> `optional` **clientExtensionResults?**: [`PasskeyCredentialCreationResponseClientExtensionResults`](PasskeyCredentialCreationResponseClientExtensionResults.md)

#### Memberof

PasskeyCredentialCreationResponse

***

### id

> **id**: `string`

Base64URL-encoded string representing the ID of the newly created credential. This is typically the same as rawId, but encoded as a string.

#### Memberof

PasskeyCredentialCreationResponse

***

### rawId

> **rawId**: `string`

Base64URL-encoded ArrayBuffer containing the credential ID. This ID is used by the Relying Party to identify the credential for future authentications.

#### Memberof

PasskeyCredentialCreationResponse

***

### response

> **response**: [`PasskeyCredentialCreationResponseResponse`](PasskeyCredentialCreationResponseResponse.md)

#### Memberof

PasskeyCredentialCreationResponse

***

### type

> **type**: [`public_key`](../enumerations/PasskeyCredentialCreationResponseTypeEnum.md#public_key)

String describing the credential type. For WebAuthn, this is always \"public-key\".

#### Memberof

PasskeyCredentialCreationResponse
