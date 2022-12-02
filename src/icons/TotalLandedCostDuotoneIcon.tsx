import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TotalLandedCostDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13 14.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.742 1.496c.767-1.328 2.685-1.328 3.452 0l3.472 6.015c.767 1.328-.191 2.989-1.725 2.989H8.996c-1.534 0-2.493-1.66-1.726-2.99l3.472-6.014Z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M1 17.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
    </IconBase>
  )
);
