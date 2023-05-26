import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const HomeDuotoneIcon = forwardRef<
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
      d="M10.838 3.601a2 2 0 0 1 2.325 0l5.58 3.987A3 3 0 0 1 20 10.029V18a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7.97a3 3 0 0 1 1.256-2.442l5.582-3.987Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.838 3.601a2 2 0 0 1 2.325 0l6.428 4.592L21.6 9.7a1 1 0 0 1-1.2 1.6l-1.992-1.493L12 5.229 5.59 9.807 3.6 11.3a1 1 0 0 1-1.2-1.6l2.01-1.507 6.428-4.592ZM10 16a2 2 0 1 1 4 0v5h-4v-5Z"
      clipRule="evenodd"
    />
  </IconBase>
));
