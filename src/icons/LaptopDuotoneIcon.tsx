import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LaptopDuotoneIcon = forwardRef<
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
      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9.02H3V6Z"
    />
    <path
      fill="currentColor"
      d="M21 15.02a2 2 0 0 1 1.66 2.465l-.311 1.243A3 3 0 0 1 19.439 21H4.561a3 3 0 0 1-2.91-2.272l-.312-1.243A2 2 0 0 1 3 15.02L5 15h14l2 .02Z"
    />
  </IconBase>
));
