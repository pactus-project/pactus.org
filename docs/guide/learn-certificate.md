---
id: learn-certificate
title: Block certificate
---

## What is certificate?

Block certificate holds the proof of commitment for the block.

## Certificate structure

Each block certificate contains following information:

```go
type Certificate struct {
   BlockHash  Hash      `cbor:"1,keyasint"`
   Round      int       `cbor:"2,keyasint"`
   Committers []int     `cbor:"3,keyasint"`
   Absences   []int     `cbor:"4,keyasint"`
   Signature  Signature `cbor:"8,keyasint"`
}
```
