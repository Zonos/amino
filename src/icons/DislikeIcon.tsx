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
        d="M14.372 19.133a2 2 0 0 1-1.648.867h-2.14a2 2 0 0 1-2-2v-2H6.2a2 2 0 0 1-1.967-2.36l1.466-8A2 2 0 0 1 7.667 4H15a2 2 0 0 1 2 2v8.69a2 2 0 0 1-.352 1.133l-2.276 3.31ZM10.583 18h2.141L15 14.69V6H7.667L6.2 14h3.283a1.1 1.1 0 0 1 1.1 1.1V18ZM19 15a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
