import { readFileSync } from 'fs';

import { convertToCssConstant } from './convertToCssVariable';
import { getMatchedAminoVariables } from './getMatchedAminoVariables';

export const getLastSnapshot = () =>
  readFileSync(
    `build-utils/css/utils/__tests__/__previous-test-files__/theme.css`,
    {
      encoding: 'utf-8',
    }
  );

/**
 * Compare current given theme constants with last snapshot content
 * @returns string[] Array of where is mismatch
 */
export const isMatchedLastThemeSnapshot = ({
  theme,
  snapshotContent,
}: {
  theme: Record<string, string>;
  snapshotContent: string;
}): string[] => {
  const convertedThemeVariable = convertToCssConstant(theme);
  const extractedAminoVariables = getMatchedAminoVariables(snapshotContent);
  return extractedAminoVariables
    .map(({ key, value }) => {
      const aminoKey = key as unknown as keyof typeof theme;
      if (!convertedThemeVariable[aminoKey]) {
        return `Found variable '${aminoKey}' in last snapshot`;
      }
      return convertedThemeVariable[aminoKey] &&
        convertedThemeVariable[aminoKey] !== value
        ? `'${value}' was value of key '${aminoKey}' in last snapshot. Received: '${convertedThemeVariable[aminoKey]}'`
        : '';
    })
    .filter(Boolean);
};
