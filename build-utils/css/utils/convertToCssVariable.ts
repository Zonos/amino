export const convertToCssConstant = (themeContent: Record<string, string>) => {
  const newContent = {};
  Object.entries(themeContent).forEach(([key, value]) => {
    newContent[`--amino-${key}`] = value;
  });
  return newContent;
};
