---
layout: learn
title: Block Certificate
permalink: /learn/basic/certificate/index.html
---

# Block Certificate

## What Is Certificate?

Block certificate holds the proof of commitment for the block. A valid block should come with a
valid certificate before committing into the blockchain.

## Certificate Verification

For each round validators cast their votes by signing `BlockHash | Round`. A valid certificate
should have signatures from validators with more than ⅔ of the stake for that round. If enough votes
are collected, the signatures will be aggregated into one single signature. To verify the aggregated
signature, from `Committers` and `Absentees` the aggregated public key can be formed and therefore
Signature can be verified.

## Certificate Structure

Each block certificate contains following information:

{% tabs certificate %}

{% tab certificate rust <i class="fa-brands fa-rust"></i> Rust %}

```rust
pub struct Certificate {
    round: i16,
    committers: Vec<i32>,
    absentees: Vec<i32>,
    signature: Signature,
}
```

{% endtab %}

{% tab certificate go <i class="fa-brands fa-golang"></i> Go %}

```go
type Certificate struct {
    Round      int16
    Committers []int32
    Absentees  []int32
    Signature  Signature
}
```

{% endtab %}

{% endtabs %}

### Example

Hers is an example of a certificate data.

{% hexdump "certificate_data" "0604040b1726010ba33cf343625e9a4a8fa966045417084608e4cc2eb01b1348ccfbcf9f1e713f56e93a98ccc2a053a4da1b8fcaa5fd0d24" %}
