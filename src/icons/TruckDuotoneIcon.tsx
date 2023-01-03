import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const TruckDuotoneIcon = forwardRef<
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
      d="M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3h3.225a3 3 0 0 1 2.021.783l2.775 2.53A3 3 0 0 1 22 12.53V15a3.001 3.001 0 0 1-2.128 2.872A3.001 3.001 0 0 1 14.17 18H9.829a3.001 3.001 0 0 1-5.7-.128A3.001 3.001 0 0 1 2 15V7Zm16 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C9C9CD'}
      data-is-secondary-color="true"
      d="M5 4a3 3 0 0 0-3 3v8c0 1.354.897 2.498 2.129 2.872a3 3 0 1 1 5.7.128H13V7a3 3 0 0 0-3-3H5Z"
    />
  </IconBase>
));
