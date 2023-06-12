import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const PercentDuotoneIcon = forwardRef<
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
      d="M10.5 6.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm9 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M18.6 3.2a1 1 0 0 1 .2 1.4l-12 16a1 1 0 0 1-1.6-1.2l12-16a1 1 0 0 1 1.4-.2Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
