# Pactus.org

This repository contains all the information about pactus blockchain. You might check
[https://pactus.org](https://pactus.org) to see the compiled version of this repository.

## Contributing to Documentation

Please feel free to open a pull request if you notice typos or grammatical errors. Any contributions
on this wiki are welcomed.

## Running Locally

You can clone this repository and running it locally by using these commands:

```zsh
git clone https://github.com/pactus-project/pactus.org.git
cd pactus.org
yarn install
yarn dev
```

## Style Guide

Use [Prettier](https://prettier.io/) to format markdown pages. To run Prettier on the docs folder,
run:

```
yarn prettier --write ./docs/
```

## Removing all EXIF meta data from png files

You can remove all metadata from png files by running this command:

```
cd docs/assets/images
for i in *.png; do echo "Processing $i"; exiftool -all= "$i"; done
```

## Deployments

Updating main branch will automatically deploy this repository through github actions.
