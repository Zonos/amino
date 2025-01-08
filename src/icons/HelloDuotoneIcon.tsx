import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const HelloDuotoneIcon = forwardRef<
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
      d="M12.53 3.22a.75.75 0 0 0-1.28.53v5.792a2.56 2.56 0 0 0-1.744 1.708H3.75a.75.75 0 0 0-.53 1.28l8.25 8.25a.75.75 0 0 0 1.06 0l8.25-8.25a.75.75 0 0 0 0-1.06z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M5.917 9.356a.737.737 0 0 1-.29-.998A6.9 6.9 0 0 1 8.34 5.63a.73.73 0 0 1 .993.292.737.737 0 0 1-.29.998A5.4 5.4 0 0 0 6.91 9.065a.73.73 0 0 1-.993.291"
      fill="currentColor"
    />
  </IconBase>
));
