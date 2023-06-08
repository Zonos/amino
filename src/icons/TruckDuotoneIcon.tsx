import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const TruckDuotoneIcon = forwardRef<
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
      d="M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v11H4a2 2 0 0 1-2-2V7Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M13 7h3.333a3 3 0 0 1 1.8.6l2.667 2A3 3 0 0 1 22 12v3a3 3 0 0 1-3 3h-.05a2.5 2.5 0 0 1-4.9 0H13V7ZM5 17.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
