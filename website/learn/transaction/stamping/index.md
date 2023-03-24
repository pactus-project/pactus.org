---
layout: learn
title: Stamping Transactions
---

# Stamping Transactions

## What Is Stamping Transaction?

_Stamping a transaction_ simply means putting something from the previous block into the header of
the transaction. A stamped transaction, unlike normal transactions, has a lifetime or Time To Live (TTL) and it is
only valid for a certain time. If $$TTL = N$$, the stamped transaction after N
blocks will be invalid.

![Stamped transaction]({{ site.url }}/assets/images/pactus_stamped_transaction.png)

In Pactus stamps are defined as first 4 bytes of [block hash]({{ site.baseurl }}/learn/blockchain/block#block-hash).

## Consequences

### Advantages

- **Reducing the size of transaction pool**

  Each stamped transaction has a lifetime and the transaction will be invalid after a certain time.
  It can help to manage the transaction pool efficiently.

- **Preventing any possible forks**

  Stamped transactions are loyal to the main fork. Any possible fork needs to re-stamp the
  transactions and therefore re-sign them, that is not feasible. This feature especially can
  prevent _long range_ attacks.

### Disadvantage

- **Increasing the size of transaction**

Stamping transaction increases the size of the transaction by four bytes.

- **Need to query blockchain**

Users need to query the blockchain before signing the transaction. This could be a little
troublesome if user wants to sign a transaction offline.
