import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const CartDuotoneIcon = forwardRef<
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
      d="M4.75 4a.75.75 0 0 0 0 1.5h.188c.574 0 1.074.39 1.213.947l.11.44.781 6.444a2.75 2.75 0 0 0 2.73 2.419h6.956a2.75 2.75 0 0 0 2.73-2.42l.515-4.25A2.75 2.75 0 0 0 17.243 6H7.584a2.75 2.75 0 0 0-2.646-2z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M18 18.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-7 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
      fill="currentColor"
    />
  </IconBase>
));
