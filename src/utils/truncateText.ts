export type TruncateTextParams = {
  addEllipses?: boolean;
  length: number;
  text: string | null;
};

export const truncateText = ({
  addEllipses = true,
  length,
  text,
}: TruncateTextParams) => {
  const ellipses = addEllipses ? '...' : '';
  const matchPattern = new RegExp(`(.{1,${length}}\\s)(.*)`, 'gi');
  const truncatePattern =
    text && matchPattern.test(text)
      ? text.replace(matchPattern, `$1${ellipses}`)
      : `${text?.slice(0, length)}${ellipses}`;
  return text && text.length > length ? truncatePattern : text;
};
