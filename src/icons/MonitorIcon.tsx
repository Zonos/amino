import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MonitorIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M1.9 6A3.1 3.1 0 0 1 5 2.9h14A3.1 3.1 0 0 1 22.1 6v8a3.1 3.1 0 0 1-3.1 3.1h-5.9v1.8H17a1.1 1.1 0 0 1 0 2.2H7a1.1 1.1 0 0 1 0-2.2h3.9v-1.8H5A3.1 3.1 0 0 1 1.9 14V6ZM5 5.1a.9.9 0 0 0-.9.9v8a.9.9 0 0 0 .9.9h14a.9.9 0 0 0 .9-.9V6a.9.9 0 0 0-.9-.9H5Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
