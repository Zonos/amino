import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CircleDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" fill="currentColor" />
    </IconBase>
  ),
);
