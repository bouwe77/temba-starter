# Temba-Starter dev guide

## Running the smoketest

The moketest is a Temba server, created using the starter. Its purpose is to check the starter works with the current version of Temba.

To create and run a new smoketest server:

```
node test.js
cd smoketest
npm start
```

The smoketest uses the current Temba version from NPM.

## Smoketesting a pre-release

To use the smoketest for testing a not yet released Temba version, follow these steps:

1. Clone the temba repository
2. Build Temba with `npm run build`
3. In the Temba root folder run `npm link`
4. Create and start the smoketest
5. In the smoketest folder run `npm link temba`
6. To verify, run `npm ls temba`
7. Any change in the Temba build (`dist` folder) is now automatically applied to smoketest's Temba package 🎉
8. When done, in smoketest, run `npm unlink temba`

## Updating the starter

Whenever a new version of Temba is released, the starter should also be updated so it uses that new version.

The following steps need to be done:

1. In the temba-starter repo, update Temba: `npm i temba@latest`

1. (alternatively, update all dependencies by running `python3 update.py`)

1. Change the Temba dependency version in `package.template.json`

1. (or copy over `dependencies` and `devDependencies` from `package.json` to `package.template.json`)

1. Update the version number of the starter: `npm version patch|minor|major`

1. Publish to NPM: `npm publish`

1. Commit and push to GitHub

By publishing to NPM, and have users always add `@latest` to `npx create-temba-server@latest` we are always sure both existing and new users will always use the latest version.
