import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const RefreshDuotoneIcon = forwardRef<
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
      d="M11.752 5.307a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h2.546c2.9 0 5.25 2.35 5.25 5.25v.25a.75.75 0 0 0 1.5 0V13a6.75 6.75 0 0 0-6.75-6.75h-2.546z"
      fill="currentColor"
    />
    <path
      d="M5.5 10.75a.75.75 0 0 0-1.5 0V11a6.75 6.75 0 0 0 6.75 6.75h2.546l-1.048.942a.75.75 0 1 0 1.004 1.116l2.5-2.25a.75.75 0 0 0 0-1.116l-2.5-2.25a.75.75 0 1 0-1.004 1.115l1.048.943H10.75A5.25 5.25 0 0 1 5.5 11z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
