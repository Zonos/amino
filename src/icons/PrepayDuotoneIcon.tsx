import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const PrepayDuotoneIcon = forwardRef<
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
      d="M4.317 18.272c-.66.62-.22 1.728.687 1.728h6.982c2.05 0 4.102-.781 5.667-2.343a7.99 7.99 0 0 0 0-11.314A8 8 0 0 0 11.986 4H5.004c-.907 0-1.347 1.107-.687 1.728l5.07 4.766a3 3 0 0 0 0 3.012z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M5.255 13.967a.751.751 0 0 0 1.442-.42 5.5 5.5 0 0 1 0-3.094.752.752 0 0 0-1.442-.42 7 7 0 0 0 0 3.934"
      fill="currentColor"
    />
  </IconBase>
));
