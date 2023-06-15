import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SearchDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      size={size}
      viewBox="0 0 24 24"
    >
      <circle cx="10" cy="10" fill="#C5C6CA" r="7" />
      <path
        d="m14.192 15.606 5.101 5.101a1 1 0 0 0 1.414-1.414l-5.1-5.1a7.043 7.043 0 0 1-1.415 1.413Z"
        fill="currentColor"
      />
    </IconBase>
  )
);
