import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowSwapIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M16.222 5.222a1.1 1.1 0 0 1 1.556 0l2.646 2.647a1.6 1.6 0 0 1 0 2.262l-2.646 2.647a1.1 1.1 0 1 1-1.556-1.556l1.122-1.122H11a1.1 1.1 0 1 1 0-2.2h6.344l-1.122-1.122a1.1 1.1 0 0 1 0-1.556Zm-8.444 6a1.1 1.1 0 0 1 0 1.556L6.655 13.9H13a1.1 1.1 0 0 1 0 2.2H6.655l1.123 1.122a1.1 1.1 0 1 1-1.556 1.556L3.576 16.13a1.6 1.6 0 0 1 0-2.262l2.646-2.647a1.1 1.1 0 0 1 1.556 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
