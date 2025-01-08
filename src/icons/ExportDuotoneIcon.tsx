import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ExportDuotoneIcon = forwardRef<
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
      d="M20 16a2.75 2.75 0 0 0-2.75-2.75H6.75A2.75 2.75 0 0 0 4 16v1.25A2.75 2.75 0 0 0 6.75 20h10.5A2.75 2.75 0 0 0 20 17.25z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M15.708 8.286a.75.75 0 0 1-1.06 0l-1.9-1.899v8.793a.75.75 0 1 1-1.5 0V6.387L9.35 8.286a.75.75 0 0 1-1.06-1.061l3.002-3.002a1 1 0 0 1 1.414 0l3.002 3.002a.75.75 0 0 1 0 1.06Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
