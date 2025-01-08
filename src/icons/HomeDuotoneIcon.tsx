import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const HomeDuotoneIcon = forwardRef<
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
      d="M19.848 10.453a.75.75 0 0 1-.848.254v6.543A2.75 2.75 0 0 1 16.25 20h-8.5A2.75 2.75 0 0 1 5 17.25v-6.543a.75.75 0 0 1-.703-1.305l6.645-5.041a1.75 1.75 0 0 1 2.116 0l6.645 5.041a.75.75 0 0 1 .145 1.051"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M12 14a2.5 2.5 0 0 0-2.5 2.5V20h5v-3.5A2.5 2.5 0 0 0 12 14"
      fill="currentColor"
    />
  </IconBase>
));
