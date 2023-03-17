---
layout: reference
title: Account
permalink: /reference/basic/account/index.html
---

# Account

## What is Account?

An account is an entity with a dedicated [address](/reference/cryptography/address) that can send
transactions on Pactus blockchain. Account is controlled by user private key.

## Account Structure

Account structure is 37 bytes and it is used to hold the account information like address, balance
and sequence number. The format of the account is as seen below:

{% tabs account %}

{% tab account rust <i class="fa-brands fa-rust"></i> Rust %}

```rust
pub struct Account {
    address:  Address, // 21 bytes
    number:   i32,     // 4 bytes
    sequence: i32,     // 4 bytes
    balance:  i64,     // 8 bytes
}
```

{% endtab %}

{% tab account go <i class="fa-brands fa-golang"></i> Go %}

```go
type Account struct {
   Address  Address    // 21 bytes
   Number   int32      // 4 bytes
   Sequence int32      // 4 bytes
   Balance  int64      // 8 bytes
}
```

{% endtab %}

{% endtabs %}

- `Address` is the address of account which is 21 bytes in length
- `Number` is a unique and sequential number for the account
- `Sequence` increasers anytime user sends a transaction to prevent replaying the transaction
- `Balance` holds the balance of the account which is 8 bytes

### Example

Here is an example of a account data:

{% hexdump "account_data" "0102030405060708090a0b0c0d0e0f10111213141501000000020000000300000000000000" %}
