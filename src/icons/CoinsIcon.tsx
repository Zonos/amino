import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CoinsIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.858 15.858A6.502 6.502 0 0 0 14.5 3a6.502 6.502 0 0 0-6.358 5.142 6.5 6.5 0 1 0 7.716 7.716ZM19 9.5a4.5 4.5 0 0 0-8.759-1.458 6.503 6.503 0 0 1 5.717 5.717A4.503 4.503 0 0 0 19 9.5Zm-5 5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
