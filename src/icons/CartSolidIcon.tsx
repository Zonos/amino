import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CartSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          fill="currentColor"
        />
        <path
          d="M4 3a1 1 0 0 0 0 2h.36a1 1 0 0 1 .981.804l1.518 7.588A2 2 0 0 0 8.819 15h8.887a2 2 0 0 0 1.948-1.548l1.303-5.613A1.5 1.5 0 0 0 19.496 6H7.42l-.118-.588A3 3 0 0 0 4.36 3H4Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
