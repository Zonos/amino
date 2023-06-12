import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HexagonDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M21.788 10.5a3 3 0 0 1 0 3l-3.595 6.227a3 3 0 0 1-2.598 1.5h-7.19a3 3 0 0 1-2.599-1.5L2.211 13.5a3 3 0 0 1 0-3l3.595-6.227a3 3 0 0 1 2.599-1.5h7.19a3 3 0 0 1 2.598 1.5l3.595 6.227Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
