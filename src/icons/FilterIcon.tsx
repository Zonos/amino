import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FilterIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 6A3.1 3.1 0 0 1 6 2.9h12A3.1 3.1 0 0 1 21.1 6v.172a3.1 3.1 0 0 1-.908 2.192l-3.829 3.828a.9.9 0 0 0-.263.636v3.73a3.1 3.1 0 0 1-2.12 2.941l-2 .667a3.1 3.1 0 0 1-4.08-2.94v-4.397a.9.9 0 0 0-.264-.637L3.808 8.364A3.1 3.1 0 0 1 2.9 6.172V6ZM6 5.1a.9.9 0 0 0-.9.9v.172a.9.9 0 0 0 .264.636l3.828 3.828a3.1 3.1 0 0 1 .908 2.193v4.396a.9.9 0 0 0 1.184.854l2-.667a.9.9 0 0 0 .616-.854v-3.73a3.1 3.1 0 0 1 .908-2.192l3.828-3.828a.9.9 0 0 0 .264-.636V6a.9.9 0 0 0-.9-.9H6Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
