import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TrashCanSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-9Zm4 3a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Zm4 0a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 2a2 2 0 0 0-2 2H5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2h-3a2 2 0 0 0-2-2h-4Z"
      />
    </IconBase>
  )
);
