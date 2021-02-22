---
id: run-docker
title: Using Docker
---

# Running Zarb using Docker

## What is Docker

From [opensource.com](https://opensource.com/resources/what-docker):

> [Docker](https://docs.docker.com/get-docker/) is a tool designed to make it easier to create,
> deploy, and run applications by using containers. Containers allow a developer to package up an
> application with all of the parts it needs, such as libraries and other dependencies, and deploy
> it as one package. By doing so, thanks to the container, the developer can rest assured that the
> application will run on any other Linux machine regardless of any customized settings that machine
> might have that could differ from the machine used for writing and testing the code. <br> ><br> In
> a way, Docker is a bit like a virtual machine. But unlike a virtual machine, rather than creating
> a whole virtual operating system, Docker allows applications to use the same Linux kernel as the
> system that they're running on and only requires applications be shipped with things not already
> running on the host computer. This gives a significant performance boost and reduces the size of
> the application. Zarb is designed to run in any environment using docker.


## Requirment

The only thing you need is [installing docker](https://docs.docker.com/get-docker/) in your machine.
 
## Docker images

The Zarb docker images are available on [Docker Hub](https://hub.docker.com/r/zarb/zarb).

You can pull the lates image by this command:

```
docker pull zarb/zarb
```


## Running Zarb 

Let's run the Zarb and join the TestNet. First we need to create a workspace for the TestNet. 

For Windows, we create a workspace at `c:\zarb\testnet`. Run:
```
docker run -it --rm -v c:\zarb\testnet:/zarb zarb/zarb init -w /zarb --test-net
```

For Linux and Mac, we create a workspace at `~/zarb/testnet`. Run:
```
docker run -it --rm -v ~/zarb/testnet:/zarb zarb/zarb init -w /zarb --test-net
```

This command will create your workpsapce. It cointains:

- Validator's private key
- Genesis file
- Config file

Feel free to take a look at these files. 

Now you can join the TestNet. 

For Windows, simply run:
```
docker run -it -v c:\zarb\testnet:/zarb -p 8080:8080 --name zarb-testnet zarb/zarb start -w /zarb
```

For Linux and Mac, simply run:
```
docker run -it -v ~/zarb/testnet:/zarb -p 8080:8080 --name zarb-testnet zarb/zarb start -w /zarb
```

Now you can check "[http://localhost:8080](http://localhost:8080)" for the list of APIs.

## Stoping docker 

You can also stop/start the docker container:

```
docker stop zarb-testnet
docker start zarb-testnet
```
