import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const RightPanelClosedDuotoneIcon = forwardRef<
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
      d="M5.75 6.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25H14v-11H5.75Zm12.5 0c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H15.5v-11h2.75Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M5.75 5A2.75 2.75 0 0 0 3 7.75v8.5A2.75 2.75 0 0 0 5.75 19h12.5A2.75 2.75 0 0 0 21 16.25v-8.5A2.75 2.75 0 0 0 18.25 5H5.75ZM4.5 7.75c0-.69.56-1.25 1.25-1.25H14v11H5.75c-.69 0-1.25-.56-1.25-1.25v-8.5Zm11 9.75h2.75c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H15.5v11Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
