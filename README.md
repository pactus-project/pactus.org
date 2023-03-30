# Pactus website

This repository contains all the content for the [https://pactus.org](https://pactus.org) website.

## Contributing to Documentation

Contributions to the website, including fixing typos or grammatical errors, are always welcome.
To contribute, simply edit the relevant page or open a pull request.

## Running Locally

First,Install [Jekyll](https://jekyllrb.com/docs/installation/) first. Jekyll is a simple static site generator.
Then, clone this repository and run it locally using the following commands:

```zsh
git clone https://github.com/pactus-project/pactus.org.git
cd pactus.org
bundle install
bundle exec jekyll serve
```

## Guidelines

Follow these guidelines to ensure high-quality contributions to the Pactus website project.

### Images

All images should be in `png` format.

### URLs

Please avoid using relative URLs. Instead, always use absolute URLs by making use of Jekyll's variables. Relative URLs can cause problems and it's best to avoid them.

In Jekyll, you can use `{{ site.url }}/foo` which produce `http://pactus.org/foo`.
Alternatively, you can use `{{ site.baseurl }}/foo`, which will produce an absolute URL for `/foo` based on the site language. For example, if the site language is Arabic, the URL will be `http://pactus.org/ar/foo`, and if the site language is Chinese, the URL will be `http://pactus.org/cn/foo`.

By using absolute URLs, you can ensure that all links and resources on the Pactus website will work correctly regardless of the language or location of the site visitor.

### Additional commands

There are some additional commands that help you to check and improve your changes.
First you need Install [yarn](https://yarnpkg.com/).

- Check all HTML and markdown files:
  ```
  yarn run prettier::setup
  yarn run prettier
  ```
- Lint markdown files:
  ```
  yarn run lint:md:setup
  yarn run lint:md
  ```

- Lint YAML files:
  ```
  yarn run lint:yml:setup
  yarn run lint:yml
  ```

- Check for broken links:
  ```
  htmlproofer:setup
  yarn run htmlproofer
  ```

- Remove all metadata from PNG images using [ExifTool](https://exiftool.org/):
  ```
  yarn run png:exif
  ```

- Compressing all PNG images using [pngquant](https://pngquant.org/):
  ```
  yarn run png:compress
  ```

## Deployment

Updating the main branch will automatically deploy this repository through [deploy](.github/workflows/deploy.yml) Github action.
