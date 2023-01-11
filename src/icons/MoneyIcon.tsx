import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MoneyIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M1.9 7A3.1 3.1 0 0 1 5 3.9h14A3.1 3.1 0 0 1 22.1 7v10a3.1 3.1 0 0 1-3.1 3.1H5A3.1 3.1 0 0 1 1.9 17V7ZM5 6.1a.9.9 0 0 0-.9.9v10a.9.9 0 0 0 .9.9h14a.9.9 0 0 0 .9-.9V7a.9.9 0 0 0-.9-.9H5Zm2 3.8A1.1 1.1 0 0 1 8.1 11v2a1.1 1.1 0 0 1-2.2 0v-2A1.1 1.1 0 0 1 7 9.9ZM9.9 12a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0ZM17 9.9a1.1 1.1 0 0 1 1.1 1.1v2a1.1 1.1 0 0 1-2.2 0v-2A1.1 1.1 0 0 1 17 9.9Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
