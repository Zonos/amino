import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const PlayCircleDuotoneIcon = forwardRef<
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
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C8C8CB'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.5 9.187a1.1 1.1 0 0 1 1.71-.915l4.22 2.813a1.1 1.1 0 0 1 0 1.83l-4.22 2.813a1.1 1.1 0 0 1-1.71-.915V9.187Z"
      clipRule="evenodd"
    />
  </IconBase>
));
