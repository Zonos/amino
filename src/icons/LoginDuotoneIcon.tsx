import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LoginDuotoneIcon = forwardRef<
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
    <rect
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      height="18"
      rx="2"
      width="10"
      x="11"
      y="3"
    />
    <path
      clipRule="evenodd"
      d="M12.5 15.707a1 1 0 0 1 0-1.414L13.793 13H4.207a1 1 0 1 1 0-2h9.586L12.5 9.707a1 1 0 0 1 1.414-1.414l2.647 2.646a1.5 1.5 0 0 1 0 2.122l-2.647 2.646a1 1 0 0 1-1.414 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
