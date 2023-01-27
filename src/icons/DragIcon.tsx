import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DragIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3.9 9A1.1 1.1 0 0 1 5 7.9h14a1.1 1.1 0 0 1 0 2.2H5A1.1 1.1 0 0 1 3.9 9Zm0 6A1.1 1.1 0 0 1 5 13.9h14a1.1 1.1 0 0 1 0 2.2H5A1.1 1.1 0 0 1 3.9 15Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
