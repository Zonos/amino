import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const GridDuotoneIcon = forwardRef<
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
      d="M14.75 4A1.75 1.75 0 0 0 13 5.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 20 9.25v-3.5A1.75 1.75 0 0 0 18.25 4zm0 9A1.75 1.75 0 0 0 13 14.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 20 18.25v-3.5A1.75 1.75 0 0 0 18.25 13zm-9 0A1.75 1.75 0 0 0 4 14.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 11 18.25v-3.5A1.75 1.75 0 0 0 9.25 13z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M5.75 4A1.75 1.75 0 0 0 4 5.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 11 9.25v-3.5A1.75 1.75 0 0 0 9.25 4z"
      fill="currentColor"
    />
  </IconBase>
));
