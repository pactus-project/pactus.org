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

Here is the commit format:

```go
type Commit struct {
   Round      int         `cbor:"1,keyasint"`
   Signature  Signature   `cbor:"2,keyasint"`
   Committers []Commtiter `cbor:"3,keyasint"`
}
```

And Committer format:
```go
const (
   CommitNotSigned = 0
   CommitSigned    = 1
)

type Committer struct {
   Address Address `cbor:"1,keyasint"`
   Status  int     `cbor:"2,keyasint"`
}
```

Example of commit:
```
a301020258304e02ec725dd2b2ae23fc6a90bb391e3a61c1488eb0bffdffb75088da8dc7e9b267f396898dbe3e7971dd2af9395200810384a20154a7dd14a976e2894602a0c04081b66258bd930faa0201a20154f2150d173fdf8e5435712e3731237e4751675ef30201a20154c1ecaa8747f46553556d484d1345f7e152eddee20201a20154817a3ea1b55ebb68c29d45592d41da6bedb7f3350200
```

Which can be interpreted in CBOR format:
```
{
    1: 2,
    2: h'4E02EC725DD2B2AE23FC6A90BB391E3A61C1488EB0BFFDFFB75088DA8DC7E9B267F396898DBE3E7971DD2AF939520081',
    3: [
        {1: h'A7DD14A976E2894602A0C04081B66258BD930FAA', 2: 1},
        {1: h'F2150D173FDF8E5435712E3731237E4751675EF3', 2: 1},
        {1: h'C1ECAA8747F46553556D484D1345F7E152EDDEE2', 2: 1},
        {1: h'817A3EA1B55EBB68C29D45592D41DA6BEDB7F335', 2: 0}
    ]
}
```


## Transaction IDs

```go
type TxHashes struct {
   Hashes []Hash `cbor:"1,keyasint"`
}
```

