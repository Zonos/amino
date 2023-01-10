import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CheckmarkIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M18.778 7.222a1.1 1.1 0 0 1 0 1.556l-7.93 7.929a1.2 1.2 0 0 1-1.697 0l-3.929-3.93a1.1 1.1 0 1 1 1.556-1.555L10 14.444l7.222-7.222a1.1 1.1 0 0 1 1.556 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
