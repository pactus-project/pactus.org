---
version: 8
---

## Preface

The Pactus Blockchain provides a wallet application that allows users to interact with the Pactus blockchain
without the need to run a node.
This is ideal for users who do not wish to operate a node but still want to create a personal wallet to manage their funds.
This tutorial will guide you step-by-step on how to use the wallet application.

## Download

To get started, download and extract the Pactus CLI file from
[here]({{ site.baseurl }}/download/#cli).
Once you have downloaded and extracted the Pactus CLI file, you can proceed to the next step.

---

## Wallet Commands

In this section, we will explore various wallet commands that help you create, manage,
and recover your Pactus wallet.

{% alert_start info %}
  <b>Wallet Path</b>
  <br><br>
  By default, the node's wallet is stored at `~/pactus/wallets/default_wallet` on Unix-like systems.
  On Windows, you can find it at `C:\Users\<USER_NAME>\pactus\wallets\default_wallet`.
  <br><br>
  If you wish to select or specify a different wallet, use the `--path` option.
{% alert_end %}

### Create a Wallet

To create a new wallet, run the following command:

{% tabs create_wallet ltr %}

{% tab create_wallet linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet --path <PATH-To-NEW-WALLET> create
```

{% endtab %}

{% tab create_wallet windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe --path <PATH-To-NEW-WALLET> create
```

{% endtab %}

{% endtabs %}

Replace `<PATH-To-NEW-WALLET>` with the file path where you want to create the wallet.

### Recover Wallet

If you lose your wallet or forget your password, you can recover it by running this command:

{% tabs wallet_recover ltr %}

{% tab wallet_recover linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet --path <PATH-To-NEW-WALLET> recover
```

{% endtab %}

{% tab wallet_recover windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe --path <PATH-To-NEW-WALLET> recover
```

{% endtab %}

{% endtabs %}

Replace `<PATH-To-NEW-WALLET>` with the file path where you want to restore the wallet.

### Wallet Password

You can change the wallet password by running this command:

{% tabs wallet_password ltr %}

{% tab wallet_password linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet password
```

{% endtab %}

{% tab wallet_password windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe password
```

{% endtab %}

{% endtabs %}

This command changes the password for the `default_wallet` if there is one, or sets a new password.

### Wallet Seed

You can obtain the wallet seed by running this command:

{% tabs wallet_seed ltr %}

{% tab wallet_seed linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet seed
```

{% endtab %}

{% tab wallet_seed windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe seed
```

{% endtab %}

{% endtabs %}

The wallet seed is encrypted within your wallet, and
you'll need to enter the wallet password to access it.

---

## Address Commands

In this section, we'll cover address commands that help you manage your wallet addresses.

### Creating New Address

You can create a new address by running this command:

{% tabs address_new ltr %}

{% tab address_new linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet address new
```

{% endtab %}

{% tab address_new windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe address new
```

{% endtab %}

{% endtabs %}

Based on [PIP-8](https://pips.pactus.org/PIPs/pip-8), an address string conducts its type and usage.
By default, the above command creates an account address.
If you want to create a validator address instead, you can use the `--type validator` option with the command like this:

{% tabs address_new_val ltr %}

{% tab address_new_val linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet address new --type validator
```

{% endtab %}

{% tab address_new_val windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe address new --type validator
```

{% endtab %}

{% endtabs %}

You can also assign a label to your address to better organize your address book.

### List of Addresses

To view the list of wallet addresses, use this command:

{% tabs address_all ltr %}

{% tab address_all linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet address all
```

{% endtab %}

{% tab address_all windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe address all
```

{% endtab %}

{% endtabs %}

### Get Public Key

To obtain the public key for a specific address, run this command:

{% tabs address_pub ltr %}

{% tab address_pub linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet address pub <ADDRESS>
```

{% endtab %}

{% tab address_pub windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe address pub <ADDRESS>
```

{% endtab %}

{% endtabs %}

Replace `<ADDRESS>` with the address for which you want to retrieve its public key.

### Get Private Key

You can get the private key of your address by this command:

{% tabs address_prv ltr %}

{% tab address_prv linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet address priv <ADDRESS>
```

{% endtab %}

{% tab address_prv windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe address priv <ADDRESS>
```

{% endtab %}

{% endtabs %}

Replace `<ADDRESS>` with the address for which you want to retrieve its private key.
Keep your private key secure. If someone gains access to your private key,
they will have full control over that address.

### Get Address Balance

You can get the balance of your address by this command:

{% tabs address_bal ltr %}

{% tab address_bal linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet address balance <ADDRESS>
```

{% endtab %}

{% tab address_bal windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe address balance <ADDRESS>
```

{% endtab %}

{% endtabs %}

Replace `<ADDRESS>` with the address for which you want to retrieve your balance.

---

## Transaction Commands

In this section, we'll cover transaction commands that help you create, sign, and
broadcast transactions on the Pactus Blockchain.
You'll need to provide the password to sign the transaction.
Please note that once a transaction is broadcasted, it cannot be reversed.

### Sending Transfer Transaction

To create, sign, and broadcast a
[Transfer transaction]({{ site.baseurl }}/learn/transaction/transfer/), use the following command:

{% tabs tx_transfer ltr %}

{% tab tx_transfer linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet tx transfer <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_transfer windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe tx transfer <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% endtabs %}

In this command, `<FROM>` should be one of the addresses in your wallet as the sender address,
and `<TO>` is the receiver address.

### Sending Bond Transaction

To create, sign, and broadcast a
[Bond transaction]({{ site.baseurl }}/learn/transaction/bond/), use the following command:

{% tabs tx_bond ltr %}

{% tab tx_bond linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet tx bond <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_bond windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe tx bond <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% endtabs %}

In this command, `<FROM>` should be one of the addresses in your wallet as the sender address,
and `<TO>` is the receiver validator address.

If the validator associated with this address does not exist yet,
you need to provide the public key to create it:

{% tabs tx_bond_pub ltr %}

{% tab tx_bond_pub linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet tx bond --pub <PUBLIC_KEY> <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_bond_pub windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe --pub <PUBLIC_KEY> <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% endtabs %}

Replace `<PUBLIC_KEY>` with the validator's public key,
which is the public key of the `<TO>` address.

### Sending Unbond Transaction

To create, sign, and broadcast a
[Unbond transaction]({{ site.baseurl }}/learn/transaction/unbond/), use the following command:

{% tabs tx_unbond ltr %}

{% tab tx_unbond linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet tx unbond <ADDRESS>
```

{% endtab %}

{% tab tx_unbond windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe tx unbond <ADDRESS>
```

{% endtab %}

{% endtabs %}

In this command, `<ADDRESS>` is the address of the validator that you want to unbond.

### Sending Withdraw Transaction

To create, sign, and broadcast a
[Withdraw transaction]({{ site.baseurl }}/learn/transaction/withdraw/), use the following command:

{% tabs tx_withdraw ltr %}

{% tab tx_withdraw linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet tx unbond <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% tab tx_withdraw windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe tx withdraw <FROM> <TO> <AMOUNT>
```

{% endtab %}

{% endtabs %}
