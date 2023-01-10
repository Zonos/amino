import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowUpWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.293 9.707a1 1 0 0 1 0-1.414l3.646-3.647a1.5 1.5 0 0 1 2.122 0l3.646 3.647a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414L8.707 9.707a1 1 0 0 1-1.414 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
