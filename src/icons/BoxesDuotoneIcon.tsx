import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BoxesDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color || 'gray800'}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M6.333 5a2 2 0 0 1 2-2h7.334a2 2 0 0 1 2 2v4.578H18a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.422a2 2 0 0 1 2-2h.333V5Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6 9.578a2 2 0 0 0-2 2h7v2.2a1 1 0 1 0 2 0v-2.2h7a2 2 0 0 0-2-2H6ZM17.667 5H13v.778a1 1 0 1 1-2 0V5H6.333a2 2 0 0 1 2-2h7.334a2 2 0 0 1 2 2Z"
    />
  </IconBase>
));
