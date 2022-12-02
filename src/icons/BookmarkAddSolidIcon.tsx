import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkAddSolidIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v14c0 1.684-1.953 2.615-3.26 1.554l-4.11-3.335a1 1 0 0 0-1.26 0l-4.11 3.335C5.953 22.614 4 21.684 4 20V6Zm9 2a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V8Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
