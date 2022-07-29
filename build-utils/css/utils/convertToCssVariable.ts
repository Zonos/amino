export const convertToCssConstant = (themeContent: Record<string, string>) => {
  const newContent = {};
  Object.entries(themeContent).map(([key, value]) => {
    newContent[`--amino-${key}`] = value;
    return null;
  });
  return newContent;
};
