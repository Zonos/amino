import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BellOffDuotoneIcon = forwardRef<
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
      d="M12 2a1 1 0 0 1 1 1v1.083c2.838.476 5 2.944 5 5.917v1a1 1 0 1 1-2 0v-1a4 4 0 0 0-4-4h-2a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1ZM6 4.586 21.414 20H8.253C5.891 20 4 18.05 4 15.715c0-1.145.474-2.258 1.318-3.046.435-.406.682-.975.682-1.57V4.586Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414ZM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Z"
      clipRule="evenodd"
    />
  </IconBase>
));
