---
id: learn-block
title: Block
---

## What is block?

Blocks contains the header and transactions in form of their IDs. Each block in Zarb have a unique
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

- `Version` starts from 1 for the mainnet and starts from 1001 for the testnet
- `UnixTime` is the time of block in unix format (seconds from Unix Epoch)
- `LastBlockHash` is the hash of previous block
- `StateHash` is the [state merkle root](./learn-state-hash.md) at current height
- `TxIDsHash` is the merkle root of the transaction IDs included in this block
- `LastCertificateHash` is the hash of last block certificate. This ensures that previous block has
  a valid certificate
- `SortitionSeed` is the seed for the sortition algorithm and must be signed by the proposer
- `ProposerAddress` is the address of block proposer

## Transaction IDs

TxIDs contains the list of transaction IDs in the block.

```go
type TxIDs struct {
   IDs []tx.ID `cbor:"1,keyasint"`
}
```

Transactions in Zarb are [stamped](./transaction-stamping.md), therefore there is no need to store
transaction body inside the block. Saving ID is fair enough.

## Example

Hers is an example of a raw block header data.

<hexdump bytes="a80101021a606cf6c8035820b7791c69197a15360d20aba0c822dc2b83eea70026e330a1844a32020a5dc303045820ddc8a4b3bf95e47e6855dcd76d6790e32903b89ce1fbeaf8f1fcbd5189bcd5da055820e85544e771d1ae6057e999a202725e1151a15d81fe9681075bb911be7b246fcd065820fa527f78b78825dca6b9772786d886966adfde66c84edb67a34fcfae291d0a49075830a837496eec9429d099d0759302300347cd2e0c8409fc5b01381599f94bed9337b8170e6b1e0f6acd5acbbf0c85b71f040854436d9a52fd0e4c60ca8dd89f751058cff40edee0" />

By decoding with
[cbor.me](http://cbor.me/?bytes=a80101021a606cf6c8035820b7791c69197a15360d20aba0c822dc2b83eea70026e330a1844a32020a5dc303045820ddc8a4b3bf95e47e6855dcd76d6790e32903b89ce1fbeaf8f1fcbd5189bcd5da055820e85544e771d1ae6057e999a202725e1151a15d81fe9681075bb911be7b246fcd065820fa527f78b78825dca6b9772786d886966adfde66c84edb67a34fcfae291d0a49075830a837496eec9429d099d0759302300347cd2e0c8409fc5b01381599f94bed9337b8170e6b1e0f6acd5acbbf0c85b71f040854436d9a52fd0e4c60ca8dd89f751058cff40edee0),
we will have this format:

```
{
  1: 1,
  2: 1617753800,
  3: h'B7791C69197A15360D20ABA0C822DC2B83EEA70026E330A1844A32020A5DC303',
  4: h'DDC8A4B3BF95E47E6855DCD76D6790E32903B89CE1FBEAF8F1FCBD5189BCD5DA',
  5: h'E85544E771D1AE6057E999A202725E1151A15D81FE9681075BB911BE7B246FCD',
  6: h'FA527F78B78825DCA6B9772786D886966ADFDE66C84EDB67A34FCFAE291D0A49',
  7: h'A837496EEC9429D099D0759302300347CD2E0C8409FC5B01381599F94BED9337B8170E6B1E0F6ACD5ACBBF0C85B71F04',
  8: h'436D9A52FD0E4C60CA8DD89F751058CFF40EDEE0'
}
```

Block hash is hash of the header in binary format. For this example the block hash is:

```
0x0ca12eee3c791ba4b78439448d59a4b817d1eaec10aa090ea40f9af3d43e6e2b
```
