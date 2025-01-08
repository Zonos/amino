import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ShoppingListDuotoneIcon = forwardRef<
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
      d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v4.75a.75.75 0 0 1-1.5 0V6.75c0-.69-.56-1.25-1.25-1.25H6.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h3.75a.75.75 0 0 1 0 1.5H6.75A2.75 2.75 0 0 1 4 17.25z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M7.75 8.75A.75.75 0 0 1 8.5 8h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 4A.75.75 0 0 1 8.5 12h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m12.092 2.61a.75.75 0 0 0-1.184-.92l-2.978 3.829-1.4-1.4a.75.75 0 1 0-1.06 1.061l1.8 1.8a1 1 0 0 0 1.496-.093z"
      fill="currentColor"
    />
  </IconBase>
));
