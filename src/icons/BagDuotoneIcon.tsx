import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BagDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M4.537 9.841A3 3 0 0 1 7.533 7h8.934a3 3 0 0 1 2.996 2.841l.424 8A3 3 0 0 1 16.891 21H7.11a3 3 0 0 1-2.996-3.159l.424-8Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M11 5a1 1 0 0 0-1 1v4a1 1 0 1 1-2 0V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v4a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-2Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
