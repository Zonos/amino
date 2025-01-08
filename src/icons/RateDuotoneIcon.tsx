import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const RateDuotoneIcon = forwardRef<
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
      d="M18.708 5.655A1 1 0 0 0 17.952 4H5.68a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.784 1.75 1.75 1.75h12.272a1 1 0 0 0 .756-1.655l-4.147-4.78a3 3 0 0 0 0-3.13z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M17.789 9.523a.75.75 0 0 1 .93.51 7.03 7.03 0 0 1 0 3.934.75.75 0 0 1-1.44-.42 5.53 5.53 0 0 0 0-3.094.75.75 0 0 1 .51-.93"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
