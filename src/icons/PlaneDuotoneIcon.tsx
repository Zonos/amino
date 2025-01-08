import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const PlaneDuotoneIcon = forwardRef<
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
      d="M9.75 6a.75.75 0 0 0-.712.987L9.71 9H7.285L5.248 7.19A.75.75 0 0 0 4 7.75v2.5A3.75 3.75 0 0 0 7.75 14h.5l-2.1 2.8a.75.75 0 0 0 .6 1.2h1.923a2.75 2.75 0 0 0 1.748-.627L14.52 14h4.731a.75.75 0 0 0 .75-.75v-1.5A2.75 2.75 0 0 0 17.25 9h-2.685l-2.206-2.25A2.75 2.75 0 0 0 10.472 6z"
      fill="currentColor"
    />
    <path
      d="M5.248 7.19A.75.75 0 0 0 4 7.75v2.5A3.75 3.75 0 0 0 7.75 14h11.5a.75.75 0 0 0 .75-.75v-1.5A2.75 2.75 0 0 0 17.25 9H7.285z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
