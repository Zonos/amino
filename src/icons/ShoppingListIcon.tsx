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
        d="M11 4.1a.9.9 0 1 0 0 1.8h2a.9.9 0 1 0 0-1.8h-2Zm-2.9-.2c.445-1.17 1.575-2 2.9-2h2c1.325 0 2.455.83 2.9 2H17A3.1 3.1 0 0 1 20.1 7v12a3.1 3.1 0 0 1-3.1 3.1H7A3.1 3.1 0 0 1 3.9 19V7A3.1 3.1 0 0 1 7 3.9h1.1Zm0 2.2H7a.9.9 0 0 0-.9.9v12a.9.9 0 0 0 .9.9h10a.9.9 0 0 0 .9-.9V7a.9.9 0 0 0-.9-.9h-1.1a3.101 3.101 0 0 1-2.9 2h-2a3.101 3.101 0 0 1-2.9-2ZM7.89 12a1.1 1.1 0 0 1 1.1-1.1H9a1.1 1.1 0 0 1 0 2.2h-.01a1.1 1.1 0 0 1-1.1-1.1Zm4.01 0a1.1 1.1 0 0 1 1.1-1.1h2a1.1 1.1 0 0 1 0 2.2h-2a1.1 1.1 0 0 1-1.1-1.1Zm-4.01 4a1.1 1.1 0 0 1 1.1-1.1H9a1.1 1.1 0 0 1 0 2.2h-.01a1.1 1.1 0 0 1-1.1-1.1Zm4.01 0a1.1 1.1 0 0 1 1.1-1.1h2a1.1 1.1 0 0 1 0 2.2h-2a1.1 1.1 0 0 1-1.1-1.1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
