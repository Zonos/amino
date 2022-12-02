import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TagSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.243 3a4 4 0 0 0-2.829 1.172l-6.537 6.537a3 3 0 0 0 0 4.242l5.172 5.172a3 3 0 0 0 4.242 0l6.537-6.537A4 4 0 0 0 21 10.757V6a3 3 0 0 0-3-3h-4.757Zm2.257 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
