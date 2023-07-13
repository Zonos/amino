import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowLeftDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M9.707 16.707a1 1 0 0 1-1.414 0l-3.647-3.646a1.5 1.5 0 0 1 0-2.122l3.647-3.646a1 1 0 0 1 1.414 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l2.293 2.293a1 1 0 0 1 0 1.414Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
