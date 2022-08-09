# **Build styles**
This script is primarily created for generating accessible style constants and css file from configured style constant to benefit from strongly typed css variable for Amino consumers.  
  
Main script for this building process is `build-utils/css/buildTheme.ts`.
  
## **Building process overview**
**NOTE**: Because of running `'yarn build:theme'` will overwrite last capture with latest content, before you run a script, run `yarn test` first to make sure the current constant `theme.ts` and `_darkTheme.ts` in `build-utils/css/constants` doesn't have conflict with last theme capture. If there is conflict of last theme capture with current constant, resolve it either manually when you are not running `test` in `Watch mode`, or interactively by pressing `i` when you are running `test` in `Watch mode`.
    
### **When you run the script, it will**:
1. Generate css variable style constant
    - Extract content in `build-utils/css/constants/theme.ts`, and convert all existing key-value pairs to css variables with jsdocs `@info` / `@deprecated` comment.  
    **Ex**:  
        - With new variable (script will only add `@info` comment if it doesn't have jsdocs comment):  
            From
            ```
            'blue-l40': '#7b86ff',
            ```
            To
            ```
            /** @info #7b86ff */
            'blue-l40': 'var(--amino-blue-l40)',
            ```
        - With legacy variable (script will just convert the variable, do nothing with jsdocs if key-value pair already had jsdocs `@deprecated` / `@info` comment):  
            From
            ```
            /** @deprecated use blue-l80 instead */
            'blue-100': var(--amino-blue-l80)',
            ```
            To
            ```
            /** @deprecated use blue-l80 instead */
            'blue-100': 'var(--amino-blue-100)',
            ```
    - Generate new constant `theme.ts` with generated content above, format them and put into `src/styles/constants` folder  

2. Generate css file (theme.css)
    - Get contents from `build-utils/css/constants` (theme.ts and _darkTheme.ts), format and generate `theme.css` and put in `src/styles` folder

3. Generate theme css capture (These captures will be used for unit testing when running `yarn test`. This is the reason you need to run unit tests before run this script to make sure the changes in css file is what you want)
    - Generate light theme css capture get from `build-utils/css/constants/theme.ts`. New file will be located at `build-utils/css/utils/__snapshots__/theme.css`
    - Generate dark theme css capture get from `build-utils/css/constants/_darkTheme.ts`. New file will be located at `build-utils/css/utils/__snapshots__/dark-theme.css`

## **How to**
Main folder to pay attention is `build-utils/css/constants/*.ts` to add a new or update an existing css variable of Amino.
### - Deprecate a variable
Add `@deprecated` to variable, create new variable and apply the new one to the legacy one.  
**Ex**:  
To add new `--amino-new-variable` to replace for `--amino-legacy-variable`. 
- Create value for `--amino-new-variable`, add `@deprecated use ${NEW} instead` (replace `${NEW}` with `new variable`) and apply `var(--amino-new-variable)` to `--amino-legacy-variable`
    ```
    --amino-new-variable: #123abc;

    /** @deprecated use new-variable instead */
    --amino-legacy-variable: var(--amino-new-variable);
    ```

### - Add/adjust variable
If you create new variable, the script will add some default jsdocs to your variable with format `/** @info ${LITERAL_VALUE_OF_THE VARIABLE_BEFORE_CONVERTED} */`. But if you want, you could add `/** @info ...sthing */` jsdocs comment if you want to have some custom insight of variable and the script will use yours instead of the default one.

### - Update new theme
**NOTE**: ALL OTHER THEME FILE NAME NEED TO HAVE PREFIX `_` SINCE IT WOULD ONLY BE USED FOR GENERATING CSS FILE AND NOT BEING EXPOSED TO AMINO CONSUMER.  

File `theme.ts` in `build-utils/css/constants` is the main theme constant. If you are going to update/add new theme, the new theme need to extend the key of variables in `theme.ts` by overwritting the variable in it's own theme file (ex: `_darkTheme.ts`).  
  
To strongly type the key of the new theme constant, use custom utility function `constraintDefinedAminoVar` located at `build-utils/css/constants/utils.ts` (This function would do nothing at runtime but help Typescript to understand and tell developers where the key in `darkStyleList` constant doesn't match with existing key in `theme.ts`).  
**Ex**: Constraint key constant of `Dark Mode` with keys exist in `Light Mode` (theme.ts). 
```
export const darkStyleList = constraintDefinedAminoVar(theme, {
  'gray-l80': '#f5f5f6', // 'gray-l80' exist in `theme` constant, overwrite gray-l80 value => NO TYPESCRIPT ERROR
  'new-gray-l80': '#f5f5f6', // `new-gray-l80' doesn't exist in `theme` constant => TYPESCRIPT ERROR
  ...
}
```