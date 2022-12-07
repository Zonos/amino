import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PercentSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.6 3.2a1 1 0 0 1 .2 1.4l-12 16a1 1 0 1 1-1.6-1.2l12-16a1 1 0 0 1 1.4-.2ZM6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
