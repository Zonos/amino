import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TriangleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.17 5.01c.802-1.427 2.857-1.427 3.66 0l7.29 12.96c.788 1.4-.224 3.13-1.83 3.13H4.71c-1.606 0-2.618-1.73-1.83-3.13l7.29-12.96ZM12 6.244 4.88 18.9h14.24L12 6.244Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
