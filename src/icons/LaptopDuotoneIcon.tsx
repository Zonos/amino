import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const LaptopDuotoneIcon = forwardRef<
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
      d="M6.75 5A2.75 2.75 0 0 0 4 7.75v7.5h16v-7.5A2.75 2.75 0 0 0 17.25 5z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M4 13a1 1 0 0 0-1 1v2.25A2.75 2.75 0 0 0 5.75 19h12.5A2.75 2.75 0 0 0 21 16.25V14a1 1 0 0 0-1-1h-4.97a2.75 2.75 0 0 0-1.816.684l-.389.342a1.25 1.25 0 0 1-1.65 0l-.39-.342A2.75 2.75 0 0 0 8.97 13z"
      fill="currentColor"
    />
  </IconBase>
));
