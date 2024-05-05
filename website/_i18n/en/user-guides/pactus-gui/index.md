---
version: 4
---

## Preface

Pactus can be run in different modes, including the command-line interface (CLI) and the graphical user interface (GUI).
This tutorial will guide you through the steps to run Pactus in GUI mode, suitable for beginner to advanced users.

## Prerequisites

Before proceeding with the steps below, ensure that you have the following:

- A computer running Windows, macOS, or Linux
- Suitable internet connection

## Download

Download the Pactus GUI installer or archived file from
[here]({{ site.baseurl }}/download/#gui).

### Code certificate issue

Windows and macOS users may encounter a warning message stating that Pactus is an untrusted application.
This is because Pactus does not have a
[code signing certificate](https://en.wikipedia.org/wiki/Code_signing).

![Code certificate issue]({{ site.url }}/user-guides/pactus-gui/code-certificate-warning.png)

A code certificate is a digital signature that verifies the identity and authenticity of the software publisher.
However, obtaining a code certificate is complex and expensive process, and requires registering a company and
passing Know Your Customer (KYC) checks.

As Pactus is an open-source and community-based application, we don't have a code certificate yet.
Therefore, you can safely ignore the warning message and proceed with installing Pactus.

## Installing

To install Pactus GUI, simply follow the on-screen instructions provided by the installer.
The process is straightforward and similar to installing any other application on your computer.

![Installing Pactus]({{ site.url }}/user-guides/pactus-gui/installing.png)

## Initializing

When you run Pactus for the first time, a wizard dialog will appear to guide you through the wallet creation and
initialization process. This process consists of several steps:

### Initialize Mode

On the first page, you will ask you how you want to create your wallet.
Select the option to "Create a new wallet from scratch" and proceed to the next page.

![Initialize mode]({{ site.url }}/user-guides/pactus-gui/initialize-mode.png)

### Wallet Seed

The next page will display your wallet seed phrase, which consists of 12 words.
It is essential to securely back up this seed phrase, as it is required for wallet recovery
in case your computer is lost, damaged, or stolen.

![Wallet seed]({{ site.url }}/user-guides/pactus-gui/wallet-seed.png)

{% alert_start warning %}
{% t dict.guide.wallet_seed_important %}
{% alert_end %}

### Seed Confirmation

In this step, you will be asked to confirm your seed phrase.
Input the 12 words you received in the previous step into the dialog.
If the seed phrase is entered correctly, you will be able to proceed to the next page.

![Seed confirmation]({{ site.url }}/user-guides/pactus-gui/seed-confirmation.png)

### Wallet Password

On this page, you will be asked to set a password for your wallet.
Enter a strong password in the first dialog box and confirm it in the second one.
This password will be used to encrypt your wallet and protect it from unauthorized access.

![Set wallet password]({{ site.url }}/user-guides/pactus-gui/wallet-password.png)

Note: Choose a strong password and keep it safe.
If you forget or lose your password, you will need your seed phrase to regain access to your wallet.

### Number of Validators

Each node in the Pactus blockchain can run up to 32 validators, and each validator can stake up to
1000 coins. Here, you can define how many validators you want to create for your node.
Select the number of validators based on the amount of coins you want to stake.

![Number of validators]({{ site.url }}/user-guides/pactus-gui/number-of-validators.png)

If you want to stake more than 32,000 coins, you need to set up a new node.

### Node Information

The last page of the initialization process shows the node information, such as the working directory, validator address,
and reward address. Review this information and click "Close" to complete the initialization process.

![Node information]({{ site.url }}/user-guides/pactus-gui/node-information.png)

Upon closing the wizard dialog, your Pactus node will start running. You are now ready to use Pactus in GUI mode.

## Running the Pactus Node

After completing the initialization process, you are ready to run the Pactus node.
Running a Pactus node allows you to synchronize with the network, enabling you to manage your wallet and
sending transactions.

### Syncing with the Network

When the Pactus node starts running, it begins syncing with the network. This process may take some time,
as your node needs to download and verify the entire blockchain history.
Please be patient while your node syncs.

![Syncing progress]({{ site.url }}/user-guides/pactus-gui/syncing-progress.png)

### Default Wallet

You can check the "Default Wallet" tab to access your wallet information. Please note that the displayed
information may not be accurate until the syncing process is complete.

![Default Wallet tab]({{ site.url }}/user-guides/pactus-gui/default-wallet.png)

In the "Default Wallet" tab, you can view your account details, including your balance and
address information such as the **validator and reward addresses**.
Your computer acts as a node and is recognized by the validator address in the Pactus network.
The reward address is the account address where you collect the
[rewards]({{ site.baseurl }}/learn/blockchain/incentive/) earned by participating in
the consensus algorithm and proposing new blocks.

To become a validator and participate in the
consensus algorithm to earn rewards, you first need to
[stake]({{ site.baseurl }}/learn/consensus/proof-of-stake/) some coins. In the next
[tutorial]({{ site.baseurl }}/user-guides/send-transactions-gui/),
we will explain how to send a Bond transaction to become a validator.

---

{% t dict.guide.by_running_pactus %}
