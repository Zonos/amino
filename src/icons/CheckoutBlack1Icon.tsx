import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CheckoutBlack1Icon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M5.378 2.784a1.6 1.6 0 0 1 1.43-.884h9.398a1.6 1.6 0 0 1 1.398.823l4.723 8.5a1.6 1.6 0 0 1 0 1.554l-4.723 8.5a1.6 1.6 0 0 1-1.398.823H6a1.6 1.6 0 0 1-1.6-1.6v-1.293a1.6 1.6 0 0 1 .469-1.131l2.61-2.611A6.076 6.076 0 0 1 6.4 12c0-1.286.4-2.481 1.08-3.465L4.977 6.033a1.6 1.6 0 0 1-.3-1.847l.7-1.402ZM7.18 4.1l-.342.683 2.55 2.55c.643.642.581 1.601.092 2.199A3.88 3.88 0 0 0 8.6 12c0 .938.33 1.795.88 2.468.49.598.55 1.557-.091 2.199l-2.79 2.788v.445h9.254L20.24 12l-4.388-7.9H7.18ZM4.567 7.61a1.1 1.1 0 0 1 .608 1.432 7.9 7.9 0 0 0 0 5.915 1.1 1.1 0 1 1-2.041.823 10.1 10.1 0 0 1 0-7.562 1.1 1.1 0 0 1 1.433-.608Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);