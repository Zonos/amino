import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingTagSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.829 3a3 3 0 0 0-2.122.879L6.354 8.232a.5.5 0 0 0 0 .707l8.707 8.707a.5.5 0 0 0 .707 0l4.354-4.353A3 3 0 0 0 21 11.172V5a2 2 0 0 0-2-2h-6.17ZM17 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.646 19.768a.5.5 0 0 0 0-.707L4.94 10.354a.5.5 0 0 0-.707 0l-.642.642a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.828 0l.643-.642Z"
      />
    </IconBase>
  )
);
