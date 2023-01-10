import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SearchIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10 5.1a4.9 4.9 0 1 0 3.465 8.365l.013-.013A4.9 4.9 0 0 0 10 5.1ZM2.9 10a7.1 7.1 0 1 1 12.838 4.182l5.04 5.04a1.1 1.1 0 1 1-1.556 1.556l-5.04-5.04A7.1 7.1 0 0 1 2.9 10Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
