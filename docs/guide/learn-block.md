---
id: learn-block
title: Block
---

# Block

## What is block?

Blocks contains transactions in form of their hashes. Each block in Zarb have a unique certificate
that is signed by committee members. Blocks are immutable and one change in block will invalid the
certificate.

## Block structure

Block has three main parts:

```go
type Block struct {
   Header          Header       `cbor:"1,keyasint"`
   LastCertificate *Certificate `cbor:"2,keyasint"`
   TxIDs           TxIDs        `cbor:"3,keyasint"`
}
```

## Header

Header includes main information about the block.

```go
type Header struct {
   Version             int     `cbor:"1,keyasint"`
   UnixTime            int64   `cbor:"2,keyasint"`
   LastBlockHash       Hash    `cbor:"3,keyasint"`
   StateHash           Hash    `cbor:"4,keyasint"`
   TxIDsHash           Hash    `cbor:"5,keyasint"`
   LastReceiptsHash    Hash    `cbor:"6,keyasint"`
   LastCertificateHash Hash    `cbor:"7,keyasint"`
   CommitteeHash       Hash    `cbor:"8,keyasint"`
   SortitionSeed       Seed    `cbor:"9,keyasint"`
   ProposerAddress     Address `cbor:"10,keyasint"`
}
```

## Last Certificate

Last certificate holds the proof of commitment for the last block:

```go
type Commit struct {
   BlockHash  Hash      `cbor:"1,keyasint"`
   Round      int       `cbor:"2,keyasint"`
   Committers []int     `cbor:"3,keyasint"`
   Absences   []int     `cbor:"4,keyasint"`
   Signature  Signature `cbor:"8,keyasint"`
}
```

## Transaction IDs

Transaction IDs contains the list of transaction ids in the block.

```go
type TxIDs struct {
   IDs []tx.ID `cbor:"1,keyasint"`
}
```
