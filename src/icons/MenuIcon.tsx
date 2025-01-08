import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MenuIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M4 7.75A.75.75 0 0 1 4.75 7h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 7.75m0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75M4.75 11a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
