import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkAddDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : '#C1C1C4'}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-.172a3 3 0 0 1-2.12-.879l-1.83-1.828a1 1 0 0 0-.706-.293h-.344a1 1 0 0 0-.707.293L9.293 21.12a3 3 0 0 1-2.121.88H7a3 3 0 0 1-3-3V5Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V8a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </IconBase>
));
