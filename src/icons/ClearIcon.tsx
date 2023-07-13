import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClearIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9 4a5 5 0 0 0-5 5v11h11a5 5 0 0 0 5-5v-1h-3.5c-.85 0-1.448-.677-1.52-1.4a4.002 4.002 0 0 0-3.58-3.58c-.723-.072-1.4-.67-1.4-1.52V4H9ZM2 9a7 7 0 0 1 7-7h1.5A1.5 1.5 0 0 1 12 3.5v3.583A6.004 6.004 0 0 1 16.917 12H20.5a1.5 1.5 0 0 1 1.5 1.5V15a7 7 0 0 1-7 7H4a2 2 0 0 1-2-2V9Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M13.596 4.325a1 1 0 0 1 1.31-.53 10 10 0 0 1 5.242 5.167 1 1 0 1 1-1.83.807 8 8 0 0 0-4.193-4.133 1 1 0 0 1-.53-1.311Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
