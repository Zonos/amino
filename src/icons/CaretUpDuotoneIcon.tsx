import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretUpDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M17.925 13.994c.848.97.16 2.487-1.13 2.487H7.204c-1.288 0-1.977-1.518-1.128-2.487l4.796-5.482a1.5 1.5 0 0 1 2.258 0l4.796 5.482Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
