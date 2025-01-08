import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const CollectDuotoneIcon = forwardRef<
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
      d="M11.47 20.78a.75.75 0 0 0 1.28-.53v-5.792a2.56 2.56 0 0 0 1.744-1.708h5.756a.75.75 0 0 0 .53-1.28l-8.25-8.25a.75.75 0 0 0-1.06 0l-8.25 8.25a.75.75 0 0 0 0 1.06z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M18.083 14.644a.737.737 0 0 1 .29.998 6.9 6.9 0 0 1-2.713 2.727.73.73 0 0 1-.993-.29.737.737 0 0 1 .29-1 5.4 5.4 0 0 0 2.133-2.144.73.73 0 0 1 .993-.291"
      fill="currentColor"
    />
  </IconBase>
));
