import { type ReactNode, forwardRef } from 'react';

import { getIsInternalLink } from 'src/utils/getIsInternalLink';

export type MdxAnchorProps = {
  children?: ReactNode;
  className?: string;
  href?: string;
  internalPaths: string[];
  title?: string;
};

export const MdxAnchor = forwardRef<HTMLAnchorElement, MdxAnchorProps>(
  ({ children, className, href, internalPaths, title }, ref) => {
    const { isInternalLink } = getIsInternalLink({ href, internalPaths });
    if (isInternalLink) {
      return (
        <a
          ref={ref}
          className={className || ''}
          href={href as typeof internalPaths[number]}
          title={title}
        >
          {children}
        </a>
      );
    }
    return (
      <a
        ref={ref}
        className={className || ''}
        href={href}
        rel="nofollow noopener noreferrer"
        target="_blank"
        title={title}
      >
        {children}
      </a>
    );
  }
);
