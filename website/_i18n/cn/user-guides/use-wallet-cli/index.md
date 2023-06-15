---
version: 2
---

## Preface

The Pactus Blockchain provides a wallet application that allows users to interact with the Pactus blockchain
without the need to run a node.
This is ideal for users who do not wish to operate a node but still want to create a personal wallet to manage their funds.
This tutorial will guide you step-by-step on how to use the wallet application.

## Download

To get started, download and extract the Pactus CLI file from
[here]({{ site.baseurl }}/download/#pactus-command-line-interface-cli).

---

## Wallet commands

In this section, we will explore various wallet commands that help you create, manage,
and recover your Pactus wallet.

### Create a wallet

First, you need to create a wallet. To create a new wallet, run the following command:

{% tabs create_wallet ltr %}

{% tab create_wallet linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 create
```

This command creates a new wallet and store it in the `~/pactus/wallets/wallet_1`.

{% endtab %}

{% tab create_wallet mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 create
```

This command creates a new wallet and store it in the `~/pactus/wallets/wallet_1`.

{% endtab %}

{% tab create_wallet windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 create --testnet
```

This command creates a new wallet and save it in the c:\pactus\wallets\wallet_1 directory.
This command creates a new wallet and store it in the `c:\pactus\wallets\wallet_1`.

{% endtab %}

{% endtabs %}

Don't forget to back up your wallet seed, as it allows you to recover your wallet if you lose it.

### Wallet password

You can change the wallet password by tunning this command:

{% tabs wallet_password ltr %}

{% tab wallet_password linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 password
```

{% endtab %}

{% tab wallet_password mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 password
```

{% endtab %}

{% tab wallet_password windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 password
```

{% endtab %}

{% endtabs %}

If you forget your password, you can still recover your wallet using the wallet seed.

### Wallet seed

You can obtain the wallet seed by running this command:

{% tabs wallet_seed ltr %}

{% tab wallet_seed linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 seed
```

{% endtab %}

{% tab wallet_seed mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 seed
```

{% endtab %}

{% tab wallet_seed windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 seed
```

{% endtab %}

{% endtabs %}

The wallet seed is encrypted within your wallet, and
you'll need to enter the wallet password to access it.

### Recovering Wallet

If you lose your wallet, you can recover it by running this command:

{% tabs wallet_recover ltr %}

{% tab wallet_recover linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/recovered_wallet recover
```

{% endtab %}

{% tab wallet_recover mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/recovered_wallet recover
```

{% endtab %}

{% tab wallet_recover windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\recovered_wallet recover
```

{% endtab %}

{% endtabs %}

Please note that if you lose your seed, there is no way to recover your wallet.

---

## Address commands

In this section, we'll cover address commands that help you manage your wallet addresses.

### Creating new address

You can create a new address by running this command:

{% tabs address_new ltr %}

{% tab address_new linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 address new
```

{% endtab %}

{% tab address_new mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 address new
```

{% endtab %}

{% tab address_new windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 address new
```

{% endtab %}

{% endtabs %}

You can also assign a label to your address to better organize your address book.

### List of addresses

To view the list of wallet addresses, use this command:

{% tabs address_all ltr %}

{% tab address_all linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 address all
```

{% endtab %}

{% tab address_all mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 address all
```

{% endtab %}

{% tab address_all windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 address all
```

{% endtab %}

{% endtabs %}

### Get Public key

To obtain the public key for a specific address, run this command:

{% tabs address_pub ltr %}

{% tab address_pub linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 address pub <ADDRESS>
```

{% endtab %}

{% tab address_pub mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 address pub <ADDRESS>
```

{% endtab %}

{% tab address_pub windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 address pub <ADDRESS>
```

{% endtab %}

{% endtabs %}

Replace `<ADDRESS>` with the address for which you want to retrieve its public key.

### Get Private key

You can get the public key of your address by this command:

{% tabs address_prv ltr %}

{% tab address_prv linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 address pub <ADDRESS>
```

{% endtab %}

{% tab address_prv mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 address pub <ADDRESS>
```

{% endtab %}

{% tab address_prv windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 address pub <ADDRESS>
```

{% endtab %}

{% endtabs %}

Replace `<ADDRESS>` with the address for which you want to retrieve its private key.
Keep your private key secure. If someone gains access to your private key,
they will have full control over that address.

---

## Transaction commands

In this section, we'll cover transaction commands that help you create, sign, and
broadcast transactions on the Pactus Blockchain.
You'll need to provide the password to sign the transaction.
Please note that once a transaction is broadcasted, it cannot be reversed.

### Sending Transfer transaction

To create, sign, and broadcast a
[Transfer transaction]({{ site.baseurl }}/learn/transaction/transfer/), use the following command:

{% tabs tx_transfer ltr %}

{% tab tx_transfer linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 tx transfer <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_transfer mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 tx transfer <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_transfer windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 tx transfer <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% endtabs %}

In this command, `<FROM>` should be one of the addresses in your wallet as the sender address,
and `<TO>` is the receiver address.

### Sending Bond transaction

To create, sign, and broadcast a
[Bond transaction]({{ site.baseurl }}/learn/transaction/bond/), use the following command:

{% tabs tx_bond ltr %}

{% tab tx_bond linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 tx bond <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_bond mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 tx bond <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_bond windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 tx bond <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% endtabs %}

In this command, `<FROM>` should be one of the addresses in your wallet as the sender address,
and `<TO>` is the receiver validator address.

If the validator associated with this address does not exist yet,
you need to provide the public key to create it:

{% tabs tx_bond_pub ltr %}

{% tab tx_bond_pub linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 tx bond --pub <PUBLIC_KEY> <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_bond_pub mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 --pub <PUBLIC_KEY> <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_bond_pub windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 --pub <PUBLIC_KEY> <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% endtabs %}

Replace `<PUBLIC_KEY>` with the validator's public key,
which is the public key of the `<TO>` address.

### Sending Unbond transaction

To create, sign, and broadcast a
[Unbond transaction]({{ site.baseurl }}/learn/transaction/unbond/), use the following command:

{% tabs tx_unbond ltr %}

{% tab tx_unbond linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 tx unbond <ADDRESS>
```

{% endtab %}

{% tab tx_unbond mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 tx unbond <ADDRESS>
```

{% endtab %}

{% tab tx_unbond windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 tx unbond <ADDRESS>
```

{% endtab %}

{% endtabs %}

In this command, `<ADDRESS>` is the address of the validator that you want to unbond.

### Sending Withdraw transaction

To create, sign, and broadcast a
[Withdraw transaction]({{ site.baseurl }}/learn/transaction/withdraw/), use the following command:

{% tabs tx_unbond ltr %}

{% tab tx_unbond linux <i class="fa-brands fa-linux"></i> Linux %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 tx unbond <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_unbond mac <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet ~/pactus/wallets/wallet_1 tx unbond <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_unbond windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe c:\pactus\wallets\wallet_1 tx withdraw <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% endtabs %}
