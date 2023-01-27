import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const FolderUploadDuotoneIcon = forwardRef<
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
      d="M2 7a3 3 0 0 1 3-3h4.882c1.064 0 2.037.601 2.512 1.553a.81.81 0 0 0 .724.447H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m20 17.414.293.293a1 1 0 1 0 1.414-1.414l-1.646-1.647a1.5 1.5 0 0 0-2.122 0l-1.646 1.647a1 1 0 0 0 1.414 1.414l.293-.293V21a1 1 0 1 0 2 0v-3.586Z"
      clipRule="evenodd"
    />
  </IconBase>
));
