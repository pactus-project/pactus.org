---
layout: learn
title: Bond Transaction
permalink: /learn/transaction/bond/index.html
---


# Bond Transaction

Bond transaction is used to bond stake to a validator. If the validator does not exist, it will be
created.

# Payload format

Bond transaction has a payload as seen below:

```go
type BondPayload struct {
    Sender    crypto.Address    // 21 bytes
    Receiver  crypto.Address    // 21 bytes
    PublicKey *bls.PublicKey    // 96 bytes
    Stake     int64             // variant
}
```

- `Sender` is the account address that bonds the stake
- `Receiver` is the validator address that receives the stake
- `PublicKey` is the public key of the validator (it's optional)
- `Stake` is the amount of stake that should be bond

If the validator is not exist yet, the public key should be defined.
