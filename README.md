# Pactus website

This repository contains all the content of [https://pactus.org](https://pactus.org) website.

## Contributing to Documentation

Please feel free to edit any page or open a pull request if you notice typos or grammatical errors.
Any contributions to improve the website are welcomed.

## Running Locally

Install [Jekyll](https://jekyllrb.com/docs/installation/) first. Jekyll is a simple static site generator.

Then clone this repository and running it locally by these commands:

```zsh
git clone https://github.com/pactus-project/pactus.org.git
cd pactus.org
bundle install
bundle exec jekyll serve
```

## Additional commands (Optional)

There are some additional commands that help you to check and improve your changes.
First you need Install [yarn](https://yarnpkg.com/).

Commands:
- Check all HTMl and markdown files:
  `yarn run prettier`:

- Remove all metadata from png files by running this command:
  `yarn run exif`

- Linting Markdown files:
  `yarn run lint:mdl`

- Linting YAml files:
  `yarn run lint:yml`

- Check the broken links:
  `htmlproofer --ignore-status-codes "999,429" --check_internal_hash=false --enforce-https=false ./_site`

## Deployment

Updating main branch will automatically deploy this repository through github actions.
