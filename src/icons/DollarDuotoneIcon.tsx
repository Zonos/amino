import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const DollarDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color || 'gray800'}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray300}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 6a1 1 0 0 1 1 1v.12a4.237 4.237 0 0 1 2.79 2.222l.105.21a1 1 0 1 1-1.79.895l-.105-.21A2.236 2.236 0 0 0 12 9h-.675a.838.838 0 0 0-.265 1.633l2.513.837A2.838 2.838 0 0 1 13 16.981V17a1 1 0 1 1-2 0v-.12a4.236 4.236 0 0 1-2.789-2.222l-.105-.21a1 1 0 1 1 1.789-.895l.105.21A2.236 2.236 0 0 0 12 15h.676a.838.838 0 0 0 .265-1.633l-2.514-.837A2.838 2.838 0 0 1 11 7.019V7a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </IconBase>
));
