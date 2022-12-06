![amino logo](./public/logo.png)

[![npm version](https://badge.fury.io/js/@amino-ui%2Fcore.svg)](https://www.npmjs.com/package/@amino-ui/core)

> Building blocks for cross-border experiences

## Quick start

## Documentation

### - Available features in Amino:

- [Style generation (generate style constants and css file)](./build-utils/css/README.md)
- [Icon component generation process (generate optimized react components based on SVG downloaded from Figma/any sources)](./svgReact/icons/README.md)
- [Flag component generation process (generate optimized react components for flag svgs from smallest svg size of AWS and Figma)](./svgReact/flags/README.md)

### - Configuration

- Install and setup library dependencies
  ```
  yarn & yarn build:theme
  ```
- Development
  ```
  yarn dev
  ```
- Unit testing
  ```
  yarn test
  ```

To run the visual tests (with puppeteer), you must have storybook open and running so puppeteer can navigate to it.

### - Release flow

1. Create a pull request after completing a task and wait for it to be approved.

2. Make sure you have no pending changes on your source control, otherwise when you run the following versioning command in step 3, it will error out and you will have to start over.

3. Once the PR is approved, determine which version you want to add to the release (patch, minor, major) and run the command below.
**Note**: When running these commands it will build the project, run the tests, and increase the version in the `package.json` file according to the version type you choose. It will also create a tag for you automatically. **(be aware that the `all.ts` file may change and you need to push it to the PR along with the version)**

- Patch
  ```
  yarn version:patch
  ```
- Minor
  ```
  yarn version:minor
  ```
- Major
  ```
  yarn version:major
  ```

### - Naming rule for auto-importing suggestion

After project is bundled, all files that started with `"_"` will always be available, but VS Code will not suggest the path for the auto import suggestion.

## License
