import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const PrinterDuotoneIcon = forwardRef<
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
      d="M17.25 18.25h-.864A2.5 2.5 0 0 1 14 20h-4a2.5 2.5 0 0 1-2.386-1.75H6.75A2.75 2.75 0 0 1 4 15.5V11a2.75 2.75 0 0 1 2.75-2.75h10.5A2.75 2.75 0 0 1 20 11v4.5a2.75 2.75 0 0 1-2.75 2.75"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M7.5 6.75A2.75 2.75 0 0 1 10.25 4h3.5a2.75 2.75 0 0 1 2.75 2.75v1.496H15V6.75c0-.69-.56-1.25-1.25-1.25h-3.5C9.56 5.5 9 6.06 9 6.75v1.496H7.5zm1 6.5a1 1 0 0 0-1 1v3.25A2.5 2.5 0 0 0 10 20h4a2.5 2.5 0 0 0 2.5-2.5v-3.25a1 1 0 0 0-1-1z"
      fill="currentColor"
    />
  </IconBase>
));
