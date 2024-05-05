---
version: 8
---

## Preface

Pactus Blockchain has introduced a Test network called Phoenix for developers and users to test their
software utilizing Pactus technology. This guide will demonstrate how to connect and interact with
Phoenix using official Pactus software designed for the main network.

## Download

To get started, download and extract the Pactus software
[here]({{ site.baseurl }}/download).
Once you have downloaded and extracted the Pactus software file, you can proceed to the next step.

---

## Phoenix Network

Pactus offers three distinct genesis block types for mainnet, testnet, and localnet
(used for developing a dev environment). The genesis type is defined within your Pactus working
directory and wallet file once it has been created or initialized. Subsequent commands will
automatically determine the network type based on this information, eliminating the need to specify
the network being used.

## CLI Softwares

To interact with phoenix using wallet, daemon CLI, there is a flag called `--testnet` provided on
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
Pactus addresses have pc HRP on Mainnet and a tpc HRP on testnet.
Addresses with pc prefix are invalid on Testnet.
on testnet.
<br><br>
You can check pip-8 for more details on Pactus address.
{% alert_end %}

## GUI Node and Wallet

Pactus also offers a GUI to run a node, if you want to use GUI as a testnet node you have to run it
with the same flag in your terminal.

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
wallet file and working directory. the rest of the commands and instructions can be found in mainnet
docs.

When you make multiple wallets and nodes, you may get conflicts with old wallet file or working
directories.
You have to specify a new path for them using `--path` flag or just remove the old one.
