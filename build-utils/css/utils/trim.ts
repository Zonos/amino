export const trim = (content: string) =>
  content
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/^\s{1,}/g, '')
    .replace(/\s{1,}$/g, '');
