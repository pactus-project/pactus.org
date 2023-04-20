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

Download and extract the Pactus CLI file from [here]({{ site.baseurl }}/download/#pactus-command-line-interface-cli).

## Initializing the node

First you need to create a working directory for your validator. A working directory is a place
where you save blockchain data, config and key files.

{% tabs init %}

{% tab init windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
pactus-daemon.exe init -w c:\pactus --testnet
```

This command creates a working directory for the testnet at `c:\pactus`.

{% endtab %}

{% tab init mac <i class="fa-brands fa-apple"></i> macOS %}

```bash
./pactus-daemon init -w ~/pactus --testnet
```

This command creates a working working directory for the testnet at `~/pactus`.

{% endtab %}

{% tab init linux <i class="fa-brands fa-linux"></i> Linux %}

```bash
./pactus-daemon init -w ~/pactus --testnet
```

This command creates a working working directory for the testnet at `~/pactus`.

{% endtab %}

{% endtabs %}

Working directory contains:

- Default wallet
- Genesis file
- Config file

Feel free to take a look at these files.

## Running the node (CLI)

Now you can start the node and sync with the testnet. This may take several hours:
First, open the command line interface in your computer. Then:

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

---
