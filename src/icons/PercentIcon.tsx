import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PercentIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.6 3.2a1 1 0 0 1 .2 1.4l-12 16a1 1 0 1 1-1.6-1.2l12-16a1 1 0 0 1 1.4-.2ZM8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm2 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm9 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm2 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
