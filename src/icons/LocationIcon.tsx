import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LocationIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.1A6.9 6.9 0 0 0 5.1 11c0 1.659 1.155 3.498 2.771 5.199 1.513 1.592 3.236 2.864 4.129 3.48.893-.616 2.616-1.888 4.129-3.48 1.616-1.701 2.77-3.54 2.77-5.199A6.9 6.9 0 0 0 12 4.1ZM2.9 11a9.1 9.1 0 0 1 18.2 0c0 2.563-1.697 4.946-3.376 6.714-1.726 1.816-3.668 3.225-4.583 3.85a2.02 2.02 0 0 1-2.282 0C9.943 20.94 8 19.53 6.276 17.714 4.596 15.946 2.9 13.564 2.9 11Zm7-1a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
