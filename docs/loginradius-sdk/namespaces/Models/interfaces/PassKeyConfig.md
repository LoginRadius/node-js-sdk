[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PassKeyConfig

# Interface: PassKeyConfig

## Export

PassKeyConfig

## Properties

### Attestation?

> `optional` **Attestation?**: [`PassKeyConfigAttestationEnum`](../enumerations/PassKeyConfigAttestationEnum.md)

The type of PassKey Attestation flow.

#### Memberof

PassKeyConfig

***

### IsEnabled

> **IsEnabled**: `boolean`

Whether PassKey is enabled.

#### Memberof

PassKeyConfig

***

### LocalEnrollment

> **LocalEnrollment**: `boolean`

Whether local enrollment is enabled.

#### Memberof

PassKeyConfig

***

### PasskeySelection

> **PasskeySelection**: [`PassKeyConfigPasskeySelectionEnum`](../enumerations/PassKeyConfigPasskeySelectionEnum.md)

The type of PassKey selection.

#### Memberof

PassKeyConfig

***

### ProgressiveEnrollment?

> `optional` **ProgressiveEnrollment?**: `boolean`

Whether progressive enrollment is enabled.

#### Memberof

PassKeyConfig

***

### ProgressiveEnrollmentDelay?

> `optional` **ProgressiveEnrollmentDelay?**: `number`

Delay in minutes for progressive enrollment.

#### Memberof

PassKeyConfig

***

### RPDisplayName

> **RPDisplayName**: `string`

Display name for the relying party.

#### Memberof

PassKeyConfig

***

### RPID

> **RPID**: `string`

ID for the relying party.

#### Memberof

PassKeyConfig

***

### RPOrigins

> **RPOrigins**: `string`[]

List of allowed origins for the relying party.

#### Memberof

PassKeyConfig
