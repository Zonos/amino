import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const UtahDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M3.579 4.923A2 2 0 0 1 5.578 3h7.883a2 2 0 0 1 2 2v.462h3.254a2 2 0 0 1 2 1.954l.261 11.539a2 2 0 0 1-2 2.045H5.04a2 2 0 0 1-1.998-2.077l.538-14Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
