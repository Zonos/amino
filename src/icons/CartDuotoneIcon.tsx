import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CartDuotoneIcon = forwardRef<
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
      clipRule="evenodd"
      d="M3 3a1 1 0 0 1 1-1h1.047c.261 0 .52.05.763.147a3.11 3.11 0 0 1 1.895 2.278L7.82 5h9.914a3 3 0 0 1 2.977 3.372l-.5 4A3 3 0 0 1 17.234 15H9.766a3 3 0 0 1-2.977-2.628L6.012 6.16l-.268-1.343a1.11 1.11 0 0 0-.677-.813.055.055 0 0 0-.02-.004H4a1 1 0 0 1-1-1Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M7 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm8 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
