import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const MinusIcon = forwardRef<SVGSVGElement, IconProps>(
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
        clipRule="evenodd"
        d="M18 12a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1 0-1.5h10.5A.75.75 0 0 1 18 12"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
