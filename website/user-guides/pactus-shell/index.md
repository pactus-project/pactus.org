---
layout: guide
title: How to use Pactus Shell?
---

# How to use Pactus Shell?

Pactus Shell is a command-line tool designed for interacting with the Pactus blockchain.
This tool receives the commands from the terminal and send them to the node using gRPC.
The resulting response is then displayed as a structured [JSON](https://www.json.org) format.

You can execute `pactus-shell` with the `-h` flag to display available commands for communicating with your node.

```bash
./pactus-shell -h
```

## Example

Suppose you want to get the latest blockchain information.
In that case, you can use the following command in the `pactus-shell`:

```bash
./pactus-shell blockchain get-blockchain-info
```

## Server address

By default, the exposed port of the Pactus gRPC node is `50051`.
Therefore, when you use `pactus-shell`, it automatically attempts to connect to `localhost:50051`.
However, you can easily change the default address by using the `--server-addr` flag.
For instance, if you want to connect to a remote server, you can execute:

```bash
./pactus-shell blockchain get-blockchain-info --server-addr example.com:50051
```

## Security consideration

When connecting to a remote node, it's important to think about security.
You can make the node more secure in a few ways.
For instance, [set a password](https://docs.pactus.org/docs/tutorials/grpc-basic-auth/) for the gRPC service,
or use [NGINX](https://www.nginx.com/blog/nginx-1-13-10-grpc/) to enable TLS/SSL for your node.
