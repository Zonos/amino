import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const IntegrationIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 12A8.1 8.1 0 0 1 11 3.9h3.909c1.21 0 2.19.98 2.19 2.19V7.9H20a1.1 1.1 0 0 1 0 2.2h-2.9v3.8H20a1.1 1.1 0 0 1 0 2.2h-2.9v1.81c0 1.21-.98 2.19-2.19 2.19H11A8.1 8.1 0 0 1 2.9 12ZM11 6.1a5.9 5.9 0 1 0 0 11.8h3.9V6.1H11Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
