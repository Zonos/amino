import { readFileSync } from 'fs';

import { generateConstantContent } from '../generateAminoContants';

const themeContent = readFileSync(`build-utils/css/constants/theme.ts`, {
  encoding: 'utf-8',
});

test(`Long content with backtick`, () => {
  const input = `
  'font-sans': \`'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\`,
  'font-mono': \`Operator Mono, MonoLisa, Dank Mono, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace\`,
  `;

  expect(generateConstantContent(input)).toStrictEqual(`
  'font-sans': 'var(--amino-font-sans)',
  'font-mono': 'var(--amino-font-mono)',
  `);
});

test(`Case light theme`, () => {
  const input = themeContent.trim();
  expect(generateConstantContent(input)).toMatchSnapshot();
});
