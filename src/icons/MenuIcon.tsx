import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MenuIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4.9 7A1.1 1.1 0 0 1 6 5.9h12a1.1 1.1 0 0 1 0 2.2H6A1.1 1.1 0 0 1 4.9 7Zm0 5A1.1 1.1 0 0 1 6 10.9h8a1.1 1.1 0 0 1 0 2.2H6A1.1 1.1 0 0 1 4.9 12Zm0 5A1.1 1.1 0 0 1 6 15.9h12a1.1 1.1 0 0 1 0 2.2H6A1.1 1.1 0 0 1 4.9 17Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
