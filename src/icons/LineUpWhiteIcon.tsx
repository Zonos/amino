import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LineUpWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 3a1 1 0 0 1 1 1v14a1 1 0 0 0 1 1h14a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1Zm12.94.646a1.5 1.5 0 0 1 2.12 0l1.647 1.647a1 1 0 0 1-1.414 1.414L19 6.414V9a8 8 0 0 1-8 8H8a1 1 0 1 1 0-2h3a6 6 0 0 0 6-6V6.414l-.293.293a1 1 0 1 1-1.414-1.414l1.646-1.647Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);