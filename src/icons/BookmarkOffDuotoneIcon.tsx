import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkOffDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color || 'gray800'}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M8 3a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v7a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1Zm-4-.414 15.293 15.293A2.414 2.414 0 0 1 17.586 22h-.758a3 3 0 0 1-2.12-.879l-2-2a1 1 0 0 0-1.415 0l-2 2A3 3 0 0 1 7.172 22H7a3 3 0 0 1-3-3V2.586Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </IconBase>
));
