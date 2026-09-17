[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PasswordEncryptionModel

# Interface: PasswordEncryptionModel

## Export

PasswordEncryptionModel

## Properties

### IsPerPasswordSalt?

> `optional` **IsPerPasswordSalt?**: `boolean`

Whether to generate a unique salt for each password

#### Memberof

PasswordEncryptionModel

***

### NumberOfIteration?

> `optional` **NumberOfIteration?**: `number` \| `null`

Number of hashing iterations to apply.

#### Memberof

PasswordEncryptionModel

***

### PasswordHashEncodingType?

> `optional` **PasswordHashEncodingType?**: [`PasswordEncryptionModelPasswordHashEncodingTypeEnum`](../enumerations/PasswordEncryptionModelPasswordHashEncodingTypeEnum.md) \| `null`

Encoding type for the Password hash output

#### Memberof

PasswordEncryptionModel

***

### PasswordHasherVersion?

> `optional` **PasswordHasherVersion?**: [`PasswordEncryptionModelPasswordHasherVersionEnum`](../enumerations/PasswordEncryptionModelPasswordHasherVersionEnum.md)

Version identifier for the Password hashing algorithm.

#### Memberof

PasswordEncryptionModel

***

### PasswordHashMemory?

> `optional` **PasswordHashMemory?**: `number` \| `null`

Memory usage (in KB) for Argon2 algorithms

#### Memberof

PasswordEncryptionModel

***

### PasswordHashThread?

> `optional` **PasswordHashThread?**: `number` \| `null`

Number of threads for Argon2 algorithms

#### Memberof

PasswordEncryptionModel

***

### PasswordSaltEncodingType?

> `optional` **PasswordSaltEncodingType?**: [`PasswordEncryptionModelPasswordSaltEncodingTypeEnum`](../enumerations/PasswordEncryptionModelPasswordSaltEncodingTypeEnum.md) \| `null`

Encoding type for the salt

#### Memberof

PasswordEncryptionModel

***

### PlaintextPasswordEncoding?

> `optional` **PlaintextPasswordEncoding?**: [`PasswordEncryptionModelPlaintextPasswordEncodingEnum`](../enumerations/PasswordEncryptionModelPlaintextPasswordEncodingEnum.md) \| `null`

Encoding type for the plaintext Password before hashing.

#### Memberof

PasswordEncryptionModel

***

### Salt?

> `optional` **Salt?**: `string` \| `null`

Global salt value (used when IsPerPasswordSalt is false)

#### Memberof

PasswordEncryptionModel

***

### SaltAttachType?

> `optional` **SaltAttachType?**: [`PasswordEncryptionModelSaltAttachTypeEnum`](../enumerations/PasswordEncryptionModelSaltAttachTypeEnum.md)

How to attach salt to password

#### Memberof

PasswordEncryptionModel

***

### SaltKeyLength?

> `optional` **SaltKeyLength?**: `number` \| `null`

Length of the salt key (in bytes).

#### Memberof

PasswordEncryptionModel

***

### SubKeyLength?

> `optional` **SubKeyLength?**: `number` \| `null`

Length of the derived key (in bytes).

#### Memberof

PasswordEncryptionModel

***

### Type

> **Type**: [`PasswordEncryptionModelTypeEnum`](../enumerations/PasswordEncryptionModelTypeEnum.md)

The encryption or hashing algorithm used.

#### Memberof

PasswordEncryptionModel
