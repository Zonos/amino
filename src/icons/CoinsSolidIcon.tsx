import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CoinsSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3 14.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
      />
      <path
        fill="currentColor"
        d="M9.29 5.613c-.122.163.007.387.21.387a8.5 8.5 0 0 1 8.5 8.5c0 .204.224.332.387.21A6.5 6.5 0 1 0 9.29 5.613Z"
      />
    </IconBase>
  )
);
