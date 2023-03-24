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

### URLs

Please avoid using relative URLs. Instead, always use absolute URLs by making use of Jekyll's variables. Relative URLs can cause problems and it's best to avoid them.

In Jekyll, you can use `{{ site.url }}/foo` which produce `http://pactus.org/foo`.
Alternatively, you can use `{{ site.baseurl }}/foo`, which will produce an absolute URL for `/foo` based on the site language. For example, if the site language is Arabic, the URL will be `http://pactus.org/ar/foo`, and if the site language is Chinese, the URL will be `http://pactus.org/cn/foo`.

By using absolute URLs, you can ensure that all links and resources on the Pactus website will work correctly regardless of the language or location of the site visitor.

## Additional commands

There are some additional commands that help you to check and improve your changes.
First you need Install [yarn](https://yarnpkg.com/).

- Check all HTML and markdown files:
  `yarn run prettier`

- Remove all metadata from PNG files by running this command:
  `yarn run exif`

- Lint markdown files:
  `yarn run lint:md`

- Lint YAML files:
  `yarn run lint:yml`

- Check for broken links:
  `tarn run htmlproofer`

## Deployment

Updating the main branch will automatically deploy this repository through [deploy](.github/workflows/deploy.yml) Github action.
