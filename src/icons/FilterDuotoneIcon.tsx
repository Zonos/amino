import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const FilterDuotoneIcon = forwardRef<
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
      d="M4 7.75A.75.75 0 0 1 4.75 7h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 7.75"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M6.75 11a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm2 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
