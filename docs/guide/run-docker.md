---
id: run-docker
title: Using Docker
---

## What is Docker

::: quote

[Docker](https://docs.docker.com/get-docker/) is a tool designed to make it easier to create,
deploy, and run applications by using containers. Containers allow a developer to package up an
application with all of the parts it needs, such as libraries and other dependencies, and deploy it
as one package. By doing so, thanks to the container, the developer can rest assured that the
application will run on any other Linux machine regardless of any customized settings that machine
might have that could differ from the machine used for writing and testing the code.

In a way, Docker is a bit like a virtual machine. But unlike a virtual machine, rather than creating
a whole virtual operating system, Docker allows applications to use the same Linux kernel as the
system that they're running on and only requires applications be shipped with things not already
running on the host computer. This gives a significant performance boost and reduces the size of the
application. Zarb is designed to run in any environment using docker.

::: right

From [OpenSource.com](https://opensource.com/resources/what-docker)

:::

## Requirement

The only thing you need is [installing docker](https://docs.docker.com/get-docker/) in your machine.
If you are using Windows please mke sure you have installed WSL.

## Docker images

The Zarb docker images are available at [Docker Hub](https://hub.docker.com/r/zarb/zarb).

You can pull the latest image by this command:

```
docker pull zarb/zarb
```

## Running Zarb using Docker

Let's run the Zarb and join the TestNet. First we need to create a workspace for the TestNet.

:::: tabs type:border-card

::: tab Window

Creating workspace at `c:\zarb\testnet`:

```
docker run -it --rm -v c:\zarb\testnet:/zarb zarb/zarb init -w /zarb --testnet
```

:::

::: tab Linux and Mac

Creating workspace at `~/zarb/testnet`:

```
docker run -it --rm -v ~/zarb/testnet:/zarb zarb/zarb init -w /zarb --testnet
```

:::

::::

Now you can join the TestNet.

:::: tabs type:border-card

::: tab Window

```
docker run -it -v c:\zarb\testnet:/zarb -p 8080:8080 --name zarb-testnet zarb/zarb start -w /zarb
```

:::

::: tab Linux and Mac

```
docker run -it -v ~/zarb/testnet:/zarb -p 8080:8080 --name zarb-testnet zarb/zarb start -w /zarb
```

:::

::::

Now you can check "[http://localhost:8080](http://localhost:8080)" for the list of APIs.

You can also stop/start the docker container:

```
docker stop zarb-testnet
docker start zarb-testnet
```

## Key generation and inspection

You can use docker to generate new keys or inspect them:

:::: tabs type:border-card

::: tab Window

```
docker run -i --rm -v c:\zarb\:/root/zarb zarb key generate
```

:::

::: tab Linux and Mac

```
docker run -i --rm -v ~/zarb/:/root/zarb zarb key generate
```

:::

::::

This command will generate a new key and save it at: `~/zarb/keystore/`

You can also inspect a key:

:::: tabs type:border-card

::: tab Window

```
docker run -i --rm -v c:\zarb\:/root/zarb zarb key inspect /root/zarb/keystore/<key_filename>.json
```

:::

::: tab Linux and Mac

```
docker run -i --rm -v ~/zarb/:/root/zarb zarb key inspect /root/zarb/keystore/<key_filename>.json
```

:::

::::
