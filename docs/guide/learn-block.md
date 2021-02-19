---
id: learn-block
title: Block details
---

# Block details

Block has three main parts:

```go
type blockData struct {
   Header     Header   `cbor:"1,keyasint"`
   LastCommit *Commit  `cbor:"2,keyasint"`
   TxHashes   TxHashes `cbor:"3,keyasint"`
}
```

## Header

Header includes main information about the block.

```go
type Header struct {
   Version          uint    `cbor:"1,keyasint"`
   UnixTime         int64   `cbor:"2,keyasint"`
   LastBlockHash    Hash    `cbor:"3,keyasint"`
   StateHash        Hash    `cbor:"4,keyasint"`
   TxsHash          Hash    `cbor:"5,keyasint"`
   LastReceiptsHash Hash    `cbor:"6,keyasint"`
   LastCommitHash   Hash    `cbor:"7,keyasint"`
   CommitersHash    Hash    `cbor:"8,keyasint"`
   ProposerAddress  Address `cbor:"9,keyasint"`
}
```

## Last Commit

Last commit holds the proof of commitment of the last block:

```go
type Commit struct {
   BlockHash  crypto.Hash      `cbor:"1,keyasint"`
	Round      int              `cbor:"2,keyasint"`
	Committers []Committer      `cbor:"3,keyasint"`
	Signature  crypto.Signature `cbor:"4,keyasint"`
}
```

And Committer format:

```go
const (
   CommitNotSigned = 0
   CommitSigned    = 1
)

type Committer struct {
   Number int `cbor:"1,keyasint"`
	Status int `cbor:"2,keyasint"`
}
```

## Transaction IDs

```go
type TxHashes struct {
   Hashes []Hash `cbor:"1,keyasint"`
}
```
