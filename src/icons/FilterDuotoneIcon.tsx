import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FilterDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v.172a3 3 0 0 1-.879 2.12l-3.828 3.83a1 1 0 0 0-.293.706v3.73a3 3 0 0 1-2.051 2.846l-2 .667A3 3 0 0 1 8 17.225v-4.397a1 1 0 0 0-.293-.707L3.88 8.293A3 3 0 0 1 3 6.172V6Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
