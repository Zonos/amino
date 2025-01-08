import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const SearchDuotoneIcon = forwardRef<
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
      d="M10.75 5.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M4 10.75a6.75 6.75 0 1 1 12.024 4.213l3.756 3.757a.75.75 0 1 1-1.06 1.06l-3.757-3.756A6.75 6.75 0 0 1 4 10.75"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M10.75 4a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
