import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TruckIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3h3.225a3 3 0 0 1 2.021.783l2.775 2.53A3 3 0 0 1 22 12.53V15a3.001 3.001 0 0 1-2.128 2.872A3.001 3.001 0 0 1 14.17 18H9.829a3.001 3.001 0 0 1-5.7-.128A3.001 3.001 0 0 1 2 15V7Zm2.292 8.707A.997.997 0 0 1 4 15V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v9H9.83a3.001 3.001 0 0 0-5.538-.293ZM6 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm8.17-1H13V9h3.225a1 1 0 0 1 .674.261l2.775 2.53a1 1 0 0 1 .326.74V15a.997.997 0 0 1-.292.707A3 3 0 0 0 14.17 16ZM16 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
