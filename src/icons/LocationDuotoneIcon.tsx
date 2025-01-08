import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const LocationDuotoneIcon = forwardRef<
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
      d="M11.578 19.87c.255.173.59.173.845 0v-.001l.005-.003.016-.011.057-.04a24 24 0 0 0 .94-.702 25 25 0 0 0 2.214-1.958c.806-.805 1.631-1.759 2.259-2.788C18.538 13.343 19 12.19 19 11c0-3.929-3.287-7-7-7s-7 3.071-7 7c0 1.19.462 2.343 1.086 3.367.628 1.03 1.453 1.983 2.259 2.788a25.3 25.3 0 0 0 3.154 2.66l.057.04.016.01.004.004z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <circle cx="12" cy="11" fill="currentColor" r="1.25" />
  </IconBase>
));
