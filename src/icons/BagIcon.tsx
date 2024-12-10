import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BagIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      ref={ref}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M8.5 7.5v-.75A2.75 2.75 0 0 1 11.25 4h1.5a2.75 2.75 0 0 1 2.75 2.75v.75h.873a2 2 0 0 1 1.993 1.835l.704 8.5A2 2 0 0 1 17.078 20H6.922a2 2 0 0 1-1.993-2.165l.705-8.5A2 2 0 0 1 7.627 7.5H8.5Zm1.5-.75c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v.75h-4v-.75ZM8.5 9v1.25a.75.75 0 0 0 1.5 0V9h4v1.25a.75.75 0 0 0 1.5 0V9h.873a.5.5 0 0 1 .498.459l.705 8.5a.5.5 0 0 1-.499.541H6.922a.5.5 0 0 1-.498-.541l.704-8.5A.5.5 0 0 1 7.627 9H8.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
