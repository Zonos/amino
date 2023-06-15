import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PercentIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M18.6 3.2a1 1 0 0 1 .2 1.4l-12 16a1 1 0 0 1-1.6-1.2l12-16a1 1 0 0 1 1.4-.2ZM7.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM4 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM16.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM13 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
