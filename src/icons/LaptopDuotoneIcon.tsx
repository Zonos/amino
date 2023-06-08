import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LaptopDuotoneIcon = forwardRef<
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
      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9.02H3V6Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M21 15.02a2 2 0 0 1 1.66 2.465l-.311 1.243A3 3 0 0 1 19.439 21H4.561a3 3 0 0 1-2.91-2.272l-.312-1.243A2 2 0 0 1 3 15.02L5 15h14l2 .02Z"
      fill="currentColor"
    />
  </IconBase>
));
