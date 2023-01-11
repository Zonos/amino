import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowSwapWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M16.293 5.293a1 1 0 0 1 1.414 0l2.646 2.646a1.5 1.5 0 0 1 0 2.122l-2.646 2.646a1 1 0 0 1-1.414-1.414L17.586 10H11a1 1 0 1 1 0-2h6.586l-1.293-1.293a1 1 0 0 1 0-1.414Zm-8.586 6a1 1 0 0 1 0 1.414L6.414 14H13a1 1 0 1 1 0 2H6.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-2.647-2.646a1.5 1.5 0 0 1 0-2.122l2.647-2.646a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
