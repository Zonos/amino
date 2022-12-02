# Convert SVGs to React Components

These scripts were primarily created for downloading figma svgs and turning them into React components. They may be useful for any figma icons, however they were only used for flag icons.

The aim is to handle 240 flag icons and optimize them to the smallest size possible.

We have two sources for the flags AWS & Figma:

## AWS

1. Set the `ZONOS_FLAG_URL=` in .env
2. Create the folder `./svgReact/figma-flags`
3. run `yarn svgs:download:flags` or `node ./svgReact/downloadFlags.js`

## Figma

1. Select the icons to download
2. Change type to svg
3. Export files
4. Choose the Small folder
5. Add the files to the folder `./svgReact/figma-flags`

## Creating SVGs

1. The component name is based on the filename so clean it up using the `Batch Rename` VS code plugin (or rename using shell commands). The filename needs to just be the country ISO code (the same as the aws-flags). Some Figma flags have duplicate ISO codes so try to use the same one that was there before and delete the duplicates.
2. Run `yarn svgs:react:flags`
