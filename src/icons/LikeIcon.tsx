import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LikeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="m11.329 6.1-2.23 3.242V17.9h7.15l1.43-7.8h-3.162a1.2 1.2 0 0 1-1.2-1.2V6.1h-1.989ZM9.544 4.81a2.1 2.1 0 0 1 1.73-.91h2.142c1.16 0 2.1.94 2.1 2.1v1.9H17.8a2.1 2.1 0 0 1 2.066 2.479l-1.467 8a2.1 2.1 0 0 1-2.066 1.721H9A2.1 2.1 0 0 1 6.9 18V9.31c0-.424.129-.839.37-1.19l2.275-3.31ZM5 8.9A1.1 1.1 0 0 1 6.1 10v9a1.1 1.1 0 0 1-2.2 0v-9A1.1 1.1 0 0 1 5 8.9Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
