import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const CopyDuotoneIcon = forwardRef<
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
      d="M10.75 8A2.75 2.75 0 0 0 8 10.75v6.5A2.75 2.75 0 0 0 10.75 20h6.5A2.75 2.75 0 0 0 20 17.25v-6.5A2.75 2.75 0 0 0 17.25 8z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M6.75 5.5c-.69 0-1.25.56-1.25 1.25v7c0 .414.336.75.75.75a.75.75 0 0 1 0 1.5A2.25 2.25 0 0 1 4 13.75v-7A2.75 2.75 0 0 1 6.75 4h7A2.25 2.25 0 0 1 16 6.25a.75.75 0 0 1-1.5 0 .75.75 0 0 0-.75-.75z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
