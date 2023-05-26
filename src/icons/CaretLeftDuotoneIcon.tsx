import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretLeftDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color || 'gray400'}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.79 6.648c1.681-1.47 4.312-.277 4.312 1.957v7.389c0 2.233-2.63 3.427-4.312 1.956l-4.222-3.694a2.6 2.6 0 0 1 0-3.913l4.222-3.695Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
