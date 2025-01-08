import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const SunnyDuotoneIcon = forwardRef<
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
      d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M12.75 3.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zm5.03 3.53a.75.75 0 1 0-1.06-1.06l-1.184 1.184a.75.75 0 1 0 1.06 1.06zM18 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 18 12m-1.404 3.536a.75.75 0 1 0-1.06 1.06l1.184 1.184a.75.75 0 0 0 1.06-1.06zM12 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 18m-3.536-1.404a.75.75 0 0 0-1.06-1.06L6.22 16.72a.75.75 0 1 0 1.06 1.06zM3 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 3 12m4.28-5.78a.75.75 0 1 0-1.06 1.06l1.184 1.185a.75.75 0 0 0 1.06-1.061z"
      fill="currentColor"
    />
  </IconBase>
));
