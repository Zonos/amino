import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LogoutWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11 4a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-6a1 1 0 1 1 0-2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1ZM7.707 8.293a1 1 0 0 1 0 1.414L6.414 11H16a1 1 0 1 1 0 2H6.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-2.647-2.646a1.5 1.5 0 0 1 0-2.122l2.647-2.646a1 1 0 0 1 1.414 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
