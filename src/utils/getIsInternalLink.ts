export const getIsInternalLink = ({
  href,
  internalPaths,
  shouldWarn = true,
}: {
  href?: string;
  internalPaths?: string[];
  shouldWarn?: boolean;
}) => {
  const isInternalLink = href?.startsWith('/') || href?.startsWith('#');
  if (isInternalLink && href && !!internalPaths?.length) {
    const [to] = href.split('#');

    if (!internalPaths?.includes(to as typeof internalPaths[number])) {
      if (shouldWarn) {
        // eslint-disable-next-line no-console
        console.warn(
          `This page has an internal link that does not exist: ${href}`,
          `This internal link may be handled by a redirect, but since it is an internal link it should be corrected.`
        );
      }
      return { isBrokenLink: true, isInternalLink };
    }
  }
  return { isBrokenLink: false, isInternalLink };
};
