import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CartDuotoneIcon = forwardRef<
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
      fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
      data-is-secondary-color="true"
      d="M4 3a1 1 0 0 0 0 2h.36a1 1 0 0 1 .981.804l1.518 7.588A2 2 0 0 0 8.819 15h8.887a2 2 0 0 0 1.948-1.548l1.303-5.613A1.5 1.5 0 0 0 19.496 6H7.42l-.118-.588A3 3 0 0 0 4.36 3H4Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      clipRule="evenodd"
    />
  </IconBase>
));
