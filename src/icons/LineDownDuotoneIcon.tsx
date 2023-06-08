import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LineDownDuotoneIcon = forwardRef<
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
      clipRule="evenodd"
      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M5 6a1 1 0 0 1 1-1h3a8 8 0 0 1 8 8v2.586l.293-.293a1 1 0 0 1 1.414 1.414l-1.646 1.647a1.5 1.5 0 0 1-2.122 0l-1.646-1.647a1 1 0 0 1 1.414-1.414l.293.293V13a6 6 0 0 0-6-6H6a1 1 0 0 1-1-1Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
