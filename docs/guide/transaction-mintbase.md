---
id: transaction-mintbase
title: Mintbase Transaction
---

# Mintbase Transaction

Mintbase transaction is the first transaction in each block. The format of mintbase transaction is 
the same as [send transaction](./transaction-send.md) but the fee is zero.

Sender address is the Treasury address and receiver address is defined by the validator. The amount of 
mintbase transaction should be equal to the block rewards plus transaction fee. This amount will go 
to the validator account as block reward.

