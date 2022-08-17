import { readFileSync } from 'fs';

import { generateConstantContent } from '../generateAminoContants';

const themeContent = readFileSync(`build-utils/css/constants/theme.ts`, {
  encoding: 'utf-8',
});

test(`Have and don't have jsdocs comment`, async () => {
  const input = `
  export const theme = {
    /* NO JSDOCS COMMENT */
    'blue-l80': '#e9ebff'
    
    /* HAS CUSTOM JSDOCS */
    /** @info CUSTOM INFO */
    'blue-l60': '#a7afff',

    /* HAS DEPRECATED MARK JSDOCS */
    /** @deprecated use blue-l80 instead */
    'blue-100': 'var(--amino-blue-l80)',
    /** @deprecated use blue-l60 instead */
    'blue-200': 'var(--amino-blue-l60)',
  }
  `;

  const result = await generateConstantContent(input);
  expect(result).toMatchInlineSnapshot(`
    "export const theme = {
      /* NO JSDOCS COMMENT */
      /** @info #e9ebff */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blueL80: 'var(--amino-blue-l80)',

      /* HAS CUSTOM JSDOCS */
      /** @info CUSTOM INFO */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blueL60: 'var(--amino-blue-l60)',

      /* HAS DEPRECATED MARK JSDOCS */
      /** @deprecated use blue-l80 instead */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blue100: 'var(--amino-blue-100)',
      /** @deprecated use blue-l60 instead */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blue200: 'var(--amino-blue-200)',
    };
    "
  `);
});

test(`Have both jsdocs @deprecated and custom jsdocs comment`, async () => {
  const input = `
  export const theme = {
    /* HAS CUSTOM JSDOCS */
    /** @info #e9ebff */
    'blue-l80': '#e9ebff',
    /** @info #a7afff */
    'blue-l60': '#a7afff',

    /* HAS DEPRECATED MARK JSDOCS */
    /** @deprecated use blue-l80 instead */
    'blue-100': 'var(--amino-blue-l80)',
    /** @deprecated use blue-l60 instead */
    'blue-200': 'var(--amino-blue-l60)',
  }
  `;

  const result = await generateConstantContent(input);
  expect(result).toMatchInlineSnapshot(`
    "export const theme = {
      /* HAS CUSTOM JSDOCS */
      /** @info #e9ebff */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blueL80: 'var(--amino-blue-l80)',
      /** @info #a7afff */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blueL60: 'var(--amino-blue-l60)',

      /* HAS DEPRECATED MARK JSDOCS */
      /** @deprecated use blue-l80 instead */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blue100: 'var(--amino-blue-100)',
      /** @deprecated use blue-l60 instead */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blue200: 'var(--amino-blue-200)',
    };
    "
  `);
});

test(`Have jsdocs @deprecated comment`, async () => {
  const input = `
  export const theme = {
    /* HAS DEPRECATED MARK JSDOCS */
    /** @deprecated use blue-l80 instead */
    'blue-100': 'var(--amino-blue-l80)',
    /** @deprecated use blue-l60 instead */
    'blue-200': 'var(--amino-blue-l60)',
  }
  `;

  const result = await generateConstantContent(input);
  expect(result).toMatchInlineSnapshot(`
    "export const theme = {
      /* HAS DEPRECATED MARK JSDOCS */
      /** @deprecated use blue-l80 instead */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blue100: 'var(--amino-blue-100)',
      /** @deprecated use blue-l60 instead */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      blue200: 'var(--amino-blue-200)',
    };
    "
  `);
});

test(`Long content with backtick`, async () => {
  const input = `
  export const fontSize = {
    'font-sans': \`'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\`,
    'font-mono': \`Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace\`,
  }
  `;

  const result = await generateConstantContent(input);
  expect(result).toMatchInlineSnapshot(`
    "export const fontSize = {
      /** @info 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      fontSans: 'var(--amino-font-sans)',
      /** @info Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      fontMono: 'var(--amino-font-mono)',
    };
    "
  `);
});

test(`Long key variable`, async () => {
  const input = `
  export const styles = {
    'surface-color-secondary': 'var(--amino-gray-50)',
    'font-sans-electronic': \`'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\`,
    'font-special-something-not-special': \`Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace\`,
  }
  `;

  const result = await generateConstantContent(input);
  expect(result).toMatchInlineSnapshot(`
    "export const styles = {
      /** @info var(--amino-gray-50) */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      surfaceColorSecondary: 'var(--amino-surface-color-secondary)',
      /** @info 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      fontSansElectronic: 'var(--amino-font-sans-electronic)',
      /** @info Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace */
      /* THIS IS GENERATED VARIABLE! DON'T TOUCH IT!!! */
      fontSpecialSomethingNotSpecial:
        'var(--amino-font-special-something-not-special)',
    };
    "
  `);
});

test(`Case light theme`, async () => {
  const input = themeContent.trim();
  const result = await generateConstantContent(input);
  expect(result).toMatchSnapshot();
});
