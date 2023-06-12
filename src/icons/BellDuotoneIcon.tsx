import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BellDuotoneIcon = forwardRef<
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
      d="M6 10a6 6 0 1 1 12 0v1.099c0 .595.247 1.164.682 1.57A4.178 4.178 0 0 1 20 15.715C20 18.05 18.109 20 15.747 20H8.253C5.891 20 4 18.05 4 15.715c0-1.145.474-2.258 1.318-3.046.435-.406.682-.975.682-1.57V10Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M13 3a1 1 0 1 0-2 0v1.083a6.04 6.04 0 0 1 2 0V3Zm-3 17a2 2 0 1 0 4 0h-4Z"
      fill="currentColor"
    />
  </IconBase>
));
