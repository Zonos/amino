import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CheckmarkIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M17.456 7.404a.75.75 0 0 1 .14 1.052l-6.5 8.5a.75.75 0 0 1-1.126.074l-4-4a.75.75 0 0 1 1.06-1.06l3.395 3.394 5.98-7.82a.75.75 0 0 1 1.05-.14Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
