import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkRemoveDuotoneIcon = forwardRef<
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
      d="M7.75 3A2.75 2.75 0 0 0 5 5.75v14.278a1 1 0 0 0 1.562.827l4.735-3.22a1.25 1.25 0 0 1 1.406 0l4.735 3.22A1 1 0 0 0 19 20.028V5.75A2.75 2.75 0 0 0 16.25 3z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M14.475 7.525a.75.75 0 0 1 0 1.06L13.061 10l1.414 1.414a.75.75 0 1 1-1.06 1.06L12 11.062l-1.414 1.414a.75.75 0 0 1-1.06-1.06L10.94 10 9.524 8.586a.75.75 0 0 1 1.061-1.06L12 8.938l1.414-1.414a.75.75 0 0 1 1.061 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
