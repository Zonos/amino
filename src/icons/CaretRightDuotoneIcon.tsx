import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretRightDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9 15.99a1 1 0 0 0 1.611.792l4.842-3.74a1 1 0 0 0 0-1.583L10.61 7.718A1 1 0 0 0 9 8.509z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
