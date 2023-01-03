import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const PercentDuotoneIcon = forwardRef<
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
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#CACACE'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M18.6 3.2a1 1 0 0 1 .2 1.4l-12 16a1 1 0 1 1-1.6-1.2l12-16a1 1 0 0 1 1.4-.2Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </IconBase>
));
