import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowLeftIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.773 6.874a.75.75 0 0 1 0 1.06L6.457 11.25H19.25a.75.75 0 0 1 0 1.5H6.457l3.316 3.316a.75.75 0 0 1-1.06 1.06l-4.42-4.419a1 1 0 0 1 0-1.414l.384.384-.384-.384 4.42-4.42a.75.75 0 0 1 1.06 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
