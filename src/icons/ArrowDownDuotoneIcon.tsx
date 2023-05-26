import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowDownDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color || 'gray400'}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.707 14.293a1 1 0 0 1 0 1.414l-3.646 3.647a1.5 1.5 0 0 1-2.122 0l-3.646-3.647a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 1 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
