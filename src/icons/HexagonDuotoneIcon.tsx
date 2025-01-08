import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HexagonDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.045 4a2.75 2.75 0 0 0-2.51 1.625l-2.353 5.25a2.75 2.75 0 0 0 0 2.25l2.353 5.25A2.75 2.75 0 0 0 9.045 20h5.91a2.75 2.75 0 0 0 2.509-1.625l2.353-5.25a2.75 2.75 0 0 0 0-2.25l-2.353-5.25A2.75 2.75 0 0 0 14.954 4z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
