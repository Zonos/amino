import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DollarSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM12 6a1 1 0 0 0-1 1h-.257a2.743 2.743 0 0 0-.867 5.346l3.616 1.205A.744.744 0 0 1 13.257 15H11a1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3 1 1 0 1 0 2 0h.257a2.743 2.743 0 0 0 .867-5.346l-3.616-1.205A.744.744 0 0 1 10.743 9H13a1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3 1 1 0 0 0-1-1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
