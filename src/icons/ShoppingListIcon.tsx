import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingListIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h3.75a.75.75 0 0 0 0-1.5H6.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v4.75a.75.75 0 0 0 1.5 0V6.75A2.75 2.75 0 0 0 17.25 4z"
        fill="currentColor"
      />
      <path
        d="M8.5 8a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm-.75 4.75A.75.75 0 0 1 8.5 12h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m12.092 2.61a.75.75 0 0 0-1.184-.92l-2.978 3.829-1.4-1.4a.75.75 0 1 0-1.06 1.061l1.8 1.8a1 1 0 0 0 1.496-.093z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
