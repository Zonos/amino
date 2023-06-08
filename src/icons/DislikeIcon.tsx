import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DislikeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="m12.671 17.9 2.23-3.242V6.1H7.75l-1.43 7.8h3.162a1.2 1.2 0 0 1 1.2 1.2v2.8h1.989Zm1.784 1.29a2.1 2.1 0 0 1-1.73.91h-2.142a2.1 2.1 0 0 1-2.1-2.1v-1.9H6.2a2.1 2.1 0 0 1-2.065-2.479l1.466-8A2.1 2.1 0 0 1 7.667 3.9H15c1.16 0 2.1.94 2.1 2.1v8.69a2.1 2.1 0 0 1-.37 1.19l-2.275 3.31ZM19 15.1a1.1 1.1 0 0 1-1.1-1.1V5a1.1 1.1 0 0 1 2.2 0v9a1.1 1.1 0 0 1-1.1 1.1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
