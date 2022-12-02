import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PauseCircleSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9 9a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0V9Zm5-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
