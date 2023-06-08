import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.628 3.149a1.6 1.6 0 0 1 2.744 0l2.337 3.894 4.757 1.19a1.6 1.6 0 0 1 .808 2.615L18.16 14.35l.793 5.55c.183 1.277-1.145 2.234-2.3 1.657L12 19.23l-4.655 2.327c-1.154.577-2.482-.38-2.299-1.657l.793-5.55-3.113-3.502a1.6 1.6 0 0 1 .808-2.615l4.757-1.19 2.337-3.894ZM12 5.138l-1.95 3.25a1.6 1.6 0 0 1-.984.73l-4.037 1.009 2.64 2.969a1.6 1.6 0 0 1 .387 1.29l-.67 4.691 3.898-1.95a1.6 1.6 0 0 1 1.431 0l3.9 1.95-.671-4.692a1.6 1.6 0 0 1 .388-1.29l2.64-2.968-4.038-1.01a1.6 1.6 0 0 1-.984-.729L12 5.138Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
