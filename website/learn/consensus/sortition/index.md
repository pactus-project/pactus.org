---
layout: learn
title: Sortition Algorithm
---

# Sortition Algorithm

## Sortition Seed

Sortition algorithm requires a seed that is random and publicly verifiable. In each height, the
proposer has to generate a new seed based on previous seed and the adversary is not able to
manipulate the seed generation.

To achieve this, we use BLS signature scheme to generate the seed. Since BLS signature is unique and
deterministic, the adversary cannot generate more than one valid signature per height.

During the block proposal stage, the proposer should take the previous seed and sign it with its
public key. The result is the seed for the next block.

$$seed_{n+1}=generate(sk_{proposer}, hash(seed_{n}))$$

Everyone knows the proposer's public key, therefore they can easily validate the seed for the next
block. If the seed is not valid, the proposed block will be rejected.

$$verify(pub_{proposer}, hash(seed_{n}), seed_{n-1})=True \lor False$$

Sortition Seed is 48 bytes and Sortition Seed for the genesis block set to 0.

## Verifiable Random Function

Verifiable Random Function is a pseudo-random function that the owner of key $$s$$
at any point of $$x$$ can evaluate $$v=f_s(x)$$ and also provides
$$proof_x$$ efficiently proving that $$v$$ is correct. We call such a mathematical
object a verifiable pseudo-random function, VRF for brevity [^first].

In Pactus we are using BLS signature scheme as source of VRF. Since BLS signature are unique, in the
random oracle model, the hash of a BLS signature can be used as a secure VRF.

VRF takes the publicly-known seed for each block and generates an index and proof.

$$<index, proof>=VRF(sk_{validator}, seed_{n})$$

The result of VRF is deterministic and Zero Knowledge Provable.

## How VRF Works?

In each height, validators outside the committee run VRF to generate a verifiable random number
between 0 and the total stake. Total stake of the blockchain is known at each height. The seed for
VRF is also known to all validators and it is part of the previous block header. A validator based
on its stake and its luck can generate the suitable number. If the generated random number is less
than the validator's stake, then this validator is eligible to enter the committee for the next
height. The validator needs to send a Sortition transaction with the $$proof$$ of
VRF. Other validators can easily verify the sortition:

$$
verify(pub_{validator}, proof, seed_n) \le S_v
$$

Where

- $$pub_{validator}$$ is the public key of the validator
- $$S_v$$ is the stake of validator at height $$n$$

There is no need to send $$index$$ alongside $$proof$$ because the
result should be less than validator's stake and validator's stake is known at height
$$n$$ for all the validators in the network.

If a validator can generate a valid sortition proof, it can broadcast a
[sortition transaction]({{ site.baseurl }}/learn/transaction/sortition). Sortition transactions are valid for 7 blocks.
When a valid sortition transaction is committed into a block, the new validator from the pool can
enter the committee and the oldest validator in the committee will leave the committee to make it
balanced.

[^first]: [Verifiable Random Function](https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Pseudo%20Randomness/Verifiable_Random_Functions.pdf)
