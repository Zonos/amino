import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LineUpIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 2.9A1.1 1.1 0 0 1 5.1 4v14a.9.9 0 0 0 .9.9h14a1.1 1.1 0 0 1 0 2.2H6A3.1 3.1 0 0 1 2.9 18V4A1.1 1.1 0 0 1 4 2.9Zm15.1 3.756.122.122a1.1 1.1 0 1 0 1.556-1.556L19.13 3.576a1.6 1.6 0 0 0-2.262 0l-1.647 1.646a1.1 1.1 0 1 0 1.556 1.556l.122-.122V9a5.9 5.9 0 0 1-5.9 5.9H8a1.1 1.1 0 0 0 0 2.2h3A8.1 8.1 0 0 0 19.1 9V6.656Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);