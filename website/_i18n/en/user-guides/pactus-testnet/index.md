---
version: 8
---

## Preface

Pactus Blockchain has a Test network for developers to test their software which is using Pactus, users
that are wiling to test Pactus, etc. This testnet is called Phoenix and you can interact with
phoenix with official Pactus pieces of software that you use for main network. In this guide we are
going to show how you can use them to connect and interact with Phoenix.

## Download

To get started, download and extract the Pactus software
[here]({{ site.baseurl }}/download).
Once you have downloaded and extracted the Pactus software file, you can proceed to the next step.

---

## Phoenix network

Pactus has 3 different genesis block types for mainnet, testnet and localnet (used for setting up
dev environment).  this genesis type is determined in your Pactus working directory and your wallet
file once you made or initialized it. the rest of commands can find-out the network type based on
this and there is no need to specify which network you are using.

## CLI Softwares

To interact with pheonix using wallet, daemon CLI, there is a flag called `--testnet` provided on
all CLI softwares.

{% tabs create_wallet ltr %}

{% tab create_wallet linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-wallet create --testnet
./pactus-daemon init --testnet
```

{% endtab %}

{% tab create_wallet windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-wallet.exe create --testnet
pactus-daemon.exe init --testnet
```

{% endtab %}

{% endtabs %}

You can use this flag for recover command as well.

{% alert_start info %}
<b>Wallet Address</b>
<br><br>
Pactus address have pc HRP on mainnet and a tpc HRP on testnet. any address with pc prefix is invalid
on testnet.
<br><br>
You can check pip-8 for more details on Pactus address.
{% alert_end %}

## GUI Node and wallet

Pactus also offers a GUI to run a node, if you want to use GUI as a testnet node you have to run it
wit the same flag in your terminal.

{% tabs gui_node ltr %}

{% tab gui_node linux-mac <i class="fa-brands fa-linux"></i> Linux / <i class="fa-brands fa-apple"></i> macOS %}

```text
./pactus-gui --testnet
```

{% endtab %}

{% tab gui_node windows <i class="fa-brands fa-windows"></i> Windows %}

```text
pactus-gui.exe --testnet
```

{% endtab %}

{% endtabs %}

## Notes

As it's mentioned, the rest of work will be handled by the software which read the network type from
wallet file and working directory. the rest of commands and instructions can be found in mainnet docs.

When you make multiple wallet and nodes, may you get conflicts with old wallet file or working directories.
you have to specify a new path for them using `--path` flag or just remove the old one.
