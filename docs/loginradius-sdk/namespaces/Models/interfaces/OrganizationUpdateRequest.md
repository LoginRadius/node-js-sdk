[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OrganizationUpdateRequest

# Interface: OrganizationUpdateRequest

## Export

OrganizationUpdateRequest

## Properties

### Display?

> `optional` **Display?**: [`OrganizationBaseDisplay`](OrganizationBaseDisplay.md) \| `null`

#### Memberof

OrganizationUpdateRequest

***

### Domains?

> `optional` **Domains?**: [`OrganizationDomainRequest`](OrganizationDomainRequest.md)[]

#### Memberof

OrganizationUpdateRequest

***

### IsActive?

> `optional` **IsActive?**: `boolean` \| `null`

Indicates whether the organization is active or not

#### Memberof

OrganizationUpdateRequest

***

### IsAuthRestrictedToDomain?

> `optional` **IsAuthRestrictedToDomain?**: `boolean` \| `null`

Restricts authentication to registered domains only

#### Memberof

OrganizationUpdateRequest

***

### Metadata?

> `optional` **Metadata?**: `object`

Additional metadata for the organization

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

OrganizationUpdateRequest

***

### Name?

> `optional` **Name?**: `string`

Name of the organization

#### Memberof

OrganizationUpdateRequest

***

### Policies?

> `optional` **Policies?**: [`OrganizationsPolicyBase`](OrganizationsPolicyBase.md) \| `null`

#### Memberof

OrganizationUpdateRequest
