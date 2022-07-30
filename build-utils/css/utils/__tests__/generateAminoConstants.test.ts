import { readFileSync } from 'fs';

import { generateConstantContent } from '../generateAminoContants';

const themeContent = readFileSync(`build-utils/css/constants/theme.ts`, {
  encoding: 'utf-8',
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
      'font-sans': 'var(--amino-font-sans)',
      /** @info Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace */
      'font-mono': 'var(--amino-font-mono)',
    };
    "
  `);
});

test(`Case light theme`, async () => {
  const input = themeContent.trim();
  const result = await generateConstantContent(input);
  expect(result).toMatchSnapshot();
});
