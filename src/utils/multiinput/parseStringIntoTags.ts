export const symbolDelimiters = ['|', ',', ' '];

export const parseStringIntoTags = (input: string) =>
  input
    .split(new RegExp(`[${symbolDelimiters.join('')}]`)) // Split by delimiters
    .map(tag => tag.trim())
    .filter(tag => !!tag.length);
