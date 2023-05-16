import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingTagDuotoneIcon = forwardRef<
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
      d="M18.924 3.19a2 2 0 0 1 1.872 1.87l.388 6.206a3 3 0 0 1-.873 2.308l-6.932 6.932a3 3 0 0 1-4.243 0L3.48 14.85a3 3 0 0 1 0-4.242l6.932-6.932a3 3 0 0 1 2.309-.873l6.204.388Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.5 8a1.5 1.5 0 0 1 0 3m0-3A1.5 1.5 0 0 0 13 9.5L14.5 8ZM13 9.5a1.5 1.5 0 0 0 1.5 1.5L13 9.5Zm-6.756 1.243a1 1 0 0 1 1.414 0l5.605 5.605a1 1 0 0 1-1.414 1.415l-5.605-5.606a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M16 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </IconBase>
));
