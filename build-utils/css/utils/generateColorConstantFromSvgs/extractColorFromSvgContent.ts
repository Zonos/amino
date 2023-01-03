/**
 * Extract color from svg content (`fill` value)
 */
export const extractColorFromSvgContent = ({
  content,
  fileName,
  svgFolder,
}: {
  content: string;
  fileName: string;
  svgFolder: string;
}) => {
  const matchedResult = content.matchAll(/<rect.+fill="([#0-9a-zA-Z]+)"/g);
  const result = Array.from(matchedResult).map(([, color]) => color)[0];
  if (!result) {
    throw Error(
      `No color found for color "${svgFolder}/${fileName}". Please check the file again.`
    );
  }
  return result;
};
