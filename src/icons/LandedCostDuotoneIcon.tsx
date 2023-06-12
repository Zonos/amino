import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LandedCostDuotoneIcon = forwardRef<
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
      d="M14.11 4.863a1 1 0 0 1 1.344-.437 8.5 8.5 0 0 1 3.715 3.715 1 1 0 1 1-1.782.908 6.5 6.5 0 0 0-2.84-2.84 1 1 0 0 1-.438-1.346Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M11.445 2.015C12.33 1.967 13 2.687 13 3.5v4.937A3.706 3.706 0 0 1 15.563 11H20.5c.814 0 1.533.67 1.485 1.555C21.697 17.82 17.337 22 12 22 6.477 22 2 17.523 2 12c0-5.337 4.18-9.696 9.445-9.985Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
  </IconBase>
));
