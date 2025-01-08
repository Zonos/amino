import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const FusionDuotoneIcon = forwardRef<
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
      d="M4.045 6.641a4.75 4.75 0 0 0 0 6.718l7.248 7.248a1 1 0 0 0 1.414 0l7.248-7.248a4.75 4.75 0 0 0 0-6.718L17.834 4.52a1 1 0 0 0-1.415 0l-2.895 2.895a3 3 0 0 0-3.048 0L7.58 4.52a1 1 0 0 0-1.415 0l-2.12 2.12Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M10.033 3.28a.75.75 0 0 0 .42 1.44 5.53 5.53 0 0 1 3.094 0 .75.75 0 1 0 .42-1.44 7.03 7.03 0 0 0-3.934 0"
      fill="currentColor"
    />
  </IconBase>
));
