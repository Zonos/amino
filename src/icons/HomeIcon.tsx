import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HomeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.838 3.601a2 2 0 0 1 2.325 0l6.428 4.592L21.6 9.7a1 1 0 0 1-1.2 1.6L20 11v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7l-.4.3a1 1 0 0 1-1.2-1.6l2.008-1.507 6.429-4.592ZM6 9.515V18a1 1 0 0 0 1 1h2v-2.028a3 3 0 0 1 .317-1.342c1.105-2.21 4.26-2.21 5.366 0A3 3 0 0 1 15 16.973V19h2a1 1 0 0 0 1-1V9.515l-6-4.286-6 4.286ZM13 19v-2.028a1 1 0 0 0-2 0V19h2Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
