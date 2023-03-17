---
layout: reference
title: Send Transaction
permalink: /reference/transaction/send/index.html
---

# Send Transaction

Send transaction is used to send values between the accounts. If the receiver account does not
exist, it will be created.

Send transaction has a payload like below:

```go
type SendPayload struct {
   Sender   Address // 21 bytes
   Receiver Address // 21 bytes
   Amount   int64   // variant
}
```

- `Sender` is the account address that sends the amount
- `Receiver` is the account address that receives the amount
- `Amount` is the amount of stake that should be transferred

## Subsidy transaction

Subsidy transaction is the first transaction in each block. There is only one subsidy transaction
per block and the format of subsidy transaction is the same as send transaction but the fee is zero.

Sender address is the [Treasury address](/reference/cryptography/address#treasury-address) and receiver
address is defined by the block proposer. The amount of subsidy transaction should be equal to the
[block rewards](/reference/economy/incentive) plus transactions fee. This amount will go to the receiver
account as block reward. Therefore in each block one coin from
[treasury account](/reference/economy/treasury) moves to the validator account as block reward.
