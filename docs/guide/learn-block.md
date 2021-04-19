---
id: learn-block
title: Block
---

# Block

## What is block?

Blocks contains the Header and transactions in form of their IDs. Each block in Zarb have a unique
certificate that is signed by committee members. A block will be committed if it has a valid
[certificate](./learn-certificate.md). Blocks are immutable and any changes in block will invalidate
the certificate.

## Block header

Header includes main information about the block.

```go
type Header struct {
   Version             int     `cbor:"1,keyasint"`
   UnixTime            int64   `cbor:"2,keyasint"`
   LastBlockHash       Hash    `cbor:"3,keyasint"`
   StateHash           Hash    `cbor:"4,keyasint"`
   TxIDsHash           Hash    `cbor:"5,keyasint"`
   LastCertificateHash Hash    `cbor:"6,keyasint"`
   SortitionSeed       Seed    `cbor:"7,keyasint"`
   ProposerAddress     Address `cbor:"8,keyasint"`
}
```

## Transaction IDs

Transaction IDs contains the list of transaction IDs in the block.

```go
type TxIDs struct {
   IDs []tx.ID `cbor:"1,keyasint"`
}
```
