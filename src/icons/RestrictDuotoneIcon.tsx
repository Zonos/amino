import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const RestrictDuotoneIcon = forwardRef<
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
      d="M4.692 14.602a1 1 0 0 1 1.365.371 8 8 0 0 0 2.95 2.959 1 1 0 0 1-.998 1.733 10 10 0 0 1-3.688-3.699 1 1 0 0 1 .371-1.364Z"
      clipRule="evenodd"
    />
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C1C1C4'}
      data-is-secondary-color="true"
      d="m16.737 2.293 4.97 4.97A1 1 0 0 1 22 7.97v8.06a1 1 0 0 1-.293.707l-4.97 4.97a1 1 0 0 1-.707.293H13a1 1 0 0 1-1-1v-4.258a.533.533 0 0 0-.397-.505 5.567 5.567 0 0 1-3.84-3.84.533.533 0 0 0-.505-.397H3a1 1 0 0 1-1-1V7.97a1 1 0 0 1 .293-.707l4.97-4.97A1 1 0 0 1 7.97 2h8.06a1 1 0 0 1 .707.293Z"
    />
  </IconBase>
));
