[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PasskeyLoginFinishCore

# Interface: PasskeyLoginFinishCore

Response payload after a User attempts to authenticate using a Passkey

## Export

PasskeyLoginFinishCore

## Properties

### email?

> `optional` **email?**: `string`

Email address of the User attempting authentication

#### Memberof

PasskeyLoginFinishCore

***

### PasskeyCredential?

> `optional` **PasskeyCredential?**: [`PasskeyCredentialAssertionResponse`](PasskeyCredentialAssertionResponse.md)

#### Memberof

PasskeyLoginFinishCore

***

### SecurityAnswer?

> `optional` **SecurityAnswer?**: \{\[`key`: `string`\]: `string`; \} \| `null`

The security answers

#### Memberof

PasskeyLoginFinishCore
