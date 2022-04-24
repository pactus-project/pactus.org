---
id: transaction-bond
title: Bond Transaction
---

# Bond Transaction

Bond transaction is used to bond stake to a validator. If the validator does not exist, it will be
created.

# Payload format

Bond transaction has a payload as seen below:

```go
type BondPayload struct {
    Sender    crypto.Address    // 21 bytes
    PublicKey *bls.PublicKey    // 96 bytes
    Stake     int64             // variant
}
```

- `Boner` is the account address that bonds the stake
- `Validator` is the public key of the validator
- `Stake` is the amount of stake that should be bond
