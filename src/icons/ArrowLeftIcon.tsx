import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowLeftIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.778 16.778a1.1 1.1 0 0 1-1.556 0L4.576 13.13a1.6 1.6 0 0 1 0-2.262l3.646-3.647a1.1 1.1 0 0 1 1.556 1.556L7.656 10.9H19a1.1 1.1 0 0 1 0 2.2H7.656l2.122 2.122a1.1 1.1 0 0 1 0 1.556Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
