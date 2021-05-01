---
id: run-docker
title: Compile Zarb
---

# Compile Zarb

## 🏗️ Compile from source code

::: warning Compiling on Windows

Unfortunately you can't compile Zarb on Windows. However still you can run the Zarb using
[docker](./run-docker.md)

:::

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

## Key generation and inspection

You can generate new keys or inspect them:

```
zarb key generate -p ~/zarb/keystore/private_key_1.json
```

You can inspect the key and check the public key:

```
zarb key inspect ~/zarb/keystore/private_key_1.json
```

If you want to see the private key, run inspect command with `-e` flag. Run this flag with great

```
zarb key inspect -e ~/zarb/keystore/private_key_1.json
```

## Joining the Testnet

Let's join the testnet now. First you need to create a workspace for testnet. Like this:

```
zarb init -w ~/zarb/testnet --testnet
```

Now you can join the testnet. Simply run this command:

```
zarb start -w ~/zarb/testnet
```

Have fun 😉
