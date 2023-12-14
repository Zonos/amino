import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CalculatorDuotoneIcon = forwardRef<
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
      d="M6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4H6.75Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M8.5 7a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Zm.75 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15.5 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      fill="currentColor"
    />
  </IconBase>
));
