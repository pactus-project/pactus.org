---
id: learn-consensus
title: Sortition algorithm
---

## How VRF works?

In each height validators outside the set run a VRF function which the seed is the previous block
hash. The result is deterministic and Zero Knowledge provable. A validator based on its stake and
its luck can enter the set for the next height. The formula is quite simple:

$$
R = V {\times} S_t
$$

_which_

- $V$ is VRF output between 0~1
- $S_t$ is total stake

If the result is less than the validator's stake, then this validator is eligible to enter to the
set for the next height. The validator needs to send a Sortition transaction with the proof of VRF.
This transaction is valid for 7 blocks. When a validator enters the set the latest validator should
leave the set to make it balance.