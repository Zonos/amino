import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SearchDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color || 'gray400'}
      className={className}
      viewBox="0 0 24 24"
    >
      <circle cx="10" cy="10" r="7" fill="#C1C1C4" />
      <path
        fill="currentColor"
        d="m14.192 15.606 5.101 5.101a1 1 0 0 0 1.414-1.414l-5.1-5.1a7.043 7.043 0 0 1-1.415 1.413Z"
      />
    </IconBase>
  )
);
