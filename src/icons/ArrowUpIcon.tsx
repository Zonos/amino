import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowUpIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M17.127 9.773a.75.75 0 0 1-1.061 0L12.75 6.457V19.25a.75.75 0 0 1-1.5 0V6.457L7.934 9.773a.75.75 0 0 1-1.06-1.06l4.419-4.42a1 1 0 0 1 1.414 0l-.384.384.384-.384 4.42 4.42a.75.75 0 0 1 0 1.06"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
