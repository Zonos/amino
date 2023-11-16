import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CardDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M5.75 5A2.75 2.75 0 0 0 3 7.75v8.5A2.75 2.75 0 0 0 5.75 19h12.5A2.75 2.75 0 0 0 21 16.25v-8.5A2.75 2.75 0 0 0 18.25 5H5.75Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M5.75 8.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H5.75Zm1.5 5.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
      fill="currentColor"
    />
  </IconBase>
));
