import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ReceiptDuotoneIcon = forwardRef<
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
      d="M4 3h16v16.168C20 20.18 19.18 21 18.168 21c-.307 0-.607-.09-.862-.261l-1.751-1.167a1 1 0 0 0-1.11 0l-.78.52a3 3 0 0 1-3.33 0l-.78-.52a1 1 0 0 0-1.11 0l-1.75 1.167a1.56 1.56 0 0 1-.863.261A1.832 1.832 0 0 1 4 19.168V3Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M3 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm5 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm6 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm6 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
