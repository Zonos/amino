import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FilterWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v.172a3 3 0 0 1-.879 2.12l-3.828 3.83a1 1 0 0 0-.293.706v3.73a3 3 0 0 1-2.051 2.846l-2 .667A3 3 0 0 1 8 17.225v-4.397a1 1 0 0 0-.293-.707L3.88 8.293A3 3 0 0 1 3 6.172V6Zm3-1a1 1 0 0 0-1 1v.172a1 1 0 0 0 .293.707l3.828 3.828A3 3 0 0 1 10 12.828v4.397a1 1 0 0 0 1.316.949l2-.667a1 1 0 0 0 .684-.949v-3.73a3 3 0 0 1 .879-2.12l3.828-3.83A1 1 0 0 0 19 6.173V6a1 1 0 0 0-1-1H6Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
