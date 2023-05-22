import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowRightDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color || 'gray300'}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.293 7.293a1 1 0 0 1 1.414 0l3.647 3.646a1.5 1.5 0 0 1 0 2.122l-3.647 3.646a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
