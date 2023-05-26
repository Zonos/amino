import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CubeDuotoneIcon = forwardRef<
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
      d="M10.658 2.553a3 3 0 0 1 2.684 0l6 3A3 3 0 0 1 21 8.236v7.528a3 3 0 0 1-1.658 2.683l-6 3a3 3 0 0 1-2.684 0l-6-3A3 3 0 0 1 3 15.764V8.236a3 3 0 0 1 1.658-2.683l6-3Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.106 7.553a1 1 0 0 1 1.341-.447L12 9.882l5.553-2.776a1 1 0 1 1 .894 1.788L13 11.618V19a1 1 0 1 1-2 0v-7.382L5.553 8.894a1 1 0 0 1-.447-1.341Z"
      clipRule="evenodd"
    />
  </IconBase>
));
