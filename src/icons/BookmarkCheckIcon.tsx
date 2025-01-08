import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkCheckIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M15.342 8.21a.75.75 0 0 0-1.184-.92l-2.978 3.829-1.4-1.4a.75.75 0 1 0-1.06 1.061l1.8 1.8a1 1 0 0 0 1.496-.093z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M7.75 3A2.75 2.75 0 0 0 5 5.75v14.278a1 1 0 0 0 1.562.827l4.735-3.22a1.25 1.25 0 0 1 1.406 0l4.735 3.22A1 1 0 0 0 19 20.028V5.75A2.75 2.75 0 0 0 16.25 3zM6.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v13.333l-3.954-2.688a2.75 2.75 0 0 0-3.092 0L6.5 19.082z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
