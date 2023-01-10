import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LogoutDuotoneIcon = forwardRef<
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
    <rect
      width="10"
      height="18"
      x="11"
      y="3"
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C8C8CB'}
      data-is-secondary-color="true"
      rx="2"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.707 8.293a1 1 0 0 1 0 1.414L6.414 11H16a1 1 0 1 1 0 2H6.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-2.647-2.646a1.5 1.5 0 0 1 0-2.122l2.647-2.646a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </IconBase>
));
