import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const RefreshDuotoneIcon = forwardRef<
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
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C1C1C4'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M3 11a1 1 0 0 1 1 1 8 8 0 0 0 13.292 6H16a1 1 0 1 1 0-2h3a1.5 1.5 0 0 1 1.5 1.5v3a1 1 0 1 1-2 0v-.9A9.963 9.963 0 0 1 12 22C6.477 22 2 17.523 2 12a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.5 4.4v-.9a1 1 0 0 0-2 0v3A1.5 1.5 0 0 0 5 8h3a1 1 0 0 0 0-2H6.708A8 8 0 0 1 20 12a1 1 0 1 0 2 0c0-5.523-4.477-10-10-10a9.963 9.963 0 0 0-6.5 2.4Z"
      clipRule="evenodd"
    />
  </IconBase>
));
