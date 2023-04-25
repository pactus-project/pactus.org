---
version: 2
---

## Preface

Docker is a tool that simplifies the process of creating, deploying, and running applications using containers.
With containers, developers can bundle all the necessary parts of an application, including libraries and dependencies,
and deploy them as a single package.

In this document, we will guide you on how to run Pactus using Docker, step by step.

## Prerequisites

The only thing you need is [installing docker](https://docs.docker.com/get-docker/) in your machine.
If you are using Windows please make sure you have installed WSL.

## Docker Images

The Pactus docker images are available at [Docker Hub](https://hub.docker.com/r/pactus/pactus).
You can pull the latest image with this command:

```text
docker pull pactus/pactus
```

## Initializing the node

Now you need to create a wallet and setup a working directory for your node.
A working directory is a place where you save blockchain data and wallets.
Open the Terminal and run the following command:

{% tabs init %}

{% tab init windows <i class="fa-brands fa-windows"></i> Windows %}

```powershell
docker run -it --rm -v c:\pactus\testnet:/pactus pactus/pactus init -w /pactus --testnet
```

This command creates your wallet and setup the working working directory at `c:\pactus\testnet`.

{% endtab %}

{% tab init mac <i class="fa-brands fa-apple"></i> macOS %}

```bash
docker run -it --rm -v ~/pactus/testnet:/pactus pactus/pactus init -w /pactus --testnet
```

This command creates your wallet and setup the working working directory at `~/pactus/testnet`.

{% endtab %}

{% tab init linux <i class="fa-brands fa-linux"></i> Linux %}

```bash
docker run -it --rm -v ~/pactus/testnet:/pactus pactus/pactus init -w /pactus --testnet
```

This command creates your wallet and setup the working working directory at `~/pactus/testnet`.

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
docker run -it -v c:\pactus\testnet:/pactus -p 8080:8080 -p 21777:21777 --name pactus-testnet pactus/pactus start -w /pactus
```

{% endtab %}

{% tab start mac <i class="fa-brands fa-apple"></i> macOS %}

```bash
docker run -it -v ~/pactus/testnet:/pactus -p 8080:8080 -p 21777:21777 --name pactus-testnet pactus/pactus start -w /pactus
```

{% endtab %}

{% tab start linux <i class="fa-brands fa-linux"></i> Linux%}

```bash
docker run -it -v ~/pactus/testnet:/pactus -p 8080:8080 -p 21777:21777 --name pactus-testnet pactus/pactus start -w /pactus
```

{% endtab %}

{% endtabs %}

You can stop/start docker:

```bash
docker stop pactus-testnet
docker start pactus-testnet
```

Or check the logs:

```bash
docker logs pactus-testnet --tail 1000 -f
```

---

By running a Pactus node, you contribute to the decentralization and security of the Pactus blockchain network.
Thank you for your participation!
