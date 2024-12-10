import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ExternalDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    ref={ref}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M6.75 4A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25V6.75A2.75 2.75 0 0 0 17.25 4H6.75Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M10.75 9a.75.75 0 0 0 0 1.5h1.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06l3.22-3.22v1.69a.75.75 0 0 0 1.5 0V10a1 1 0 0 0-1-1h-3.25Z"
      fill="currentColor"
    />
  </IconBase>
));
