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

### - Naming rule for auto-importing suggestion

After project is bundled, all files that started with `"_"` will always be available, but VS Code will not suggest the path for the auto import suggestion.

## License
