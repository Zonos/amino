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
4. Add the files to the folder `./svgReact/figma-flags`

## Creating SVGs

1. The component name is based on the filename so clean it up using the `Batch Rename` VS code plugin
2. Choose the smaller SVG by running `yarn svgs:copy:flags` or `node ./svgReact/copySmallerFlags.js`
3. Optimize the svgs with svgo with `yarn svgs:optimize` or `svgo -f ./svgReact/smaller-flags -o ./svgReact/svgs`
   - If not already installed: `yarn global add svgo`
4. Create the svgs `yarn svgs:create` or `yarn svgs:react && yarn svgs:index && yarn svgs:format`

   - `yarn svgs:react` or `node ./svgReact ./svgReact/svgs ./svgReact/flags`
     Create React files from the SVG's
   - `yarn svgs:index` or `node ./svgReact/createIndexFile.js ./svgReact/flags`
     Create an index file for all of the flags
   - `yarn svgs:format` or `eslint svgReact --ext .tsx --fix`
     Format React files using our style-guide

5. Move the `./svgReact/flags` folder to `src/icons/flags`

// Default Icon
