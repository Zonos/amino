import { forwardRef, type ReactNode } from 'react';

import { getIsInternalLink } from 'src/utils/getIsInternalLink';

export type MdxAnchorProps = {
  className?: string;
  children?: ReactNode;
  href?: string;
  title?: string;
  internalPaths: string[];
};

export const MdxAnchor = forwardRef<HTMLAnchorElement, MdxAnchorProps>(
  ({ className, children, href, title, internalPaths }, ref) => {
    const { isInternalLink } = getIsInternalLink({ href, internalPaths });
    if (isInternalLink) {
      return (
        <a
          className={className || ''}
          ref={ref}
          title={title}
          href={href as typeof internalPaths[number]}
        >
          {children}
        </a>
      );
    }
    return (
      <a
        className={className || ''}
        href={href}
        ref={ref}
        rel="nofollow noopener noreferrer"
        target="_blank"
        title={title}
      >
        {children}
      </a>
    );
  }
);
