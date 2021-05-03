---
id: transaction-mintbase
title: Mintbase transaction
---

# Mintbase transaction

Mintbase transaction is the first transaction in each block. The format of mintbase transaction is
same as [send transaction](./transaction-send.md) but the fee is zero.

Sender address is Treasury address and receiver address defines by the validator. The amount of
mintbase transaction should be equal to the block rewards plus transactions fee. This amount will go
to validator account as block reward.
