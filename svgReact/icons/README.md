# Convert SVGs to React Components

These scripts were primarily created for downloading figma svgs and turning them into React components. You just need to put svgs in the folder under `./svgReact/icons/${FOLDER_NAME}` and adjust the config file in `svgReact/config/path.ts`.

## Structure

Main script is `index.ts` located at `svgReact/icons`. This script will optimize the svgs folder, generate svg components and `IconIndex.ts` (export all icons) from provided svgs.

Currently, there are 3 type of icon sources:
- **Figma**:
    - **Description**: Figma icons set (icons set download from Figma - source of truth of all designs).
    - **Location**: Component's location is under `src/icons` folder.
- **Custom**:
    - **Description**: Svgs that are not downloaded from Figma icon set
    - **Location**: Component's location is under `src/icons/custom` folder.
- **Legacy**:
    - **Description**: Old svgs component (these components doesn't have original svg - will be removed after found and replaced all legacy icons with new one).
    - **Location**: Component's location is under `src/icons/legacy` folder.


## Steps to run script

1. Select all and download all icons set from Figma
2. Export as svg format
3. Put downloaded svgs or folder of svgs at `svgReact/icons/${FOLDER_NAME}`

    **NOTE**:
    - Under `${FOLDER_NAME}`, if there is a folder with svgs, the component will be named after the folder name and svgs under that folder will be concatenated with folder name.
    **Ex**: Folder `Arrow Down` and the svg file inside is `Solid.svg`
    => This will generate a component with name `ArrowDownSolidIcon.tsx`

    - Under `${FOLDER_NAME}`, all components will be generated with the svg name.
    **Ex**: svg with name `Arrow Down.svg` will generate a component with name `ArrowDownIcon.tsx`.
4. Update configuration to variable `svgProcessPaths` in config file `path.ts` at `svgReact/icons/config` to initialize svg folder location, source folder, destination folder, ...
    - Config explanation:
        - `"titleComment"`: Short text comment that describes and separates icon source set in `IconIndex.ts`.

        - `"svgFolder"`: folder name that downloaded svg will be put at (just file name is needed).
        **Ex**: If all figma svg icons are downloaded and put under `svgReact/icons/svgs`. Then `svgFolder` will be `svgs`.

        - `"inputFolderPath"`: Temporary distribution folder after generating new svg components. Path needs to start with `svgReact/icons/dist`. If you want to have separate folder name `custom` for your svgs, put it under `svgReact/icons/dist/custom` and this field will be `svgReact/icons/dist/custom`

        - `"destFolder"`: Destination for generated svg components. Path needs to start with `src/icons`.
    - Example:
    ```
    {
        titleComment: 'Common',
        svgFolder: 'svgs',
        inputFolderPath: 'svgReact/icons/dist',
        destFolder: 'src/icons',
    }
    ```
4. Run `yarn svgs:react:icons` to optimize and generate icon components for you.
