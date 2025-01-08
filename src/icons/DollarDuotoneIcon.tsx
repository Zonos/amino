import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const DollarDuotoneIcon = forwardRef<
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
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M12 7a.75.75 0 0 1 .75.75V8h1.5a.75.75 0 0 1 0 1.5h-2.875a.875.875 0 0 0 0 1.75h1.25a2.375 2.375 0 0 1 .125 4.747v.253a.75.75 0 0 1-1.5 0V16h-1.5a.75.75 0 0 1 0-1.5h2.875a.875.875 0 0 0 0-1.75h-1.25a2.375 2.375 0 0 1-.125-4.747V7.75A.75.75 0 0 1 12 7"
      fill="currentColor"
    />
  </IconBase>
));
