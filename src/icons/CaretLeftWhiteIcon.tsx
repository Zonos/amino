import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretLeftWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M13.994 6.074c.97-.849 2.487-.16 2.487 1.129v9.592c0 1.29-1.518 1.978-2.487 1.13l-5.482-4.797a1.5 1.5 0 0 1 0-2.258l5.482-4.796Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
