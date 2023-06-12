import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkRemoveDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-.172a3 3 0 0 1-2.12-.879l-1.83-1.828a1 1 0 0 0-.706-.293h-.344a1 1 0 0 0-.707.293L9.293 21.12a3 3 0 0 1-2.121.88H7a3 3 0 0 1-3-3V5Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M9.293 7.293a1 1 0 0 1 1.414 0L12 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13.414 10l1.293 1.293a1 1 0 0 1-1.414 1.414L12 11.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.586 10 9.293 8.707a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
