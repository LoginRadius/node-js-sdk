[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PasskeyCredentialAssertionResponseResponse

# Interface: PasskeyCredentialAssertionResponseResponse

The authenticator\'s response to the client\'s request to generate an assertion. Contains information about the authentication like the signature and client data.

## Export

PasskeyCredentialAssertionResponseResponse

## Properties

### authenticatorData

> **authenticatorData**: `string`

Base64URL-encoded authenticator data. Contains information about the authentication such as the RP ID hash, User presence/verification flags, counter, and extensions.

#### Memberof

PasskeyCredentialAssertionResponseResponse

***

### clientDataJSON

> **clientDataJSON**: `string`

Base64URL-encoded JSON serialized client data. Contains information about the authentication like the challenge, origin, and type of credential.

#### Memberof

PasskeyCredentialAssertionResponseResponse

***

### signature

> **signature**: `string`

Base64URL-encoded signature. This is the actual assertion signature produced by the authenticator using its private key.

#### Memberof

PasskeyCredentialAssertionResponseResponse

***

### userHandle?

> `optional` **userHandle?**: `string`

Optional. Base64URL-encoded User handle (user.id). Allows the Relying Party to link the assertion to a specific User account. It might be empty if the authenticator doesn\'t store it.

#### Memberof

PasskeyCredentialAssertionResponseResponse
