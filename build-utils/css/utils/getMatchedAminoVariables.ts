import { trim } from 'build-utils/css/utils/trim';

/**
 * Extract armino key and value out of css file
 * @param content : css file to extract;
 * @returns Array of key and value
 */
export const getMatchedAminoVariables = (content: string) => {
  const aminoVarMatched = content.matchAll(
    /(\r|\n|\s)*(--amino-[a-zA-Z0-9-]+):(\s+(.|\r|\n)+?);/g,
  );
  const matched = Array.from(aminoVarMatched);
  const result = matched.map(([, , variable, value]) => ({
    key: trim(variable!),
    value: trim(value!),
  }));
  return result;
};
