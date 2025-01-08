import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const TruckDuotoneIcon = forwardRef<
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
      d="M20.317 11.105 17.68 9.077l-.534-2.67A1.75 1.75 0 0 0 15.43 5H5.75A2.75 2.75 0 0 0 3 7.75V14c0 1.526 1.254 2.75 2.765 2.75H18.25A2.75 2.75 0 0 0 21 14v-1.508a1.75 1.75 0 0 0-.683-1.387"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M15.041 6.75a.25.25 0 0 1 .246.205l.249 1.366a1 1 0 0 1-.984 1.179H11.75a.25.25 0 0 1-.25-.25v-2.4a.1.1 0 0 1 .1-.1zm-10.02 9.157a2.75 2.75 0 1 1 5.458.687 2.75 2.75 0 0 1-5.458-.687m8.5 0a2.75 2.75 0 1 1 5.458.687 2.75 2.75 0 0 1-5.458-.687"
      fill="currentColor"
    />
  </IconBase>
));
