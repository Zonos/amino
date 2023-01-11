import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RefreshIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.6 4.186V3.5a1.1 1.1 0 1 0-2.2 0v3A1.6 1.6 0 0 0 5 8.1h3a1.1 1.1 0 1 0 0-2.2H6.98A7.9 7.9 0 0 1 19.9 12a1.1 1.1 0 0 0 2.2 0c0-5.578-4.522-10.1-10.1-10.1-2.43 0-4.658.858-6.4 2.286ZM3 10.9A1.1 1.1 0 0 1 4.1 12a7.9 7.9 0 0 0 12.92 6.1H16a1.1 1.1 0 0 1 0-2.2h3a1.6 1.6 0 0 1 1.6 1.6v3a1.1 1.1 0 0 1-2.2 0v-.686A10.06 10.06 0 0 1 12 22.1C6.422 22.1 1.9 17.578 1.9 12A1.1 1.1 0 0 1 3 10.9Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
