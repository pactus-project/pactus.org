---
id: transaction-sortition
title: Sortition Transaction
---

# Sortition Transaction

Sortition transaction is used to enter a validator in the set for the next run. Sortition
transactions are valid for 21 heights.

The sortition transaction has a payload like below:

```go
type SortitionPayload struct {
	Address Address `cbor:"1,keyasint"`
	Proof   []byte  `cbor:"2,keyasint"`
}
```

Comments:

- Fee for sortition transaction is zero
