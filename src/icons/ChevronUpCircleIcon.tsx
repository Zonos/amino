import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronUpCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.293 9.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
