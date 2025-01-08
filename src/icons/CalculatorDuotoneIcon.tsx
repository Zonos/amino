import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
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
      d="M6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M8.5 7a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm.75 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m0 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M15.5 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      fill="currentColor"
    />
  </IconBase>
));
