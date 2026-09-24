[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PasskeyCredentialAssertionResponse

# Interface: PasskeyCredentialAssertionResponse

CredentialAssertionResponse represents the response from a client when asserting credentials. It is the result of the navigator.credentials.get() call on the client side and is sent to the server for verification during the authentication process.

## Export

PasskeyCredentialAssertionResponse

## Properties

### authenticatorAttachment?

> `optional` **authenticatorAttachment?**: [`PasskeyCredentialAssertionResponseAuthenticatorAttachmentEnum`](../enumerations/PasskeyCredentialAssertionResponseAuthenticatorAttachmentEnum.md)

Indicates the authenticator attachment modality used during assertion. This helps identify  the type of authenticator used, either a platform authenticator integrated into the device  or a roaming authenticator that can be connected to different devices.

#### Memberof

PasskeyCredentialAssertionResponse

***

### id

> **id**: `string`

Base64URL-encoded string representing the ID of the credential used for the authentication assertion. This is typically the same as rawId, but encoded as a string.

#### Memberof

PasskeyCredentialAssertionResponse

***

### rawId

> **rawId**: `string`

Base64URL-encoded ArrayBuffer containing the credential ID. This ID is used by the Relying Party to identify the credential used for the authentication assertion.

#### Memberof

PasskeyCredentialAssertionResponse

***

### response

> **response**: [`PasskeyCredentialAssertionResponseResponse`](PasskeyCredentialAssertionResponseResponse.md)

#### Memberof

PasskeyCredentialAssertionResponse

***

### type

> **type**: [`public_key`](../enumerations/PasskeyCredentialAssertionResponseTypeEnum.md#public_key)

String describing the credential type. For WebAuthn, this is always \"public-key\".

#### Memberof

PasskeyCredentialAssertionResponse
