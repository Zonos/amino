import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ScreenDuotoneIcon = forwardRef<
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
      d="M14.783 5.1a8 8 0 0 0-5.58.006 1 1 0 1 1-.7-1.874 10 10 0 0 1 6.976-.008 1 1 0 0 1-.696 1.875Z"
      clipRule="evenodd"
    />
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C1C1C4'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M19.44 3.146c.943-.943 2.56-.278 2.56 1.06V11.5c0 5.523-4.477 10-10 10s-10-4.477-10-10V4.206c0-1.342 1.62-2 2.56-1.06l4.391 4.391a4.981 4.981 0 0 1 3.05-1.037c1.147 0 2.205.387 3.048 1.037l4.39-4.39Z"
      clipRule="evenodd"
    />
  </IconBase>
));
