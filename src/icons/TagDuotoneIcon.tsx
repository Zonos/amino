import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const TagDuotoneIcon = forwardRef<
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
      d="M18.924 3.19a2 2 0 0 1 1.872 1.87l.388 6.206a3 3 0 0 1-.873 2.308l-6.932 6.932a3 3 0 0 1-4.243 0L3.48 14.85a3 3 0 0 1 0-4.242l6.932-6.932a3 3 0 0 1 2.309-.873l6.204.388Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M14.5 8a1.5 1.5 0 0 1 0 3m0-3A1.5 1.5 0 0 0 13 9.5L14.5 8ZM13 9.5a1.5 1.5 0 0 0 1.5 1.5L13 9.5Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M16 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
  </IconBase>
));
