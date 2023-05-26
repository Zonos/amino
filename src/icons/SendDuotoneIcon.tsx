import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const SendDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color || 'gray800'}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.257 8.331a1 1 0 0 1 1.412-.074L12 12.155l4.331-3.898a1 1 0 0 1 1.338 1.486l-4.665 4.2a1.5 1.5 0 0 1-2.007 0l-4.666-4.2a1 1 0 0 1-.074-1.412Zm12.036 7.962a1 1 0 0 1 1.414 0l1.647 1.646a1.5 1.5 0 0 1 0 2.122l-1.647 1.646a1 1 0 0 1-1.414-1.414l.293-.293H15a1 1 0 1 1 0-2h3.586l-.293-.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </IconBase>
));
