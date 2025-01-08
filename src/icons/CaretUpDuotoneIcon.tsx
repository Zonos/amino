import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretUpDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M15.74 15a1 1 0 0 0 .792-1.611l-3.74-4.842a1 1 0 0 0-1.583 0l-3.741 4.841A1 1 0 0 0 8.259 15z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
