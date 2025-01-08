import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
