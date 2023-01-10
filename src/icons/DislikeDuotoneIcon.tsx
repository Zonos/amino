import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const DislikeDuotoneIcon = forwardRef<
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
      d="M14.372 19.133a2 2 0 0 1-1.648.867h-2.14a2 2 0 0 1-2-2v-2H6.2a2 2 0 0 1-1.967-2.36l1.466-8A2 2 0 0 1 7.667 4H15a2 2 0 0 1 2 2v8.69a2 2 0 0 1-.352 1.133l-2.276 3.31Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 15a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1Z"
      clipRule="evenodd"
    />
  </IconBase>
));
