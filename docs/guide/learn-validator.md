---
id: learn-validator
title: Validator
---

# Validator

## What is Validator?

Validator is a full node that participates in the consensus mechanism by broadcasting its votes.
Validators get rewards for proposing a new blocks. Validators should bond tokens in form of stake
and they are weighted by their boned stakes.

## Validator structure

Validator structure is used to hold the public key, stake and number of validator.

```go
type Validator struct {
   PublicKey        PublicKey `cbor:"1,keyasint"`
   Number           int       `cbor:"2,keyasint"`
   Sequence         int       `cbor:"3,keyasint"`
   Stake            int64     `cbor:"4,keyasint"`
   BondingHeight    int       `cbor:"5,keyasint"`
   UnbondingHeight  int       `cbor:"6,keyasint"`
   LastJoinedHeight int       `cbor:"7,keyasint"`
}
```

- `PublicKey` is the public key of validator which is 96 bytes in length
- `Number` is a unique and sequential number for the validator
- `Sequence` increasers anytime user send a transactions to prevent replaying the transaction
- `Stake` holds the stake of the validator
- `BondingHeight` is the last height that the validator is bonded some stake
- `UnbondingHeight` is the height that the validator is unbonded
- `LastJoinedHeight` is the validator joined the committee

## Example

Hers is an example of a validator data:

<hexdump bytes="a7015860594ac38ee38949356e139340cd9668f48d908e76b44781e7013e3f70b738a9b6b53e95dfcba23bd1bbe923d2df354815986643467f25b755d76a908c0dca20327cc111e16d30f37041a23417f8d7cb446cc891c551176df641f07c1f4e1e068b020003000400050006000700" />

Which can be interpreted in
[CBOR](http://cbor.me/?bytes=a7015860594ac38ee38949356e139340cd9668f48d908e76b44781e7013e3f70b738a9b6b53e95dfcba23bd1bbe923d2df354815986643467f25b755d76a908c0dca20327cc111e16d30f37041a23417f8d7cb446cc891c551176df641f07c1f4e1e068b020003000400050006000700)
format:

```
{
    1: h'594AC38EE38949356E139340CD9668F48D908E76B44781E7013E3F70B738A9B6B53E95DFCBA23BD1BBE923D2DF354815986643467F25B755D76A908C0DCA20327CC111E16D30F37041A23417F8D7CB446CC891C551176DF641F07C1F4E1E068B',
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
}
```

validator hash is hash of the validator in binary format. For this example the validator hash is:

```
0xe31bf5a07ce7264cac6e9d4e3a071a4fcf92628b101c13f2e97cd7c34066b308
```
