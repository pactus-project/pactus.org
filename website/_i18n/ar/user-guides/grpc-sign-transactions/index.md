---
version: 1
---

## Preface

The Pactus Blockchain provides a gRPC interface that allows users to interact with the blockchain and native wallet.
This is ideal for merchants and users who want to create, sign, and broadcast transactions using their local node.
This tutorial will guide you step-by-step on how to use gRPC to sign transactions.

## Setup node

### Initialize the node

To follow along with this tutorial, you'll first need to set up and run a localnet blockchain, which is suitable for testing:

```bash
./build/pactus-daemon init \
  --localnet \
  --working-dir ./pactus-localnet \
  --password "super-secret-password" \
  --val-num 7 \
  --restore "fish cool avoid history kitten quick olive purchase blossom grocery cool treat"
```

This command initializes a Pactus blockchain as a localnet.
The purpose of this network is for testing.
The above command actually restores a node from the given mnemonic.
This helps you to create the same wallet with this tutorial. The first two addresses in this wallet are:

```text
tpc1zhv2hq30rnu9lkjusgwqk4f5qfdr72sd2mndnn6
tpc1zsrvuvn0j80vc3we5q44apjrv8j7ta5807z7xc7
```

We are going to transfer 1 PAC from the first account to the second one.

### Run the node

Now you can run the node simply with this command:

```bash
./build/pactus-daemon start \
  --working-dir ./pactus-localnet \
  --password "super-secret-password"
```

By running the node, you will see that it starts creating blocks, and
therefore the reward account address will be rewarded locally.
We can use this balance for testing purposes.

### Interact with the node

Open another terminal and run the following command:

```bash
./pactus-shell --server-addr localhost:50052 \
  blockchain get-blockchain-info
```

It should print information about the localnet blockchain.
The `pactus-shell` application uses gRPC to interact with the blockchain.
In this tutorial, we use `pactus-shell` to interact with the blockchain.
You can either use gRPC-gateway REST APIs or make direct gRPC calls to interact with the node.
They are more or less similar and all interact with the node using gRPC endpoints.

## Signing Transitions

### Create raw transaction

To sign a transaction, we first need to create a raw transaction and then sign it.
We can use the `get_raw_transfer_transaction` method to create a raw transfer transaction.
Similar methods can be used to create raw bond, unbond, and withdraw transactions.

```bash
./pactus-shell --server-addr localhost:50052 \
  transaction get-raw-transfer-transaction \
    --sender tpc1zhv2hq30rnu9lkjusgwqk4f5qfdr72sd2mndnn6 \
    --receiver tpc1zsrvuvn0j80vc3we5q44apjrv8j7ta5807z7xc7 \
    --amount 1
{
  "rawTransaction":  "AgGWBQAA6AcAAQK7FXBF458L+0uQQ4FqpoBLR+VBqgKA2cZN8jvZiLs0BWvQyGw8vL7Q7wE="
}
```

The sender account is the first reward address in the wallet, therefore it should have some coins in its account.

<i class="fa-solid fa-triangle-exclamation"></i> Please note that the amount here is in atomic units.
There is a Working-In-Progress PR to accept and return all amounts in PAC units (10^9).

### Sign transaction

Now you can sign this raw transaction. To sign a transaction, first, we need to load a wallet.
At the time of writing this document, Pactus only supports the "default_wallet".
Soon, creating wallets through gRPC and loading them will be supported.

```bash
./pactus-shell --server-addr localhost:50052 \
  wallet load-wallet --wallet-name "default_wallet"
{
  "walletName":  "default_wallet"
}
```

Now that the "default_wallet" is loaded, we can proceed to sign the raw transaction:

```bash
./pactus-shell --server-addr localhost:50052 \
  wallet sign-raw-transaction \
    --wallet-name "default_wallet" \
    --password "super-secret-password" \
    --raw-transaction "AgGWBQAA6AcAAQK7FXBF458L+0uQQ4FqpoBLR+VBqgKA2cZN8jvZiLs0BWvQyGw8vL7Q7wE="
{
  "transactionId": "JZqOnVq87eWBd67LvF1bYIYiXjy/orru/vSmrir9iGA=",
  "signedRawTransaction": "AAGWBQAA6AcAAQK7FXBF458L+0uQQ4FqpoBLR+VBqgKA2cZN8jvZiLs0BWvQyGw8vL7Q7wG0VVIZZ6CfW7J91B0lcw8Ji7+hgRbB88uT8pWyxf9cTqWGLL3sIbnNA1zQol+GtO6C645tYQYi6FWxtOcgYuurrsTapgSa911ZBuToQxJ8D5hj/BPqBiAtfMFwSWlXXbUKr4CGOCCPsA+IEAY0zVpxFa/bl3VMcZF4mgeAoJLZ3hcjz2leLJG9oVvNdwqvu0U="
}
```

Transaction successfully signed.

## Broadcast signed transaction

Now you can broadcast the signed transaction:

```bash
./pactus-shell --server-addr localhost:50052 \
  transaction broadcast-transaction \
    --signed-raw-transaction "AAGWBQAA6AcAAQK7FXBF458L+0uQQ4FqpoBLR+VBqgKA2cZN8jvZiLs0BWvQyGw8vL7Q7wG0VVIZZ6CfW7J91B0lcw8Ji7+hgRbB88uT8pWyxf9cTqWGLL3sIbnNA1zQol+GtO6C645tYQYi6FWxtOcgYuurrsTapgSa911ZBuToQxJ8D5hj/BPqBiAtfMFwSWlXXbUKr4CGOCCPsA+IEAY0zVpxFa/bl3VMcZF4mgeAoJLZ3hcjz2leLJG9oVvNdwqvu0U="
{
  "id": "JZqOnVq87eWBd67LvF1bYIYiXjy/orru/vSmrir9iGA="
}
```

Transaction successfully broadcasted.

## Production Security Considerations

In this tutorial, we utilized a localnet version of Pactus.
For production purposes, you'll need to set up the node for the Mainnet and synchronize it with the network.
Additionally, in production, the wallet service is disabled by default.
You can enable the wallet service in the configuration file.

When signing transactions in production, you need to prioritize the security of the wallet.
Make sure you have set a strong password for the native wallet.
Ensure that it is called on localhost for safety.
If you intend to call it on a remote server, there are several security measures to consider:

- Ensure SSL is installed using Nginx to secure the connections.
- Secure the API using a password (currently under development; see here: [PIP-20](https://pips.pactus.org/PIPs/pip-20)).
