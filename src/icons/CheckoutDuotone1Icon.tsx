import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CheckoutDuotone1Icon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
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
      d="M4.53 7.702a1 1 0 0 1 .552 1.302 8 8 0 0 0 0 5.99 1 1 0 0 1-1.855.748 10 10 0 0 1 0-7.487 1 1 0 0 1 1.302-.553Z"
      clipRule="evenodd"
    />
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C1C1C4'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M5.467 2.83A1.5 1.5 0 0 1 6.81 2h9.397a1.5 1.5 0 0 1 1.311.772l4.722 8.5a1.5 1.5 0 0 1 0 1.457l-4.722 8.5a1.5 1.5 0 0 1-1.311.771H6a1.5 1.5 0 0 1-1.5-1.5v-1.293c0-.398.158-.78.44-1.06l2.67-2.67A5.977 5.977 0 0 1 6.5 12a5.97 5.97 0 0 1 .99-3.302.257.257 0 0 0-.03-.324L5.048 5.962a1.5 1.5 0 0 1-.281-1.732l.7-1.4Z"
      clipRule="evenodd"
    />
  </IconBase>
));
