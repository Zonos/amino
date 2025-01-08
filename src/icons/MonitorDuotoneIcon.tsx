import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const MonitorDuotoneIcon = forwardRef<
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
      d="M12 15.25a.75.75 0 0 1 .75.75v2.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V16a.75.75 0 0 1 .75-.75"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M6.75 4A2.75 2.75 0 0 0 4 6.75v7a2.75 2.75 0 0 0 2.75 2.75h10.5A2.75 2.75 0 0 0 20 13.75v-7A2.75 2.75 0 0 0 17.25 4z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
