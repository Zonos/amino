import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronUpDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M17.707 14.707a1 1 0 0 1-1.414 0L12 10.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l4.93-4.93a1.1 1.1 0 0 1 1.555 0l4.93 4.93a1 1 0 0 1 0 1.414Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
