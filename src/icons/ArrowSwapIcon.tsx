import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowSwapIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.822 11.223a.75.75 0 1 0 1.06 1.06l2.825-2.824a1 1 0 0 0 0-1.414L16.882 5.22a.75.75 0 0 0-1.06 1.06l1.72 1.722H8.75a.75.75 0 0 0 0 1.5h8.793zm-7.644 1.554a.75.75 0 1 0-1.06-1.06L4.292 14.54a1 1 0 0 0 0 1.414l2.825 2.825a.75.75 0 0 0 1.06-1.06l-1.72-1.722h8.792a.75.75 0 0 0 0-1.5H6.457z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
