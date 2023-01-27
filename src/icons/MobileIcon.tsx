import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MobileIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M3.9 5A3.1 3.1 0 0 1 7 1.9h10A3.1 3.1 0 0 1 20.1 5v14a3.1 3.1 0 0 1-3.1 3.1H7A3.1 3.1 0 0 1 3.9 19V5ZM7 4.1a.9.9 0 0 0-.9.9v14a.9.9 0 0 0 .9.9h10a.9.9 0 0 0 .9-.9V5a.9.9 0 0 0-.9-.9H7ZM9.9 16a1.1 1.1 0 0 1 1.1-1.1h2a1.1 1.1 0 0 1 0 2.2h-2A1.1 1.1 0 0 1 9.9 16Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
