import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingTagIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.414 4.172A4 4 0 0 1 13.243 3H18a3 3 0 0 1 3 3v4.757a4 4 0 0 1-1.172 2.829l-6.537 6.537a3 3 0 0 1-4.242 0L3.877 14.95a3 3 0 0 1 0-4.242l6.537-6.537ZM13.243 5a2 2 0 0 0-1.415.586l-6.537 6.537a1 1 0 0 0 0 1.414l5.172 5.172a1 1 0 0 0 1.414 0l6.537-6.537A2 2 0 0 0 19 10.757V6a1 1 0 0 0-1-1h-4.757Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.586 10 6 8.586 15.414 18 14 19.414 4.586 10ZM17 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </IconBase>
  )
);
