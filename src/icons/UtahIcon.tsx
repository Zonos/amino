import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const UtahIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.479 4.92A2.1 2.1 0 0 1 5.577 2.9h7.884c1.16 0 2.1.94 2.1 2.1v.361h3.154a2.1 2.1 0 0 1 2.099 2.053l.262 11.538a2.1 2.1 0 0 1-2.1 2.148H5.04a2.1 2.1 0 0 1-2.098-2.18l.538-14Zm2.195.18-.531 13.8h13.732l-.258-11.34H14.96a1.6 1.6 0 0 1-1.6-1.6V5.1H5.674Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
