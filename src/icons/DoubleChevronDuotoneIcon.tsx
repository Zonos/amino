import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const DoubleChevronDuotoneIcon = forwardRef<
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
      d="M16.707 14.293a1 1 0 0 1 0 1.414l-3.93 3.93a1.1 1.1 0 0 1-1.555 0l-3.93-3.93a1 1 0 1 1 1.415-1.414L12 17.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.707 9.707a1 1 0 0 1-1.414 0L12 6.414 8.707 9.707a1 1 0 1 1-1.414-1.414l3.93-3.93a1.1 1.1 0 0 1 1.555 0l3.93 3.93a1 1 0 0 1 0 1.414Z"
      clipRule="evenodd"
    />
  </IconBase>
));
