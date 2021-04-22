---
id: learn-block
title: Block
---

## What is block?

Blocks contains the Header and transactions in form of their IDs. Each block in Zarb have a unique
[certificate](./learn-certificate.md) that is signed by committee members. A block will be committed
if it has a valid certificate. Blocks are immutable and any changes in block will invalidate the
certificate.

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

- Version: Version for mainnet starts from 1 and for the testnet starts from 1001
- UnixTime: Time of block in unix format
- LastBlockHash: The hash of previous block
- StateHash: The merkle root hash of the state at current height. Read more about how state hash is
  calculated iz Zarb [here](./learn-state-hash.md).
- TxIDsHash: The merkle root of the transaction IDs included in this block
- LastCertificateHash: The hash of last block certificate. This ensures certificate are issued for
  previous block before processing the next block
- SortitionSeed: The seed for the sortition algorithm. This seed must be signed by proposer
- ProposerAddress: Address of block proposer.

## Transaction IDs

TxIDs contains the list of transaction IDs in the block.

```go
type TxIDs struct {
   IDs []tx.ID `cbor:"1,keyasint"`
}
```

Transaction ID simply is the hash of transaction without public key and signature. Transactions in
Zarb are stamped, therefore there is no need to store transaction body inside the block. Saving ID
is fair enough.
