import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChartIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.9 6c0-1.16.94-2.1 2.1-2.1h4c1.16 0 2.1.94 2.1 2.1v12a2.1 2.1 0 0 1-2.1 2.1h-4a2.1 2.1 0 0 1-2.1-2.1V6Zm2.2.1v11.8h3.8V6.1h-3.8ZM2.9 12c0-1.16.94-2.1 2.1-2.1h4c1.16 0 2.1.94 2.1 2.1v6A2.1 2.1 0 0 1 9 20.1H5A2.1 2.1 0 0 1 2.9 18v-6Zm2.2.1v5.8h3.8v-5.8H5.1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
