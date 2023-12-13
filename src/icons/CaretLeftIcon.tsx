import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M15 8.51a1 1 0 0 0-1.612-.792l-4.84 3.74a1 1 0 0 0 0 1.583l4.84 3.741A1 1 0 0 0 15 15.991V8.509Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
