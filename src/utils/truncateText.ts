export const truncateText = ({
  addEllipses = true,
  length,
  text,
}: {
  addEllipses?: boolean;
  length: number;
  text: string | null;
}) => {
  const ellipses = addEllipses ? '...' : '';
  return text && text.length > length
    ? text.replace(new RegExp(`(.{1,${length}}\\s)(.*)`, 'gi'), `$1${ellipses}`)
    : text;
};
