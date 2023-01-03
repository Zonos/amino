import {
  generateFileContent,
  GenerateFileContentProps,
} from '../generateFileContent';

type UnitTest = GenerateFileContentProps;

describe(`Make sure to find color in the svg's fill and throw error if it occurs`, () => {
  test('Render content for blue color set in correct order', async () => {
    const input: UnitTest = {
      colorDetails: [
        {
          color: '#E8EBFC',
          intensity: 100,
        },
        {
          color: '#C9CFF8',
          intensity: 200,
        },
        {
          color: '#96A2F3',
          intensity: 300,
        },
      ],
      colorName: 'Blue',
    };
    expect(await generateFileContent(input)).toMatchInlineSnapshot(`
      "export const blue = {
        /** @info #E8EBFC  */
        'blue-100': '#E8EBFC',
        /** @info #C9CFF8  */
        'blue-200': '#C9CFF8',
        /** @info #96A2F3  */
        'blue-300': '#96A2F3',

        /** @deprecated use blue100 instead */
        'blue-l80': 'var(--amino-blue-100)',
        /** @deprecated use blue200 instead */
        'blue-l60': 'var(--amino-blue-200)',
        /** @deprecated use blue300 instead */
        'blue-l40': 'var(--amino-blue-300)',
        /** @deprecated use blue400 instead */
        'blue-l20': 'var(--amino-blue-400)',
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
      "
    `);
  });

  test('Render content for black color set in in correct order', async () => {
    const input: UnitTest = {
      colorDetails: [
        {
          color: '#2B2C32',
          intensity: 1000,
        },
        {
          color: '#0A0A0B',
          intensity: 1300,
        },
        {
          color: '#121417',
          intensity: 1200,
        },
        {
          color: '#1D1F24',
          intensity: 1100,
        },
      ],
      colorName: 'Black',
    };
    expect(await generateFileContent(input)).toMatchInlineSnapshot(`
      "export const black = {
        /** @info #2B2C32  */
        'black-1000': '#2B2C32',
        /** @info #0A0A0B  */
        'black-1300': '#0A0A0B',
        /** @info #121417  */
        'black-1200': '#121417',
        /** @info #1D1F24  */
        'black-1100': '#1D1F24',

        /** @deprecated use black100 instead */
        'black-l80': 'var(--amino-black-100)',
        /** @deprecated use black200 instead */
        'black-l60': 'var(--amino-black-200)',
        /** @deprecated use black300 instead */
        'black-l40': 'var(--amino-black-300)',
        /** @deprecated use black400 instead */
        'black-l20': 'var(--amino-black-400)',
        /** @deprecated use black600 instead */
        'black-base': 'var(--amino-black-600)',
        /** @deprecated use black700 instead */
        'black-d20': 'var(--amino-black-700)',
        /** @deprecated use black800 instead */
        'black-d40': 'var(--amino-black-800)',
        /** @deprecated use black900 instead */
        'black-d60': 'var(--amino-black-900)',
        /** @deprecated use black1000 instead */
        'black-d80': 'var(--amino-black-1000)',
      } as const;
      "
    `);
  });
});
