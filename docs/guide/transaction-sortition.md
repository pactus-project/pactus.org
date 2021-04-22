---
id: transaction-sortition
title: Sortition transaction
---

Sortition transaction is used to enter a validator in the set for the next run. Sortition
transaction are valid for 21 height.

Sortition transaction has a payload like below:

```go
type SortitionPayload struct {
	Address Address `cbor:"1,keyasint"`
	Proof   []byte  `cbor:"2,keyasint"`
}
```

Comments:

- Fee for sortition transaction is zero
