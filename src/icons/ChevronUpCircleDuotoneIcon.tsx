import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ChevronUpCircleDuotoneIcon = forwardRef<
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.707 13.707a1 1 0 0 1-1.414 0L12 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l2.646-2.647a1.5 1.5 0 0 1 2.122 0l2.646 2.647a1 1 0 0 1 0 1.414Z"
      clipRule="evenodd"
    />
  </IconBase>
));
