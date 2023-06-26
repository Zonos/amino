![amino logo](./public/logo.png)

[![npm version](https://badge.fury.io/js/@zonos%2Famino.svg)](https://www.npmjs.com/package/@zonos/amino)

> Building blocks for cross-border experiences

## Quick start

### HTTPS proxy

In order for cookies to passed properly we need to use the same domain and HTTPS. The development server runs on http by default. One solution for resolving this issue is to add [`local-ssl-proxy`](https://www.npmjs.com/package/local-ssl-proxy) to your environment so cookies will be properly seen on localhost.

```shell script
$ pnpm add -g local-ssl-proxy
```

In order for the HTTPS request to be routed properly, you will need to modify your `/etc/hosts` file and add some redirects:

```
127.0.0.1 dev.amino.zonos.com
```

<details>
  <summary>Start dev server, start proxy</summary>

In the terminal, run the following:

```sh
$ pnpm dev
```

To also open the browser to the page (https://dev.amino.zonos.com:6007), you can use:
```sh
$ pnpm dev:open
```

</details>

## Documentation

### - Available features in Amino:

- [Style generation (generate style constants and css file)](./build-utils/css/README.md)
- [Icon component generation process (generate optimized react components based on SVG downloaded from Figma/any sources)](./svgReact/icons/README.md)
- [Flag component generation process (generate optimized react components for flag svgs from smallest svg size of AWS and Figma)](./svgReact/flags/README.md)

### - Configuration

- Install and setup library dependencies
  ```
  pnpm install && pnpm build:theme
  ```
- Development
  ```
  pnpm dev
  ```
- Unit testing
  ```
  pnpm test
  ```

To run the visual tests (with puppeteer), you must have storybook open and running so puppeteer can navigate to it.

### - Release flow

1. Create a pull request after completing a task and wait for it to be approved.

2. Make sure you have no pending changes on your source control, otherwise when you run the following versioning command in step 3, it will error out and you will have to start over.

3. Once the PR is approved, determine which version you want to add to the release (patch, minor, major) and run the command below.
**Note**: When running these commands it will build the project, run the tests, and increase the version in the `package.json` file according to the version type you choose. It will also create a tag for you automatically. **(be aware that the `all.ts` file may change and you need to push it to the PR along with the version)**

- Patch
  ```
  pnpm version:patch
  ```
- Minor
  ```
  pnpm version:minor
  ```
- Major
  ```
  pnpm version:major
  ```

### - Naming rule for auto-importing suggestion

After project is bundled, all files that started with `"_"` will always be available, but VS Code will not suggest the path for the auto import suggestion.

## Visual testing

We use storyshots and puppeteer to do visual regression testing by comparing screenshots. This approach is quite brittle as browser rendering differs between version and OS.


```
pnpm test:visual
```
