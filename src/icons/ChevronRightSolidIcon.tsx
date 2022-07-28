import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronRightSolidIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        className={className}
        viewBox="0 0 24 24"
      >
        <path
          d="M8.636 18.435a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414L10.05 5.707a1 1 0 0 0-1.414 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
