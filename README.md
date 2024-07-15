# Pactus website

This repository contains all the content for the [https://pactus.org](https://pactus.org) website.

## Contributing to Documentation

Contributions to the website, including fixing typos or grammatical errors, are always welcome.
To contribute, simply edit the relevant page or open a pull request.

## Running Locally

To get started, install [Jekyll](https://jekyllrb.com/docs/installation/), first.
Additionally, make sure to install [Yarn](https://yarnpkg.com/)
for efficient dependency management, including [Bootstrap](https://getbootstrap.com/).

Now, clone this repository and run it locally using the following commands:

```zsh
git clone https://github.com/pactus-project/pactus.org.git
cd pactus.org
yarn install ## To install bootstrap
bundle install
bundle exec jekyll serve
```

## Guidelines

Follow these guidelines to ensure high-quality contributions to the Pactus website project.

### Images

For best results, use PNG images on this site.
We compress PNGs during the build process using [pngquant](https://pngquant.org/) to reduce file size without sacrificing quality.

### URLs

Please avoid using relative URLs. Instead, always use absolute URLs by making use of Jekyll's variables.
Relative URLs can cause problems and it's best to avoid them.

In Jekyll, you can use `{{ site.url }}/foo` which produce `http://pactus.org/foo`.
Alternatively, you can use `{{ site.baseurl }}/foo`, which will produce an absolute URL for `/foo` based on the site language.
For example, if the site language is Arabic, the URL will be `http://pactus.org/ar/foo`,
and if the site language is Chinese, the URL will be `http://pactus.org/zh/foo`.

By using absolute URLs, you can ensure that all links and resources on the Pactus website will work correctly
regardless of the language or location of the site visitor.

### Additional commands

There are some additional commands that help you to check and improve your changes.
First you need Install [yarn](https://yarnpkg.com/).

- Check all HTML and markdown files:

  ```bash
  yarn run prettier::setup
  yarn run prettier
  ```

- Lint markdown files:

  ```bash
  yarn run lint:md:setup
  yarn run lint:md
  ```

- Lint YAML files:

  ```bash
  yarn run lint:yml:setup
  yarn run lint:yml
  ```

- Check for broken links:

  ```bash
  yarn run htmlproofer:setup
  yarn run htmlproofer
  ```

- Remove all metadata from PNG images using [ExifTool](https://exiftool.org/):

  ```bash
  yarn run exif
  ```

## Markdown

Markdown is a lightweight markup language that uses plain text formatting syntax to convert text into HTML,
making it easy to read and write for web content.

### Linting

Markdown linting helps ensure consistent style and formatting, detects syntax errors, improves readability,
and maintains best practices in Markdown documents.

To lint Markdown files, you can use the `mdl` ([MarkdownLint](https://github.com/DavidAnson/markdownlint)) command-line tool.
This tool checks your Markdown files against a set of rules and provides feedback on any issues found.

To install `mdl`, first you need to install [Ruby](https://www.ruby-lang.org/en/documentation/installation/).
Once you ensure Ruby installed on your system, you can install `mdl` by running:

```sh
gem install mdl
```

Then you can lint your Markdown files with the following command:

```sh
mdl --style=.mdlrc.rb ./content
```

This command will check all documents in the `content` folder for any linting issues and output them in the terminal.

## Deployment

Updating the main branch will automatically deploy this repository through [deploy](.github/workflows/deploy.yml) Github action.
