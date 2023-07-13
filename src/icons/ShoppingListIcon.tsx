import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingListIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM8.17 4A3.001 3.001 0 0 1 11 2h2c1.306 0 2.418.835 2.83 2H17a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.17Zm0 2H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1.17A3.001 3.001 0 0 1 13 8h-2a3.001 3.001 0 0 1-2.83-2Zm-.18 6a1 1 0 0 1 1-1H9a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-4.01 4a1 1 0 0 1 1-1H9a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
