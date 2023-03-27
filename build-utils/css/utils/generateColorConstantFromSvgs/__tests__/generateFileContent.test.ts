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
      } as const;
      "
    `);
  });
});
