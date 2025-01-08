import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ReceiptDuotoneIcon = forwardRef<
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
      d="M19 4H5v15.053a1 1 0 0 0 1.524.851l2.514-1.547 2.515 1.258a1 1 0 0 0 .894 0l2.515-1.258 2.514 1.547A1 1 0 0 0 19 19.053z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M4 4.75A.75.75 0 0 1 4.75 4h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 4.75M8.25 9A.75.75 0 0 1 9 8.25h2.5a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9m6.25-.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM8.25 13a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m6.25-.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"
      fill="currentColor"
    />
  </IconBase>
));
