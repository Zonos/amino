import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const NightDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2 12C2 6.477 6.477 2 12 2h.23a1.23 1.23 0 0 1 1.19 1.546l-.401 1.513a8.093 8.093 0 0 0-.055 3.924l.068.285a6.96 6.96 0 0 0 5.482 5.245l2.375.448a1.222 1.222 0 0 1 .854 1.774A9.896 9.896 0 0 1 12.997 22H12C6.477 22 2 17.523 2 12Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
