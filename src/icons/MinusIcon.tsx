import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MinusIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3.9 12A1.1 1.1 0 0 1 5 10.9h14a1.1 1.1 0 0 1 0 2.2H5A1.1 1.1 0 0 1 3.9 12Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
