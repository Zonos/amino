export const capitalize = (string: string) =>
  string.replace(/(\w)(\w*)/g, (_g0, g1, g2) => {
    return g1.toUpperCase() + g2.toLowerCase();
  });
