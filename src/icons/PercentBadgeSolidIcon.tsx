import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PercentBadgeSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.22 2.608a1.53 1.53 0 0 0-2.439 0L9.407 4.42a1 1 0 0 1-.933.387l-2.253-.31A1.53 1.53 0 0 0 4.497 6.22l.31 2.253a1 1 0 0 1-.387.933L2.608 10.78a1.53 1.53 0 0 0 0 2.438l1.812 1.374a1 1 0 0 1 .387.933l-.31 2.253a1.53 1.53 0 0 0 1.724 1.724l2.253-.31a1 1 0 0 1 .933.387l1.374 1.812a1.53 1.53 0 0 0 2.438 0l1.374-1.812a1 1 0 0 1 .933-.386l2.253.31a1.53 1.53 0 0 0 1.724-1.725l-.31-2.253a1 1 0 0 1 .387-.933l1.812-1.374a1.53 1.53 0 0 0 0-2.438L19.58 9.407a1 1 0 0 1-.386-.933l.31-2.253a1.53 1.53 0 0 0-1.725-1.724l-2.253.31a1 1 0 0 1-.933-.387L13.22 2.608Zm1.487 6.685a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414ZM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
