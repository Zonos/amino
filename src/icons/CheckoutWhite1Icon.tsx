import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CheckoutWhite1Icon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.467 2.83A1.5 1.5 0 0 1 6.81 2h9.397a1.5 1.5 0 0 1 1.311.772l4.722 8.5a1.5 1.5 0 0 1 0 1.457l-4.722 8.5a1.5 1.5 0 0 1-1.311.771H6a1.5 1.5 0 0 1-1.5-1.5v-1.293c0-.398.158-.78.44-1.06l2.67-2.67A5.977 5.977 0 0 1 6.5 12c0-1.295.411-2.496 1.11-3.476L5.047 5.962a1.5 1.5 0 0 1-.281-1.732l.7-1.4ZM7.118 4l-.401.803 2.601 2.6c.602.602.545 1.503.085 2.065A3.98 3.98 0 0 0 8.5 12c0 .962.338 1.842.903 2.532.46.562.517 1.463-.085 2.064L6.5 19.414V20h9.412l4.444-8-4.444-8H7.118ZM4.529 7.703a1 1 0 0 1 .553 1.301 8 8 0 0 0 0 5.99 1 1 0 0 1-1.855.749 10 10 0 0 1 0-7.488 1 1 0 0 1 1.302-.552Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);