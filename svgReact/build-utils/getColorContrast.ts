const getRgbFromColor = (color: string) => {
  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    const [, r, g, b] =
      color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
      ) || [];
    return { b: Number(b), g: Number(g), r: Number(r) };
  }
  // If hex --> Convert it to RGB: http://gist.github.com/983661
  const rgbColor = +`0x${color
    .slice(1)
    .replace(color.length < 5 ? /./g : '', '$&$&')}`;
  return {
    b: rgbColor & 255,

    g: (rgbColor >> 8) & 255,

    r: rgbColor >> 16,
  };
};

export const getHspFromColor = (
  color: string,
): { contrast: 'light' | 'dark'; hsp: number } => {
  // https://awik.io/determine-color-bright-dark-using-javascript/
  const { b, g, r } = getRgbFromColor(color.replace(/"/gi, ''));

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  const contrast = hsp > 127.5 ? 'light' : 'dark';
  return { contrast, hsp };
};
