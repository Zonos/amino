import { convertPascalCaseToCamelCase } from '../convertPascalCaseToCamelCase';
import { convertToKebabCase } from '../convertToKebabCase';
import { formatTS } from '../formatTS';

export type ColorDetail = {
  color: string;
  intensity: number;
};

export type GenerateFileContentProps = {
  colorName: string;
  colorDetails: ColorDetail[];
};

/** The mapping suffix of the legacy and the new color */
const deprecatedIntensityMapping = {
  l80: '100',
  l60: '300',
  l40: '400',
  l20: '500',
  base: '600',
  d20: '700',
  d40: '800',
  d60: '900',
  d80: '1000',
};

export const generateFileContent = async ({
  colorName,
  colorDetails,
}: GenerateFileContentProps) => {
  const colorConstantKey = convertToKebabCase(colorName);
  const content = `
    export const ${convertPascalCaseToCamelCase(colorName)} = {
        ${colorDetails
          .map(
            ({ color, intensity }) => `
                /** @info ${color}  */
                "${colorConstantKey}-${intensity}": "${color}",`
          )
          .join('')}
          ${Object.entries(deprecatedIntensityMapping)
            .map(
              ([deprecatedIntensity, newIntensity]) => `
              /** @deprecated use ${colorConstantKey}${newIntensity} instead */
              '${colorConstantKey}-${deprecatedIntensity}': 'var(--amino-${colorConstantKey}-${newIntensity})',`
            )
            .join('')}
    } as const;
`;
  const formatedContent = await formatTS(content);
  return formatedContent;
};
