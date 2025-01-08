import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PercentIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.5 8.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M8.25 7a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M13 15.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m2.75-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M17.78 7.28a.75.75 0 0 0-1.06-1.06l-10.5 10.5a.75.75 0 1 0 1.06 1.06z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
