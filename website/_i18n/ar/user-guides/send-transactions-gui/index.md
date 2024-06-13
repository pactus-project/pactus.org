---
version: 2
---

## Preface

The Pactus Blockchain offers a Graphical User Interface (GUI) that comes with a built-in wallet to create,
sign and broadcast transactions.
This tutorial aims to guide you step-by-step on how to use the GUI application to send transactions to the Pactus blockchain.
Whether you are a beginner or an advanced user, this tutorial is suitable for you.

## Prerequisites

Before we begin, you'll need to run the Pactus GUI application and ensure that it is synced with the network.
You can find detailed instructions on how to do this in the following [tutorial](https://docs.pactus.org/docs/get-started/pactus-gui/).

## Sending a Transfer Transaction

To send a [transfer transaction](https://docs.pactus.org/docs/concepts/transaction/transfer/), click on the "Transaction" menu and
select "Transfer."
This will bring up a new window where you can select the
[account](https://docs.pactus.org/docs/concepts/blockchain/account/) address from which you wish to send the transfer,
as well as the recipient's account address and the amount you wish to send.

After reviewing the transaction details and ensuring that they are correct,
click on the "Send" button to sign and broadcast the transaction to the Pactus blockchain.

![Transfer Transaction Dialog]({{ site.url }}/user-guides/send-transactions-gui/transfer-transaction-dialog.png)

It's important to note that the [transaction fee](https://docs.pactus.org/docs/concepts/transaction/fee/)
will be calculated based on the amount you're sending.

## Sending a Bond Transaction

To send a [bond transaction](https://docs.pactus.org/docs/concepts/transaction/bond/), navigate to the "Transaction" menu
and select "Bond."
A new window will appear where you can select the account address from which you wish to send the bond transaction,
as well as the [validator](https://docs.pactus.org/docs/concepts/blockchain/validator/) address of the recipient and
the amount you wish to stake.

If the validator address is not already registered on the Pactus blockchain, you will need to provide the
validator's public key as the first staking transaction will create the validator on the Pactus blockchain.
To obtain the public key, you can right-click on the validator's address in your wallet
and select "Details."

![Bond Transaction Dialog]({{ site.url }}/user-guides/send-transactions-gui/bond-transaction-dialog.png)

It's important to note that the [transaction fee](https://docs.pactus.org/docs/concepts/transaction/fee/)
will be calculated based on the amount you're sending.
