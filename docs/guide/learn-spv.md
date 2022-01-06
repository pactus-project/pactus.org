---
id: learn-spv
title: Simplified Payment Verification
---

It is possible to have a Simplified Payment Verification (SPV) system without running a full node. A
user needs to obtain the longest chain of the network, but unlike bitcoin, user should receive and
pars any transaction that change the committee's signature which are Bond, Unbond and Sortition
transactions. By parsing these transaction, user can simply verify the block's signature. Once the
user verified the block headers, he can verify the transaction by .
