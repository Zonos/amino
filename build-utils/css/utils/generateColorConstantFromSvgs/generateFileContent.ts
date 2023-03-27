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
    } as const;
`;
  const formatedContent = await formatTS(content);
  return formatedContent;
};
