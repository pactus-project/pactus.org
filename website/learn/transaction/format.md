---
layout: learn
title: Transaction format
permalink: /learn/transaction/format/index.html
---

# Transaction

## Transaction Format

Transactions in Pactus are as seen below:

```go
type Transaction struct {
    Version     uint8               // 1 byte
    Stamp       hash.Stamp          // 4 bytes
    Sequence    int32               // variant
    Fee         int64               // variant
    PayloadType uint8               // 1 byte
    Payload     payload.Payload     // variant
    Memo        string              // variant
    PublicKey   crypto.PublicKey    // 96 bytes
    Signature   crypto.Signature    // 48 bytes
}
```

Payload types are:

```go
type Type uint8

const (
    PayloadTypeSend      = Type(1)
    PayloadTypeBond      = Type(2)
    PayloadTypeSortition = Type(3)
    PayloadTypeUnbond    = Type(4)
    PayloadTypeWithdraw  = Type(5)
)
```

The payload will be decoded based on payload type.

## Transaction ID

Transaction ID is the hash of a transaction without a public key and signature.
