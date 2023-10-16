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

1. Obtain or create a Temba build on your local computer. Typically by checking out the Temba repo, and run `npm run build` there

2. `cd` into the temba-starter project folder, and copy Temba's `dist` folder to the `temba-prelease` folder:

```
rm -rf temba-prerelease
mkdir ./temba-prerelease
cp -r ../temba/dist/* ./temba-prerelease
```

3. Run `node test.js` to create a smoketest server.

4. Stop the automatically started server.

5. Open `./smoketest/src/server.js` and change the Temba import to:

```
import { create } from "../../temba-prerelease/index.js";
```

5. `npm start` the smoketest server, so now it uses the prerelease instead of the NPM version.

When you want to keep the smoketest server, but just want to update the Temba prerelease again:

```
rm -rf temba-prerelease
mkdir ./temba-prerelease
cp -r ../temba/dist/* ./temba-prerelease
```

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
