import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const DocsDuotoneIcon = forwardRef<
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
      d="M4 8.75A2.75 2.75 0 0 1 6.75 6h3a.75.75 0 0 1 .53.22l5.5 5.5c.141.14.22.331.22.53v5A2.75 2.75 0 0 1 13.25 20h-6.5A2.75 2.75 0 0 1 4 17.25z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M11.75 4a.75.75 0 0 0 0 1.5h1.69l5.06 5.06v4.69c0 .69-.56 1.25-1.25 1.25H16v.554c0 .33-.051.649-.145.946h1.395A2.75 2.75 0 0 0 20 15.25v-5a.75.75 0 0 0-.22-.53l-5.5-5.5a.75.75 0 0 0-.53-.22z"
      fill="currentColor"
    />
    <path
      d="M9.463 6.057a.75.75 0 0 1 .817.163l5.5 5.5a.75.75 0 0 1 .163.817.75.75 0 0 1-.693.463h-3.5A2.75 2.75 0 0 1 9 10.25v-3.5a.75.75 0 0 1 .463-.693"
      fill="currentColor"
    />
  </IconBase>
));
