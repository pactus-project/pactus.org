---
id: run-docker
title: Compile Zarb
---

# Compile Zarb

::: warning Unfortunately you can't compile Zarb on Windows. However still you can run the Zarb
using [docker](./run-docker.md) :::

Compiling Zarb is easy. The only thing you need is downloading and installing
[go](https://golang.org/doc/install).

After installing go, first clone the project:

```
git clone https://github.com/zarbchain/zarb-go.git
```

Now you can build and test the project like this:

```
cd zarb
make
```

Run this command to make sure the Zarb is successfully compiled and installed in your machine:

```
zarb version
```

## Joining the Testnet

Let's join the testnet now. First you need to create a workspace for test-net. Like this:

```
zarb init -w ~/zarb/testnet --test-net
```

This creates a folder at `~/zarb/testnet`. It cointains:

- Validator private key
- Genesis file
- config file

Feel free to take a look at these files. Now you can join the test-net. Simply run this command:

```
zarb start -w ~/zarb/testnet
```

Have fun ;)
