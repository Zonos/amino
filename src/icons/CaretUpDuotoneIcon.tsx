import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretUpDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M17.925 13.994c.848.97.16 2.487-1.13 2.487H7.204c-1.288 0-1.977-1.518-1.128-2.487l4.796-5.482a1.5 1.5 0 0 1 2.258 0l4.796 5.482Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
