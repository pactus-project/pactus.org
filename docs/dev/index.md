---
id: dev-index
title: Developer Guide
---


# Developer Guide

> NOTE: These instructions are for people who want to contribute Go source code changes. If you just want to run ethereum, use the regular [Installation Instructions](/guide/run-index.html).

This document is the entry point for developers of the Go implementation of Zarb. Developers here refer to the hands-on: who are interested in build, develop, debug, submit a bug report or pull request or contribute code to Zarb.

## Contributing

Thank you for considering to help out with the source code! We welcome contributions from anyone on the planet and beyond, and are grateful for even the smallest of fixes!

GitHub is used to track issues and contribute code, suggestions, feature requests or documentation.

If you’d like to contribute to Zarb, please fork, fix, commit and send a pull request (PR) for the maintainers to review and merge into the main code base. If you wish to submit more complex changes though, please check up with the core devs in the Zarb [Discord Server](https://discord.gg/zPqWqV85ch). to ensure those changes are in line with the general philosophy of the project and/or get some early feedback. This can reduce your effort as well as speeding up our review and merge procedures.

PRs need to be based on and opened against the main branch (unless by explicit agreement, you contribute to a complex feature branch).

Your PR will be reviewed according to the Code Review guidelines.

We encourage a PR early approach, meaning you create the PR the earliest even without the fix/feature. This will let core devs and other volunteers know you picked up an issue. These early PRs should indicate `in progress` status.
## Building and Testing

We assume that you have Go installed. Please use Go version 1.15 or later. We use the gc toolchain for development, which you can get from the Go downloads page.

We use Make for convinence so its recomended to have it installed although it's not required

Zarb supports Go modules, and uses the Go modules system to manage dependencies. Using GOPATH is not required to build Zarb.
### Building Executables

Switch to the Zarb repository root directory.

if it's your firt time building the project it's recomended to run the command below to install tools used in the project
```bash
make tools
```

You can build all code using the go tool, placing the resulting binary in $GOPATH/bin.

```bash
go install -v ./cmd/zarb
Or
make install
```

If you want to compile geth for an architecture that differs from your host, please consult our cross compilation guide.
### Testing

Testing All:
```bash
make test
Or
go test ./... -covermode=atomic
```
Running an individual test:
```bash
go test -v ./www/grpc -run TestMethod
Or
make unit_test PACKAGES=/www/grpc
```
> Note: here all tests with prefix TestMethod will be run, so if you got TestMethod, TestMethod1, then both tests will run.

For more information, see the go test flags documentation.