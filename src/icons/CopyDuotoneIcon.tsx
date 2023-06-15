import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CopyDuotoneIcon = forwardRef<
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
      d="M8 10.846A2.846 2.846 0 0 1 10.846 8h8.308A2.846 2.846 0 0 1 22 10.846v8.308A2.846 2.846 0 0 1 19.154 22h-8.308A2.846 2.846 0 0 1 8 19.154v-8.308Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M4.846 4A.846.846 0 0 0 4 4.846v8.308a.846.846 0 0 0 .846.846H5a1 1 0 1 1 0 2h-.154A2.846 2.846 0 0 1 2 13.154V4.846A2.846 2.846 0 0 1 4.846 2h8.308A2.846 2.846 0 0 1 16 4.846V5a1 1 0 1 1-2 0v-.154A.846.846 0 0 0 13.154 4H4.846Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
