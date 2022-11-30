# **Build styles**

This script is primarily created for generating accessible style constants and css file from configured style constant to benefit from strongly typed css variable and jsdocs support for Amino consumers.

- Sub script for generating dynamic constants to be consumed in `build-utils/css/constants/theme.ts` process is `build-utils/css/buildLogicConstants.ts`
- Main script for this whole building process is `build-utils/css/buildTheme.ts`.

---

## **Generating dynamic constant process overview**

Sub script `build-utils/css/buildLogicConstants.ts` is primarily created for having a way to generate a constant programmatically with logic and customized jsdocs comments.
(**Included script to generate template for generating a content**)
**REASON**: Typescript will not read and provide jsdocs info on the spread operators (Ex: `...sthing`), so we can't benefit from jsdocs tag when using typescript key suggestion.

### **When you run the script, it will**:

1. Read through all the files in `build-utils/css/constants/logics`, class `LogicConstant` in `build-utils/css/class` will:

   - Parse the given file.
   - Validate the file and throw error message if the file doesn't have specific function or constant.
   - Generate constant variables based on the logic provided in the function with pattern `get{{CapitalizedFileNameNoUnderScore}}ConstantKeyValuePairs`. Adding @jsdocs comment if `hasJSDocsComment` is `true`, and the logic for the JSDocs comment will be a function with convention `get{{CapitalizedFileName}}ConstantCustomizedComment`.
   - Put the generated file at `build-utils/css/constants/generated`

2. All theme files in `build-utils/css/constants/*.ts` now can import the generated files in `build-utils/css/constants/generated` by using spread variables (Ex: `...space`). Then when you command `yarn build:theme`, the process will use static function `transformImportedConstant` in class `LogicConstant` to convert/transform the file `theme.ts` into typescript jsdocs friendly (it basically will find all import lines in `theme.ts` and import them, then replace the spread value with content in each imported file).

## **How to**:

### - Create a logic file

1.  Run the command below to generate the dummy content for your new dynamic constant logic.
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
        ```

    ````

4.  Put logic of how you want @jsdocs tag to be generated to look like with each key/value pair in constant in function `getYourFileNameConstantCustomizedComment`. Leave it as it is if you want it to use the default one.
    Ex:
    `` export const getYourFileNameConstantCustomizedComment: ConstantCustomizedComment = ({ key, value, }) => { /** Put logic here to generate jsdocs string for each line in constant */ return `${key}: ${value}`; }; ``
5.  Turn the flag `hasJSDocsComment` on or off wether to enable showing jsdocs.
6.  Run command `'yarn build:logic-constant'` to generate the file. New files with exact same name will be generated at `build-utils/css/constants/generated`

### - Import generated file in theme file (`theme.ts` | `_darkTheme.ts`)

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

---

## **Building process overview**

**NOTE**: Because of running `'yarn build:theme'` will overwrite last capture with latest content, before you run a script, run `yarn test` first to make sure the current constant `theme.ts` and `_darkTheme.ts` in `build-utils/css/constants` doesn't have conflict with last theme capture. If there is conflict of last theme capture with current constant, resolve it either manually when you are not running `test` in `Watch mode`, or interactively by pressing `i` when you are running `test` in `Watch mode`.

### **When you run the script, it will**:

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

   - Get contents from `build-utils/css/constants` (theme.ts and \_darkTheme.ts), format and generate `theme.css` and put in `src/styles` folder

3. Generate theme css capture (These captures will be used for unit testing when running `yarn test`. This is the reason you need to run unit tests before run this script to make sure the changes in css file is what you want)
   - Generate light theme css capture get from `build-utils/css/constants/theme.ts`. New file will be located at `build-utils/css/utils/__tests__/__previous-test-files__/theme.css`
   - Generate dark theme css capture get from `build-utils/css/constants/_darkTheme.ts`. New file will be located at `build-utils/css/utils/__tests__/__previous-test-files__/dark-theme.css`

## **How to**

Main folder to pay attention is `build-utils/css/constants/*.ts` to add a new or update an existing css variable of Amino.

### - Deprecate a variable

Add `@deprecated` to variable, create new variable and apply the new one to the legacy one.
**Ex**:
To add new `new-variable` to replace for `legacy-variable`.

- Create value for `new-variable`, add `@deprecated use ${NEW} instead` (replace `${NEW}` with `newVariable`) and apply `var(--amino-new-variable)` to `legacy-variable`.
  **NOTE**: Since the generated constants' keys would be transformed to camelCase (new-variable => newVariable). When you adding `@jsdocs`, use camel case when you referring to a variable.
  Ex:

  ````
  'new-variable': #123abc;

      /** @deprecated use newVariable instead */
      'legacy-variable': var(--amino-new-variable);
      ```
  ````

### - Add/adjust variable

If you create new variable, the script will add some default jsdocs to your variable with format `/** @info ${LITERAL_VALUE_OF_THE VARIABLE_BEFORE_CONVERTED} */`. But if you want, you could add `/** @info ...sthing */` jsdocs comment if you want to have some custom insight of variable and the script will use yours instead of the default one.

### - Update new theme

**NOTE**: ALL OTHER THEME FILE NAME NEED TO HAVE PREFIX `_` SINCE IT WOULD ONLY BE USED FOR GENERATING CSS FILE AND NOT BEING EXPOSED TO AMINO CONSUMER.

File `theme.ts` in `build-utils/css/constants` is the main theme constant. If you are going to update/add new theme, the new theme need to extend the key of variables in `theme.ts` by overwriting the variable in it's own theme file (ex: `_darkTheme.ts`).

To strongly type the key of the new theme constant, use custom utility function `constraintDefinedAminoVar` located at `build-utils/css/constants/utils.ts` (This function would do nothing at runtime but help Typescript to understand and tell developers where the key in `darkStyleList` constant doesn't match with existing key in `theme.ts`).
**Ex**: Constraint key constant of `Dark Mode` with keys exist in `Light Mode` (theme.ts).

```
export const darkStyleList = constraintDefinedAminoVar(theme, {
  'gray-l80': '#f5f5f6', // 'gray-l80' exist in `theme` constant, overwrite gray-l80 value => NO TYPESCRIPT ERROR
  'new-gray-l80': '#f5f5f6', // `new-gray-l80' doesn't exist in `theme` constant => TYPESCRIPT ERROR
  ...
}
```
