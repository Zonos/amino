import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CardIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M1.9 7A3.1 3.1 0 0 1 5 3.9h14A3.1 3.1 0 0 1 22.1 7v10a3.1 3.1 0 0 1-3.1 3.1H5A3.1 3.1 0 0 1 1.9 17V7ZM5 6.1a.9.9 0 0 0-.9.9v.9h15.8V7a.9.9 0 0 0-.9-.9H5Zm14.9 4H4.1V17a.9.9 0 0 0 .9.9h14a.9.9 0 0 0 .9-.9v-6.9ZM5.9 15A1.1 1.1 0 0 1 7 13.9h4a1.1 1.1 0 0 1 0 2.2H7A1.1 1.1 0 0 1 5.9 15Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
