import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const TotalLandedCostDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M13.145 4.512a1 1 0 0 0-1.79 0l-2.845 5.69a1 1 0 0 0 .895 1.448h5.69a1 1 0 0 0 .895-1.447z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M7.5 13a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m7.25 0A1.75 1.75 0 0 0 13 14.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 20 18.25v-3.5A1.75 1.75 0 0 0 18.25 13z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
