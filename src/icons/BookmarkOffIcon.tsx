import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.608 4.608A4.978 4.978 0 0 0 4 7v11.99c0 2.553 2.987 3.939 4.937 2.29l2.417-2.044a1 1 0 0 1 1.292 0l2.417 2.044c1.71 1.447 4.22.557 4.81-1.407L18 18v.99a1 1 0 0 1-1.646.763l-2.417-2.044a3 3 0 0 0-3.874 0l-2.417 2.044A1 1 0 0 1 6 18.989V7a3 3 0 0 1 .129-.871l-1.52-1.52Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 3a1 1 0 0 1 1-1h6a5 5 0 0 1 5 5v6a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3H9a1 1 0 0 1-1-1Zm-5.707-.707a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
