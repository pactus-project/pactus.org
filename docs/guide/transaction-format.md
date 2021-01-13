---
id: transaction-format
title: Transaction format in Zarb
---

# Transactions in Zarb

Transactions in zarb are like below:

```go
type Transaction struct {
   Version   int              `cbor:"1,keyasint"`
   Stamp     Hash             `cbor:"2,keyasint"`
   Sequence  int              `cbor:"3,keyasint"`
   Fee       int64            `cbor:"4,keyasint"`
   Type      PayloadType      `cbor:"5,keyasint"`
   Payload   cbor.RawMessage  `cbor:"6,keyasint"`
   Memo      string           `cbor:"7,keyasint,omitempty"`
   PublicKey *PublicKey       `cbor:"20,keyasint,omitempty"`
   Signature *Signature       `cbor:"21,keyasint,omitempty"`
}
```

Payload types are:

```go
const (
   PayloadTypeSend      = PayloadType(1)
   PayloadTypeBond      = PayloadType(2)
   PayloadTypeSortition = PayloadType(3)
)
```

Comment:

- The payload will be decoded based on payload type
- Sign bytes are CBOR data of tx without public key and signature
- Transaction id is the hash of sign bytes
