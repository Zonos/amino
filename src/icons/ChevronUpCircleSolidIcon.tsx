import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronUpCircleSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707.293-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L12 11.414l2.293 2.293a1 1 0 0 0 1.414-1.414Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
