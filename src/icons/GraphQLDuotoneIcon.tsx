import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const GraphQLDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M18.913 6.32 12 2 5.696 5.94A1.999 1.999 0 0 0 2 7a2 2 0 0 0 1 1.732v8.002l7.003 4.376a2 2 0 0 0 3.994 0L21 16.733v-7a2 2 0 1 0-2.087-3.412Z"
        fill="currentColor"
      />
      <path
        d="M13 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        stroke="#4D505A"
        strokeWidth="2"
      />
    </IconBase>
  )
);
