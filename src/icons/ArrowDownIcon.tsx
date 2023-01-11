import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M16.778 14.222a1.1 1.1 0 0 1 0 1.556l-3.646 3.646a1.6 1.6 0 0 1-2.263 0l-3.647-3.646a1.1 1.1 0 1 1 1.556-1.556l2.122 2.122V5a1.1 1.1 0 0 1 2.2 0v11.344l2.122-2.122a1.1 1.1 0 0 1 1.556 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
