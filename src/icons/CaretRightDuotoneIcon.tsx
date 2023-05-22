import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CaretRightDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10.488 17.926c-.97.849-2.488.16-2.488-1.129V7.205c0-1.29 1.518-1.978 2.488-1.13l5.481 4.797a1.5 1.5 0 0 1 0 2.258l-5.481 4.796Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
