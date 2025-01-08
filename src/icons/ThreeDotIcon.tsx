import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ThreeDotIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.75 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3.25 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
