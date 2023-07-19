# Temba-Starter dev guide

## Updating the starter

Whenever a new version of Temba is released, the starter should also be updated so it uses that new version.

The following steps need to be done:

1. In the temba-starter repo, update Temba: `npm i temba@latest`

1. (alternatively, update all dependencies by running `python3 update.py`)

1. Change the Temba dependency version in `package.template.json`

1. Update the version number of the starter: `npm version patch|minor|major`

1. (or copy over `dependencies` and `devDependencies` from `package.json` to `package.template.json`)

1. Publish to NPM: `npm publish`

1. Commit and push to GitHub

By publishing to NPM, and have users always add `@latest` to `npx create-temba-server@latest` we are always sure both existing and new users will always use the latest version.