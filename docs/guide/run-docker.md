---
id: run-docker
title: Using Docker
---

# Running Zarb using Docker


## What is Docker

From [opensource.com](https://opensource.com/resources/what-docker):


> [Docker](https://docs.docker.com/get-docker/) is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.
><br>
><br>
> In a way, Docker is a bit like a virtual machine. But unlike a virtual machine, rather than creating a whole virtual operating system, Docker allows applications to use the same Linux kernel as the system that they're running on and only requires applications be shipped with things not already running on the host computer. This gives a significant performance boost and reduces the size of the application.
Zarb is designed to run in any environment using docker.

## Running Zarb using Docker

Please make sure you have installed the [Docker](https://docs.docker.com/get-docker/)
To run the Zarb using docker you need to pull the docker first.

```
docker pull zarb/zarb
```

Now let's create a workspace for the testnet:
```
docker run -it --rm -v ~/zarb/testnet:/zarb zarb/zarb init -w /zarb --test-net
```

Now we can run the zarb and join the testnet:
```
docker run -it -v ~/zarb/testnet:/zarb -p 8080:8080 --name zarb-testnet zarb/zarb start -w /zarb
```

check "http://localhost:8080" for the list of APIs.

Also you can stop/start docker:
```
docker stop zarb-testnet
docker start zarb-testnet
```