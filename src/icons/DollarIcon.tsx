import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DollarIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.75 7.75V8h1.5a.75.75 0 0 1 0 1.5h-2.875a.875.875 0 0 0 0 1.75h1.25a2.375 2.375 0 0 1 .125 4.747v.253a.75.75 0 0 1-1.5 0V16h-1.5a.75.75 0 0 1 0-1.5h2.875a.875.875 0 0 0 0-1.75h-1.25a2.375 2.375 0 0 1-.125-4.747V7.75a.75.75 0 0 1 1.5 0Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-6.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
