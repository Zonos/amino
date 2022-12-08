import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretDownIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.924 10.138c-.962-1.1-.181-2.82 1.28-2.82h9.592c1.46 0 2.241 1.72 1.28 2.82l-4.797 5.481a1.7 1.7 0 0 1-2.559 0l-4.796-5.481Z"
      />
    </IconBase>
  )
);
