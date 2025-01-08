import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DragIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M6.75 9.25a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
