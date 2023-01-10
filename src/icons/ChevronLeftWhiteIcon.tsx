import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronLeftWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.322 5.636a1 1 0 0 1 0 1.414L10.372 12l4.95 4.95a1 1 0 0 1-1.414 1.414l-5.586-5.586a1.1 1.1 0 0 1 0-1.556l5.586-5.586a1 1 0 0 1 1.415 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
