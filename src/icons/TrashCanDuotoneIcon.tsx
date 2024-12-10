import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const TrashCanDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    ref={ref}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M18.817 6.75H5.184l.913 10.733A2.75 2.75 0 0 0 8.837 20h6.326a2.75 2.75 0 0 0 2.74-2.517l.914-10.733Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M4.75 8.25a.75.75 0 0 1 0-1.5h3.761a2.75 2.75 0 0 1 2.739-2.5h1.5a2.75 2.75 0 0 1 2.739 2.5h3.761a.75.75 0 0 1 0 1.5H4.75Zm9.225-1.5c-.116-.57-.62-1-1.225-1h-1.5c-.605 0-1.11.43-1.225 1h3.95Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M10.5 13a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
      fill="currentColor"
    />
  </IconBase>
));
