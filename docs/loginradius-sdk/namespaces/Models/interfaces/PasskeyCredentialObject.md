[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PasskeyCredentialObject

# Interface: PasskeyCredentialObject

A single credential object

## Export

PasskeyCredentialObject

## Properties

### Authenticator?

> `optional` **Authenticator?**: `string`

(Optional) Name of the authenticator used to register the Passkey, such as iCloud Keychain or Windows Hello. May be null or omitted if not available.

#### Memberof

PasskeyCredentialObject

***

### CreatedAt?

> `optional` **CreatedAt?**: `string`

Timestamp indicating when the Passkey credential was created.

#### Memberof

PasskeyCredentialObject

***

### Id?

> `optional` **Id?**: `string`

Unique identifier for the Passkey credential, typically a hashed or encoded key ID.

#### Memberof

PasskeyCredentialObject

***

### Identifier?

> `optional` **Identifier?**: `string`

User-provided identifier associated with the Passkey, usually an unique id.

#### Memberof

PasskeyCredentialObject
