import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const QuoterIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 6A3.1 3.1 0 0 1 6 2.9h12A3.1 3.1 0 0 1 21.1 6v12a3.1 3.1 0 0 1-3.1 3.1H6A3.1 3.1 0 0 1 2.9 18V6ZM6 5.1a.9.9 0 0 0-.9.9v12a.9.9 0 0 0 .9.9h12a.9.9 0 0 0 .9-.9V6a.9.9 0 0 0-.9-.9H6Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
