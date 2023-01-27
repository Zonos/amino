import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HomeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.78 3.52a2.1 2.1 0 0 1 2.44 0l6.43 4.592 2.01 1.508a1.1 1.1 0 0 1-1.32 1.76l-.24-.18V18a3.1 3.1 0 0 1-3.1 3.1H7A3.1 3.1 0 0 1 3.9 18v-6.8l-.24.18a1.1 1.1 0 0 1-1.32-1.76l2.01-1.508 6.43-4.592ZM6.1 9.566V18a.9.9 0 0 0 .9.9h1.9v-1.928a3.1 3.1 0 0 1 .327-1.386c1.143-2.285 4.403-2.285 5.546 0a3.1 3.1 0 0 1 .327 1.386V18.9H17a.9.9 0 0 0 .9-.9V9.566L12 5.352 6.1 9.566Zm6.8 9.334v-1.928a.901.901 0 0 0-1.705-.402.9.9 0 0 0-.095.402V18.9h1.8Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
