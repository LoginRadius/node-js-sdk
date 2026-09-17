[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / AggregationObj

# Interface: AggregationObj

Configuration for a single aggregation, including field, type, and optional range or interval.

## Export

AggregationObj

## Properties

### field?

> `optional` **field?**: `string`

The field to aggregate on.

#### Memberof

AggregationObj

***

### format?

> `optional` **format?**: `string`

Optional. Format string for date or numeric values.

#### Memberof

AggregationObj

***

### interval?

> `optional` **interval?**: [`AggregationObjInterval`](../type-aliases/AggregationObjInterval.md)

#### Memberof

AggregationObj

***

### ranges?

> `optional` **ranges?**: `object`

Optional. A map of range names to range objects, used for range aggregations.

#### Index Signature

\[`key`: `string`\]: [`RangeObj`](RangeObj.md)

#### Memberof

AggregationObj

***

### type?

> `optional` **type?**: `string`

The type of aggregation (e.g., terms, range, histogram).

#### Memberof

AggregationObj
