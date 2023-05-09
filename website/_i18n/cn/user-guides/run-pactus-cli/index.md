---
version: 1
---

## Preface

Pactus can be run in different modes, including the command-line interface (CLI) and the graphical user interface (GUI).
This tutorial will guide you through the steps to run Pactus in CLI mode, suitable for advanced users.

## Prerequisites

Before proceeding with the steps below, ensure that you have the following:

- A computer running Windows, macOS, or Linux
- Suitable internet connection

## Download

To get started, download and extract the Pactus CLI file from
[here]({{ site.baseurl }}/download/#pactus-command-line-interface-cli).

## Initializing the node

Now you need to create a wallet and setup a working directory for your node.
A working directory is a place where you save blockchain data and wallets.
Open the Terminal and run the following command:

{% tabs init %}

{% tab init windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
pactus-daemon.exe init -w c:\pactus --testnet
```

This command creates your wallet and setup the working working directory at `c:\pactus`.

{% endtab %}

{% tab init mac <i class="fa-brands fa-apple"></i> macOS %}

```bash
./pactus-daemon init -w ~/pactus --testnet
```

This command creates your wallet and setup the working working directory at `~/pactus`.

{% endtab %}

{% tab init linux <i class="fa-brands fa-linux"></i> Linux %}

```bash
./pactus-daemon init -w ~/pactus --testnet
```

This command creates your wallet and setup the working working directory at `~/pactus`.

{% endtab %}

{% endtabs %}

Make sure you write down your 12-word mnemonic on a piece of paper to recover your wallet in the future
in case your computer is lost, damaged, or stolen.

The working directory contains:

- Default wallet
- Genesis file
- Config file

Feel free to take a look at these files.

## Running the node

Now you can start the node and sync with the network. Run the following command in the Terminal:

{% tabs start %}

{% tab start windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
pactus-daemon.exe start -w c:\pactus
```

{% endtab %}

{% tab start mac <i class="fa-brands fa-apple"></i> macOS %}

```bash
./pactus-daemon start -w ~/pactus
```

{% endtab %}

{% tab start linux <i class="fa-brands fa-linux"></i> Linux%}

```bash
./pactus-daemon start -w ~/pactus
```

{% endtab %}

{% endtabs %}

When the Pactus node starts running, it begins syncing with the network.
This process may take some time, as your node needs to download and verify the entire blockchain history.
Please be patient while your node syncs.

To become a validator and participate in the
consensus algorithm to earn rewards, you first need to
[stake]({{ site.baseurl }}/learn/consensus/proof-of-stake/) some coins. In the next
[tutorial]({{ site.baseurl }}/user-guides/use-wallet-cli/#sending-a-bond-transaction),
we will explain how to send a Bond transaction to become a validator.

---

By running a Pactus node, you contribute to the decentralization and security of the Pactus blockchain network.
Thank you for your participation!
