import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LineDownWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 3a1 1 0 0 1 1 1v14a1 1 0 0 0 1 1h14a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1-1h3a8 8 0 0 1 8 8v2.586l.293-.293a1 1 0 0 1 1.414 1.414l-1.646 1.647a1.5 1.5 0 0 1-2.122 0l-1.646-1.647a1 1 0 0 1 1.414-1.414l.293.293V11a6 6 0 0 0-6-6H8a1 1 0 0 1-1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
