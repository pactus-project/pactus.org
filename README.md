# Pactus website

This repository contains all the content of the [https://pactus.org](https://pactus.org).

## Contributing to Documentation

Contributions to the website, including fixing typos or grammatical errors, are always welcome.
To contribute, simply edit the relevant page or open a pull request.

## Running Locally

Install [Jekyll](https://jekyllrb.com/docs/installation/) first. Jekyll is a simple static site generator.

Then, clone this repository and run it locally using the following commands:

```zsh
git clone https://github.com/pactus-project/pactus.org.git
cd pactus.org
bundle install
bundle exec jekyll serve
```

## Additional commands

There are some additional commands that help you to check and improve your changes.
First you need Install [yarn](https://yarnpkg.com/).

- Check all HTML and markdown files:
  ` yarn run prettier`

- Remove all metadata from PNG files by running this command:
  ` yarn run exif`

- Lint markdown files:
  ` yarn run lint:md`

- Lint YAML files:
  ` yarn run lint:yml`

- Check for broken links:
  ` htmlproofer --ignore-status-codes "999,429" --check_internal_hash=false --enforce-https=false ./_site`

## Deployment

Updating the main branch will automatically deploy this repository through [deploy](.github/workflows/deploy.yml) Github action.
