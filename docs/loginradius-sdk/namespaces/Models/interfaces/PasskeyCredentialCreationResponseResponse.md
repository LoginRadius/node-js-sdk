[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PasskeyCredentialCreationResponseResponse

# Interface: PasskeyCredentialCreationResponseResponse

The authenticator\'s response to the client\'s request to create a credential. Contains attestation information that can be used to verify the credential\'s origin.

## Export

PasskeyCredentialCreationResponseResponse

## Properties

### attestationObject

> **attestationObject**: `string`

Base64URL-encoded attestation object. Contains the attestation statement and  authenticator data used to verify the credential\'s provenance.

#### Memberof

PasskeyCredentialCreationResponseResponse

***

### clientDataJSON

> **clientDataJSON**: `string`

Base64URL-encoded JSON serialized client data. Contains information about the credential creation like the challenge, origin, and type of credential.

#### Memberof

PasskeyCredentialCreationResponseResponse

***

### transports?

> `optional` **transports?**: [`PasskeyCredentialCreationResponseResponseTransportsEnum`](../enumerations/PasskeyCredentialCreationResponseResponseTransportsEnum.md)[]

List of transports supported by the authenticator for this credential. May be included by the client or extracted from attestation metadata.

#### Memberof

PasskeyCredentialCreationResponseResponse
