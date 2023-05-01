export const getIsInternalLink = ({
  href,
  shouldWarn = true,
  internalPaths,
}: {
  href?: string;
  shouldWarn?: boolean;
  internalPaths: string[];
}) => {
  const isInternalLink = href?.startsWith('/') || href?.startsWith('#');
  if (isInternalLink && href) {
    const [to] = href.split('#');

    if (!internalPaths.includes(to as typeof internalPaths[number])) {
      if (shouldWarn) {
        // eslint-disable-next-line no-console
        console.warn(
          `This page has an internal link that does not exist: ${href}`,
          `This internal link may be handled by a redirect, but since it is an internal link it should be corrected.`
        );
      }
      return { isInternalLink, isBrokenLink: true };
    }
  }
  return { isInternalLink, isBrokenLink: false };
};
