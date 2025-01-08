import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const BankDuotoneIcon = forwardRef<
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
      d="M7.25 10.5V15h2.5v-4.5h1.5V15h2v-4.5h1.5V15h2v-4.5h1.5V15c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25v-1.5c0-.966.784-1.75 1.75-1.75v-4.5z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M12.57 3.903a1.75 1.75 0 0 0-1.14 0L5.18 6.06A1.75 1.75 0 0 0 4 7.713V9.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 9.5V7.713a1.75 1.75 0 0 0-1.18-1.654z"
      fill="currentColor"
    />
  </IconBase>
));
