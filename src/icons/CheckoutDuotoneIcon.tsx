import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const CheckoutDuotoneIcon = forwardRef<
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
      d="M5.551 18.996A1.75 1.75 0 0 0 7.135 20h7.681a1.75 1.75 0 0 0 1.631-1.116l3.431-6.25a1.75 1.75 0 0 0 0-1.268l-3.431-6.25A1.75 1.75 0 0 0 14.817 4H7.134A1.75 1.75 0 0 0 5.55 5.005L4.9 6.386a1 1 0 0 0 .233 1.168l3.264 2.952a3 3 0 0 0 0 2.988l-3.264 2.952a1 1 0 0 0-.233 1.168z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M4.28 13.967a.75.75 0 0 0 1.44-.42 5.53 5.53 0 0 1 0-3.094.75.75 0 0 0-1.44-.42 7.03 7.03 0 0 0 0 3.934"
      fill="currentColor"
    />
  </IconBase>
));
