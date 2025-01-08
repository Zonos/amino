import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MinimizeIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M19.78 5.28a.75.75 0 0 0-1.06-1.06l-3.97 3.97V6a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19zM6 13.25a.75.75 0 0 0 0 1.5h2.19l-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97V18a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
