# **Build styles process**

This script is primarily created for generating accessible style constants and css file from configured style constant to benefit from strongly typed css variable and jsdocs support for Amino consumers.

- Sub script for generating color css constant from the color svgs downloaded from Figma, and checking if any generated color constants are not being imported/used in the main `theme.ts`, also generating dynamic constants to be consumed in `build-utils/css/constants/theme.ts`.
- Main script for this whole building process is `build-utils/css/buildTheme.ts`.

## **Table content**
- [**Build styles process**](#build-styles-process)
  - [**Table content**](#table-content)
  - [**Building colors process**](#building-colors-process)
    - [Overview](#overview)
    - [When you run the script, it will:](#when-you-run-the-script-it-will)
    - [How to](#how-to)
      - [Update Amino color variables with existing or new Figma icon set](#update-amino-color-variables-with-existing-or-new-figma-icon-set)
  - [**Generating dynamic constant process**](#generating-dynamic-constant-process)
    - [Overview](#overview-1)
    - [When you run the script, it will:](#when-you-run-the-script-it-will-1)
    - [How to:](#how-to-1)
      - [Create a logic file](#create-a-logic-file)
      - [Import generated file in theme file (`theme.ts` | `_night.ts`)](#import-generated-file-in-theme-file-themets--_nightts)
  - [**Building process**](#building-process)
    - [Overview](#overview-2)
    - [When you run the script, it will:](#when-you-run-the-script-it-will-2)
    - [How to](#how-to-2)
      - [Deprecate a variable](#deprecate-a-variable)
      - [Add/adjust variable](#addadjust-variable)
      - [Update new theme](#update-new-theme)

---

### When you run the script, it will:

1. Read through all the files om `build-utils/css/colorSvgs` to look for svgs that are downloaded from Figma. Base on the svg downloaded from Figma, the name of the svg will be separated into 2 parts:  "color name" and "color intensity" (Ex: "Blue500"). And the color code can be found in `fill` property of a `rect` tag in the svg. In this first step, the script will extract all of necessary data (color name, color code and color intensity) for step 2.
2. Generating color constant with the file naming convention: `_${color}.ts`, and having the new color code as well as the deprecated code. Below is the example of the generated constant (blue).
Ex:
    ```
    // File name: _blue.ts
    export const blue = {
        /** @info #E8EBFC  */
        'blue-100': '#E8EBFC',
        /** @info #C9CFF8  */
        'blue-200': '#C9CFF8',
        /** @info #96A2F3  */
        'blue-300': '#96A2F3',
        /** @info #7081F0  */
        'blue-400': '#7081F0',
        /** @info #586CEE  */
        'blue-500': '#586CEE',
        /** @info #475FE9  */
        'blue-600': '#475FE9',
        /** @info #3A4ECF  */
        'blue-700': '#3A4ECF',
        /** @info #2A3BAC  */
        'blue-800': '#2A3BAC',
        /** @info #1C2662  */
        'blue-900': '#1C2662',
        /** @info #13193F  */
        'blue-1000': '#13193F',

        /** @deprecated use blue100 instead */
        'blue-l80': 'var(--amino-blue-100)',
        /** @deprecated use blue300 instead */
        'blue-l60': 'var(--amino-blue-300)',
        /** @deprecated use blue400 instead */
        'blue-l40': 'var(--amino-blue-400)',
        /** @deprecated use blue500 instead */
        'blue-l20': 'var(--amino-blue-500)',
        /** @deprecated use blue600 instead */
        'blue-base': 'var(--amino-blue-600)',
        /** @deprecated use blue700 instead */
        'blue-d20': 'var(--amino-blue-700)',
        /** @deprecated use blue800 instead */
        'blue-d40': 'var(--amino-blue-800)',
        /** @deprecated use blue900 instead */
        'blue-d60': 'var(--amino-blue-900)',
        /** @deprecated use blue1000 instead */
        'blue-d80': 'var(--amino-blue-1000)',
    } as const;
    ```
3. The build process is programmed to terminate the process if there is an unused color constant in `build-utils/css/constants/generated/colors` folder. So remember to use that generated constant in the main theme file `theme.ts`.

### How to

#### Update Amino color variables with existing or new Figma icon set

<details>

> **NOTE: Don't touch the generated color constant because it will be overwritten everytime you run `yarn build` or `yarn build:theme`, work with the svg in `build-utils/css/colorSvgs` instead.**

There would be 2 cases: the variable exists and you just want to update the color code, or adding brand new color variable (Ex: `Gray2000`). The steps below can apply to both cases.
1. Download the color set svg from Figma (either every color sets or just the one you want to update) that you want to update in Amino, by selecting the whole component of each color in the color set palette (the designer shoud name the component name the same as text inside of component, ask them to rename it if this is not the case) and exporting them to svg format
2. Put all of the exported svgs into `build-utils/css/colorSvgs` folder, and make sure the component name is in CamelCase (Blue100.svg, Blue200.svg, ...). Helpful terminal command to rename files: `rename 's/^/Orange/' *.svg` Which would prefix all svgs with "Orange".
3. **SKIP THIS STEP if the variable name doesn't change. If the variable from the Figma and the current variable are different (like the variable name before was `BlueL80` and now it become `Blue100`).**
    - Look into `build-utils/css/utils/generateColorConstantFromSvgs/generateFileContent.ts` file.
    - Adjust the mapping configuration for the color in the mapping array `deprecatedIntensityMapping`. In the object, the key on the left would be the legacy color suffix and the value on the right would be the new one. This mapping configuration would also add the legacy colors down below and add the `@deprecated` tag above it after the content of the new color.
    - You can also adjust the content of constant `content` in the function `generateFileContent` to modify what's being generated if needed (Like add jsdocs or change text or adding more deprecated color).
4. Run the command below to trigger the generation process.
    ```yarn build:colors```
5. Import and use the generated constant in the `theme.ts` by spreading the constant variable (you can find out more details [here](#import-generated-file-in-theme-file-themets--_nightts)).
    ```
        // File name: `theme.ts`
        import { blue } from './generated/colors/_blue';
        export const theme = {
            ...blue,
        } as const
    ```
> **NOTE**: If there is any unused generated color constants and you run command `yarn build:theme` or `yarn build`. The building process will be terminated intentionally to tell you which color files are not being used. You can either delete the unused svgs so that it will not generate the constant and remove the referencing constant in the `build-utils/css/constants/generated/colors` folder, or use them in the main theme constant `theme.ts`.
</details>

---
## **Generating dynamic constant process**
### Overview
(**Included script to generate template for generating a content**)
**REASON**: Typescript will not read and provide jsdocs info on the spread operators (Ex: `...sthing`), so we can't benefit from jsdocs tag when using typescript key suggestion.

### When you run the script, it will:

1. Read through all the files in `build-utils/css/constants/logics`, class `LogicConstant` in `build-utils/css/class` will:

   - Parse the given file.
   - Validate the file and throw error message if the file doesn't have specific function or constant.
   - Generate constant variables based on the logic provided in the function with pattern `get{{CapitalizedFileNameNoUnderScore}}ConstantKeyValuePairs`. Adding @jsdocs comment if `hasJSDocsComment` is `true`, and the logic for the JSDocs comment will be a function with convention `get{{CapitalizedFileName}}ConstantCustomizedComment`.
   - Put the generated file at `build-utils/css/constants/generated`

2. All theme files in `build-utils/css/constants/*.ts` now can import the generated files in `build-utils/css/constants/generated` by using spread variables (Ex: `...space`). Then when you command `yarn build:theme`, the process will use static function `transformImportedConstant` in class `LogicConstant` to convert/transform the file `theme.ts` into typescript jsdocs friendly (it basically will find all import lines in `theme.ts` and import them, then replace the spread value with content in each imported file).

### How to:

#### Create a logic file

<details>

1. Run the command below to generate the dummy content for your new dynamic constant logic.
   ```
   yarn template:logic-constant yourFileName
   ```
2.  The generated file now will be located at `build-utils/css/constants/logics` with name `_yourFileName.ts`.
3.  Put logic of how you want the key/value pair in constant to look like in function `get{{CapitalizedFileName}}ConstantKeyValuePairs`.
   Ex:

    ````
    export const getYourFileNameConstantKeyValuePairs: ConstantKeyValuePairsType = () => {
        const contentArr: Record<string, string> = {};

        /** Put logic here to generate constant key value pairs */
        for (let i=0; i<5; i++) {
            // this will return a constant looks like `{"key-1": "value-1", "key-2": "value-2", ...}.
            contentArr[`key-${i}`] = `value-${i}`;
        }
        return contentArr;
    };

    ````

4.  Put logic of how you want @jsdocs tag to be generated to look like with each key/value pair in constant in function `getYourFileNameConstantCustomizedComment`. Leave it as it is if you want it to use the default one.
   Ex:
   `` export const getYourFileNameConstantCustomizedComment: ConstantCustomizedComment = ({ key, value, }) => { /** Put logic here to generate jsdocs string for each line in constant */ return `${key}: ${value}`; }; ``
5.  Turn the flag `hasJSDocsComment` on or off wether to enable showing jsdocs.
6.  Run command `'yarn build:logic-constant'` to generate the file. New files with exact same name will be generated at `build-utils/css/constants/generated`
</details>

#### Import generated file in theme file (`theme.ts` | `_night.ts`)

<details>
Let's say we have an exported constant `testNumber` in `build-utils/csss/constants/logics/_testNumber.ts` and we want to import that file into `theme.ts`.

1. Go to `theme.ts`.
2. Type `testNumber` to trigger VScode import suggestion and continue to import the file. At the beginning of `theme.ts` now have:
    ```
    import { testNumber } from './generated/_testNumber';
    ```
3. Inside constant content, put a spread operator for the `testNumber` on where you want it to be. For example you want to spread it in between `'gray-l60'` and `'gray-l40'`. Now it will look like this:

    ```
    export const theme = {
        /* GRAY PALETTE */
        'gray-l80': '#f5f5f6',
        'gray-l60': '#eaeaec',

        ...testNumber,

        'gray-l40': '#d6d6d9',

    } as const;
    ```

4. Now when you run `'yarn build:theme'`, it will replace `...testNumber` with primitive content in the constant when it's generating the theme constant in `src/styles/constants/theme.ts`.
</details>

## **Building process**

### Overview
Main command for this is just `yarn build`. This would trigger the tests for the whole build application, typescript check and eslint check, also run `yarn build:theme` to generate css files that are based on the theme constant `theme.ts` or `_night.ts` in `build-utils/css/constants`.
> **NOTE**: Because of running `'yarn build:theme'` will overwrite last capture with latest content, before you run a script, run `yarn test` first to make sure the current constant `theme.ts` and `_night.ts` in `build-utils/css/constants` doesn't have conflict with last theme capture. If there is conflict of last theme capture with current constant, resolve it either manually when you are not running `test` in `Watch mode`, or interactively by pressing `i` when you are running `test` in `Watch mode`.

### When you run the script, it will:

1. Generate css variable style constant

   - Extract content in `build-utils/css/constants/theme.ts`, and convert all existing key-value pairs to css variables with jsdocs `@info` / `@deprecated` comment.
     **Ex**:
     - With new variable (script will only add `@info` comment if it doesn't have jsdocs comment):
       From
       `'blue-l40': '#7b86ff',`
       To
       `/** @info #7b86ff */ 'blue-l40': 'var(--amino-blue-l40)',` - With legacy variable (script will just convert the variable, do nothing with jsdocs if key-value pair already had jsdocs `@deprecated` / `@info` comment):
       From
       `/** @deprecated use blue-l80 instead */ 'blue-100': var(--amino-blue-l80)',`
       To
       `/** @deprecated use blue-l80 instead */ 'blue-100': 'var(--amino-blue-100)',`
   - Generate new constant file `theme.ts` with generated content above, format them and put into `src/styles/constants` folder

2. Generate css file (theme.css)

   - Get contents from `build-utils/css/constants` (theme.ts and \_night.ts), format and generate `theme.css` and put in `src/styles` folder

3. Generate theme css capture (These captures will be used for unit testing when running `yarn test`. This is the reason you need to run unit tests before run this script to make sure the changes in css file is what you want)
   - Generate light theme css capture get from `build-utils/css/constants/theme.ts`. New file will be located at `build-utils/css/utils/__tests__/__previous-test-files__/theme.css`
   - Generate night theme css capture get from `build-utils/css/constants/_night.ts`. New file will be located at `build-utils/css/utils/__tests__/__previous-test-files__/night-theme.css`

### How to

Main folder to pay attention is `build-utils/css/constants/*.ts` to add a new or update an existing css variable of Amino.
Below are the sections about what you may need, click on `Details` on each to expand the section:

---

#### Deprecate a variable

<details>
Add `@deprecated` to variable, create new variable and apply the new one to the legacy one.
**Ex**:
To add new `new-variable` to replace for `legacy-variable`.

- Create value for `new-variable`, add `@deprecated use ${NEW} instead` (replace `${NEW}` with `newVariable`) and apply `var(--amino-new-variable)` to `legacy-variable`.
**NOTE**: Since the generated constants' keys would be transformed to camelCase (new-variable => newVariable). When you adding `@jsdocs`, use camel case when you referring to a variable.
Ex:

    ```
    'new-variable': #123abc;

    /** @deprecated use newVariable instead */
    'legacy-variable': var(--amino-new-variable);
    ```
</details>

---

#### Add/adjust variable

<details>
If you create new variable, the script will add some default jsdocs to your variable with format `/** @info ${LITERAL_VALUE_OF_THE VARIABLE_BEFORE_CONVERTED} */`. But if you want, you could add `/** @info ...sthing */` jsdocs comment if you want to have some custom insight of variable and the script will use yours instead of the default one.
</details>

---

#### Update new theme

<details>
**NOTE**: ALL OTHER THEME FILE NAME NEED TO HAVE PREFIX `_` SINCE IT WOULD ONLY BE USED FOR GENERATING CSS FILE AND NOT BEING EXPOSED TO AMINO CONSUMER.

File `theme.ts` in `build-utils/css/constants` is the main theme constant. If you are going to update/add new theme, the new theme need to extend the key of variables in `theme.ts` by overwriting the variable in it's own theme file (ex: `_night.ts`).

To strongly type the key of the new theme constant, use custom utility function `constraintDefinedAminoVar` located at `build-utils/css/constants/utils.ts` (This function would do nothing at runtime but help Typescript to understand and tell developers where the key in `night` constant doesn't match with existing key in `theme.ts`).
**Ex**: Constraint key constant of `Night` with keys exist in `Day` (theme.ts).

```
export const night = constraintDefinedAminoVar(theme, {
'gray-l80': '#f5f5f6', // 'gray-l80' exist in `theme` constant, overwrite gray-l80 value => NO TYPESCRIPT ERROR
'new-gray-l80': '#f5f5f6', // `new-gray-l80' doesn't exist in `theme` constant => TYPESCRIPT ERROR
...
}
```
</details>
