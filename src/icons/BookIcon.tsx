import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.58 20.12 12 21l2.42-.88a9.015 9.015 0 0 1 6.16 0A1.803 1.803 0 0 0 23 18.425V6.4a2 2 0 0 0-1.317-1.88l-.766-.278a10 10 0 0 0-6.834 0L12 5l-2.083-.757a10 10 0 0 0-6.834 0l-.766.279A2 2 0 0 0 1 6.4v12.024a1.803 1.803 0 0 0 2.42 1.695 9.015 9.015 0 0 1 6.16 0ZM11 6.764l-1.766-.642a8 8 0 0 0-5.468 0l-.108.039A1 1 0 0 0 3 7.1v9.657c0 .683.672 1.166 1.342 1.032a11.015 11.015 0 0 1 5.922.45l.736.268V6.764Zm2 11.744.736-.268a11.015 11.015 0 0 1 5.922-.45c.67.134 1.342-.349 1.342-1.032V7.101a1 1 0 0 0-.658-.94l-.108-.04a8 8 0 0 0-5.468 0L13 6.765v11.744Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
