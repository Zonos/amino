import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ChartDuotoneIcon = forwardRef<
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
      d="M6.75 10A2.75 2.75 0 0 0 4 12.75v4.5A2.75 2.75 0 0 0 6.75 20h1.5A2.75 2.75 0 0 0 11 17.25v-4.5A2.75 2.75 0 0 0 8.25 10z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M15.75 4A2.75 2.75 0 0 0 13 6.75v10.5A2.75 2.75 0 0 0 15.75 20h1.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4z"
      fill="currentColor"
    />
  </IconBase>
));
