---
id: learn-sortition
title: Sortition Seed
---

## Sortition Seed

sortition algorithm requires a seed that is random and publicly verifiable. In each height, proposer
have to generate new seed based on previous seed and adversary are not able to manipulate the seed
generation.

To achieve this we use BLS signature scheme to generate the seed. Since BLS signature is unique and
deterministic, adversary can not generate more than one valid signature per height.

During block proposal stage, proposer should take previous seed and sign it with its public key. The
result is the seed for the next block.

$seed_{n+1}=Sig(sk_{proposer}, Hash(seed_{n}))$

Everyone knows the proposer's public key, therefore they can easily validate the seed for the next
block. If the seed is not valid, the proposed block will be rejected.

$Ok=Verify(pub_{proposer}, seed_{n}, seed_{n-1})$

- Note: Seed is 48 bytes.
- Note: Seed for genesis block is 0.

## How VRF works

VRF takes the publicly known seed for each block and generate an index and proof.

$<index, proof>=VRF(sk_{validator}, seed_{n})$

If the index is less than validator's stake, the validator is eligible to enter the committee for
the next height.
