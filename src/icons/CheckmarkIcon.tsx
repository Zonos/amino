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
        d="M16.709 7.907a.75.75 0 0 1 .134 1.052l-5.234 6.774a1 1 0 0 1-1.501.093l-2.89-2.909a.75.75 0 1 1 1.064-1.057l2.488 2.505 4.886-6.324a.75.75 0 0 1 1.053-.134Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
