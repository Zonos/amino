import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const FilterIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 7.75A.75.75 0 0 1 4.75 7h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 7.75m2 4a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75M8.75 15a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
