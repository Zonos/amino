import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const LogoutDuotoneIcon = forwardRef<
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
      d="M12 20a2.75 2.75 0 0 0 2.75-2.75V6.75A2.75 2.75 0 0 0 12 4H6.75A2.75 2.75 0 0 0 4 6.75v10.5A2.75 2.75 0 0 0 6.75 20z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M15.644 15.71a.75.75 0 0 1 0-1.062l1.899-1.898H8.75a.75.75 0 1 1 0-1.5h8.793l-1.899-1.9a.75.75 0 1 1 1.061-1.06l3.002 3.002a1 1 0 0 1 0 1.414l-3.002 3.002a.75.75 0 0 1-1.06 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
