---
layout: learn
title: Sortition Transaction
permalink: /learn/transaction/sortition/index.html
---


# Sortition Transaction

Sortition transaction is used to enter a validator in the set for the next run. Sortition
transactions are valid for 21 heights.

# Payload format

The sortition transaction has a payload as seen below:

```go
type SortitionPayload struct {
    Address crypto.Address   // 21 bytes
    Proof   sortition.Proof  // 48 bytes
}
```

- `Address` is the address validator that evaluated the sortition
- `Proof` is the proof of evaluating sortition and it is 48 bytes length

Validator doesn't need to pay fee for sortition transaction and fee should set to zero.
