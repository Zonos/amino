import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const BagDuotoneIcon = forwardRef<
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
      d="M5.634 9.335A2 2 0 0 1 7.627 7.5h8.746a2 2 0 0 1 1.993 1.835l.704 8.5A2 2 0 0 1 17.078 20H6.922a2 2 0 0 1-1.993-2.165z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M11.25 5.5c-.69 0-1.25.56-1.25 1.25v3.5a.75.75 0 0 1-1.5 0v-3.5A2.75 2.75 0 0 1 11.25 4h1.5a2.75 2.75 0 0 1 2.75 2.75v3.5a.75.75 0 0 1-1.5 0v-3.5c0-.69-.56-1.25-1.25-1.25z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
