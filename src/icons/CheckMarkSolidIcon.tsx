import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CheckMarkSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M19.278 6.793a1 1 0 0 1 0 1.414l-8.95 8.95a1 1 0 0 1-1.414 0l-4.121-4.121a1 1 0 1 1 1.414-1.415l3.414 3.415 8.243-8.243a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
