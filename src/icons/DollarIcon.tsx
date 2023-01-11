import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DollarIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.1a7.9 7.9 0 1 0 0 15.8 7.9 7.9 0 0 0 0-15.8ZM1.9 12C1.9 6.422 6.422 1.9 12 1.9c5.578 0 10.1 4.522 10.1 10.1 0 5.578-4.522 10.1-10.1 10.1-5.578 0-10.1-4.522-10.1-10.1ZM12 5.9A1.1 1.1 0 0 1 13.1 7v.042a4.336 4.336 0 0 1 2.778 2.255l.106.211a1.1 1.1 0 0 1-1.968.984l-.105-.211A2.136 2.136 0 0 0 12 9.1h-.675a.738.738 0 0 0-.234 1.438l2.513.837a2.938 2.938 0 0 1-.506 5.695A1.1 1.1 0 0 1 10.9 17v-.042a4.337 4.337 0 0 1-2.778-2.255l-.106-.211a1.1 1.1 0 1 1 1.968-.984l.105.211A2.136 2.136 0 0 0 12 14.9h.676a.738.738 0 0 0 .234-1.437l-2.514-.837a2.938 2.938 0 0 1 .507-5.695A1.1 1.1 0 0 1 12 5.9Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
